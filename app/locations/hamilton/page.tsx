import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services in Hamilton, TX | Heritage Roofing, Inc.',
  description:
    'Roofing contractor serving Hamilton, TX and Hamilton County since 1986. Residential roofing, roof repair, storm damage, and emergency services. Call Heritage Roofing at 325-510-5768.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations/hamilton' },
  openGraph: {
    title: 'Roofing Services in Hamilton, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Hamilton and Hamilton County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
    url: 'https://heritageroofingtexas.com/locations/hamilton',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. — Roofing Services in Hamilton, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in Hamilton, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Hamilton and Hamilton County. Residential, commercial, storm damage, and emergency roof repairs.',
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
      'Hamilton homes range from older properties near the historic courthouse square to newer residential builds on the town\'s expanding edges. Heritage Roofing installs architectural shingles, metal roofing, and tile on Hamilton residences, with material recommendations based on Hamilton County\'s actual weather conditions.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description:
      'Hamilton serves as the county seat, with a commercial core that includes retail, healthcare, and government facilities. Heritage Roofing provides TPO, metal panel, and built-up flat roofing systems for Hamilton businesses, scheduled to minimize operational disruption and backed by written warranties.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'Isolated roof failures in Hamilton — a wind-lifted shingle section, a failed flashing joint, a cracked pipe boot — can lead to water intrusion and structural damage if not addressed. Heritage Roofing diagnoses and repairs the actual source of problems, not just the visible symptoms.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'When a Hamilton roof has reached the end of its service life, Heritage Roofing handles the complete replacement. We walk you through material options, provide a written estimate, manage full tear-off and disposal, and complete most residential jobs in one to two days.',
  },
  {
    title: 'Storm & Hail Damage',
    href: '/services/storm-hail-damage',
    description:
      'Hamilton County sees spring hail and wind events that can cause significant roofing damage — sometimes without looking dramatic from the ground. Heritage Roofing provides detailed post-storm inspections, photographic documentation, and written reports to support your insurance claim.',
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    description:
      'Whether you\'re buying a property near the Hamilton courthouse square or managing a commercial building in the county, Heritage Roofing provides written inspection reports with photographs for pre-purchase, post-storm, and routine annual maintenance inspections.',
  },
  {
    title: 'Skylights & Attic Ventilation',
    href: '/services/skylights-ventilation',
    description:
      'Adequate attic ventilation is a practical necessity in Hamilton County summers. Without it, heat buildup accelerates shingle aging and increases cooling costs. We install ridge and soffit ventilation systems and quality skylights for homeowners wanting to improve natural light without creating leak risk.',
  },
  {
    title: 'Emergency Roof Repair',
    href: '/services/emergency-repairs',
    description:
      'When a storm tears off shingles or a branch breaks through your roof, Heritage Roofing responds seven days a week for Hamilton properties. We deploy crews from our Central Texas offices to assess and secure damaged roofs as quickly as possible after an emergency call.',
  },
]

const faqs = [
  {
    q: 'Does Heritage Roofing serve Hamilton, TX?',
    a: 'Yes. Hamilton is within our Brownwood-area service territory. Call 325-510-5768 to schedule a free estimate or inspection for any residential or commercial property in Hamilton.',
  },
  {
    q: 'Do you offer free estimates in Hamilton?',
    a: 'Yes. Free, no-obligation estimates are available for all roofing projects in Hamilton and throughout Hamilton County. Call 325-510-5768 or use our online contact form to request an appointment.',
  },
  {
    q: 'What roofing materials are best suited to the Hamilton area?',
    a: 'Class 4 impact-resistant architectural shingles are a strong default recommendation for Hamilton given the area\'s hail exposure. Metal roofing is also popular on Hamilton County properties for its longevity and minimal maintenance requirements. We\'ll assess your specific situation and make a tailored recommendation.',
  },
  {
    q: 'Can you help with a storm or hail damage claim in Hamilton?',
    a: 'Yes. We inspect and document all storm damage with photographs and a written report, and we\'re available to meet with your insurance adjuster on-site. Our goal is to ensure your claim reflects the full scope of damage — nothing overlooked.',
  },
  {
    q: 'How long does a roof replacement take in Hamilton?',
    a: 'Most residential roof replacements in Hamilton are completed in one to two days. We handle full tear-off, decking inspection, installation, and cleanup. We provide a timeline estimate before work begins.',
  },
  {
    q: 'What areas near Hamilton does Heritage Roofing also serve?',
    a: 'In addition to Hamilton, we serve Brownwood, Goldthwaite, Comanche, Coleman, Bangs, and the broader Brown and Hamilton County area (325-510-5768). We also cover Stephenville and Erath County (254-968-7663) and Granbury and Hood County (817-573-0890).',
  },
]

