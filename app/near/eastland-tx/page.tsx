import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services in Eastland, TX | Heritage Roofing, Inc.',
  description:
    'Roofing contractor serving Eastland, TX and Eastland County since 1986. Residential roofing, roof repair, storm damage, and emergency services. Call Heritage Roofing at 254-968-7663.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations/eastland' },
  openGraph: {
    title: 'Roofing Services in Eastland, TX | Heritage Roofing, Inc.',
    description:
      'Local roofing contractor serving Eastland and Eastland County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
    url: 'https://heritageroofingtexas.com/locations/eastland',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. — Roofing Services in Eastland, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in Eastland, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Eastland and Eastland County. Residential, commercial, storm damage, and emergency roof repairs.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

const GBP_CID = '12288339561500500951'
const PHONE = '254-968-7663'
const PHONE_HREF = 'tel:2549687663'

const services = [
  {
    title: 'Residential Roofing',
    href: '/services/residential-roofing',
    description:
      'Eastland homes range from older bungalows near the historic courthouse square to newer neighborhoods on the city outskirts — each with different roofing needs. Heritage Roofing installs architectural shingles, metal roofing, and tile on Eastland residences, with material recommendations based on your home\'s structure and your budget.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description:
      'From retail buildings along I-20 to agricultural and industrial structures around Eastland County, Heritage Roofing provides TPO, metal panel, and built-up roofing systems for local businesses. We work around your schedule and provide written warranties on all commercial installations.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'Small leaks and minor storm damage can escalate quickly in Eastland\'s climate. Our repair crews identify the source of leaks and fix damaged shingles, pipe boots, ridge caps, and valley flashing before moisture reaches your decking or interior ceiling materials.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'When a repair is no longer cost-effective, Heritage Roofing handles complete tear-off and replacement for Eastland homes and commercial properties. We walk you through material options, provide a written estimate, and complete most residential replacements in one to two days.',
  },
  {
    title: 'Storm & Hail Damage',
    href: '/services/storm-hail-damage',
    description:
      'Eastland County sees significant hail activity during spring storm season. Heritage Roofing provides thorough post-storm inspections, photographic documentation, and written reports suitable for insurance claims. We meet with adjusters on-site and manage the full restoration from start to finish.',
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    description:
      'Whether you\'re buying a home in Eastland, preparing an insurance claim, or checking on your roof before storm season, Heritage Roofing provides detailed written inspections with photographs. Our reports give you an honest assessment of condition and any needed repairs.',
  },
  {
    title: 'Skylights & Attic Ventilation',
    href: '/services/skylights-ventilation',
    description:
      'Attic heat is a serious problem across West Texas summers, and Eastland is no exception. Poor attic ventilation shortens shingle life and drives up energy costs. We install ridge vents, soffit vents, powered attic fans, and quality skylights that add natural light without creating leak points.',
  },
  {
    title: 'Emergency Roof Repair',
    href: '/services/emergency-repairs',
    description:
      'Storm damage doesn\'t follow business hours. Heritage Roofing offers emergency response seven days a week for Eastland homeowners and businesses when wind, hail, or falling debris creates an urgent opening in your roof.',
  },
]

const faqs = [
  {
    q: 'Does Heritage Roofing serve Eastland, TX?',
    a: 'Yes. Eastland is within our regular service area. Our Stephenville office at 1590 N Bates Street is approximately 35 miles east of Eastland, and we have crews working in Eastland County regularly. Call 254-968-7663 to schedule.',
  },
  {
    q: 'Do you offer free estimates in Eastland?',
    a: 'Yes. We provide free, no-obligation estimates for residential and commercial roofing projects in Eastland and throughout Eastland County. Call 254-968-7663 or use our contact form to request an appointment.',
  },
  {
    q: 'What roofing materials do you recommend for Eastland homes?',
    a: 'Class 4 impact-resistant architectural shingles are the most popular choice in this part of Texas given the hail exposure. Metal roofing is also a strong long-term option, especially for agricultural buildings and properties where longevity matters more than upfront cost.',
  },
  {
    q: 'Can you help with a hail damage insurance claim in Eastland?',
    a: 'Absolutely. We document all damage with photographs and a written report, and we\'re available to meet with your insurance adjuster on-site. We\'ve helped many West Texas homeowners navigate the insurance restoration process after storm events.',
  },
  {
    q: 'How long does a roof replacement take in Eastland?',
    a: 'Most residential roof replacements are completed in one to two days depending on the size and pitch of the roof. We handle full tear-off and disposal, and clean up the site at the end of each work day.',
  },
  {
    q: 'Do you also serve areas near Eastland?',
    a: 'Yes. In addition to Eastland, we serve all of Eastland County as well as Stephenville and Erath County (254-968-7663), Granbury and Hood County (817-573-0890), and Brownwood and Brown County (325-510-5768).',
  },
]

export default function EastlandPage() {
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
              Eastland County &mdash; Since 1986
            </p>
            <h1
              id="page-heading"
              className="font-display text-4xl md:text-5xl font-bold text-white text-balance leading-tight mb-4"
            >
              Roofing Services in Eastland, TX
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Heritage Roofing, Inc. has served Eastland and the surrounding area since 1986. We provide residential and commercial roofing, storm damage repairs, and emergency services for homes and businesses in Eastland County.
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
        <section aria-label="About Heritage Roofing in Eastland" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0f1840' }}>
              Your Eastland Roofing Contractor
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Eastland has been part of Heritage Roofing&apos;s service area since our founding in 1986. The city sits along the I-20 corridor in Eastland County — a stretch of West Texas known for its wide-open weather exposure and active spring storm seasons. We serve the full range of properties here, from downtown commercial blocks to rural acreage homes.
              </p>
              <p>
                Eastland County gets its share of severe weather, including hail events that can strip granules from shingles in a single storm. High summer UV intensity also accelerates aging on older roofing systems. Heritage Roofing understands these local conditions because we work in them every week.
              </p>
              <p>
                We are licensed, insured, and based locally out of our Stephenville headquarters. When you hire Heritage Roofing in Eastland, you get a crew that will be here after the job is done — not a storm-chaser company that moves on when the insurance money runs out.
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
              Services We Offer in Eastland, TX
            </h2>
            <p className="text-gray-600 mb-10">
              Every service below is available to Eastland homeowners and businesses. Same crew, same standards as our Stephenville work.
            </p>

            <div className="space-y-10">
              {services.map((service) => (
                <article
                  key={service.href}
                  className="bg-white rounded-xl p-7 border border-[#e2ddd6]"
                >
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#4054b2' }}>
                    {service.title} in Eastland, TX
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
              Ready to Get Started in Eastland?
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
              Serving Eastland, TX
            </h2>
            <p className="text-gray-600 mb-8">
              Our Stephenville office serves Eastland and all surrounding Eastland County communities.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm">
                <iframe
                  title="Heritage Roofing, Inc. — Serving Eastland, TX"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13291.0!2d-98.8173!3d32.4018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86561b5e4d7d9999%3A0x0!2sEastland%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
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
                    Serving From Our Stephenville Office
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
                    Eastland, Stephenville, Cisco, Ranger, and all of Eastland County
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
              Frequently Asked Questions — Eastland, TX
            </h2>
            <p className="text-gray-600 mb-10">
              Common questions from Eastland homeowners and businesses about our roofing services.
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
                <p className="text-sm text-gray-600 mb-3">Our home base since 1986</p>
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
                <p className="text-sm text-gray-600 mb-3">Local number for Hood County</p>
                <a href="tel:8175730890" className="text-[#cc0000] font-semibold text-sm hover:text-[#aa0000] transition-colors block mb-3">
                  817-573-0890
                </a>
                <Link href="/near/granbury-tx" className="text-sm text-[#4054b2] hover:text-[#0f1840] font-medium transition-colors">
                  View Granbury page →
                </Link>
              </div>

              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>
                  Brownwood &amp; Brown County
                </p>
                <p className="text-sm text-gray-600 mb-3">Local number for Brown County</p>
                <a href="tel:3255105768" className="text-[#cc0000] font-semibold text-sm hover:text-[#aa0000] transition-colors block mb-3">
                  325-510-5768
                </a>
                <Link href="/near/brownwood-tx" className="text-sm text-[#4054b2] hover:text-[#0f1840] font-medium transition-colors">
                  View Brownwood page →
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
