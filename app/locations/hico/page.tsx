import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services in Hico, TX | Heritage Roofing, Inc.',
  description:
    'Roofing contractor serving Hico, TX and Hamilton County since 1986. Residential roofing, roof repair, storm damage, and emergency services. Call Heritage Roofing at 254-968-7663.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations/hico' },
  openGraph: {
    title: 'Roofing Services in Hico, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Hico and Hamilton County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
    url: 'https://heritageroofingtexas.com/locations/hico',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. — Roofing Services in Hico, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in Hico, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Hico and Hamilton County. Residential, commercial, storm damage, and emergency roof repairs.',
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
      'Hico is a small community with a mix of historic homes in the original townsite and rural residential properties on surrounding acreage. Heritage Roofing installs architectural shingles, metal roofing, and tile on Hico homes, recommending materials suited to Hamilton County\'s climate and each home\'s specific construction.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description:
      'Hico\'s downtown and surrounding commercial areas include historic storefronts, agricultural outbuildings, and light industrial properties. Heritage Roofing provides TPO, metal panel, and modified bitumen roofing for Hico businesses, with scheduling that minimizes disruption to daily operations.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'Wind events and seasonal temperature swings in the Hico area work shingles loose and stress flashing over time. Our repair crews identify the actual source of a leak or failure and address it properly — shingles, boots, ridge caps, and valley flashing — before water intrusion creates more serious structural damage.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'When repair costs no longer make sense, Heritage Roofing handles a full roof replacement for Hico properties. We walk you through material options, provide a clear written estimate, and complete most residential jobs in one to two days with full cleanup at the end of each day.',
  },
  {
    title: 'Storm & Hail Damage',
    href: '/services/storm-hail-damage',
    description:
      'Hico and Hamilton County sit in a region that sees spring hail and high-wind storms regularly. Heritage Roofing provides thorough post-storm inspections with photographic documentation and written reports for insurance claims. We meet with adjusters on-site when needed.',
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    description:
      'Heritage Roofing provides written inspection reports for Hico properties — pre-purchase inspections for home buyers, post-storm assessments, and annual checkups. Our reports include photographs and a clear condition assessment with no obligation to use our services for any resulting work.',
  },
  {
    title: 'Skylights & Attic Ventilation',
    href: '/services/skylights-ventilation',
    description:
      'Summer attic temperatures in the Hico area can significantly shorten shingle service life and increase cooling costs. We install ridge vents, soffit vents, and powered attic fans that keep heat moving out. Skylight installation is also available for homeowners looking to add natural light.',
  },
  {
    title: 'Emergency Roof Repair',
    href: '/services/emergency-repairs',
    description:
      'Heritage Roofing provides emergency response seven days a week for Hico properties after storm events create immediate openings in a roof. Our crews can deploy from our Stephenville office to Hico quickly to secure the damage and prevent additional water infiltration.',
  },
]

const faqs = [
  {
    q: 'Does Heritage Roofing serve Hico, TX?',
    a: 'Yes. Hico is within our Stephenville service area. Our office at 1590 N Bates Street, Stephenville is approximately 30 miles from Hico, and we have crews working in the area regularly. Call 254-968-7663 to schedule.',
  },
  {
    q: 'Do you offer free estimates in Hico?',
    a: 'Yes. Free, no-obligation roof estimates are available for residential and commercial properties in Hico and Hamilton County. Call 254-968-7663 or use our contact form.',
  },
  {
    q: 'What roofing materials do you recommend for Hico homes?',
    a: 'Class 4 impact-resistant architectural shingles are a solid choice for most Hico homes given the hail frequency in this region. Metal roofing is increasingly popular on rural and ranch properties in Hamilton County for its longevity. We\'ll make a specific recommendation after seeing your roof.',
  },
  {
    q: 'Can you help with storm or hail damage insurance claims in Hico?',
    a: 'Yes. We document all damage with photographs and a written report, and we\'re available to meet with your insurance adjuster on-site. Our documentation ensures your claim covers the full extent of damage to your Hico property.',
  },
  {
    q: 'How quickly can Heritage Roofing respond to an emergency in Hico?',
    a: 'Heritage Roofing offers emergency response seven days a week. Call 254-968-7663 after a storm event and we\'ll dispatch a crew to Hico as quickly as possible to assess and secure your roof.',
  },
  {
    q: 'What other areas near Hico does Heritage Roofing serve?',
    a: 'In addition to Hico, we serve Stephenville, Dublin, and all of Erath County (254-968-7663), as well as Hamilton and surrounding Hamilton County communities. We also cover the Granbury area (817-573-0890) and Brownwood area (325-510-5768).',
  },
]

