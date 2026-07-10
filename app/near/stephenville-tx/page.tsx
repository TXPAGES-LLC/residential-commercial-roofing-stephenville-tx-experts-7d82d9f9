import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services in Stephenville, TX | Heritage Roofing, Inc.',
  description:
    'Roofing contractor serving Stephenville, TX and Erath County since 1986. Residential & commercial roofing, roof repair, storm damage, and emergency services. Call Heritage Roofing at 254-968-7663.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations/stephenville' },
  openGraph: {
    title: 'Roofing Services in Stephenville, TX | Heritage Roofing, Inc.',
    description:
      'Local roofing contractor serving Stephenville and Erath County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
    url: 'https://heritageroofingtexas.com/locations/stephenville',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. — Roofing Services in Stephenville, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in Stephenville, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Stephenville and Erath County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

const GBP_CID = '12288339561500500951'
const PHONE = '254-968-7663'
const PHONE_HREF = 'tel:2549687663'

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      '@id': 'https://heritageroofingtexas.com/#business',
      name: 'Heritage Roofing, Inc.',
      url: 'https://heritageroofingtexas.com',
      telephone: '+12549687663',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1590 N Bates Street',
        addressLocality: 'Stephenville',
        addressRegion: 'TX',
        postalCode: '76401',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 32.2207, longitude: -98.2023 },
      areaServed: { '@type': 'City', name: 'Stephenville', containedInPlace: 'TX' },
      image: 'https://heritageroofingtexas.com/og-image.jpg',
      priceRange: '$$',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://heritageroofingtexas.com' },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://heritageroofingtexas.com/locations' },
        { '@type': 'ListItem', position: 3, name: 'Stephenville, TX', item: 'https://heritageroofingtexas.com/locations/stephenville' },
      ],
    },
  ],
}

const services = [
  {
    title: 'Residential Roofing',
    href: '/services/residential-roofing',
    description:
      'From single-story ranch homes to large two-story residences, Heritage Roofing handles new roof installations and full replacements across Stephenville neighborhoods. We work with architectural shingles, metal, tile, and slate — helping you choose the right material for Central Texas weather and your home\'s style.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description:
      'Stephenville businesses along Highway 377, the downtown square, and the Tarleton State University corridor trust Heritage Roofing for TPO, modified bitumen, metal panel, and built-up roofing systems. We minimize disruption to your operations and stand behind our commercial installations with written warranties.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'A small leak can cause big structural damage if left unaddressed. Our Stephenville repair crews respond quickly to fix missing or cracked shingles, failing pipe boots, deteriorated flashing, and damaged ridge caps — stopping damage before it spreads to decking, insulation, or interior ceilings.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'When repair is no longer cost-effective, a full replacement protects your home for 25–50 years depending on material. Heritage Roofing guides Stephenville homeowners through material selection, walks you through the process start to finish, and handles complete tear-off, disposal, and new installation.',
  },
  {
    title: 'Storm & Hail Damage',
    href: '/services/storm-hail-damage',
    description:
      'Stephenville sits in a well-known hail corridor. After a storm event, our team provides thorough damage documentation with photos and a written report you can submit directly to your insurance company. We work alongside your adjuster and handle the full restoration — not just a quick patch.',
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    description:
      'A professional inspection catches problems early and gives you leverage before buying a home or filing a claim. Heritage Roofing provides written inspection reports with photographs for pre-purchase evaluations, post-storm assessments, and routine annual maintenance checks for Stephenville properties.',
  },
  {
    title: 'Skylights & Attic Ventilation',
    href: '/services/skylights-ventilation',
    description:
      'Proper attic ventilation is critical in Central Texas — summer heat can drive attic temperatures above 150°F, shortening shingle life and raising cooling costs. Heritage Roofing installs ridge vents, soffit vents, and powered attic fans, along with Velux and similar skylight brands for natural light without leaks.',
  },
  {
    title: 'Emergency Roof Repair',
    href: '/services/emergency-repairs',
    description:
      'When a branch falls through your roof or a storm blows off an entire section of shingles, you need a contractor on-site the same day — not next week. Heritage Roofing offers emergency response seven days a week for Stephenville and surrounding Erath County communities.',
  },
]

