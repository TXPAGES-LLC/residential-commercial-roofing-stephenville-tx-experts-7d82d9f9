import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services in Glen Rose, TX | Heritage Roofing, Inc.',
  description:
    'Roofing contractor serving Glen Rose, TX and Somervell County since 1986. Residential roofing, roof repair, storm damage, and emergency services. Call Heritage Roofing at 817-573-0890.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations/glen-rose' },
  openGraph: {
    title: 'Roofing Services in Glen Rose, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Glen Rose and Somervell County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
    url: 'https://heritageroofingtexas.com/locations/glen-rose',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. — Roofing Services in Glen Rose, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in Glen Rose, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving Glen Rose and Somervell County. Residential, commercial, storm damage, and emergency roof repairs.',
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
      'Glen Rose homes — from properties near Dinosaur Valley State Park to subdivisions along the Paluxy River corridor — need roofing that stands up to Somervell County\'s climate. Heritage Roofing installs architectural shingles, standing seam metal, and tile, with recommendations tailored to your property and long-term goals.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description:
      'Glen Rose supports a growing commercial base including tourism, healthcare, and retail. Heritage Roofing provides TPO, metal panel, and built-up flat roofing for businesses throughout Somervell County. Commercial projects are managed for minimal disruption and backed by written warranties.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'Small problems on Glen Rose roofs — a lifted shingle, a failed boot seal, corroded flashing — compound quickly in this climate. Our crews diagnose the actual source of a problem and fix it properly, rather than applying a temporary patch that fails in the next storm.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'When a Glen Rose roof is past cost-effective repair, Heritage Roofing handles the complete replacement: material selection, full tear-off, decking inspection, and installation. Most residential jobs are completed in one to two days with full cleanup included.',
  },
  {
    title: 'Storm & Hail Damage',
    href: '/services/storm-hail-damage',
    description:
      'Glen Rose and Somervell County are not immune to the hail and wind events that move through North-Central Texas each spring. Heritage Roofing provides detailed post-storm inspections with photographs and written reports for insurance purposes, and works alongside your adjuster.',
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    description:
      'Glen Rose\'s real estate market includes older homes and vacation properties that benefit from a professional inspection before purchase. Heritage Roofing provides written reports with photos for pre-purchase, post-storm, and annual maintenance inspections.',
  },
  {
    title: 'Skylights & Ventilation',
    href: '/services/skylights-ventilation',
    description:
      'Proper roof ventilation is a practical necessity in Somervell County summers. Ridge and soffit venting systems reduce attic heat buildup and extend shingle life. We also install quality skylights for homeowners wanting natural light in living spaces or interior areas of commercial buildings.',
  },
  {
    title: 'Emergency Repairs',
    href: '/services/emergency-repairs',
    description:
      'Storm damage in Glen Rose can leave roofs exposed when rain is imminent. Heritage Roofing provides emergency response seven days a week, deploying crews quickly to secure damaged roofs and prevent additional water intrusion while permanent repairs are scheduled.',
  },
]

const faqs = [
  {
    q: 'Does Heritage Roofing serve Glen Rose, TX?',
    a: 'Yes. Glen Rose is within our Granbury-area service territory. Call 817-573-0890 to schedule a free estimate or inspection for your Glen Rose property.',
  },
  {
    q: 'Do you provide free estimates in Glen Rose?',
    a: 'Yes. Free, no-obligation estimates are available for residential and commercial properties in Glen Rose and Somervell County. Call 817-573-0890 or submit a request through our contact form.',
  },
  {
    q: 'What is the best roofing material for a Glen Rose home?',
    a: 'Class 4 impact-resistant architectural shingles are a strong default choice given hail exposure in Somervell County. Metal roofing is also popular for its longevity and low maintenance. We\'ll assess your specific roof and recommend the best fit for your home and budget.',
  },
  {
    q: 'Can you help with storm damage insurance claims in Glen Rose?',
    a: 'Yes. We inspect and document all storm damage with photographs and a written report, and we meet with insurance adjusters on-site when needed. Our documentation helps ensure your claim covers the full scope of damage.',
  },
  {
    q: 'How long does a full roof replacement take in Glen Rose?',
    a: 'Most single-family residential replacements are completed in one to two days. We handle complete tear-off, decking inspection, installation, and cleanup. We\'ll give you a timeline estimate before any work starts.',
  },
  {
    q: 'Do you serve other communities near Glen Rose?',
    a: 'Yes. In addition to Glen Rose, we serve Granbury, Weatherford, and surrounding Hood and Somervell County communities (817-573-0890), as well as Stephenville and Erath County (254-968-7663) and the Brownwood area (325-510-5768).',
  },
]

