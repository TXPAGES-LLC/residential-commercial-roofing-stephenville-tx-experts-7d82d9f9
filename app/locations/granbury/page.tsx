import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services in Granbury, TX | Heritage Roofing, Inc.',
  description:
    'Roofing contractor serving Granbury, TX and Hood County since 1986. Residential & commercial roofing, storm damage, roof repair, and emergency services. Call Heritage Roofing at 817-573-0890.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations/granbury' },
  openGraph: {
    title: 'Roofing Services in Granbury, TX | Heritage Roofing, Inc.',
    description:
      'Local roofing contractor serving Granbury and Hood County. Residential, commercial, storm damage, and emergency roof repairs. Call 817-573-0890.',
    url: 'https://heritageroofingtexas.com/locations/granbury',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. — Roofing Services in Granbury, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in Granbury, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Granbury and Hood County. Residential, commercial, storm damage, and emergency roof repairs. Call 817-573-0890.',
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
      'From established neighborhoods near the Granbury square to newer lakefront homes along Lake Granbury, Heritage Roofing installs and replaces roofs on all residential property types. We carry architectural shingles, standing seam metal, and premium systems suited to the Hood County climate.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description:
      'Granbury businesses along Highway 377 and downtown rely on Heritage Roofing for TPO, modified bitumen, metal panel, and built-up roofing systems. We schedule commercial work to minimize downtime and provide written material and labor warranties on every installation.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'Wind and hail events in Hood County regularly dislodge shingles, crack ridge caps, and damage pipe boots. Our Granbury repair crews diagnose and fix leaks quickly — before minor issues escalate into rotted decking or ceiling damage inside your home.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'When a Granbury roof has reached the end of its useful life, a full replacement is the most cost-effective long-term solution. Heritage Roofing manages the complete process — material selection, permit coordination, full tear-off, disposal, and installation — with a clean site at the end of each day.',
  },
  {
    title: 'Storm & Hail Damage',
    href: '/services/storm-hail-damage',
    description:
      'Granbury and Hood County sit inside a well-documented DFW-area hail corridor. After major storm events, Heritage Roofing provides photo documentation and written damage reports that hold up through the insurance claims process. We work alongside adjusters and handle full restoration.',
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    description:
      'Before purchasing a Granbury home or filing an insurance claim, a professional roof inspection gives you clear, documented information. Heritage Roofing provides written inspection reports with photographs covering condition, age, remaining life, and any deficiencies found.',
  },
  {
    title: 'Skylights & Ventilation',
    href: '/services/skylights-ventilation',
    description:
      'Lakefront and wooded properties in the Granbury area can accumulate moisture in attic spaces, which accelerates shingle and decking deterioration. Heritage Roofing installs properly sized ridge vents, soffit vents, and powered attic fans, along with quality skylight brands that seal reliably in Texas weather.',
  },
  {
    title: 'Emergency Repairs',
    href: '/services/emergency-repairs',
    description:
      'Storm damage in the Granbury area can leave roofs exposed overnight. Heritage Roofing offers emergency response seven days a week — tarping, temporary repairs, and same-day assessment to protect your home while a permanent repair is scheduled.',
  },
]

const faqs = [
  {
    q: 'Does Heritage Roofing have a local presence in Granbury?',
    a: 'Yes. Heritage Roofing, Inc. is based in Stephenville and maintains a dedicated service area and local phone number — 817-573-0890 — specifically for Granbury and Hood County customers. Our crews regularly work throughout the Granbury area.',
  },
  {
    q: 'Do you offer free estimates in Granbury?',
    a: 'Yes. We provide free, no-obligation estimates for residential and commercial properties throughout Granbury and Hood County. Call 817-573-0890 or submit a request through our contact form.',
  },
  {
    q: 'How does Lake Granbury affect roofing material choices?',
    a: 'Lakefront and waterfront-adjacent properties see higher humidity levels and more frequent wind exposure. We typically recommend impact-resistant shingles or standing seam metal for these locations — both hold up better to moisture cycling and wind-driven rain than standard 3-tab shingles.',
  },
  {
    q: 'Can you help with a hail damage insurance claim in Hood County?',
    a: 'Absolutely. We document all storm damage with photographs and a written report, and can meet your insurance adjuster on-site to make sure every affected area is captured. We\'ve helped many Hood County homeowners navigate the full insurance restoration process.',
  },
  {
    q: 'What areas do you cover from the Granbury service area?',
    a: 'In addition to Granbury proper, we serve Acton, Tolar, Lipan, Glen Rose, and surrounding Hood and Somervell County communities. For Brownwood-area service, call 325-510-5768. For Stephenville, call 254-968-7663.',
  },
  {
    q: 'How long does a roof replacement take in Granbury?',
    a: 'Most single-family residential replacements are completed in one to two days. Larger or more complex roofs — steep pitches, multiple valleys, tile or metal — may take an additional day. We handle full tear-off, material disposal, and site cleanup throughout.',
  },
]