const faqs = [
  {
    q: 'How long has Heritage Roofing been working in Stephenville?',
    a: 'Heritage Roofing, Inc. has been headquartered in Stephenville since 1986. Our main office is located at 1590 N Bates Street, Stephenville, TX 76401 — this is where we\'ve been rooted for nearly 40 years.',
  },
  {
    q: 'Do you offer free estimates in Stephenville?',
    a: 'Yes. We provide free, no-obligation roof estimates for residential and commercial properties throughout Stephenville and Erath County. Call 254-968-7663 or use our contact form to schedule.',
  },
  {
    q: 'What roofing materials work best in Stephenville\'s climate?',
    a: 'Architectural asphalt shingles rated for high winds (Class 4 impact-resistant) are the most popular choice for cost and durability. Metal roofing is an excellent long-term investment given the UV exposure and hail frequency in Central Texas. We\'ll recommend the right product for your budget and property.',
  },
  {
    q: 'Can you help me with a hail damage insurance claim?',
    a: 'Absolutely. We document damage with photographs and a written report, meet with your insurance adjuster on-site if needed, and make sure all damage is captured in the claim. We\'ve helped hundreds of Stephenville homeowners navigate the insurance restoration process.',
  },
  {
    q: 'Do you serve areas outside of Stephenville?',
    a: 'Yes. In addition to Stephenville and Erath County, Heritage Roofing serves Granbury and Hood County (817-573-0890), Brownwood and Brown County (325-510-5768), as well as Dublin, Glen Rose, Hico, Weatherford, and Hamilton.',
  },
  {
    q: 'How long does a roof replacement take?',
    a: 'Most residential replacements in Stephenville are completed in one to two days depending on roof size, pitch, and material. We handle full tear-off and disposal, and clean up the site each day.',
  },
]

