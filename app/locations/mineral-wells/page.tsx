import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services in Mineral Wells, TX | Heritage Roofing, Inc.',
  description:
    'Roofing contractor serving Mineral Wells, TX and Palo Pinto County since 1986. Residential roofing, roof repair, storm damage, and emergency services. Call Heritage Roofing at 817-573-0890.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations/mineral-wells' },
  openGraph: {
    title: 'Roofing Services in Mineral Wells, TX | Heritage Roofing, Inc.',
    description:
      'Local roofing contractor serving Mineral Wells and Palo Pinto County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
    url: 'https://heritageroofingtexas.com/locations/mineral-wells',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. — Roofing Services in Mineral Wells, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in Mineral Wells, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Mineral Wells and Palo Pinto County. Residential, commercial, storm damage, and emergency roof repairs.',
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
      'Mineral Wells has a diverse housing stock — from classic bungalows near the Baker Hotel area to newer subdivisions on the outskirts of town. Heritage Roofing installs architectural shingles, metal roofing, and tile on Mineral Wells homes, helping homeowners select materials suited to Palo Pinto County\'s weather patterns.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description:
      'From Highway 180 commercial strips to industrial properties and medical facilities in Mineral Wells, Heritage Roofing provides TPO, EPDM, metal panel, and built-up roofing for businesses. We schedule around your operations and provide written commercial warranties.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'Mineral Wells receives significant storm activity and high wind gusts that work shingles loose at valleys, ridges, and eaves. Our repair crews address individual shingle damage, flashing failures, and pipe boot deterioration before isolated issues become widespread water intrusion problems.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'A complete roof replacement on a Mineral Wells home is a major investment and a long-term asset. Heritage Roofing manages the full process — material selection, tear-off, decking inspection, installation, and cleanup — and presents clear pricing before any work begins.',
  },
  {
    title: 'Storm & Hail Damage',
    href: '/services/storm-hail-damage',
    description:
      'Palo Pinto County is in an active hail zone and Mineral Wells sees its share of storm damage each spring. Heritage Roofing provides detailed inspection and photographic documentation after storms, produces written reports for insurance claims, and coordinates with adjusters to ensure all damage is captured.',
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    description:
      'Pre-purchase roof inspections are especially valuable in Mineral Wells where older housing stock may have undisclosed deferred maintenance. Heritage Roofing provides written reports with photographs for pre-purchase, post-storm, and annual maintenance inspections.',
  },
  {
    title: 'Skylights & Attic Ventilation',
    href: '/services/skylights-ventilation',
    description:
      'Effective attic ventilation in a Mineral Wells summer can mean the difference between a shingle roof lasting 20 years or 12. We install proper ridge and soffit ventilation systems along with quality skylights that add natural light without creating leak points.',
  },
  {
    title: 'Emergency Roof Repair',
    href: '/services/emergency-repairs',
    description:
      'When a storm opens your roof and rain is coming, Heritage Roofing responds seven days a week for Mineral Wells properties. Our crews can be on-site quickly to secure the damage and prevent further water infiltration while permanent repairs are arranged.',
  },
]

const faqs = [
  {
    q: 'Does Heritage Roofing serve Mineral Wells, TX?',
    a: 'Yes. Mineral Wells is within our Granbury-area service territory. Call 817-573-0890 to schedule a free estimate or inspection for your Mineral Wells property.',
  },
  {
    q: 'Do you offer free estimates in Mineral Wells?',
    a: 'Yes. We provide free, no-obligation estimates for all residential and commercial roofing projects in Mineral Wells and throughout Palo Pinto County. Call 817-573-0890 or use our online contact form.',
  },
  {
    q: 'What roofing material is best for Mineral Wells homes?',
    a: 'Class 4 impact-resistant architectural shingles are a smart choice for Mineral Wells given the area\'s hail frequency. Metal roofing is gaining popularity for its durability and low maintenance. We\'ll make a specific recommendation after seeing your roof and discussing your goals.',
  },
  {
    q: 'Can you assist with a hail or storm damage insurance claim in Mineral Wells?',
    a: 'Yes. We document all visible damage with photographs and a written report, and we\'re available to walk through the damage with your adjuster. Our goal is to make sure your claim reflects the full scope of damage — nothing gets missed.',
  },
  {
    q: 'How soon can you respond to an emergency in Mineral Wells?',
    a: 'Heritage Roofing provides emergency response seven days a week. After a storm event in Mineral Wells, contact us at 817-573-0890 and we\'ll get a crew out as quickly as possible to assess and secure your roof.',
  },
  {
    q: 'What other areas near Mineral Wells do you serve?',
    a: 'In addition to Mineral Wells, we serve Granbury, Glen Rose, Weatherford, and the surrounding Hood and Parker County area (817-573-0890), as well as Stephenville and Erath County (254-968-7663) and the Brownwood area (325-510-5768).',
  },
]

