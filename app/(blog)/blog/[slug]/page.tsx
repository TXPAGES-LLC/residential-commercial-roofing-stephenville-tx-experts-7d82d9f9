import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'
import { getPublishedPost, getPublishedPosts } from '@/lib/blog/api'
import { BASE_URL } from '@/lib/site'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPublishedPost(slug)
  if (!post) return {}

  const title = post.seo?.metaTitle ?? post.title
  const description = post.seo?.metaDescription ?? post.excerpt
  // Always build canonical from the site domain — never trust an external CMS value
  const canonical = `https://heritageroofingtexas.com/blog/${post.slug}`
  // Prefer the SEO-specific OG image; fall back to hero. Ensure HTTPS.
  const rawOgImage = post.seo?.ogImageUrl ?? post.heroImageUrl
  const ogImage = rawOgImage
    ? rawOgImage.startsWith('http') ? rawOgImage : `https://heritageroofingtexas.com${rawOgImage}`
    : undefined

  return {
    title: `${title} | Heritage Roofing, Inc.`,
    description,
    keywords: post.seo?.keywords?.length ? post.seo.keywords.join(', ') : undefined,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Heritage Roofing, Inc.',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishAt,
      modifiedTime: post.updatedAt,
      ...(ogImage
        ? { images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPublishedPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPublishedPost(slug)

  if (!post) notFound()

  const postCanonical = `https://heritageroofingtexas.com/blog/${post.slug}`
  const postImage = post.heroImageUrl
    ? post.heroImageUrl.startsWith('http')
      ? post.heroImageUrl
      : `https://heritageroofingtexas.com${post.heroImageUrl}`
    : undefined

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${postCanonical}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishAt,
        dateModified: post.updatedAt ?? post.publishAt,
        author: {
          '@type': 'Person',
          name: 'Shai',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Heritage Roofing, Inc.',
          logo: {
            '@type': 'ImageObject',
            url: 'https://heritageroofingtexas.com/2026-logo.png',
          },
        },
        ...(postImage
          ? { image: { '@type': 'ImageObject', url: postImage, caption: post.title } }
          : {}),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': postCanonical,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://heritageroofingtexas.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://heritageroofingtexas.com/blog' },
          { '@type': 'ListItem', position: 3, name: post.title, item: postCanonical },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <SiteHeader />
      <main>
        {/* Post hero */}
        <section style={{ backgroundColor: '#0f1840' }} className="py-12 sm:py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/70 truncate">{post.title}</span>
            </nav>

            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs font-semibold uppercase tracking-wide text-yellow-300 bg-white/10 px-2.5 py-1 rounded"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-balance">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-blue-200">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Shai
              </span>
              <time dateTime={post.publishAt} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.publishAt)}
              </time>
              {post.readingTimeMinutes && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readingTimeMinutes} min read
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Hero image */}
        {post.heroImageUrl && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-1">
            <div className="relative overflow-hidden rounded-b-xl shadow-lg" style={{ aspectRatio: '16/9' }}>
              <img
                src={post.heroImageUrl}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
                fetchPriority="high"
                width={1200}
                height={675}
              />
            </div>
          </div>
        )}

        {/* Article body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-14 items-start">

            {/* Prose content */}
            <article>
              <div
                className="prose-blog"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-[#e2ddd6]">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-[#4054b2] bg-[#4054b2]/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Back link */}
              <div className="mt-10 pt-6 border-t border-[#e2ddd6]">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#4054b2] font-semibold hover:underline text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Blog
                </Link>
              </div>
            </article>

            {/* Sticky sidebar CTA */}
            <aside className="lg:sticky lg:top-24">
              <div className="bg-[#1e2a6b] rounded-xl p-5 sm:p-6 text-white">
                <h3 className="font-display font-bold text-lg mb-2">Get a Free Estimate</h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  Questions about your roof? Call Heritage Roofing — we&apos;ve served Central Texas since 1986.
                </p>
                <a
                  href="tel:2549687663"
                  className="flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] active:bg-[#880000] text-white font-bold py-3 rounded transition-colors text-sm w-full"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
                  </svg>
                  Call 254-968-7663
                </a>
                <p className="text-white/40 text-xs text-center mt-3">Mon–Fri 8am–5pm · Emergency 7 days</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white text-sm font-semibold py-2.5 rounded transition-colors w-full"
                  >
                    Request Free Estimate
                  </Link>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-xl border border-[#e2ddd6] p-5">
                <h3 className="font-display font-bold text-[#0f1840] text-base mb-3">More from our blog</h3>
                <Link href="/blog" className="flex items-center gap-2 text-[#4054b2] text-sm font-semibold hover:underline">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  View all posts
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
      <MobileCallButton />
    </>
  )
}