export default function StephenvillePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <SiteHeader />

      <main>
        {/* Hero / H1 */}
        <section
          aria-labelledby="page-heading"
          style={{ backgroundColor: '#0f1840' }}
          className="py-14 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Erath County &mdash; Since 1986
            </p>
            <h1
              id="page-heading"
              className="font-display text-4xl md:text-5xl font-bold text-white text-balance leading-tight mb-4"
            >
              Roofing Services in Stephenville, TX
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Heritage Roofing, Inc. is based right here in Stephenville. We provide residential and commercial roofing, storm damage repairs, and emergency services for homes and businesses throughout Erath County.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold px-7 py-3 rounded text-base transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
                </svg>
                Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-7 py-3 rounded text-base transition-colors"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* Local intro */}
        <section aria-label="About Heritage Roofing in Stephenville" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0f1840' }}>
              Your Stephenville Roofing Contractor
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Heritage Roofing, Inc. has operated out of Stephenville since 1986 — nearly four decades of residential and commercial roofing work in Erath County. Our main office is at 1590 N Bates Street, just off the north side of town, and our crews work daily across Stephenville neighborhoods, the Tarleton State University area, Highway 377 commercial corridors, and out into the surrounding rural properties.
              </p>
              <p>
                Stephenville sits in a well-documented hail corridor that sees significant storm activity each spring and early summer. High summer UV accelerates shingle granule loss faster than in cooler climates, and occasional winter ice storms create their own set of problems. We understand these conditions because we live and work here — every roof we install is selected and built to handle what Central Texas weather actually delivers.
              </p>
              <p>
                We are a licensed, insured, and locally owned roofing contractor. No storm-chaser crews, no out-of-state subcontractors. When you call Heritage Roofing, you get a Stephenville-based team that will be here long after the job is done.
              </p>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section
          aria-labelledby="services-heading"
          className="py-14 px-4"
          style={{ backgroundColor: '#f5f3ef' }}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              id="services-heading"
              className="font-display text-3xl font-bold mb-2"
              style={{ color: '#0f1840' }}
            >
              Services We Offer in Stephenville, TX
            </h2>
            <p className="text-gray-600 mb-10">
              From routine repairs to full commercial installations, every service below is available to Stephenville and Erath County residents and businesses.
            </p>

            <div className="space-y-10">
              {services.map((service) => (
                <article
                  key={service.href}
                  className="bg-white rounded-xl p-7 border border-[#e2ddd6]"
                >
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#4054b2' }}>
                    {service.title} in Stephenville, TX
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors"
                  >
                    Learn more about {service.title}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section
          aria-label="Call to action"
          style={{ backgroundColor: '#cc0000' }}
          className="py-12 px-4"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-3 text-balance">
              Ready to Get Started in Stephenville?
            </h2>
            <p className="text-red-100 mb-7 text-lg">
              Call our Stephenville office or submit a request online. Free estimates, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-white text-[#cc0000] font-bold px-8 py-3 rounded text-base hover:bg-gray-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
                </svg>
                254-968-7663
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded text-base hover:bg-white/10 transition-colors"
              >
                Request a Free Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* Map + office info */}
        <section
          aria-labelledby="location-heading"
          className="py-14 px-4 bg-white"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="location-heading"
              className="font-display text-2xl font-bold mb-2"
              style={{ color: '#0f1840' }}
            >
              Find Us in Stephenville, TX
            </h2>
            <p className="text-gray-600 mb-8">
              Our office and crews are based in Stephenville — right in the heart of the communities we serve.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Map iframe — GBP CID + Stephenville city center */}
              <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm">
                <iframe
                  title="Heritage Roofing, Inc. on Google Maps — Stephenville, TX"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.0!2d-98.2023!3d32.2207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaaab3f4b4f9e5017!2sHeritage%20Roofing%2C%20Inc.!5e0!3m2!1sen!2sus!4v1700000000000&cid=${GBP_CID}`}
                  width="100%"
                  height="360"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Office details */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#4054b2' }}>
                    Stephenville Office
                  </h3>
                  <a
                    href={`https://www.google.com/maps?cid=${GBP_CID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 text-sm leading-relaxed hover:text-[#4054b2] transition-colors block"
                  >
                    <address className="not-italic">
                      1590 N Bates Street<br />
                      Stephenville, TX 76401
                    </address>
                  </a>
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#4054b2' }}>
                    Phone
                  </h3>
                  <a href={PHONE_HREF} className="text-[#cc0000] font-semibold hover:text-[#aa0000] transition-colors">
                    {PHONE}
                  </a>
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#4054b2' }}>
                    Hours
                  </h3>
                  <p className="text-sm text-gray-700">Mon–Fri: 8:00am – 5:00pm</p>
                  <p className="text-sm text-gray-700">Emergency repairs available 7 days a week</p>
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#4054b2' }}>
                    Service Areas
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Stephenville, Dublin, Hico, Lingleville, Morgan Mill, and all of Erath County
                  </p>
                </div>

                <a
                  href={`https://www.google.com/maps?cid=${GBP_CID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#4054b2] hover:text-[#0f1840] transition-colors"
                >
                  View on Google Maps
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          aria-labelledby="faq-heading"
          className="py-14 px-4"
          style={{ backgroundColor: '#f5f3ef' }}
        >
          <div className="max-w-3xl mx-auto">
            <h2
              id="faq-heading"
              className="font-display text-3xl font-bold mb-2"
              style={{ color: '#0f1840' }}
            >
              Frequently Asked Questions — Stephenville, TX
            </h2>
            <p className="text-gray-600 mb-10">
              Common questions from Stephenville homeowners and businesses about roofing services.
            </p>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white rounded-xl p-6 border border-[#e2ddd6]"
                >
                  <h3 className="font-display text-base font-bold mb-2" style={{ color: '#0f1840' }}>
                    {faq.q}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other areas */}
        <section
          aria-labelledby="other-areas-heading"
          className="py-12 px-4 bg-white border-t border-[#e2ddd6]"
        >
          <div className="max-w-4xl mx-auto">
            <h2
              id="other-areas-heading"
              className="font-display text-xl font-bold mb-2"
              style={{ color: '#0f1840' }}
            >
              Other Areas We Serve
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              Heritage Roofing serves communities across Central Texas. Each area has a dedicated local number.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Granbury area — dedicated local number */}
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>
                  Granbury &amp; Hood County
                </p>
                <p className="text-xs text-gray-500 mb-2">Glen Rose, Weatherford</p>
                <a
                  href="tel:8175730890"
                  className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors"
                >
                  817-573-0890
                </a>
              </div>
              {/* Brownwood area — dedicated local number */}
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>
                  Brownwood &amp; Brown County
                </p>
                <p className="text-xs text-gray-500 mb-2">Coleman, Early, Bangs</p>
                <a
                  href="tel:3255105768"
                  className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors"
                >
                  325-510-5768
                </a>
              </div>
              {/* Stephenville area surrounding towns — same main number */}
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>
                  Dublin, Hico &amp; Erath County
                </p>
                <p className="text-xs text-gray-500 mb-2">Hamilton, Lingleville, Morgan Mill</p>
                <a
                  href={PHONE_HREF}
                  className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors"
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileCallButton />
    </>
  )
}
