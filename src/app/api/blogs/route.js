import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Blog from '@/lib/BlogModel'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    await connectDB()
    const posts = await Blog.find({}).sort({ date: -1 }).lean()
    const mapped = posts.map(p => ({
      slug: p.slug, title: p.title, category: p.category,
      date: p.date, readTime: p.readTime,
      description: p.description || '', body: p.body || '',
    }))
    return NextResponse.json({ posts: mapped })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
