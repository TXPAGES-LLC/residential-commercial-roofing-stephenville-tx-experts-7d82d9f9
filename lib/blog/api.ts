import type { BlogData, BlogPost } from './types'
import localPosts from './posts.json'

export async function getBlogData(): Promise<BlogData> {
  return localPosts as BlogData
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
