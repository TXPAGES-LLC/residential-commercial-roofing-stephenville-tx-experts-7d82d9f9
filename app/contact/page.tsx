import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'
import ContactCallButtons from '@/components/ContactCallButtons'
import TrackedCallLink from '@/components/TrackedCallLink'
import TrackedOutboundLink from '@/components/TrackedOutboundLink'

export const metadata: Metadata = {
  title: 'Contact Heritage Roofing, Inc. | Stephenville TX Roofing Contractor',
  description:
    'Contact Heritage Roofing, Inc. in Stephenville, TX. Serving Stephenville, Granbury, and Brownwood areas since 1986. Call 254-968-7663 for a free roof estimate.',
  alternates: { canonical: 'https://heritageroofingtexas.com/contact' },
  openGraph: {
    title: 'Contact Heritage Roofing, Inc. | Stephenville TX',
    description: 'Call or visit Heritage Roofing, Inc. at 1590 N Bates Street, Stephenville TX 76401. Free estimates — residential and commercial roofing since 1986.',
    url: 'https://heritageroofingtexas.com/contact',
    type: 'website',
    images: [{ url: 'https://heritageroofingtexas.com/og-image.jpg', width: 1200, height: 630, alt: 'Heritage Roofing, Inc. — Contact us in Stephenville TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Heritage Roofing, Inc. | Stephenville TX',
    description: 'Call or visit Heritage Roofing, Inc. in Stephenville TX. Free estimates — roofing since 1986.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

const GBP_URL = 'https://www.google.com/maps?cid=12288339561500500951'

const serviceAreas = [
  {
    label: 'Stephenville Area',
    cities: 'Stephenville, Dublin, Hico, Hamilton',
    phone: '254-968-7663',
    href: 'tel:2549687663',
  },
  {
    label: 'Granbury Area',
    cities: 'Granbury, Glen Rose, Weatherford',
    phone: '817-573-0890',
    href: 'tel:8175730890',
  },
  {
    label: 'Brownwood Area',
    cities: 'Brownwood & surrounding areas',
    phone: '325-510-5768',
    href: 'tel:3255105768',
  },
]

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
      {/* Hero */}
      <section style={{ backgroundColor: '#0f1840' }} className="py-12 sm:py-16 lg:py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-yellow-300 text-sm font-semibold uppercase tracking-widest mb-3">Contact Us</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Get a Free Roof Inspection &amp; Estimate
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto text-pretty">
            Heritage Roofing, Inc. has served Central Texas since 1986. One office, one team — call the number for your area or visit us in Stephenville.
          </p>
        </div>
      </section>

      {/* Contact details + map */}
      <section style={{ backgroundColor: '#f0efeb' }} className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Left: office info + service area phones */}
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8">
                Our Office
              </h2>

              {/* Physical address */}
              <div className="bg-white rounded-xl border border-[#e2ddd6] p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#eef0fa' }}>
                    <svg className="w-5 h-5 text-[#4054b2]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Heritage Roofing, Inc.</p>
                    <a
                      href={GBP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-700 hover:text-[#4054b2] transition-colors leading-relaxed"
                    >
                      <address className="not-italic">
                        1590 N Bates Street<br />
                        Stephenville, TX 76401
                      </address>
                    </a>
                    <a
                      href={GBP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#4054b2] hover:underline mt-2 font-medium"
                    >
                      View on Google Maps
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl border border-[#e2ddd6] p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#eef0fa' }}>
                    <svg className="w-5 h-5 text-[#4054b2]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Hours</p>
                    <p className="text-sm text-gray-700">Monday – Friday: 8:00 am – 5:00 pm</p>
                    <p className="text-sm text-[#cc0000] font-medium mt-1">Emergency Repairs: 7 Days a Week</p>
                  </div>
                </div>
              </div>

              {/* Service area phones */}
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6">
                Call Your Area
              </h2>
              <ContactCallButtons areas={serviceAreas} />
            </div>

            {/* Right: Google Maps embed via GBP CID */}
            <div className="lg:sticky lg:top-24 mt-2 lg:mt-0">
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6">Find Us</h2>
              <div className="rounded-xl overflow-hidden border border-[#e2ddd6] shadow-sm aspect-[4/3] w-full">
                <iframe
                  title="Heritage Roofing, Inc. — 1590 N Bates Street, Stephenville TX"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.4587!2d-98.2023!3d32.2207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ef9e8f2c2c0e1%3A0xaab0e7d95fcb1dd7!2sHeritage%20Roofing%2C%20Inc.!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={GBP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#4054b2] hover:underline mt-3 font-medium"
              >
                Open in Google Maps
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* GBP review CTA */}
              <div className="mt-6 bg-white rounded-xl border border-[#e2ddd6] p-6">
                <p className="font-semibold text-gray-900 mb-1">Happy with our work?</p>
                <p className="text-sm text-gray-600 mb-4">Leave us a review on Google — it helps homeowners in your area find a roofer they can trust.</p>
                <TrackedOutboundLink
                  href={`${GBP_URL}&action=write_review`}
                  label="Leave a Google Review"
                  location="contact_page"
                  className="inline-flex items-center gap-2 border-2 border-[#4054b2] text-[#4054b2] hover:bg-[#4054b2] hover:text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors"
                >
                  Leave a Google Review
                </TrackedOutboundLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Business Profiles */}
      <section className="py-16 bg-white border-t border-[#e2ddd6]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#4054b2] mb-2">Transparency</p>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#0f1840]">Find Us Online</h2>
            <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
              Heritage Roofing, Inc. maintains verified profiles on trusted platforms. These are the only official listings for our business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Google Maps / GBP */}
            <a
              href="https://maps.google.com/maps?cid=12288339561500500951"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 bg-[#f0efeb] hover:bg-[#eef0fa] border border-[#e2ddd6] hover:border-[#4054b2] rounded-xl p-5 text-center transition-all"
            >
              <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path fill="#4285F4" d="M24 4C15.163 4 8 11.163 8 20c0 12 16 28 16 28s16-16 16-28C40 11.163 32.837 4 24 4z"/>
                <circle cx="24" cy="20" r="6" fill="white"/>
              </svg>
              <div>
                <p className="font-bold text-sm text-[#0f1840] group-hover:text-[#4054b2] transition-colors">Google Maps</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-tight">Verified profile</p>
              </div>
              <svg className="w-3 h-3 text-gray-400 group-hover:text-[#4054b2] transition-colors mt-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Bing Maps */}
            <a
              href="https://www.bing.com/maps?ss=ypid.YN838x14363180"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 bg-[#f0efeb] hover:bg-[#eef0fa] border border-[#e2ddd6] hover:border-[#4054b2] rounded-xl p-5 text-center transition-all"
            >
              <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <rect width="48" height="48" rx="8" fill="#008373"/>
                <text x="8" y="34" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="white">Bing</text>
              </svg>
              <div>
                <p className="font-bold text-sm text-[#0f1840] group-hover:text-[#4054b2] transition-colors">Bing Maps</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-tight">Verified listing</p>
              </div>
              <svg className="w-3 h-3 text-gray-400 group-hover:text-[#4054b2] transition-colors mt-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Superpages */}
            <a
              href="https://www.superpages.com/stephenville-tx/bpp/heritage-roofing-inc-8559766"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 bg-[#f0efeb] hover:bg-[#eef0fa] border border-[#e2ddd6] hover:border-[#4054b2] rounded-xl p-5 text-center transition-all"
            >
              <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <rect width="48" height="48" rx="8" fill="#e8780a"/>
                <text x="6" y="34" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="white">SP</text>
              </svg>
              <div>
                <p className="font-bold text-sm text-[#0f1840] group-hover:text-[#4054b2] transition-colors">Superpages</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-tight">Business profile</p>
              </div>
              <svg className="w-3 h-3 text-gray-400 group-hover:text-[#4054b2] transition-colors mt-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Yellow Pages */}
            <a
              href="https://www.yellowpages.com/stephenville-tx/mip/heritage-roofing-inc-8559766"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 bg-[#f0efeb] hover:bg-[#eef0fa] border border-[#e2ddd6] hover:border-[#4054b2] rounded-xl p-5 text-center transition-all"
            >
              <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <rect width="48" height="48" rx="8" fill="#ffd500"/>
                <text x="10" y="34" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="#333">YP</text>
              </svg>
              <div>
                <p className="font-bold text-sm text-[#0f1840] group-hover:text-[#4054b2] transition-colors">Yellow Pages</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-tight">Business profile</p>
              </div>
              <svg className="w-3 h-3 text-gray-400 group-hover:text-[#4054b2] transition-colors mt-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Judy's Book */}
            <a
              href="https://www.judysbook.com/Heritage-Roofing-Inc-Roofing-Contractor-stephenville-r35006441.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 bg-[#f0efeb] hover:bg-[#eef0fa] border border-[#e2ddd6] hover:border-[#4054b2] rounded-xl p-5 text-center transition-all"
            >
              <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <rect width="48" height="48" rx="8" fill="#b91c1c"/>
                <text x="10" y="34" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="white">JB</text>
              </svg>
              <div>
                <p className="font-bold text-sm text-[#0f1840] group-hover:text-[#4054b2] transition-colors">{"Judy's Book"}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-tight">Community reviews</p>
              </div>
              <svg className="w-3 h-3 text-gray-400 group-hover:text-[#4054b2] transition-colors mt-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section style={{ backgroundColor: '#f5f3ef' }} className="py-10 px-4 border-t border-[#e2ddd6]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4054b2] mb-4">Explore Our Services</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Residential Roofing', href: '/services/residential-roofing' },
              { label: 'Commercial Roofing', href: '/services/commercial-roofing' },
              { label: 'Roof Repair', href: '/services/roof-repair' },
              { label: 'Roof Replacement', href: '/services/roof-replacement' },
              { label: 'Storm & Hail Damage', href: '/services/storm-hail-damage' },
              { label: 'Roof Inspections', href: '/services/roof-inspections' },
              { label: 'Emergency Roof Repair', href: '/services/emergency-repairs' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-sm font-medium text-[#0f1840] border border-[#e2ddd6] bg-white hover:border-[#4054b2] hover:text-[#4054b2] px-4 py-2 rounded-full transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: '#0f1840' }} className="py-12 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-display text-2xl font-bold mb-2">Need a Roofer Fast?</p>
          <p className="text-blue-200 text-sm mb-6">Emergency repairs available 7 days a week. Call your area&apos;s number above, or reach us anytime at our main line.</p>
          <TrackedCallLink
            href="tel:2549687663"
            phoneNumber="254-968-7663"
            location="contact_page_cta"
            className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold px-8 py-4 rounded text-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
            </svg>
            Call 254-968-7663
          </TrackedCallLink>
        </div>
      </section>
    </main>
    <SiteFooter />
    <MobileCallButton />
    </>
  )
}
