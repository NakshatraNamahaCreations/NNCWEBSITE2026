import { NextResponse } from 'next/server'
import { readPosts, writePosts } from '@/data/blogStore'

export const dynamic = 'force-dynamic'

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'nnc-admin-2026'

function auth(secret) {
  return secret === ADMIN_SECRET
}

// POST — add a new blog post
export async function POST(request) {
  try {
    const body = await request.json()
    const { secret, slug, title, category, date, readTime, description, bodyContent } = body

    if (!auth(secret)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    if (!slug || !title || !category || !date || !readTime) {
      return NextResponse.json({ error: 'Missing required fields: slug, title, category, date, readTime' }, { status: 400 })
    }

    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json({ error: 'Slug must be lowercase letters, numbers and hyphens only' }, { status: 400 })
    }

    const posts = readPosts()

    if (posts.find(p => p.slug === slug)) {
      return NextResponse.json({ error: `Slug "${slug}" already exists` }, { status: 409 })
    }

    const newPost = { slug, title, category, date, readTime }
    if (description) newPost.description = description
    if (bodyContent) newPost.body = bodyContent

    writePosts([newPost, ...posts])

    return NextResponse.json({
      success: true,
      message: `Blog post "${title}" added successfully`,
      slug,
      url: `/blog/${slug}`,
    })
  } catch (err) {
    console.error('Admin blog POST error:', err)
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 })
  }
}

// GET — list all blog posts
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')

  if (!auth(secret)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const posts = readPosts()
  return NextResponse.json({ posts, slugs: posts.map(p => p.slug), total: posts.length })
}

// PUT — update an existing blog post by slug
export async function PUT(request) {
  try {
    const body = await request.json()
    const { secret, originalSlug, slug, title, category, date, readTime, description, bodyContent } = body

    if (!auth(secret)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    if (!originalSlug || !title) return NextResponse.json({ error: 'originalSlug and title are required' }, { status: 400 })

    const posts = readPosts()
    const idx = posts.findIndex(p => p.slug === originalSlug)
    if (idx === -1) return NextResponse.json({ error: `Post "${originalSlug}" not found` }, { status: 404 })

    const updated = { slug: slug || originalSlug, title, category, date, readTime }
    if (description) updated.description = description
    if (bodyContent) updated.body = bodyContent

    posts[idx] = updated
    writePosts(posts)

    return NextResponse.json({ success: true, message: `Post "${title}" updated successfully` })
  } catch (err) {
    console.error('Admin blog PUT error:', err)
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 })
  }
}

// DELETE — remove a blog post by slug
export async function DELETE(request) {
  try {
    const body = await request.json()
    const { secret, slug } = body

    if (!auth(secret)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    if (!slug) return NextResponse.json({ error: 'Slug is required' }, { status: 400 })

    const posts = readPosts()
    const filtered = posts.filter(p => p.slug !== slug)

    if (filtered.length === posts.length) {
      return NextResponse.json({ error: `Slug "${slug}" not found` }, { status: 404 })
    }

    writePosts(filtered)
    return NextResponse.json({ success: true, message: `Blog post "${slug}" deleted successfully` })
  } catch (err) {
    console.error('Admin blog DELETE error:', err)
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 })
  }
}
