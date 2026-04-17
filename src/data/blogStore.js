import fs from 'fs'
import path from 'path'

// Priority order for storage path:
// 1. BLOG_DATA_PATH env var (set this on your server to a writable path)
// 2. /var/www/data/blogs.json (common AWS/VPS writable location)
// 3. <project>/data/blogs.json (writable folder created at deploy)
// 4. <project>/src/data/blogs.json (seed fallback — read only on server)

const CANDIDATES = [
  process.env.BLOG_DATA_PATH,
  '/var/www/data/blogs.json',
  path.join(process.cwd(), 'data', 'blogs.json'),
  path.join(process.cwd(), 'src', 'data', 'blogs.json'),
].filter(Boolean)

const SEED_PATH = path.join(process.cwd(), 'src', 'data', 'blogs.json')

function getWritablePath() {
  for (const p of CANDIDATES) {
    try {
      const dir = path.dirname(p)
      // Create dir if it doesn't exist
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      // Test write access
      fs.accessSync(dir, fs.constants.W_OK)
      return p
    } catch {}
  }
  return null
}

export function readPosts() {
  // Try each candidate path until one works
  for (const p of CANDIDATES) {
    try {
      if (fs.existsSync(p)) {
        return JSON.parse(fs.readFileSync(p, 'utf-8'))
      }
    } catch {}
  }
  // Final fallback: seed file
  try {
    return JSON.parse(fs.readFileSync(SEED_PATH, 'utf-8'))
  } catch {}
  return []
}

export function writePosts(posts) {
  const writePath = getWritablePath()
  if (!writePath) {
    throw new Error(
      'No writable path found for blogs.json. Set BLOG_DATA_PATH env var on your server. ' +
      'Example: BLOG_DATA_PATH=/var/www/data/blogs.json'
    )
  }
  fs.writeFileSync(writePath, JSON.stringify(posts, null, 2), 'utf-8')
}
