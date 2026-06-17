import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services in Brownwood, TX | Heritage Roofing, Inc.',
  description:
    'Roofing contractor serving Brownwood, TX since 1986. Residential & commercial roofing, storm damage, and emergency repairs across Brown County. Call Heritage Roofing at 325-510-5768.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations/brownwood' },
  openGraph: {
    title: 'Roofing Services in Brownwood, TX | Heritage Roofing, Inc.',
    description:
      'Local roofing contractor serving Brownwood and Brown County. Residential, commercial, storm damage, and emergency roof repairs. Call 325-510-5768.',
    url: 'https://heritageroofingtexas.com/locations/brownwood',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. — Roofing Services in Brownwood, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in Brownwood, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Brownwood and Brown County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
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
      'Brownwood neighborhoods — from established areas near Howard Payne University to newer residential developments on the outskirts of town — all share the same West Texas roofing challenge: high UV exposure and temperature swings that wear down standard shingles faster than in cooler regions. Heritage Roofing installs products rated for this environment.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description:
      'Commercial properties along Early Boulevard, Highway 84, and the Brownwood downtown corridor benefit from reflective roofing systems that reduce cooling loads. Heritage Roofing installs TPO, modified bitumen, metal panel, and built-up systems on commercial buildings throughout Brown County, with minimal disruption to day-to-day operations.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'In West Texas, roof repairs left unaddressed quickly become larger problems. UV-cracked sealants, broken pipe boots, and lifted shingles all invite moisture into decking and framing. Heritage Roofing responds promptly to repair calls in Brownwood so small issues stay small.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'A roof past its service life in Brownwood will show accelerated granule loss, curling edges, and failing seal strips — signs of West Texas UV exposure. Heritage Roofing guides Brown County homeowners through material options, handles full tear-off, and installs a new system built for the local climate.',
  },
  {
    title: 'Storm & Hail Damage',
    href: '/services/storm-hail-damage',
    description:
      'Brown County receives its share of hail events each spring, and damage often goes undetected until a leak develops months later. Heritage Roofing provides thorough post-storm inspections with photographs and written reports ready for your insurance carrier. We handle the full claim and restoration process.',
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    description:
      'Whether you are buying a Brownwood property, filing a storm claim, or just tracking your roof\'s condition, Heritage Roofing provides professional written inspection reports. We document current condition, estimate remaining service life, and note any deficiencies found — all with photographs.',
  },
  {
    title: 'Skylights & Ventilation',
    href: '/services/skylights-ventilation',
    description:
      'Attic temperatures in Brownwood regularly exceed 150°F in summer, dramatically shortening shingle life and increasing air conditioning loads. Properly installed ridge and soffit venting brings those temperatures down. Heritage Roofing also installs quality skylights that hold their seals through West Texas heat cycles.',
  },
  {
    title: 'Emergency Repairs',
    href: '/services/emergency-repairs',
    description:
      'Severe weather in Brown County can cause immediate structural roof damage. Heritage Roofing offers emergency response seven days a week — on-site assessment, emergency tarping, and same-day repairs to prevent water intrusion while a permanent fix is arranged.',
  },
]

const faqs = [
  {
    q: 'Does Heritage Roofing serve the Brownwood area?',
    a: 'Yes. Heritage Roofing, Inc. maintains a dedicated Brownwood-area number — 325-510-5768 — and regularly deploys crews throughout Brown County. We are based in Stephenville and have been serving West-Central Texas since 1986.',
  },
  {
    q: 'Do you offer free estimates in Brownwood?',
    a: 'Yes. We provide free, no-obligation estimates for residential and commercial properties throughout Brownwood and Brown County. Call 325-510-5768 or submit a request through our contact form.',
  },
  {
    q: 'What roofing materials hold up best in Brownwood\'s climate?',
    a: 'West Texas heat and UV are harder on standard 3-tab shingles than most other regions. We typically recommend Class 4 impact-resistant architectural shingles or standing seam metal for Brownwood properties — both provide significantly longer service life under the UV and hail exposure Brown County receives.',
  },
  {
    q: 'Can Heritage Roofing help with a hail damage claim in Brown County?',
    a: 'Absolutely. We document all storm damage thoroughly, provide a written report you can submit to your insurance company, and can meet your adjuster on-site. Heritage Roofing manages the full restoration — not just an emergency patch.',
  },
  {
    q: 'What Brownwood-area communities do you cover?',
    a: 'We serve Brownwood, Early, Bangs, Zephyr, Coleman, and surrounding Brown County communities. For Granbury-area service call 817-573-0890, and for Stephenville call 254-968-7663.',
  },
  {
    q: 'How quickly can you get to Brownwood after a storm?',
    a: 'We aim to respond within 24–48 hours after major storm events in the Brownwood area. For emergency situations where a roof is actively exposed, we have 7-day emergency response available — call 325-510-5768 directly.',
  },
]

