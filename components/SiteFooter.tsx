'use client'

import Link from 'next/link'
import { trackCallClick } from '@/lib/gtag'

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
    tel: 'tel:2549687663',
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
    tel: 'tel:8175730890',
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
    tel: 'tel:3255105768',
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

const company = [
  { label: 'Our Services', href: '/services' },
  { label: 'Service Areas', href: '/locations' },
  { label: 'Project Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
]

export default function SiteFooter() {
  return (
    <footer style={{ backgroundColor: '#0f1840' }} className="text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-10">

        {/* Top row: brand + services + company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src="/2026-logo.png"
                alt="Heritage Roofing, Inc. — Stephenville TX"
                width={200}
                height={100}
                className="h-20 w-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <a
              href="https://www.google.com/maps?cid=12288339561500500951"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-200 hover:text-yellow-300 transition-colors leading-relaxed block mb-3"
            >
              <address className="not-italic">
                1590 N Bates Street<br />
                Stephenville, TX 76401
              </address>
            </a>
            <p className="text-xs text-blue-400 leading-relaxed">
              Mon–Fri: 8am–5pm<br />
              Emergency service available 7 days
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-yellow-300 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-blue-200 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-yellow-300 mb-4">Company</h3>
            <ul className="space-y-2 mb-8">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-blue-200 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="tel:2549687663"
              onClick={() => trackCallClick('254-968-7663', 'footer_company')}
              className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white text-sm font-bold px-5 py-2.5 rounded transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
              </svg>
              Call Now
            </a>
          </div>

          {/* Areas CTA */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-yellow-300 mb-4">Areas We Serve</h3>
            <p className="text-sm text-blue-300 mb-4 leading-relaxed">
              One company serving 16 communities across Central Texas.
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-1 text-sm font-semibold text-white border border-white/30 hover:border-white hover:bg-white/10 px-4 py-2 rounded transition-colors"
            >
              View All Areas →
            </Link>
          </div>
        </div>

        {/* Service areas grid */}
        <div>
          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-yellow-300 mb-6">Service Areas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {areaGroups.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-bold text-white mb-1">{group.label}</p>
                <a
                  href={group.tel}
                  onClick={() => trackCallClick(group.phone, 'footer_areas')}
                  className="text-xs text-[#cc0000] font-semibold hover:text-red-400 transition-colors block mb-3"
                >
                  {group.phone}
                </a>
                <ul className="space-y-1.5">
                  {group.cities.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="text-sm text-blue-300 hover:text-white transition-colors">
                        {c.label}, TX
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar — pb-fab ensures content clears the mobile FAB on short viewports */}
      <div style={{ backgroundColor: '#070e2a' }} className="py-4 px-4 pb-fab lg:pb-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-500">
          <p>&copy; {new Date().getFullYear()} Heritage Roofing, Inc. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>Licensed &amp; Insured &mdash; Serving Central Texas since 1986</p>
            <span className="hidden sm:inline text-blue-700">|</span>
            <a
              href="https://www.txpages.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300 transition-colors"
            >
              Powered by TXPAGES
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
