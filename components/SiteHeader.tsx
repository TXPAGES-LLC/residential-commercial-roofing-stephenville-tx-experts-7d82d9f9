'use client'

import { useState } from 'react'
import Link from 'next/link'

const PHONE_MAIN = '254-968-7663'

const services = [
  { label: 'Residential Roofing', href: '/services/residential-roofing' },
  { label: 'Commercial Roofing', href: '/services/commercial-roofing' },
  { label: 'Roof Repair', href: '/services/roof-repair' },
  { label: 'Roof Replacement', href: '/services/roof-replacement' },
  { label: 'Storm & Hail Damage', href: '/services/storm-hail-damage' },
  { label: 'Roof Inspections', href: '/services/roof-inspections' },
  { label: 'Skylights & Ventilation', href: '/services/skylights-ventilation' },
  { label: 'Emergency Repairs', href: '/services/emergency-repairs' },
]

const areaGroups = [
  {
    label: 'Stephenville Area',
    phone: '254-968-7663',
    cities: [
      { label: 'Stephenville', href: '/locations/stephenville' },
      { label: 'Dublin', href: '/locations/dublin' },
      { label: 'Hico', href: '/locations/hico' },
      { label: 'Eastland', href: '/locations/eastland' },
      { label: 'De Leon', href: '/locations/de-leon' },
    ],
  },
  {
    label: 'Granbury Area',
    phone: '817-573-0890',
    cities: [
      { label: 'Granbury', href: '/locations/granbury' },
      { label: 'Glen Rose', href: '/locations/glen-rose' },
      { label: 'Weatherford', href: '/locations/weatherford' },
      { label: 'Mineral Wells', href: '/locations/mineral-wells' },
    ],
  },
  {
    label: 'Brownwood Area',
    phone: '325-510-5768',
    cities: [
      { label: 'Brownwood', href: '/locations/brownwood' },
      { label: 'Hamilton', href: '/locations/hamilton' },
      { label: 'Goldthwaite', href: '/locations/goldthwaite' },
      { label: 'Comanche', href: '/locations/comanche' },
      { label: 'Santa Anna', href: '/locations/santa-anna' },
      { label: 'Coleman', href: '/locations/coleman' },
      { label: 'Bangs', href: '/locations/bangs' },
    ],
  },
]

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  return (
    <header className="w-full" role="banner">
      {/* Top bar */}
      <div style={{ backgroundColor: '#0f1840' }} className="py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <p className="text-white text-xs hidden sm:block">
            <span className="font-semibold">Mon–Fri: 8am–5pm</span>
            <span className="mx-2 text-blue-300">|</span>
            Emergency Repairs Available 7 Days a Week
          </p>
          {/* On mobile show only the phone number prominently */}
          <p className="text-white text-xs sm:hidden font-semibold">Emergency service available 7 days</p>
          <div className="flex items-center gap-3 text-xs text-white">
            <a href={`tel:${PHONE_MAIN.replace(/-/g, '')}`} className="hover:text-yellow-300 transition-colors font-semibold">
              <span className="hidden sm:inline">Stephenville: </span>{PHONE_MAIN}
            </a>
            <span className="text-blue-300 hidden md:inline">|</span>
            <span className="text-white/70 hidden md:inline">Serving Stephenville, Granbury &amp; Brownwood areas</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        style={{ backgroundColor: '#4054b2' }}
        className="relative z-50"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
          {/* Logo — explicit width/height prevents CLS; no negative-margin tricks */}
          <Link href="/" className="flex items-center flex-shrink-0 min-h-0" aria-label="Heritage Roofing, Inc. — Stephenville TX Roofing Contractor">
            <img
              src="/2026-logo.png"
              alt="Heritage Roofing, Inc. Since 1986 — Stephenville TX roofing contractor, 254-968-7663"
              width={180}
              height={60}
              className="h-14 w-auto object-contain"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className="text-white text-sm font-medium px-3 py-2 rounded hover:bg-white/10 transition-colors">Home</Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button
                className="text-white text-sm font-medium px-3 py-2 rounded hover:bg-white/10 transition-colors flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <svg className="w-3 h-3" fill="none" viewBox="0 0 10 6" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 w-56 bg-white rounded shadow-lg py-1 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-[#4054b2] transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Areas We Serve dropdown */}
            <div className="relative group">
              <button
                className="text-white text-sm font-medium px-3 py-2 rounded hover:bg-white/10 transition-colors flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={areasOpen}
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                Areas We Serve
                <svg className="w-3 h-3" fill="none" viewBox="0 0 10 6" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {areasOpen && (
                <div
                  className="absolute top-full left-0 bg-white rounded shadow-lg py-2 z-50"
                  style={{ width: '520px' }}
                  onMouseEnter={() => setAreasOpen(true)}
                  onMouseLeave={() => setAreasOpen(false)}
                >
                  <div className="px-4 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Service Areas</span>
                    <Link href="/locations" className="text-xs font-semibold text-[#4054b2] hover:underline">
                      View All Areas →
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-0 px-2">
                    {areaGroups.map((group) => (
                      <div key={group.label} className="px-2 py-1">
                        <p className="text-xs font-bold text-[#4054b2] uppercase tracking-wide mb-1 pb-1 border-b border-gray-100">
                          {group.label}
                        </p>
                        <p className="text-xs text-[#cc0000] font-semibold mb-2">{group.phone}</p>
                        {group.cities.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block py-1 text-sm text-gray-700 hover:text-[#4054b2] transition-colors"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/gallery" className="text-white text-sm font-medium px-3 py-2 rounded hover:bg-white/10 transition-colors">Gallery</Link>
            <Link href="/contact" className="text-white text-sm font-medium px-3 py-2 rounded hover:bg-white/10 transition-colors">Contact</Link>
          </div>

          {/* CTA phone */}
          <a
            href={`tel:${PHONE_MAIN.replace(/-/g, '')}`}
            className="hidden lg:flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white text-sm font-bold px-4 py-2 rounded transition-colors"
            aria-label={`Call Heritage Roofing at ${PHONE_MAIN}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
            </svg>
            {PHONE_MAIN}
          </a>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ backgroundColor: '#0f1840' }} className="lg:hidden border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-white text-sm font-medium py-2 border-b border-white/10">Home</Link>

              <div>
                <button
                  className="w-full text-left text-white text-sm font-medium py-2 border-b border-white/10 flex justify-between items-center"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 10 6">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="pl-4 py-1 flex flex-col gap-1">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="text-blue-200 text-sm py-1 hover:text-white transition-colors">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  className="w-full text-left text-white text-sm font-medium py-2 border-b border-white/10 flex justify-between items-center"
                  onClick={() => setAreasOpen(!areasOpen)}
                >
                  Areas We Serve
                  <svg className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 10 6">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {areasOpen && (
                  <div className="pl-4 py-2 flex flex-col gap-3">
                    <Link href="/locations" onClick={() => setMobileOpen(false)} className="text-yellow-300 text-sm font-semibold hover:text-white transition-colors">
                      View All Areas →
                    </Link>
                    {areaGroups.map((group) => (
                      <div key={group.label}>
                        <p className="text-xs font-bold text-blue-300 uppercase tracking-wide mb-1">{group.label} — {group.phone}</p>
                        {group.cities.map((c) => (
                          <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)} className="block text-blue-200 text-sm py-1 hover:text-white transition-colors">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/gallery" onClick={() => setMobileOpen(false)} className="text-white text-sm font-medium py-2 border-b border-white/10">Gallery</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-white text-sm font-medium py-2 border-b border-white/10">Contact</Link>

              <a
                href="tel:2549687663"
                className="mt-3 flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] active:bg-[#880000] text-white font-bold py-4 px-4 rounded text-base transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
                </svg>
                Call 254-968-7663
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
