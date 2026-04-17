import fs from 'fs'
import path from 'path'

// On the server: persist to /var/www/data/blogs.json (survives deploys)
// Locally (dev): persist to <project>/src/data/blogs.json
const PERSISTENT_PATH = '/var/www/data/blogs.json'
const SEED_PATH = path.join(process.cwd(), 'src', 'data', 'blogs.json')

function getStorePath() {
  // Use persistent path if it exists or its parent dir is writable
  try {
    const dir = path.dirname(PERSISTENT_PATH)
    fs.accessSync(dir, fs.constants.W_OK)
    return PERSISTENT_PATH
  } catch {
    return SEED_PATH
  }
}

export function readPosts() {
  // Try persistent path first, then seed
  for (const p of [PERSISTENT_PATH, SEED_PATH]) {
    try {
      return JSON.parse(fs.readFileSync(p, 'utf-8'))
    } catch {}
  }
  return []
}

export function writePosts(posts) {
  const storePath = getStorePath()
  // Ensure directory exists
  const dir = path.dirname(storePath)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(storePath, JSON.stringify(posts, null, 2), 'utf-8')
}
