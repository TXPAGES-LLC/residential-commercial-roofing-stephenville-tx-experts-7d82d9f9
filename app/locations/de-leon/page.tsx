import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services in De Leon, TX | Heritage Roofing, Inc.',
  description:
    'Roofing contractor serving De Leon, TX and Comanche County since 1986. Residential roofing, roof repair, storm damage, and emergency services. Call Heritage Roofing at 325-510-5768.',
  alternates: { canonical: 'https://heritageroofingtexas.com/locations/de-leon' },
  openGraph: {
    title: 'Roofing Services in De Leon, TX | Heritage Roofing, Inc.',
    description:
      'Local roofing contractor serving De Leon and Comanche County since 1986. Residential, commercial, storm damage, and emergency roof repairs.',
    url: 'https://heritageroofingtexas.com/locations/de-leon',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. — Roofing Services in De Leon, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in De Leon, TX | Heritage Roofing, Inc.',
    description: 'Local roofing contractor serving De Leon and Comanche County. Residential, commercial, storm damage, and emergency roof repairs.',
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
      'De Leon homes range from older farmhouses on working ranches to newer residential builds closer to town. Heritage Roofing installs architectural shingles, standing seam metal, and tile roofing on De Leon properties — selecting materials that hold up to West-Central Texas heat, wind, and hail.',
  },
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description:
      'Agricultural buildings, warehouses, and small businesses in the De Leon area need roofing systems that perform under demanding conditions. Heritage Roofing installs metal panel, TPO, and built-up flat roofing for commercial clients, with minimal disruption to operations and full written warranties.',
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description:
      'Wind events common to Comanche County often lift or crack shingles at ridges and eaves before the rest of the roof shows its age. Our repair crews address isolated damage fast — replacing shingles, resealing flashing, and fixing pipe boots — so a minor problem doesn\'t turn into a structural one.',
  },
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description:
      'When your De Leon home\'s roof has reached the end of its service life, Heritage Roofing manages the full replacement from tear-off to cleanup. We help you choose the right material for your property type, present clear pricing, and complete most residential jobs in one to two days.',
  },
  {
    title: 'Storm & Hail Damage',
    href: '/services/storm-hail-damage',
    description:
      'Comanche County sees hail events that often go unnoticed until insurance claims are filed years later — by then, secondary damage has compounded the problem. Heritage Roofing inspects De Leon roofs after any storm event, provides detailed documentation, and works directly with your insurance adjuster.',
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    description:
      'Pre-purchase inspections, post-storm assessments, and annual checkups for De Leon properties. We provide a written report with photographs — not a verbal summary — so you have documentation for insurance purposes or your own records.',
  },
  {
    title: 'Skylights & Ventilation',
    href: '/services/skylights-ventilation',
    description:
      'Adequate attic ventilation reduces heat load and extends the life of your roofing system — critical in the De Leon area where summer temperatures push attic temps well above 140°F. We install ridge and soffit venting systems as well as quality skylights for natural light without leak risk.',
  },
  {
    title: 'Emergency Repairs',
    href: '/services/emergency-repairs',
    description:
      'When severe weather creates an immediate opening in your roof, Heritage Roofing responds seven days a week. De Leon is within our regular service area and our crews can be on-site quickly after a storm event to secure your property and prevent further water damage.',
  },
]