export default function MineralWellsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section aria-labelledby="page-heading" style={{ backgroundColor: '#0f1840' }} className="py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">Palo Pinto County &mdash; Since 1986</p>
            <h1 id="page-heading" className="font-display text-4xl md:text-5xl font-bold text-white text-balance leading-tight mb-4">
              Roofing Services in Mineral Wells, TX
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Heritage Roofing, Inc. has served Mineral Wells and Palo Pinto County since 1986. We provide residential and commercial roofing, storm damage repairs, and emergency services for homes and businesses in the Mineral Wells area.
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

        <section aria-label="About Heritage Roofing in Mineral Wells" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0f1840' }}>Your Mineral Wells Roofing Contractor</h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>Mineral Wells is a community with deep roots — historic architecture near downtown, expanding residential areas, and significant commercial activity along the major corridors. Heritage Roofing has been serving this area since 1986, providing roofing for a wide variety of property types throughout Palo Pinto County.</p>
              <p>The weather in the Mineral Wells area mirrors much of North-Central Texas: intense spring storm seasons, summer UV exposure that ages roofing materials faster than national estimates suggest, and periodic ice storms in winter. Understanding local weather patterns is part of how we specify the right materials and installation methods for this region.</p>
              <p>Heritage Roofing is a licensed, insured, family-owned contractor. Our crews are local and our work is backed by written warranties. We don\'t use storm-chaser crews, and we don\'t walk away after the job is done.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="services-heading" className="py-14 px-4" style={{ backgroundColor: '#f5f3ef' }}>
          <div className="max-w-4xl mx-auto">
            <h2 id="services-heading" className="font-display text-3xl font-bold mb-2" style={{ color: '#0f1840' }}>Services We Offer in Mineral Wells, TX</h2>
            <p className="text-gray-600 mb-10">Every service below is available to Mineral Wells homeowners and businesses throughout Palo Pinto County.</p>
            <div className="space-y-10">
              {services.map((service) => (
                <article key={service.href} className="bg-white rounded-xl p-7 border border-[#e2ddd6]">
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#4054b2' }}>{service.title} in Mineral Wells, TX</h3>
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
            <h2 className="font-display text-3xl font-bold text-white mb-3 text-balance">Ready to Get Started in Mineral Wells?</h2>
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
            <h2 id="location-heading" className="font-display text-2xl font-bold mb-2" style={{ color: '#0f1840' }}>Serving Mineral Wells, TX</h2>
            <p className="text-gray-600 mb-8">Our crews serve Mineral Wells and Palo Pinto County from our Central Texas offices.</p>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm">
                <iframe
                  title="Heritage Roofing, Inc. — Serving Mineral Wells, TX"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13291.0!2d-98.1115!3d32.8084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMineral%20Wells%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
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
                  <p className="text-sm text-gray-700 leading-relaxed">Mineral Wells, Granbury, Glen Rose, Weatherford, and surrounding Palo Pinto and Hood counties</p>
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
            <h2 id="faq-heading" className="font-display text-3xl font-bold mb-2" style={{ color: '#0f1840' }}>Frequently Asked Questions — Mineral Wells, TX</h2>
            <p className="text-gray-600 mb-10">Common questions from Mineral Wells homeowners and businesses about our roofing services.</p>
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