export default function GlenRosePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section aria-labelledby="page-heading" style={{ backgroundColor: '#0f1840' }} className="py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">Somervell County &mdash; Since 1986</p>
            <h1 id="page-heading" className="font-display text-4xl md:text-5xl font-bold text-white text-balance leading-tight mb-4">
              Roofing Services in Glen Rose, TX
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Heritage Roofing, Inc. has served Glen Rose and Somervell County since 1986. We provide residential and commercial roofing, storm damage repairs, and emergency services throughout the Glen Rose area.
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

        <section aria-label="About Heritage Roofing in Glen Rose" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0f1840' }}>Your Glen Rose Roofing Contractor</h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>Glen Rose is a community built around natural landscape — the Paluxy River, Dinosaur Valley, and the cedar and limestone terrain of Somervell County. Homes here range from historic properties in the original townsite to modern builds on larger rural lots. Heritage Roofing has worked across this mix of property types since 1986.</p>
              <p>The Somervell County climate brings hot summers, periodic spring hail, and wind events that can cause immediate and gradual roofing damage. We recommend and install products rated for the actual conditions in this area — impact resistance and UV stability are not optional features here, they\'re baseline requirements.</p>
              <p>Heritage Roofing is licensed, insured, and locally operated from our Central Texas offices. We work with your schedule, provide clear written estimates, and stand behind the work we do in Glen Rose long after installation day.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="services-heading" className="py-14 px-4" style={{ backgroundColor: '#f5f3ef' }}>
          <div className="max-w-4xl mx-auto">
            <h2 id="services-heading" className="font-display text-3xl font-bold mb-2" style={{ color: '#0f1840' }}>Services We Offer in Glen Rose, TX</h2>
            <p className="text-gray-600 mb-10">Every service below is available to Glen Rose homeowners and businesses throughout Somervell County.</p>
            <div className="space-y-10">
              {services.map((service) => (
                <article key={service.href} className="bg-white rounded-xl p-7 border border-[#e2ddd6]">
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#4054b2' }}>{service.title} in Glen Rose, TX</h3>
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
            <h2 className="font-display text-3xl font-bold text-white mb-3 text-balance">Ready to Get Started in Glen Rose?</h2>
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
            <h2 id="location-heading" className="font-display text-2xl font-bold mb-2" style={{ color: '#0f1840' }}>Serving Glen Rose, TX</h2>
            <p className="text-gray-600 mb-8">Our crews serve Glen Rose and Somervell County from our Central Texas offices.</p>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm">
                <iframe
                  title="Heritage Roofing, Inc. — Serving Glen Rose, TX"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13291.0!2d-97.7537!3d32.2326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGlen%20Rose%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
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
                  <p className="text-sm text-gray-700 leading-relaxed">Glen Rose, Granbury, Weatherford, and surrounding Somervell and Hood counties</p>
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
            <h2 id="faq-heading" className="font-display text-3xl font-bold mb-2" style={{ color: '#0f1840' }}>Frequently Asked Questions — Glen Rose, TX</h2>
            <p className="text-gray-600 mb-10">Common questions from Glen Rose homeowners and businesses about our roofing services.</p>
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
