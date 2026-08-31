import type { BlogData, BlogPost } from './types'
import { BLOG_DATA_URL } from './source'

const EMPTY: BlogData = {
  collection: { title: 'Blog', navLabel: 'Blog', basePath: '/blog' },
  posts: [],
}

/**
 * Fetches the blog data feed at runtime. Pass `slug` only from the post page
 * so per-post traffic can be attributed by the CMS; the index page fetches
 * the bare URL. Never cached — a new post must appear without waiting on a
 * revalidate window.
 */
export async function getBlogData(slug?: string): Promise<BlogData> {
  const url = slug ? `${BLOG_DATA_URL}?slug=${encodeURIComponent(slug)}` : BLOG_DATA_URL
  try {
    const res = await fetch(url, { cache: 'no-store' })
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
  const data = await getBlogData(slug)
  const now = Date.now()
  const post = data.posts.find((p) => p.slug === slug)
  if (!post) return null
  if (new Date(post.publishAt).getTime() > now) return null
  return post
}
