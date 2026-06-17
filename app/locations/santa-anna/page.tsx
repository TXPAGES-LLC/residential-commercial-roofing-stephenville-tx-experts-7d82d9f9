import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services in Santa Anna, TX | Heritage Roofing, Inc.',
  description:
    'Roofing contractor serving Santa Anna, TX and Coleman County since 1986. Residential roofing, roof repair, storm damage, and emergency services. Call Heritage Roofing at 325-510-5768.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations/santa-anna' },
  openGraph: {
    title: 'Roofing Services in Santa Anna, TX | Heritage Roofing, Inc.',
    description:
      'Local roofing contractor serving Santa Anna and Coleman County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
    url: 'https://heritageroofingtexas.com/locations/santa-anna',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. — Roofing Services in Santa Anna, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in Santa Anna, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Santa Anna and Coleman County. Residential, commercial, storm damage, and emergency roof repairs.',
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
      'Santa Anna sits at the foot of the mountain of the same name in Coleman County, with a mix of ranch homes and newer construction spread across a wide rural landscape. Heritage Roofing installs architectural shingles, standing seam metal, and tile roofing for Santa Anna homeowners who want materials that perform well in West-Central Texas weather.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description:
      'Santa Anna\'s commercial and agricultural buildings require roofing systems built for the region\'s heat, wind, and occasional hail. Heritage Roofing installs TPO, metal panel, and modified bitumen flat roofing for local businesses and farm operations, with full material and labor warranties.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'Heat cycles and seasonal storms create specific wear patterns on Coleman County roofs — lifted shingles, cracked pipe boots, failed ridge cap, and flashing separations are common. Our crew finds the actual source of the problem rather than applying a surface patch that won\'t last.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'When your Santa Anna home needs a complete new roof, Heritage Roofing handles everything from tear-off and disposal through installation and final cleanup. We provide written estimates with no surprise line items and complete most residential replacements in one to two days.',
  },
  {
    title: 'Storm & Hail Damage',
    href: '/services/storm-hail-damage',
    description:
      'Coleman County receives regular hail through the spring and early summer. Heritage Roofing responds quickly after storms, documents all damage with photographs and written reports, and works directly with your insurance adjuster to manage the full restoration from claim to completion.',
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    description:
      'Whether you\'re purchasing a property near Santa Anna, responding to an insurance claim, or simply checking your roof before storm season, Heritage Roofing provides honest written inspections with photos and a clear summary of conditions.',
  },
  {
    title: 'Skylights & Ventilation',
    href: '/services/skylights-ventilation',
    description:
      'In Central-West Texas summers, an under-ventilated attic adds years of wear to your shingles and drives up cooling costs. We install ridge vents, soffit vents, powered attic fans, and quality skylights for Santa Anna homeowners who want a properly breathing roof system.',
  },
  {
    title: 'Emergency Repairs',
    href: '/services/emergency-repairs',
    description:
      'When a severe storm peels back roofing or creates an opening into your attic, Heritage Roofing is available seven days a week for emergency response. We tarp and secure your structure to prevent further water intrusion until a full repair can be completed.',
  },
]

const faqs = [
  {
    q: 'Does Heritage Roofing serve Santa Anna, TX?',
    a: 'Yes. Santa Anna and Coleman County are part of our regular service area. Our crews work throughout the area. Call 325-510-5768 to schedule an estimate.',
  },
  {
    q: 'Do you offer free estimates in Santa Anna?',
    a: 'Yes. We provide free, no-obligation estimates for residential and commercial projects in Santa Anna and surrounding Coleman County communities.',
  },
  {
    q: 'What roofing materials work best in Coleman County?',
    a: 'Class 4 impact-resistant architectural shingles are the most practical choice given the regional hail exposure. Standing seam metal is a strong long-term investment for rural and agricultural properties in the area.',
  },
  {
    q: 'Can you help with an insurance claim after a hail storm in Santa Anna?',
    a: 'Yes. We document storm damage with photographs and written reports and are available to meet your adjuster on-site. We\'ve worked through the insurance process with many Coleman County homeowners.',
  },
  {
    q: 'How far is Heritage Roofing from Santa Anna?',
    a: 'We serve Santa Anna from our Brownwood area operations, which is a short drive west on US 67. We are regularly in Coleman County and can typically schedule estimates within a few business days.',
  },
  {
    q: 'Do you serve other towns near Santa Anna?',
    a: 'Yes. In addition to Santa Anna, we serve Coleman (325-510-5768), Brownwood and Brown County (325-510-5768), Stephenville and Erath County (254-968-7663), and Granbury and Hood County (817-573-0890).',
  },
]