const faqs = [
  {
    q: 'Does Heritage Roofing serve De Leon, TX?',
    a: 'Yes. De Leon is within our Brownwood-area service territory. Call our local number at 325-510-5768 to schedule an estimate or inspection for your De Leon property.',
  },
  {
    q: 'Do you offer free estimates in De Leon?',
    a: 'Yes. Free, no-obligation estimates are available for residential and commercial roofing work in De Leon and throughout Comanche County. Call 325-510-5768 or use our online contact form.',
  },
  {
    q: 'What type of roofing is most common in De Leon?',
    a: 'Architectural asphalt shingles are the most common residential roofing material in De Leon. Metal roofing — standing seam and corrugated panel — is also very common on both homes and agricultural outbuildings in Comanche County. We install and repair both.',
  },
  {
    q: 'How do you handle insurance claims for storm damage in De Leon?',
    a: 'We conduct a thorough inspection, photograph all damage, and produce a written report you can submit to your insurer. We\'re also available to meet with your adjuster on-site to make sure all damage is properly documented in the claim.',
  },
  {
    q: 'How long does a roof replacement take?',
    a: 'Most single-family residential roofs in De Leon are completed in one to two days. We handle full tear-off, decking inspection, installation, and cleanup. Larger or more complex roofs may take an additional day.',
  },
  {
    q: 'What other areas near De Leon does Heritage Roofing serve?',
    a: 'In addition to De Leon, we serve Comanche, Goldthwaite, Brownwood, Coleman, and surrounding Comanche and Brown County communities (325-510-5768). We also serve the Stephenville area (254-968-7663) and Granbury area (817-573-0890).',
  },
]

export default function DeLeonPage() {
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
              Comanche County &mdash; Since 1986
            </p>
            <h1
              id="page-heading"
              className="font-display text-4xl md:text-5xl font-bold text-white text-balance leading-tight mb-4"
            >
              Roofing Services in De Leon, TX
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Heritage Roofing, Inc. has served De Leon and Comanche County since 1986. We provide residential and commercial roofing, storm damage repairs, and emergency services throughout the De Leon area.
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
        <section aria-label="About Heritage Roofing in De Leon" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: '#0f1840' }}>
              Your De Leon Roofing Contractor
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                De Leon sits in the heart of Comanche County, where ranching, farming, and small-town community life define the landscape. Heritage Roofing has worked in this area since 1986, handling everything from repairs on aging farmhouses to full commercial roof replacements on agricultural buildings and downtown storefronts.
              </p>
              <p>
                Comanche County weather presents real challenges for roofing systems. Intense summer heat, spring hail events, and occasional high-wind storms require materials rated for impact and UV resistance. We specify and install roofing products that are appropriate for this climate — not just whatever is cheapest to source.
              </p>
              <p>
                Heritage Roofing is licensed, insured, and locally operated. Our crews come from our Central Texas offices, and we stand behind our work long after installation day.
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
              Services We Offer in De Leon, TX
            </h2>
            <p className="text-gray-600 mb-10">
              Every service below is available to De Leon homeowners and businesses throughout Comanche County.
            </p>

            <div className="space-y-10">
              {services.map((service) => (
                <article
                  key={service.href}
                  className="bg-white rounded-xl p-7 border border-[#e2ddd6]"
                >
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#4054b2' }}>
                    {service.title} in De Leon, TX
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
        <section aria-label="Call to action" style={{ backgroundColor: '#cc0000' }} className="py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-3 text-balance">
              Ready to Get Started in De Leon?
            </h2>
            <p className="text-red-100 mb-7 text-lg">
              Call our De Leon area number or submit a request online. Free estimates, no pressure.
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
            <h2 id="location-heading" className="font-display text-2xl font-bold mb-2" style={{ color: '#0f1840' }}>
              Serving De Leon, TX
            </h2>
            <p className="text-gray-600 mb-8">Our crews serve De Leon and all of Comanche County from our Central Texas offices.</p>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm">
                <iframe
                  title="Heritage Roofing, Inc. — Serving De Leon, TX"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13291.0!2d-98.5310!3d32.1098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDe%20Leon%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
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
                  <p className="text-sm text-gray-700 leading-relaxed">De Leon, Comanche, Goldthwaite, Brownwood, Coleman, Bangs, and surrounding Comanche and Brown counties</p>
                </div>
                <a href={`https://www.google.com/maps?cid=${GBP_CID}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4054b2] hover:text-[#0f1840] transition-colors">
                  View on Google Maps
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="py-14 px-4" style={{ backgroundColor: '#f5f3ef' }}>
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="font-display text-3xl font-bold mb-2" style={{ color: '#0f1840' }}>
              Frequently Asked Questions — De Leon, TX
            </h2>
            <p className="text-gray-600 mb-10">Common questions from De Leon homeowners and businesses about our roofing services.</p>
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

        {/* Other areas */}
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