export default function HicoPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section aria-labelledby="page-heading" style={{ backgroundColor: '#0f1840' }} className="py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">Hamilton County &mdash; Since 1986</p>
            <h1 id="page-heading" className="font-display text-4xl md:text-5xl font-bold text-white text-balance leading-tight mb-4">
              Roofing Services in Hico, TX
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Heritage Roofing, Inc. has served Hico and Hamilton County since 1986. We provide residential and commercial roofing, storm damage repairs, and emergency services for homes and businesses in and around Hico.
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

        <section aria-label="About Heritage Roofing in Hico" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0f1840' }}>Your Hico Roofing Contractor</h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>Hico sits at the crossroads of Hamilton, Erath, and Bosque counties — a small community with a distinctive character, a historic downtown, and surrounding rural properties that blend ranch land with residential development. Heritage Roofing has been working in this area since 1986, handling everything from historic home repairs to new construction on rural acreage.</p>
              <p>The climate in the Hico area is consistent with much of Central Texas: intense summer UV exposure, spring hail and wind events, and occasional winter ice. These conditions require roofing materials and installation practices that go beyond minimum code — we specify products for real-world performance in this environment.</p>
              <p>Heritage Roofing is a licensed and insured contractor based in Stephenville. When you call us for work in Hico, you get a local crew, clear pricing, and a contractor who will be here to stand behind the work.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="services-heading" className="py-14 px-4" style={{ backgroundColor: '#f5f3ef' }}>
          <div className="max-w-4xl mx-auto">
            <h2 id="services-heading" className="font-display text-3xl font-bold mb-2" style={{ color: '#0f1840' }}>Services We Offer in Hico, TX</h2>
            <p className="text-gray-600 mb-10">Every service below is available to Hico homeowners and businesses throughout Hamilton County.</p>
            <div className="space-y-10">
              {services.map((service) => (
                <article key={service.href} className="bg-white rounded-xl p-7 border border-[#e2ddd6]">
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#4054b2' }}>{service.title} in Hico, TX</h3>
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
            <h2 className="font-display text-3xl font-bold text-white mb-3 text-balance">Ready to Get Started in Hico?</h2>
            <p className="text-red-100 mb-7 text-lg">Call our Stephenville office or submit a request online. Free estimates, no pressure.</p>
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
            <h2 id="location-heading" className="font-display text-2xl font-bold mb-2" style={{ color: '#0f1840' }}>Serving Hico, TX</h2>
            <p className="text-gray-600 mb-8">Our Stephenville office serves Hico and the surrounding Hamilton and Erath County area.</p>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm">
                <iframe
                  title="Heritage Roofing, Inc. — Serving Hico, TX"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13291.0!2d-98.0326!3d31.9835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHico%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
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
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#4054b2' }}>Serving From Our Stephenville Office</h3>
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
                  <p className="text-sm text-gray-700 leading-relaxed">Hico, Stephenville, Dublin, Hamilton, and surrounding Erath and Hamilton counties</p>
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
            <h2 id="faq-heading" className="font-display text-3xl font-bold mb-2" style={{ color: '#0f1840' }}>Frequently Asked Questions — Hico, TX</h2>
            <p className="text-gray-600 mb-10">Common questions from Hico homeowners and businesses about our roofing services.</p>
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
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>Stephenville &amp; Erath County</p>
                <p className="text-xs text-gray-500 mb-2">Dublin, Hico, Lingleville</p>
                <a href={PHONE_HREF} className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors">{PHONE}</a>
              </div>
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>Granbury &amp; Hood County</p>
                <p className="text-xs text-gray-500 mb-2">Glen Rose, Weatherford</p>
                <a href="tel:8175730890" className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors">817-573-0890</a>
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
