import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'nnc-admin-2026'

export async function POST(request) {
  try {
    const body = await request.json()
    const { secret, slug, title, category, date, readTime, description, bodyContent } = body

    // Auth check
    if (secret !== ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Validate required fields
    if (!slug || !title || !category || !date || !readTime) {
      return NextResponse.json({ error: 'Missing required fields: slug, title, category, date, readTime' }, { status: 400 })
    }

    // Slug validation — lowercase, hyphens only
    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json({ error: 'Slug must be lowercase letters, numbers and hyphens only' }, { status: 400 })
    }

    const dataFilePath = path.join(process.cwd(), 'src', 'data', 'landingData.js')
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8')

    // Check for duplicate slug
    if (fileContent.includes(`slug: '${slug}'`)) {
      return NextResponse.json({ error: `Slug "${slug}" already exists in BLOG_POSTS` }, { status: 409 })
    }

    // Build the new entry line
    const descPart = description ? `, description: '${description.replace(/'/g, "\\'")}'` : ''
    const bodyPart = bodyContent ? `, body: '${bodyContent.replace(/'/g, "\\'").replace(/\n/g, '\\n')}'` : ''
    const newEntry = `  { slug: '${slug}', title: '${title.replace(/'/g, "\\'")}', category: '${category}', date: '${date}', readTime: '${readTime}'${descPart}${bodyPart} },`

    // Insert before the closing bracket of BLOG_POSTS array
    // The array ends with: ]\n\n// ─── CASE STUDIES
    const updatedContent = fileContent.replace(
      /(]\n\n\/\/ ─── CASE STUDIES)/,
      `${newEntry}\n$1`
    )

    if (updatedContent === fileContent) {
      return NextResponse.json({ error: 'Could not locate BLOG_POSTS array end in landingData.js' }, { status: 500 })
    }

    fs.writeFileSync(dataFilePath, updatedContent, 'utf-8')

    return NextResponse.json({
      success: true,
      message: `Blog post "${title}" added successfully`,
      slug,
      url: `/blog/${slug}`,
    })
  } catch (err) {
    console.error('Admin blog API error:', err)
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 })
  }
}

// GET — list all current blog posts (slug + title + category + date)
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')

  if (secret !== (process.env.ADMIN_SECRET || 'nnc-admin-2026')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const dataFilePath = path.join(process.cwd(), 'src', 'data', 'landingData.js')
  const fileContent = fs.readFileSync(dataFilePath, 'utf-8')

  // Extract each full blog post object line
  const lineMatches = [...fileContent.matchAll(/\{ slug: '([^']+)', title: '([^']+)', category: '([^']+)', date: '([^']+)', readTime: '([^']+)'([^}]*)\}/g)]
  const posts = lineMatches.map(m => {
    const extra = m[6] || ''
    const descMatch = extra.match(/description: '((?:[^'\\]|\\.)*)'/)
    const bodyMatch = extra.match(/body: '((?:[^'\\]|\\.)*)'/)
    return {
      slug: m[1],
      title: m[2],
      category: m[3],
      date: m[4],
      readTime: m[5],
      description: descMatch ? descMatch[1].replace(/\\'/g,"'") : '',
      body: bodyMatch ? bodyMatch[1].replace(/\\'/g,"'").replace(/\\n/g,'\n') : '',
    }
  })
  return NextResponse.json({ posts, slugs: posts.map(p => p.slug), total: posts.length })
}

// DELETE — remove a blog post by slug
export async function DELETE(request) {
  try {
    const body = await request.json()
    const { secret, slug } = body

    if (secret !== (process.env.ADMIN_SECRET || 'nnc-admin-2026')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }

    const dataFilePath = path.join(process.cwd(), 'src', 'data', 'landingData.js')
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8')

    if (!fileContent.includes(`slug: '${slug}'`)) {
      return NextResponse.json({ error: `Slug "${slug}" not found` }, { status: 404 })
    }

    // Remove the entire line containing this slug
    const updatedContent = fileContent
      .split('\n')
      .filter(line => !line.includes(`slug: '${slug}'`))
      .join('\n')

    fs.writeFileSync(dataFilePath, updatedContent, 'utf-8')

    return NextResponse.json({ success: true, message: `Blog post "${slug}" deleted successfully` })
  } catch (err) {
    console.error('Admin blog DELETE error:', err)
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 })
  }
}
