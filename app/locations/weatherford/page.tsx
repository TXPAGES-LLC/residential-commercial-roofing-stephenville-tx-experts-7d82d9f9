import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services in Weatherford, TX | Heritage Roofing, Inc.',
  description:
    'Roofing contractor serving Weatherford, TX and Parker County since 1986. Residential roofing, roof repair, storm damage, and emergency services. Call Heritage Roofing at 817-573-0890.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations/weatherford' },
  openGraph: {
    title: 'Roofing Services in Weatherford, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Weatherford and Parker County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
    url: 'https://heritageroofingtexas.com/locations/weatherford',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. — Roofing Services in Weatherford, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in Weatherford, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Weatherford and Parker County. Residential, commercial, storm damage, and emergency roof repairs.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

const GBP_CID = '12288339561500500951'
const PHONE = '817-573-0890'
const PHONE_HREF = 'tel:8175730890'

const services = [
  {
    title: 'Residential Roofing',
    href: '/services/residential-roofing',
    description:
      'Weatherford\'s growth has brought a broad range of residential properties — established neighborhoods near downtown, newer subdivisions along the I-20 corridor, and rural estate homes on Parker County acreage. Heritage Roofing handles new installation and replacement for the full range of Weatherford residential properties, with material options suited to Parker County\'s climate.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description:
      'As one of the fastest-growing communities in North Texas, Weatherford has an expanding commercial base including retail, industrial, and healthcare. Heritage Roofing provides TPO, metal panel, and modified bitumen roofing for Weatherford businesses, with project management that minimizes business interruption.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'Parker County weather — particularly the spring storm season — regularly damages roofing systems that are otherwise in serviceable condition. Heritage Roofing responds to Weatherford repair calls for shingle damage, flashing failure, pipe boot deterioration, and leak diagnosis to stop damage before it spreads.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'Heritage Roofing manages complete roof replacements for Weatherford properties from material selection through final cleanup. We provide written estimates before any work begins, complete most residential jobs in one to two days, and handle full tear-off and disposal.',
  },
  {
    title: 'Storm & Hail Damage',
    href: '/services/storm-hail-damage',
    description:
      'Parker County is part of a well-documented North Texas hail corridor. Weatherford sees significant storm activity, and Heritage Roofing is equipped to respond — providing detailed post-storm inspections, photographic documentation, and written reports for insurance claims. We coordinate with your adjuster on-site.',
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    description:
      'Weatherford\'s active real estate market makes pre-purchase roof inspections especially important. Heritage Roofing provides written reports with photographs for home buyers, property managers, and anyone needing documentation after a storm or for routine annual maintenance.',
  },
  {
    title: 'Skylights & Ventilation',
    href: '/services/skylights-ventilation',
    description:
      'Parker County summers push attic temperatures well above living space temperatures, shortening shingle life and increasing air conditioning demand. Heritage Roofing installs properly designed ridge and soffit ventilation systems and quality skylights for Weatherford properties looking to improve performance and natural light.',
  },
  {
    title: 'Emergency Repairs',
    href: '/services/emergency-repairs',
    description:
      'When a North Texas storm opens your Weatherford roof, Heritage Roofing provides emergency response seven days a week. We deploy crews quickly to assess and secure damage, preventing additional water intrusion while permanent repairs are scheduled.',
  },
]

const faqs = [
  {
    q: 'Does Heritage Roofing serve Weatherford, TX?',
    a: 'Yes. Weatherford is within our Granbury-area service territory. Call 817-573-0890 to schedule a free estimate or inspection for your Weatherford property.',
  },
  {
    q: 'Do you provide free estimates in Weatherford?',
    a: 'Yes. Free, no-obligation estimates are available for all residential and commercial roofing projects in Weatherford and Parker County. Call 817-573-0890 or use our online contact form.',
  },
  {
    q: 'What roofing materials do you recommend for Weatherford homes?',
    a: 'Class 4 impact-resistant architectural shingles are the most popular and practical choice for Weatherford given Parker County\'s hail frequency. Standing seam metal is an excellent long-term investment for both residential and commercial properties. We\'ll assess your specific situation and make a clear recommendation.',
  },
  {
    q: 'How do you handle hail damage insurance claims in Weatherford?',
    a: 'We inspect your roof thoroughly, photograph all damage, and produce a written report for your insurer. We also meet with insurance adjusters on-site when requested to ensure all storm damage is documented in the claim.',
  },
  {
    q: 'How quickly can Heritage Roofing respond to storm damage in Weatherford?',
    a: 'Heritage Roofing provides emergency response seven days a week. After a storm event in Weatherford, call 817-573-0890 and we\'ll dispatch a crew as quickly as possible to assess and secure your property.',
  },
  {
    q: 'What other areas near Weatherford does Heritage Roofing serve?',
    a: 'In addition to Weatherford, we serve Granbury, Glen Rose, Mineral Wells, and surrounding Hood and Parker County communities (817-573-0890). We also cover Stephenville and Erath County (254-968-7663) and the Brownwood area (325-510-5768).',
  },
]

export default function WeatherfordPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section aria-labelledby="page-heading" style={{ backgroundColor: '#0f1840' }} className="py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">Parker County &mdash; Since 1986</p>
            <h1 id="page-heading" className="font-display text-4xl md:text-5xl font-bold text-white text-balance leading-tight mb-4">
              Roofing Services in Weatherford, TX
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Heritage Roofing, Inc. has served Weatherford and Parker County since 1986. We provide residential and commercial roofing, storm damage repairs, and emergency services for homes and businesses throughout the Weatherford area.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold px-7 py-3 rounded text-base transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" /></svg>
                Call {PHONE}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-7 py-3 rounded text-base transition-colors">
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </section>

        <section aria-label="About Heritage Roofing in Weatherford" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0f1840' }}>Your Weatherford Roofing Contractor</h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>Weatherford has grown significantly in recent years, with Parker County becoming one of the more active residential and commercial markets in North Texas. Heritage Roofing has been serving this region since 1986 — long before the current growth wave — and we understand the full range of property types found here, from historic homes near the courthouse to new construction in the expanding western subdivisions.</p>
              <p>Parker County sits in a well-documented North Texas storm corridor. Spring hail events are frequent and can cause substantial roofing damage across a wide area in a single afternoon. We inspect and document damage thoroughly, work with insurance adjusters, and install products rated to handle the actual conditions in this part of Texas.</p>
              <p>Heritage Roofing is a licensed, insured contractor. Our crews serve Weatherford from our Central Texas offices, and we provide written estimates and written warranties on all work we perform.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="services-heading" className="py-14 px-4" style={{ backgroundColor: '#f5f3ef' }}>
          <div className="max-w-4xl mx-auto">
            <h2 id="services-heading" className="font-display text-3xl font-bold mb-2" style={{ color: '#0f1840' }}>Services We Offer in Weatherford, TX</h2>
            <p className="text-gray-600 mb-10">Every service below is available to Weatherford homeowners and businesses throughout Parker County.</p>
            <div className="space-y-10">
              {services.map((service) => (
                <article key={service.href} className="bg-white rounded-xl p-7 border border-[#e2ddd6]">
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#4054b2' }}>{service.title} in Weatherford, TX</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center gap-1 text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors">
                    Learn more about {service.title}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Call to action" style={{ backgroundColor: '#cc0000' }} className="py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-3 text-balance">Ready to Get Started in Weatherford?</h2>
            <p className="text-red-100 mb-7 text-lg">Call our Granbury-area number or submit a request online. Free estimates, no pressure.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-white text-[#cc0000] font-bold px-8 py-3 rounded text-base hover:bg-gray-100 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" /></svg>
                {PHONE}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded text-base hover:bg-white/10 transition-colors">
                Request a Free Estimate
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="location-heading" className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 id="location-heading" className="font-display text-2xl font-bold mb-2" style={{ color: '#0f1840' }}>Serving Weatherford, TX</h2>
            <p className="text-gray-600 mb-8">Our crews serve Weatherford and Parker County from our Central Texas offices.</p>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm">
                <iframe
                  title="Heritage Roofing, Inc. — Serving Weatherford, TX"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13291.0!2d-97.7963!3d32.7596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWeatherford%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="360"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#4054b2' }}>Serving From Our Central Texas Office</h3>
                  <a href={`https://www.google.com/maps?cid=${GBP_CID}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-sm leading-relaxed hover:text-[#4054b2] transition-colors block">
                    <address className="not-italic">1590 N Bates Street<br />Stephenville, TX 76401</address>
                  </a>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#4054b2' }}>Phone</h3>
                  <a href={PHONE_HREF} className="text-[#cc0000] font-semibold hover:text-[#aa0000] transition-colors">{PHONE}</a>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#4054b2' }}>Hours</h3>
                  <p className="text-sm text-gray-700">Mon–Fri: 8:00am – 5:00pm</p>
                  <p className="text-sm text-gray-700">Emergency repairs available 7 days a week</p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#4054b2' }}>Service Areas</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Weatherford, Granbury, Mineral Wells, Aledo, and surrounding Parker and Hood counties</p>
                </div>
                <a href={`https://www.google.com/maps?cid=${GBP_CID}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4054b2] hover:text-[#0f1840] transition-colors">
                  View on Google Maps
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="py-14 px-4" style={{ backgroundColor: '#f5f3ef' }}>
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="font-display text-3xl font-bold mb-2" style={{ color: '#0f1840' }}>Frequently Asked Questions — Weatherford, TX</h2>
            <p className="text-gray-600 mb-10">Common questions from Weatherford homeowners and businesses about our roofing services.</p>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 border border-[#e2ddd6]">
                  <h3 className="font-display text-base font-bold mb-2" style={{ color: '#0f1840' }}>{faq.q}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="other-areas-heading" className="py-12 px-4 bg-white border-t border-[#e2ddd6]">
          <div className="max-w-4xl mx-auto">
            <h2 id="other-areas-heading" className="font-display text-xl font-bold mb-2" style={{ color: '#0f1840' }}>Other Areas We Serve</h2>
            <p className="text-sm text-gray-600 mb-8">Heritage Roofing serves communities across Central Texas. Each area has a dedicated local number.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>Granbury &amp; Hood County</p>
                <p className="text-xs text-gray-500 mb-2">Glen Rose, Weatherford, Mineral Wells</p>
                <a href={PHONE_HREF} className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors">{PHONE}</a>
              </div>
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>Stephenville &amp; Erath County</p>
                <p className="text-xs text-gray-500 mb-2">Dublin, Hico, Lingleville</p>
                <a href="tel:2549687663" className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors">254-968-7663</a>
              </div>
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>Brownwood &amp; Brown County</p>
                <p className="text-xs text-gray-500 mb-2">Coleman, Comanche, Bangs</p>
                <a href="tel:3255105768" className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors">325-510-5768</a>
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
