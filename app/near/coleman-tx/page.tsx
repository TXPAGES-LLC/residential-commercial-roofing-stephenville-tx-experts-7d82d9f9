import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services in Coleman, TX | Heritage Roofing, Inc.',
  description:
    'Roofing contractor serving Coleman, TX and Coleman County since 1986. Residential roofing, roof repair, storm damage, and emergency services. Call Heritage Roofing at 325-510-5768.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations/coleman' },
  openGraph: {
    title: 'Roofing Services in Coleman, TX | Heritage Roofing, Inc.',
    description:
      'Local roofing contractor serving Coleman and Coleman County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
    url: 'https://heritageroofingtexas.com/locations/coleman',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. — Roofing Services in Coleman, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in Coleman, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Coleman and Coleman County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

const GBP_CID = '12288339561500500951'
const PHONE = '325-510-5768'
const PHONE_HREF = 'tel:3255105768'

const services = [
  {
    title: 'Residential Roofing',
    href: '/services/residential-roofing',
    description:
      'Coleman is the county seat of Coleman County, with established neighborhoods near downtown and ranches spread across the surrounding hills. Heritage Roofing installs architectural shingles, metal roofing, and tile for Coleman homeowners, selecting materials suited to West-Central Texas heat, wind, and hail exposure.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description:
      'Coleman\'s commercial and agricultural sector includes downtown retail blocks, warehouses, and large ranch operations. Heritage Roofing provides TPO, metal panel, and built-up flat roofing systems for local businesses. We work on project timelines that minimize disruption to operations.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'Coleman County roofs deal with specific wear from UV exposure, thermal cycling, and periodic hail. Common issues include failed pipe boot seals, deteriorated flashing at valleys and chimneys, and wind-lifted shingles. Heritage Roofing diagnoses the true source of leaks rather than surface-treating symptoms.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'When Coleman homeowners need a complete roof replacement, Heritage Roofing provides a clear written estimate, handles full tear-off and disposal, and installs quality materials backed by a workmanship warranty. Most residential projects are completed in one to two days.',
  },
  {
    title: 'Storm & Hail Damage',
    href: '/services/storm-hail-damage',
    description:
      'Coleman County sits in an area that sees active hail seasons each spring. Heritage Roofing responds after storms with thorough inspections, photo documentation, and written reports that hold up to insurance company scrutiny. We meet adjusters on-site and manage the restoration process from start to finish.',
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    description:
      'A written inspection report from Heritage Roofing gives Coleman homeowners and buyers a clear picture of roof condition. Whether you need pre-purchase documentation, storm damage evidence, or a routine assessment before severe weather season, our inspections are honest and photo-supported.',
  },
  {
    title: 'Skylights & Attic Ventilation',
    href: '/services/skylights-ventilation',
    description:
      'In the heat of a Coleman County summer, inadequate attic ventilation accelerates shingle wear and raises energy costs significantly. Heritage Roofing installs ridge vents, baffled soffit vents, powered attic fans, and quality skylights to keep your roof system performing as designed.',
  },
  {
    title: 'Emergency Roof Repair',
    href: '/services/emergency-repairs',
    description:
      'Severe weather can compromise a roof at any hour. Heritage Roofing offers emergency response seven days a week for Coleman homeowners and businesses when a storm creates an urgent opening that cannot wait until Monday morning.',
  },
]

const faqs = [
  {
    q: 'Does Heritage Roofing serve Coleman, TX?',
    a: 'Yes. Coleman and Coleman County are within our active service area. We have crews working in the county regularly. Call 325-510-5768 to schedule.',
  },
  {
    q: 'Do you provide free estimates in Coleman?',
    a: 'Yes. Free, no-obligation estimates are available for residential and commercial roofing projects in Coleman and throughout Coleman County.',
  },
  {
    q: 'What type of roof is best for Coleman, TX?',
    a: 'Class 4 impact-resistant architectural shingles are the most popular choice given Coleman County\'s hail history. Standing seam metal roofing is an excellent long-term investment, particularly for ranch homes and agricultural buildings.',
  },
  {
    q: 'Can you help with a hail damage insurance claim in Coleman?',
    a: 'Yes. We document all damage photographically, provide written inspection reports, and meet with your adjuster on-site. We\'ve helped many Coleman County homeowners navigate the insurance claim process successfully.',
  },
  {
    q: 'How long does roof replacement take in Coleman?',
    a: 'Most single-family residential replacements are completed in one to two days. Larger or more complex roofs may take an additional day. We provide a realistic timeline in your written estimate.',
  },
  {
    q: 'Do you serve communities near Coleman?',
    a: 'Yes. We serve Santa Anna, Bangs, and surrounding areas under 325-510-5768, Stephenville and Erath County under 254-968-7663, and Granbury and Hood County under 817-573-0890.',
  },
]

export default function ColemanPage() {
  return (
    <>
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
              Coleman County &mdash; Since 1986
            </p>
            <h1
              id="page-heading"
              className="font-display text-4xl md:text-5xl font-bold text-white text-balance leading-tight mb-4"
            >
              Roofing Services in Coleman, TX
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Heritage Roofing, Inc. has served Coleman and Coleman County since 1986. We provide residential and commercial roofing, storm damage repairs, and emergency services for homes and businesses throughout the area.
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
        <section aria-label="About Heritage Roofing in Coleman" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0f1840' }}>
              Your Coleman Roofing Contractor
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Coleman is the county seat of Coleman County, located along US 84 in the heart of West-Central Texas. The city serves as a hub for the surrounding ranch and agricultural communities, and its mix of historic downtown buildings and residential neighborhoods reflects the kind of durable construction common throughout the region.
              </p>
              <p>
                Heritage Roofing has been serving Coleman and the surrounding area since 1986. The climate here is demanding — hot summers with intense UV radiation, active spring hail seasons, and periodic high-wind events that test the integrity of any roofing system. We know what performs in these conditions and what does not.
              </p>
              <p>
                We are licensed, insured, and work in Coleman County regularly. When you hire Heritage Roofing in Coleman, you get the same crew quality and material standards we bring to every job in our service area, backed by a workmanship warranty and a team that will still be here if you need warranty work in the years ahead.
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
              Services We Offer in Coleman, TX
            </h2>
            <p className="text-gray-600 mb-10">
              Every service below is available to Coleman homeowners and businesses. Same crew, same standards as our Brownwood work.
            </p>

            <div className="space-y-10">
              {services.map((service) => (
                <article
                  key={service.href}
                  className="bg-white rounded-xl p-7 border border-[#e2ddd6]"
                >
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#4054b2' }}>
                    {service.title} in Coleman, TX
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
              Ready to Get Started in Coleman?
            </h2>
            <p className="text-red-100 mb-7 text-lg">
              Call our Brownwood area office or submit a request online. Free estimates, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-white text-[#cc0000] font-bold px-8 py-3 rounded text-base hover:bg-gray-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
                </svg>
                {PHONE}
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
        <section aria-labelledby="location-heading" className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2
              id="location-heading"
              className="font-display text-2xl font-bold mb-2"
              style={{ color: '#0f1840' }}
            >
              Serving Coleman, TX
            </h2>
            <p className="text-gray-600 mb-8">
              Our Brownwood area operations serve Coleman and all of Coleman County.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm">
                <iframe
                  title="Heritage Roofing, Inc. — Serving Coleman, TX"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24000!2d-99.4262!3d31.8293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab4adc7c2e1ef9d7!2sHeritage+Roofing+Inc!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&cid=12288339561500500951"
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
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#4054b2' }}>
                    Heritage Roofing, Inc.
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
                    Coleman &amp; Coleman County
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
                    Coleman, Santa Anna, Brownwood, Bangs, and all of Coleman County
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
              Frequently Asked Questions — Coleman, TX
            </h2>
            <p className="text-gray-600 mb-10">
              Common questions from Coleman homeowners and businesses about our roofing services.
            </p>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 border border-[#e2ddd6]">
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
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>
                  Brownwood &amp; Brown County
                </p>
                <p className="text-sm text-gray-600 mb-3">Bangs, Goldthwaite, Comanche, Santa Anna</p>
                <a href="tel:3255105768" className="text-[#cc0000] font-semibold text-sm hover:text-[#aa0000] transition-colors block mb-3">
                  325-510-5768
                </a>
                <Link href="/near/brownwood-tx" className="text-sm text-[#4054b2] hover:text-[#0f1840] font-medium transition-colors">
                  View Brownwood page →
                </Link>
              </div>

              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>
                  Stephenville &amp; Erath County
                </p>
                <p className="text-sm text-gray-600 mb-3">Dublin, Hico, Eastland, De Leon</p>
                <a href="tel:2549687663" className="text-[#cc0000] font-semibold text-sm hover:text-[#aa0000] transition-colors block mb-3">
                  254-968-7663
                </a>
                <Link href="/near/stephenville-tx" className="text-sm text-[#4054b2] hover:text-[#0f1840] font-medium transition-colors">
                  View Stephenville page →
                </Link>
              </div>

              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>
                  Granbury &amp; Hood County
                </p>
                <p className="text-sm text-gray-600 mb-3">Glen Rose, Weatherford, Mineral Wells</p>
                <a href="tel:8175730890" className="text-[#cc0000] font-semibold text-sm hover:text-[#aa0000] transition-colors block mb-3">
                  817-573-0890
                </a>
                <Link href="/near/granbury-tx" className="text-sm text-[#4054b2] hover:text-[#0f1840] font-medium transition-colors">
                  View Granbury page →
                </Link>
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
