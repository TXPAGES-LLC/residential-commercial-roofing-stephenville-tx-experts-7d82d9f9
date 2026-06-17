import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  benefits: string[]
  details: { title: string; description: string }[]
  ctaText?: string
  ctaPhone?: string
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  details,
  ctaText = 'Call for Free Estimate',
  ctaPhone = '254-968-7663',
}: ServicePageProps) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section style={{ backgroundColor: '#0f1840' }} className="relative text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt={`${title} service in Stephenville TX`}
              className="w-full h-full object-cover opacity-30"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1840]/95 to-[#0f1840]/80" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
            <nav className="mb-6 text-sm text-blue-200" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{title}</span>
            </nav>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-4 text-balance">
              {title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed mb-8 text-pretty">
              {subtitle}
            </p>
            <a
              href={`tel:${ctaPhone.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold px-8 py-3 rounded shadow-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
              </svg>
              {ctaText}
            </a>
          </div>
        </section>

        {/* Description & Benefits */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-display text-3xl font-bold mb-6">About {title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{description}</p>

                <h3 className="font-display text-2xl font-semibold mb-4" style={{ color: '#4054b2' }}>Why Choose Heritage Roofing?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-[#cc0000]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar CTA */}
              <div>
                <div className="sticky top-4 bg-[#f8f7f5] border border-[#e2ddd6] rounded-lg p-6">
                  <h3 className="font-display text-xl font-semibold mb-4">Get Your Free Estimate</h3>
                  <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                    Call us today for a free inspection and detailed quote. Serving Stephenville, Granbury, Brownwood, and surrounding areas.
                  </p>
                  <a
                    href="tel:2549687663"
                    className="flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold py-3 px-5 rounded transition-colors mb-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
                    </svg>
                    254-968-7663
                  </a>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>Granbury: <a href="tel:8175730890" className="text-[#4054b2] hover:underline">817-573-0890</a></p>
                    <p>Brownwood: <a href="tel:3255105768" className="text-[#4054b2] hover:underline">325-510-5768</a></p>
                  </div>
                  <hr className="my-6 border-[#e2ddd6]" />
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-3">Emergency Service</p>
                  <p className="text-sm text-gray-700">Available 7 days a week for urgent repairs and storm damage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details/What We Do */}
        <section style={{ backgroundColor: '#f0efeb' }} className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {details.map((detail, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border border-[#e2ddd6]">
                  <h3 className="font-display text-xl font-semibold mb-3" style={{ color: '#4054b2' }}>
                    {detail.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section style={{ backgroundColor: '#0f1840' }} className="py-16 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8 text-pretty">
              Contact Heritage Roofing today for a free inspection and estimate. Over 30 years serving Central Texas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:2549687663"
                className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold px-8 py-4 rounded text-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
                </svg>
                Call 254-968-7663
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0f1840] font-bold px-8 py-4 rounded text-lg transition-colors"
              >
                Request Estimate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCallButton />
    </>
  )
}
