import Link from 'next/link'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import MobileCallButton from './MobileCallButton'
import TrackedCallLink from './TrackedCallLink'
import type { ReactNode } from 'react'

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  pageUrl?: string
  heroImg: string
  heroImgAlt: string
  description: string
  benefits: string[]
  services: { title: string; description: string }[]
  relatedServices: { label: string; href: string }[]
  cta?: string
  children?: ReactNode
}

export default function ServicePageLayout({
  title,
  subtitle,
  pageUrl,
  heroImg,
  heroImgAlt,
  description,
  benefits,
  services,
  relatedServices,
  cta,
  children,
}: ServicePageLayoutProps) {
  const BASE = 'https://heritageroofingtexas.com'
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
      { '@type': 'ListItem', position: 3, name: subtitle, item: pageUrl ?? `${BASE}/services` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] flex items-center bg-[#1e2a6b]">
          <div className="absolute inset-0 z-0">
            {/* No decoding="async" — sync decode for above-fold LCP image */}
            <img
              src={heroImg}
              alt={heroImgAlt}
              className="w-full h-full object-cover opacity-30"
              loading="eager"
              width={1440}
              height={500}
            />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <nav className="flex items-center gap-2 text-white/60 font-sans text-xs mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">{title}</span>
            </nav>
            <p className="font-sans text-[#ff0000] font-semibold text-sm uppercase tracking-widest mb-3">{subtitle}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white font-bold text-balance mb-5 max-w-2xl">{title}</h1>
            <p className="font-sans text-white/80 text-lg max-w-2xl leading-relaxed mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <TrackedCallLink
                href="tel:2549687663"
                phoneNumber="254-968-7663"
                location="service_page_hero"
                className="inline-flex items-center justify-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white font-serif font-bold uppercase tracking-wide px-7 py-4 rounded transition-colors"
              >
                <PhoneIcon />
                Call 254-968-7663
              </TrackedCallLink>
              <Link
                href="/services/roof-inspections"
                className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white font-sans font-semibold px-7 py-4 rounded transition-colors"
              >
                Free Inspection
              </Link>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

              {/* Sidebar — renders first on mobile (order-first), after content on desktop */}
              <aside className="lg:col-span-1 order-first lg:order-last">
                {/* Quick call card */}
                <div className="bg-[#1e2a6b] rounded-xl p-5 sm:p-6 text-white mb-5 lg:sticky lg:top-24">
                  <h3 className="font-serif font-bold text-lg mb-2">{cta ?? 'Get a Free Estimate'}</h3>
                  <p className="font-sans text-white/70 text-sm mb-5">Call any of our three Central Texas offices. No forms, no runaround — just a real roofer who knows the area.</p>
                  <div className="flex flex-col gap-3 mb-5">
                    <TrackedCallLink href="tel:2549687663" phoneNumber="254-968-7663" location="service_page_sidebar" className="flex items-center gap-2 text-white hover:text-[#ff0000] transition-colors font-sans text-sm">
                      <PhoneIcon /> <strong>Stephenville:</strong> 254-968-7663
                    </TrackedCallLink>
                    <TrackedCallLink href="tel:8175730890" phoneNumber="817-573-0890" location="service_page_sidebar" className="flex items-center gap-2 text-white hover:text-[#ff0000] transition-colors font-sans text-sm">
                      <PhoneIcon /> <strong>Granbury:</strong> 817-573-0890
                    </TrackedCallLink>
                    <TrackedCallLink href="tel:3255105768" phoneNumber="325-510-5768" location="service_page_sidebar" className="flex items-center gap-2 text-white hover:text-[#ff0000] transition-colors font-sans text-sm">
                      <PhoneIcon /> <strong>Brownwood:</strong> 325-510-5768
                    </TrackedCallLink>
                  </div>
                  <TrackedCallLink
                    href="tel:2549687663"
                    phoneNumber="254-968-7663"
                    location="service_page_sidebar_cta"
                    className="flex items-center justify-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] active:bg-[#aa0000] text-white font-serif font-bold uppercase tracking-wide py-3 rounded transition-colors w-full text-sm"
                  >
                    <PhoneIcon /> Call Now
                  </TrackedCallLink>
                  <p className="font-sans text-white/40 text-xs text-center mt-3">Mon–Fri 8am–5pm · Emergency 7 days</p>
                </div>

                {/* Related services */}
                <div className="bg-[#f3f4f6] border border-gray-200 rounded-xl p-5">
                  <h3 className="font-serif font-bold text-[#1e2a6b] text-base mb-3">Related Services</h3>
                  <ul className="flex flex-col gap-2">
                    {relatedServices.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="flex items-center gap-2 font-sans text-sm text-[#4054b2] hover:text-[#2e3d8f] font-medium transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Main content area */}
              <div className="lg:col-span-2 order-last lg:order-first">
                {/* Benefits */}
                <div className="mb-10">
                  <h2 className="font-serif text-2xl font-bold text-[#1e2a6b] mb-5">Why Choose Heritage Roofing for {title}?</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 font-sans text-gray-700 text-sm">
                        <svg className="w-4 h-4 text-[#4054b2] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  {services.map((s) => (
                    <div key={s.title} className="bg-[#f3f4f6] border border-gray-200 rounded-lg p-5">
                      <h3 className="font-serif font-bold text-[#1e2a6b] text-base mb-2">{s.title}</h3>
                      <p className="font-sans text-gray-600 text-sm leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>

                {children}
              </div>

            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#4054b2] py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-white font-bold mb-4">
              Ready to Get Started? Call Heritage Roofing Today.
            </h2>
            <p className="font-sans text-white/80 mb-6">Serving Stephenville, Granbury, Brownwood, and all of Central Texas. Licensed, insured, and ready to help.</p>
            <TrackedCallLink
              href="tel:2549687663"
              phoneNumber="254-968-7663"
              location="service_page_bottom_cta"
              className="inline-flex items-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white font-serif font-bold uppercase tracking-wide px-8 py-4 rounded transition-colors text-base"
            >
              <PhoneIcon />
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

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
    </svg>
  )
}
