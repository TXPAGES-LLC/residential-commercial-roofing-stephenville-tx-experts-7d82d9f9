export interface BlogSeo {
  metaTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  ogImageUrl?: string
  keywords?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  contentHtml: string
  heroImageUrl?: string
  author?: string
  tags?: string[]
  categories?: string[]
  publishAt: string
  updatedAt?: string
  readingTimeMinutes?: number
  wordCount?: number
  seo?: BlogSeo
}

export interface BlogCollection {
  title: string
  navLabel: string
  basePath: string
}

export interface BlogData {
  collection: BlogCollection
  posts: BlogPost[]
}
