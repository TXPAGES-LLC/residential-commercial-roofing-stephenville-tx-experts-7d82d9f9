import type { BlogData, BlogPost } from './types'
import { BLOG_DATA_URL } from './source'

const EMPTY: BlogData = {
  collection: { title: 'Blog', navLabel: 'Blog', basePath: '/blog' },
  posts: [],
}

export async function getBlogData(): Promise<BlogData> {
  try {
    const res = await fetch(BLOG_DATA_URL, { cache: 'no-store' })
    if (!res.ok) return EMPTY
    return res.json()
  } catch {
    return EMPTY
  }
}

/** Returns only posts whose publishAt is <= now, newest first. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const data = await getBlogData()
  const now = Date.now()
  return data.posts
    .filter((p) => new Date(p.publishAt).getTime() <= now)
    .sort((a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime())
}

/** Returns a single published post by slug, or null if not found / future-dated. */
export async function getPublishedPost(slug: string): Promise<BlogPost | null> {
  const posts = await getPublishedPosts()
  return posts.find((p) => p.slug === slug) ?? null
}