export default function HamiltonPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section aria-labelledby="page-heading" style={{ backgroundColor: '#0f1840' }} className="py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">Hamilton County &mdash; Since 1986</p>
            <h1 id="page-heading" className="font-display text-4xl md:text-5xl font-bold text-white text-balance leading-tight mb-4">
              Roofing Services in Hamilton, TX
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Heritage Roofing, Inc. has served Hamilton and Hamilton County since 1986. We provide residential and commercial roofing, storm damage repairs, and emergency services for homes and businesses throughout the Hamilton area.
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

        <section aria-label="About Heritage Roofing in Hamilton" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0f1840' }}>Your Hamilton Roofing Contractor</h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>Hamilton is the county seat of Hamilton County and a hub for surrounding rural communities. Heritage Roofing has been working in this area since 1986, providing roofing services for homes, businesses, and agricultural properties throughout the county seat and the smaller communities around it.</p>
              <p>Hamilton County\'s weather is typical of West-Central Texas — hot summers that stress roofing materials, spring hail and wind events, and occasional severe weather that requires quick response. We select and install products appropriate for this environment, with a focus on impact resistance and durability rather than just initial cost.</p>
              <p>Heritage Roofing is a licensed, insured, family-owned contractor. Our crews serve Hamilton from our Central Texas offices and we stand behind our work with written warranties and long-term accountability.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="services-heading" className="py-14 px-4" style={{ backgroundColor: '#f5f3ef' }}>
          <div className="max-w-4xl mx-auto">
            <h2 id="services-heading" className="font-display text-3xl font-bold mb-2" style={{ color: '#0f1840' }}>Services We Offer in Hamilton, TX</h2>
            <p className="text-gray-600 mb-10">Every service below is available to Hamilton homeowners and businesses throughout Hamilton County.</p>
            <div className="space-y-10">
              {services.map((service) => (
                <article key={service.href} className="bg-white rounded-xl p-7 border border-[#e2ddd6]">
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#4054b2' }}>{service.title} in Hamilton, TX</h3>
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
            <h2 className="font-display text-3xl font-bold text-white mb-3 text-balance">Ready to Get Started in Hamilton?</h2>
            <p className="text-red-100 mb-7 text-lg">Call our Hamilton area number or submit a request online. Free estimates, no pressure.</p>
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
            <h2 id="location-heading" className="font-display text-2xl font-bold mb-2" style={{ color: '#0f1840' }}>Serving Hamilton, TX</h2>
            <p className="text-gray-600 mb-8">Our crews serve Hamilton and all of Hamilton County from our Central Texas offices.</p>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm">
                <iframe
                  title="Heritage Roofing, Inc. — Serving Hamilton, TX"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13291.0!2d-98.1229!3d31.6990!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHamilton%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
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
                  <p className="text-sm text-gray-700 leading-relaxed">Hamilton, Hico, Goldthwaite, Comanche, and surrounding Hamilton and Mills counties</p>
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
            <h2 id="faq-heading" className="font-display text-3xl font-bold mb-2" style={{ color: '#0f1840' }}>Frequently Asked Questions — Hamilton, TX</h2>
            <p className="text-gray-600 mb-10">Common questions from Hamilton homeowners and businesses about our roofing services.</p>
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
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>Brownwood &amp; Brown County</p>
                <p className="text-xs text-gray-500 mb-2">Coleman, Comanche, Bangs</p>
                <a href={PHONE_HREF} className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors">{PHONE}</a>
              </div>
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>Stephenville &amp; Erath County</p>
                <p className="text-xs text-gray-500 mb-2">Dublin, Hico, Lingleville</p>
                <a href="tel:2549687663" className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors">254-968-7663</a>
              </div>
              <div className="rounded-xl border border-[#e2ddd6] p-5">
                <p className="font-display font-bold text-base mb-1" style={{ color: '#0f1840' }}>Granbury &amp; Hood County</p>
                <p className="text-xs text-gray-500 mb-2">Glen Rose, Weatherford</p>
                <a href="tel:8175730890" className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors">817-573-0890</a>
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
