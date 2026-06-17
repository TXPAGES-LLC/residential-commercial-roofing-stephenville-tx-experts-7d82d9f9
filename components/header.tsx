'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const phoneStephenville = '254-968-7663'
const phoneGranbury = '817-573-0890'
const phoneBrownwood = '325-510-5768'

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

const locations = [
  { label: 'Stephenville, TX', href: '/locations/stephenville' },
  { label: 'Granbury, TX', href: '/locations/granbury' },
  { label: 'Brownwood, TX', href: '/locations/brownwood' },
  { label: 'Hico, TX', href: '/locations/hico' },
  { label: 'Dublin, TX', href: '/locations/dublin' },
  { label: 'Glen Rose, TX', href: '/locations/glen-rose' },
  { label: 'Weatherford, TX', href: '/locations/weatherford' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', children: services },
  { label: 'Locations', href: '/locations', children: locations },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#1e2a6b] text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-sans text-white/70">Mon–Fri: 8am–5pm &nbsp;|&nbsp; Emergency Repairs: 7 days/week</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${phoneStephenville.replace(/-/g, '')}`} className="flex items-center gap-1.5 hover:text-[#ff0000] transition-colors font-sans">
              <PhoneIcon />
              <span>Stephenville: <strong>{phoneStephenville}</strong></span>
            </a>
            <a href={`tel:${phoneGranbury.replace(/-/g, '')}`} className="flex items-center gap-1.5 hover:text-[#ff0000] transition-colors font-sans">
              <PhoneIcon />
              <span>Granbury: <strong>{phoneGranbury}</strong></span>
            </a>
            <a href={`tel:${phoneBrownwood.replace(/-/g, '')}`} className="flex items-center gap-1.5 hover:text-[#ff0000] transition-colors font-sans">
              <PhoneIcon />
              <span>Brownwood: <strong>{phoneBrownwood}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 bg-[#4054b2] transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Heritage Roofing - Home">
              <img
                src="/logo.png"
                alt="Heritage Roofing Inc. logo"
                width={160}
                height={50}
                className="h-10 md:h-12 w-auto object-contain"
                loading="eager"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-white font-sans text-sm font-medium hover:text-[#ff0000] transition-colors rounded focus:outline-none focus:ring-2 focus:ring-white/40"
                      aria-expanded={activeDropdown === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDownIcon className="w-3.5 h-3.5 opacity-70" />
                    </button>
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-md shadow-xl border border-gray-100 py-1 z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-[#4054b2] hover:text-white transition-colors font-sans"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 text-white font-sans text-sm font-medium hover:text-[#ff0000] transition-colors rounded"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA phone */}
            <a
              href={`tel:${phoneStephenville.replace(/-/g, '')}`}
              className="hidden lg:flex items-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white px-5 py-2.5 rounded font-serif font-semibold text-sm uppercase tracking-wide transition-colors"
              aria-label="Call Heritage Roofing at 254-968-7663"
            >
              <PhoneIcon />
              {phoneStephenville}
            </a>

            {/* Mobile: phone + hamburger */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={`tel:${phoneStephenville.replace(/-/g, '')}`}
                className="flex items-center gap-1.5 bg-[#ff0000] text-white px-3 py-2 rounded text-sm font-sans font-medium"
                aria-label="Call now"
              >
                <PhoneIcon />
                <span className="hidden sm:inline">{phoneStephenville}</span>
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-white"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div id="mobile-menu" className="lg:hidden bg-[#1e2a6b] border-t border-white/10">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-2.5 px-2 text-white font-sans font-semibold text-sm uppercase tracking-wide border-b border-white/10 hover:text-[#ff0000] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 flex flex-col gap-0.5 mt-1 mb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-1.5 text-white/70 font-sans text-sm hover:text-white transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-white/20 flex flex-col gap-2">
                <a href={`tel:${phoneStephenville.replace(/-/g, '')}`} className="flex items-center gap-2 text-white font-sans text-sm">
                  <PhoneIcon /> Stephenville: <strong>{phoneStephenville}</strong>
                </a>
                <a href={`tel:${phoneGranbury.replace(/-/g, '')}`} className="flex items-center gap-2 text-white font-sans text-sm">
                  <PhoneIcon /> Granbury: <strong>{phoneGranbury}</strong>
                </a>
                <a href={`tel:${phoneBrownwood.replace(/-/g, '')}`} className="flex items-center gap-2 text-white font-sans text-sm">
                  <PhoneIcon /> Brownwood: <strong>{phoneBrownwood}</strong>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky mobile call button */}
      <a
        href={`tel:${phoneStephenville.replace(/-/g, '')}`}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white px-4 py-3 rounded-full shadow-xl font-sans font-semibold text-sm transition-colors lg:hidden"
        aria-label="Call Heritage Roofing now"
      >
        <PhoneIcon className="w-5 h-5" />
        Call Now
      </a>
    </>
  )
}

function PhoneIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
    </svg>
  )
}

function ChevronDownIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
