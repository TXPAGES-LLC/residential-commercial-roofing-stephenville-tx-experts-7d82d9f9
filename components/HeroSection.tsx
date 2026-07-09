'use client'

import Link from 'next/link'
import { trackCallClick, trackCtaClick } from '@/lib/gtag'

export default function HeroSection() {
  return (
    <>
    {/* Preload the LCP image scoped to this component (homepage hero) */}
    <link rel="preload" as="image" href="/12.jpg" fetchPriority="high" />
    <section
      style={{ backgroundColor: '#0f1840' }}
      className="relative text-white min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        {/* LCP image: no decoding="async" — sync decode keeps LCP fast */}
        <img
          src="/12.jpg"
          alt="Stone home with new architectural shingle roof installed by Heritage Roofing in Stephenville TX"
          className="w-full h-full object-cover opacity-40"
          fetchPriority="high"
          width={1440}
          height={700}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1840]/90 to-[#0f1840]/70" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
            Trusted Roofing Contractors in Stephenville, TX
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed mb-8 text-pretty">
            Residential and commercial roofing repair, replacement, and maintenance across Central Texas. Storm damage restoration, roof inspections, and emergency repairs. Serving Stephenville, Granbury, Brownwood, and surrounding areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
            <a
              href="tel:2549687663"
              onClick={() => trackCallClick('254-968-7663', 'hero')}
              className="inline-flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] active:bg-[#880000] text-white text-base font-bold px-6 py-4 rounded shadow-lg transition-colors w-full sm:w-auto"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
              </svg>
              Call 254-968-7663
            </a>
            <Link
              href="/contact"
              onClick={() => trackCtaClick('Get Free Estimate', 'hero', '/contact')}
              className="inline-flex items-center justify-center gap-2 bg-[#4054b2] hover:bg-[#2d3d8f] active:bg-[#1e2e6e] text-white text-base font-bold px-6 py-4 rounded shadow-lg transition-colors w-full sm:w-auto"
            >
              Get Free Estimate
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-yellow-300 font-medium">
            {[
              'Licensed & Insured',
              'Free Estimates',
              'Workmanship Warranty',
              'Emergency Repair — 7 Days',
              'Serving TX Since 1986',
            ].map((chip) => (
              <div key={chip} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