export default function SantaAnnaPage() {
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
              Roofing Services in Santa Anna, TX
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Heritage Roofing, Inc. has served Santa Anna and Coleman County since 1986. We provide residential and commercial roofing, storm damage repairs, and emergency services for homes and businesses in the area.
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
        <section aria-label="About Heritage Roofing in Santa Anna" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0f1840' }}>
              Your Santa Anna Roofing Contractor
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Santa Anna is a small community in Coleman County, located along US 67 between Brownwood and Coleman. Known locally for the landmark peak that shares its name, the town sits in open ranch country where wind, heat, and seasonal hail take a predictable toll on residential and commercial roofing.
              </p>
              <p>
                Heritage Roofing has been working in Coleman County since 1986. We understand the specific conditions that affect roofing in this part of West-Central Texas — from the intense summer UV exposure that ages shingles prematurely to the fast-moving spring storms that roll across open terrain with little warning.
              </p>
              <p>
                We are licensed, insured, and based in the region. Santa Anna homeowners and businesses get the same quality materials and crew standards as our work in Brownwood and Stephenville, and we stand behind every job with a workmanship warranty.
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
              Services We Offer in Santa Anna, TX
            </h2>
            <p className="text-gray-600 mb-10">
              Every service below is available to Santa Anna homeowners and businesses. Same crew, same standards as our Brownwood work.
            </p>

            <div className="space-y-10">
              {services.map((service) => (
                <article
                  key={service.href}
                  className="bg-white rounded-xl p-7 border border-[#e2ddd6]"
                >
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#4054b2' }}>
                    {service.title} in Santa Anna, TX
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
              Ready to Get Started in Santa Anna?
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
              Serving Santa Anna, TX
            </h2>
            <p className="text-gray-600 mb-8">
              Our Brownwood area operations serve Santa Anna and all of Coleman County.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm">
                <iframe
                  title="Heritage Roofing, Inc. — Serving Santa Anna, TX"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24000!2d-99.3237!3d31.7382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab4adc7c2e1ef9d7!2sHeritage+Roofing+Inc!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&cid=12288339561500500951"
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
                    Santa Anna &amp; Coleman County
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
                    Santa Anna, Coleman, Brownwood, Bangs, and all of Coleman County
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
              Frequently Asked Questions — Santa Anna, TX
            </h2>
            <p className="text-gray-600 mb-10">
              Common questions from Santa Anna homeowners and businesses about our roofing services.
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
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>
                  Brownwood &amp; Brown County
                </p>
                <p className="text-sm text-gray-600 mb-3">Coleman, Bangs, Goldthwaite, Comanche</p>
                <a href="tel:3255105768" className="text-[#cc0000] font-semibold text-sm hover:text-[#aa0000] transition-colors block mb-3">
                  325-510-5768
                </a>
                <Link href="/locations/brownwood" className="text-sm text-[#4054b2] hover:text-[#0f1840] font-medium transition-colors">
                  View Brownwood page →
                </Link>
              </div>

              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>
                  Stephenville &amp; Erath County
                </p>
                <p className="text-sm text-gray-600 mb-3">Dublin, Hico, Eastland</p>
                <a href="tel:2549687663" className="text-[#cc0000] font-semibold text-sm hover:text-[#aa0000] transition-colors block mb-3">
                  254-968-7663
                </a>
                <Link href="/locations/stephenville" className="text-sm text-[#4054b2] hover:text-[#0f1840] font-medium transition-colors">
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
                <Link href="/locations/granbury" className="text-sm text-[#4054b2] hover:text-[#0f1840] font-medium transition-colors">
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
