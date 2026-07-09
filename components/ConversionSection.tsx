'use client'

import Link from 'next/link'
import { trackCallClick, trackCtaClick, trackOutboundClick } from '@/lib/gtag'

export default function ConversionSection() {
  return (
    <section style={{ backgroundColor: '#0f1840' }} className="py-16 lg:py-24 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl lg:text-5xl font-bold mb-6 text-balance">
          Ready to Protect Your Property?
        </h2>
        <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto text-pretty">
          Heritage Roofing, Inc. has been serving Central Texas since 1986 — one office, one team, and a commitment to quality across the Stephenville, Granbury, and Brownwood areas. Get your free inspection and estimate today — no obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="tel:2549687663"
            onClick={() => trackCallClick('254-968-7663', 'conversion_section_primary')}
            className="inline-flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] active:bg-[#880000] text-white font-bold px-8 py-4 rounded text-lg transition-colors shadow-lg w-full sm:w-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
            </svg>
            Call 254-968-7663
          </a>
          <Link
            href="/contact"
            onClick={() => trackCtaClick('Get Free Estimate', 'conversion_section', '/contact')}
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0f1840] font-bold px-8 py-4 rounded text-lg transition-colors w-full sm:w-auto"
          >
            Get Free Estimate
          </Link>
        </div>

        <div className="border-t border-white/20 pt-10">
          <p className="text-sm text-blue-200 mb-2">One office. One team. Serving Central Texas since 1986.</p>
          <a
            href="https://www.google.com/maps?cid=12288339561500500951"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOutboundClick('https://www.google.com/maps?cid=12288339561500500951', 'Google Maps — Stephenville Office', 'conversion_section')}
            className="not-italic text-sm text-blue-300 hover:text-yellow-300 transition-colors block mb-3"
          >
            <address className="not-italic">1590 N Bates Street, Stephenville, TX 76401</address>
          </a>
          <a href="tel:2549687663" onClick={() => trackCallClick('254-968-7663', 'conversion_section_footer')} className="text-yellow-400 hover:text-yellow-300 text-lg font-bold transition-colors">
            254-968-7663
          </a>
          <p className="text-xs text-blue-300 mt-4">Emergency Roof Repair Available 7 Days a Week</p>
        </div>
      </div>
    </section>
  )
}