export default function BrownwoodPage() {
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
              Brown County &mdash; Brownwood Service Area
            </p>
            <h1
              id="page-heading"
              className="font-display text-4xl md:text-5xl font-bold text-white text-balance leading-tight mb-4"
            >
              Roofing Services in Brownwood, TX
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Heritage Roofing, Inc. serves Brownwood and Brown County with residential and commercial roofing, storm damage repair, and emergency services. Licensed, insured, and based in Central Texas since 1986.
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
        <section aria-label="About Heritage Roofing in Brownwood" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0f1840' }}>
              Your Brownwood Roofing Contractor
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Heritage Roofing, Inc. has operated out of Central Texas since 1986. Our Brownwood service area covers Brown County and surrounding communities, with a dedicated local number — 325-510-5768 — for Brownwood-area customers. Crews travel regularly from our Stephenville headquarters to complete residential and commercial roofing projects throughout Brown County.
              </p>
              <p>
                Brownwood sits in West-Central Texas where roofing conditions are demanding. Intense summer heat and UV exposure accelerate shingle granule loss and dry out sealants faster than in other parts of the state. Seasonal hail events add another layer of risk. We select materials and installation methods that are appropriate for this climate — not whatever is cheapest or easiest to install.
              </p>
              <p>
                Heritage Roofing is a licensed, insured, and family-owned contractor. No subcontracted storm crews, no out-of-region operations that disappear after the job. We stand behind our work in Brownwood the same way we do in every market we serve.
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
              Services We Offer in Brownwood, TX
            </h2>
            <p className="text-gray-600 mb-10">
              Every service below is available to Brownwood and Brown County homeowners and businesses.
            </p>

            <div className="space-y-10">
              {services.map((service) => (
                <article
                  key={service.href}
                  className="bg-white rounded-xl p-7 border border-[#e2ddd6]"
                >
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#4054b2' }}>
                    {service.title} in Brownwood, TX
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
              Ready to Get Started in Brownwood?
            </h2>
            <p className="text-red-100 mb-7 text-lg">
              Call our Brownwood-area number or submit a request online. Free estimates, no pressure.
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
              Serving Brownwood, TX
            </h2>
            <p className="text-gray-600 mb-8">
              Heritage Roofing is headquartered in Stephenville and regularly deploys crews throughout Brown County and the greater Brownwood area.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Map iframe — Brownwood city center */}
              <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm">
                <iframe
                  title="Heritage Roofing, Inc. serving Brownwood, TX"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.0!2d-98.9912!3d31.7093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaaab3f4b4f9e5017!2sHeritage%20Roofing%2C%20Inc.!5e0!3m2!1sen!2sus!4v1700000000000"
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
                    Brownwood Service Area
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
                  <p className="text-xs text-gray-500 mt-1">Main office — serving Brownwood remotely</p>
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#4054b2' }}>
                    Brownwood Phone
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
                    Brownwood, Early, Bangs, Zephyr, Coleman, and all of Brown County
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
              Frequently Asked Questions — Brownwood, TX
            </h2>
            <p className="text-gray-600 mb-10">
              Common questions from Brownwood homeowners and businesses about roofing services.
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
                  Stephenville &amp; Erath County
                </p>
                <p className="text-xs text-gray-500 mb-2">Dublin, Hico, Lingleville</p>
                <a
                  href="tel:2549687663"
                  className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors"
                >
                  254-968-7663
                </a>
              </div>
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>
                  Granbury &amp; Hood County
                </p>
                <p className="text-xs text-gray-500 mb-2">Glen Rose, Acton, Tolar</p>
                <a
                  href="tel:8175730890"
                  className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors"
                >
                  817-573-0890
                </a>
              </div>
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>
                  Coleman &amp; Coleman County
                </p>
                <p className="text-xs text-gray-500 mb-2">Santa Anna, Novice</p>
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