export default function GranburyPage() {
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
              Hood County &mdash; Granbury Service Area
            </p>
            <h1
              id="page-heading"
              className="font-display text-4xl md:text-5xl font-bold text-white text-balance leading-tight mb-4"
            >
              Roofing Services in Granbury, TX
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Heritage Roofing, Inc. serves Granbury and Hood County with residential and commercial roofing, storm damage repair, and emergency services. Locally based, licensed, and insured.
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
        <section aria-label="About Heritage Roofing in Granbury" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0f1840' }}>
              Your Granbury Roofing Contractor
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Heritage Roofing, Inc. has been in business since 1986, operating out of Stephenville and serving the greater Central Texas region — including the Granbury and Hood County market. We maintain a dedicated local number for Granbury customers and send crews throughout Hood County regularly.
              </p>
              <p>
                Granbury presents a distinct set of roofing conditions. Lake Granbury properties face elevated humidity and wind exposure that standard shingles handle poorly over time. The area sits within the broader DFW hail corridor, meaning storm damage is a recurring issue rather than an occasional one. Historic homes near the downtown square often require extra care with material selection to preserve character while meeting modern performance standards.
              </p>
              <p>
                Heritage Roofing brings experienced crews, licensed contractors, and no storm-chaser shortcuts. When we finish a job in Granbury, we expect to be your roofer for the next replacement as well.
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
              Services We Offer in Granbury, TX
            </h2>
            <p className="text-gray-600 mb-10">
              Every service below is available to Granbury and Hood County homeowners and businesses.
            </p>

            <div className="space-y-10">
              {services.map((service) => (
                <article
                  key={service.href}
                  className="bg-white rounded-xl p-7 border border-[#e2ddd6]"
                >
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#4054b2' }}>
                    {service.title} in Granbury, TX
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
              Ready to Get Started in Granbury?
            </h2>
            <p className="text-red-100 mb-7 text-lg">
              Call our Granbury-area number or submit a request online. Free estimates, no pressure.
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
              Serving Granbury, TX
            </h2>
            <p className="text-gray-600 mb-8">
              Heritage Roofing is headquartered in Stephenville and deploys crews throughout Hood County, including Granbury and surrounding communities.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Map iframe — Granbury city center */}
              <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm">
                <iframe
                  title="Heritage Roofing, Inc. serving Granbury, TX"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.0!2d-97.7914!3d32.4418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaaab3f4b4f9e5017!2sHeritage%20Roofing%2C%20Inc.!5e0!3m2!1sen!2sus!4v1700000000000"
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
                    Granbury Service Area
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
                  <p className="text-xs text-gray-500 mt-1">Main office — serving Granbury remotely</p>
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#4054b2' }}>
                    Granbury Phone
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
                    Granbury, Acton, Tolar, Lipan, Glen Rose, and all of Hood County
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
              Frequently Asked Questions — Granbury, TX
            </h2>
            <p className="text-gray-600 mb-10">
              Common questions from Granbury homeowners and businesses about roofing services.
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
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>
                  Glen Rose &amp; Somervell County
                </p>
                <p className="text-xs text-gray-500 mb-2">Bluff Dale, Rainbow</p>
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
