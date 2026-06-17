import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata = {
  title: 'Areas We Serve | Heritage Roofing, Inc. — Central Texas',
  description:
    'Heritage Roofing, Inc. serves 16 communities across Central Texas — from Stephenville and Granbury to Brownwood and beyond. Find your city and call your local number.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations' },
  openGraph: {
    title: 'Areas We Serve | Heritage Roofing, Inc. — Central Texas',
    description: 'Heritage Roofing, Inc. serves 16 communities across Central Texas — from Stephenville and Granbury to Brownwood and beyond. Find your city and call your local number.',
    url: 'https://heritageroofingtexas.com/locations',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. service area map — Central Texas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Areas We Serve | Heritage Roofing, Inc.',
    description: 'Heritage Roofing, Inc. serves 16 communities across Central Texas. Find your city.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

const areaGroups = [
  {
    label: 'Stephenville Area',
    phone: '254-968-7663',
    phoneHref: 'tel:2549687663',
    description: 'Our home base. Heritage Roofing has been serving Erath County and the surrounding communities since 1986.',
    cities: [
      { city: 'Stephenville', state: 'TX', href: '/locations/stephenville' },
      { city: 'Dublin', state: 'TX', href: '/locations/dublin' },
      { city: 'Hico', state: 'TX', href: '/locations/hico' },
      { city: 'Eastland', state: 'TX', href: '/locations/eastland' },
      { city: 'De Leon', state: 'TX', href: '/locations/de-leon' },
    ],
  },
  {
    label: 'Granbury Area',
    phone: '817-573-0890',
    phoneHref: 'tel:8175730890',
    description: 'Serving Hood County and the Lake Granbury communities with the same quality and reliability as our home territory.',
    cities: [
      { city: 'Granbury', state: 'TX', href: '/locations/granbury' },
      { city: 'Glen Rose', state: 'TX', href: '/locations/glen-rose' },
      { city: 'Weatherford', state: 'TX', href: '/locations/weatherford' },
      { city: 'Mineral Wells', state: 'TX', href: '/locations/mineral-wells' },
    ],
  },
  {
    label: 'Brownwood Area',
    phone: '325-510-5768',
    phoneHref: 'tel:3255105768',
    description: 'Covering Brown County and the surrounding West Texas communities with local expertise and dependable service.',
    cities: [
      { city: 'Brownwood', state: 'TX', href: '/locations/brownwood' },
      { city: 'Hamilton', state: 'TX', href: '/locations/hamilton' },
      { city: 'Goldthwaite', state: 'TX', href: '/locations/goldthwaite' },
      { city: 'Comanche', state: 'TX', href: '/locations/comanche' },
      { city: 'Santa Anna', state: 'TX', href: '/locations/santa-anna' },
      { city: 'Coleman', state: 'TX', href: '/locations/coleman' },
      { city: 'Bangs', state: 'TX', href: '/locations/bangs' },
    ],
  },
]

export default function LocationsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">

        {/* Hero */}
        <section
          style={{ backgroundColor: '#0f1840' }}
          className="py-16 px-4"
          aria-labelledby="locations-heading"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-3">
              Heritage Roofing, Inc.
            </p>
            <h1
              id="locations-heading"
              className="font-display text-4xl lg:text-6xl font-bold text-white mb-6 text-balance"
            >
              Areas We Serve
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto text-pretty leading-relaxed">
              One roofing company. Three service areas. Sixteen communities across Central Texas.
              Heritage Roofing has been serving this region since 1986 — residential and commercial
              roofing you can count on, with a local number for wherever you are.
            </p>
          </div>
        </section>

        {/* Area groups */}
        <section className="py-16 px-4" style={{ backgroundColor: '#f0efeb' }} aria-label="Service area groups">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            {areaGroups.map((group, gi) => (
              <article key={group.label} className="bg-white rounded-2xl border border-[#e2ddd6] overflow-hidden">
                {/* Group header */}
                <div
                  className="px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                  style={{ backgroundColor: gi === 0 ? '#0f1840' : gi === 1 ? '#4054b2' : '#1a2a5e' }}
                >
                  <div>
                    <h2 className="font-display text-2xl font-bold text-white mb-1">{group.label}</h2>
                    <p className="text-blue-200 text-sm">{group.description}</p>
                  </div>
                  <a
                    href={group.phoneHref}
                    className="flex-shrink-0 inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold text-sm px-5 py-3 rounded-lg transition-colors"
                    aria-label={`Call ${group.label} at ${group.phone}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
                    </svg>
                    {group.phone}
                  </a>
                </div>

                {/* City grid */}
                <div className="p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {group.cities.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="group flex items-center gap-3 p-4 rounded-lg border border-[#e2ddd6] hover:border-[#4054b2] hover:shadow-md transition-all"
                      >
                        <div
                          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center group-hover:bg-[#4054b2] transition-colors"
                          style={{ backgroundColor: '#f0efeb' }}
                        >
                          <svg className="w-4 h-4 text-[#4054b2] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-display font-semibold text-sm group-hover:text-[#4054b2] transition-colors" style={{ color: '#0f1840' }}>
                            {c.city}, {c.state}
                          </p>
                          <p className="text-xs text-gray-500">View services</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Office + CTA */}
        <section
          className="py-16 px-4"
          style={{ backgroundColor: '#4054b2' }}
          aria-labelledby="office-cta-heading"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2
              id="office-cta-heading"
              className="font-display text-3xl font-bold text-white mb-4 text-balance"
            >
              One Office Serving All of Central Texas
            </h2>
            <p className="text-blue-100 mb-6 text-pretty">
              Heritage Roofing, Inc. operates out of a single office in Stephenville, TX, with
              dedicated local numbers for each service area. Whether you need a quick repair or a
              full roof replacement, the right team is close by.
            </p>
            <a
              href="https://www.google.com/maps?cid=12288339561500500951"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white text-sm transition-colors block mb-8"
            >
              <address className="not-italic">1590 N Bates Street, Stephenville, TX 76401</address>
            </a>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:2549687663"
                className="flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold px-8 py-4 rounded-lg transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
                </svg>
                Call 254-968-7663
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-white text-[#0f1840] hover:bg-blue-50 font-bold px-8 py-4 rounded-lg transition-colors text-base"
              >
                Request a Free Estimate
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
      <MobileCallButton />
    </>
  )
}
