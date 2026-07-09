import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'
import PostCard from '@/components/blog/PostCard'
import { getPublishedPosts } from '@/lib/blog/api'

export const metadata: Metadata = {
  title: 'Roofing Blog | Heritage Roofing, Inc. — Stephenville TX',
  description:
    'Roofing tips, storm season guides, maintenance advice, and local project updates from the Heritage Roofing team in Stephenville, TX.',
  alternates: { canonical: 'https://heritageroofingtexas.com/blog' },
  openGraph: {
    title: 'Roofing Blog | Heritage Roofing, Inc.',
    description:
      'Roofing tips, storm season guides, maintenance advice, and local project updates from Heritage Roofing in Stephenville, TX.',
    url: 'https://heritageroofingtexas.com/blog',
    siteName: 'Heritage Roofing, Inc.',
    locale: 'en_US',
    type: 'website',
  },
}

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts()

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#0f1840' }} className="py-12 sm:py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300 mb-2">
              Resources &amp; Guides
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              The Heritage Roofing Blog
            </h1>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl leading-relaxed text-pretty">
              Storm season prep, maintenance checklists, material guides, and Central Texas roofing news — straight from our crew.
            </p>
          </div>
        </section>

        {/* Post grid */}
        <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#f8f7f5' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <svg
                  className="w-12 h-12 mx-auto text-gray-300 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <h2 className="font-display text-2xl font-bold text-[#0f1840] mb-2">Posts coming soon</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                  We&apos;re working on our first articles. Check back soon, or call us at{' '}
                  <a href="tel:2549687663" className="text-[#4054b2] font-semibold hover:underline">
                    254-968-7663
                  </a>{' '}
                  with any roofing questions.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA strip */}
        <section style={{ backgroundColor: '#4054b2' }} className="py-10 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 text-balance">
              Need a Roof Inspection or Estimate?
            </h2>
            <p className="text-blue-100 mb-6 text-pretty">
              No need to wait for a blog post — call us directly and we&apos;ll answer your questions on the spot.
            </p>
            <a
              href="tel:2549687663"
              className="inline-flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] active:bg-[#880000] text-white font-bold px-8 py-4 rounded text-base transition-colors"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
              </svg>
              Call 254-968-7663
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCallButton />
    </>
  )
}
