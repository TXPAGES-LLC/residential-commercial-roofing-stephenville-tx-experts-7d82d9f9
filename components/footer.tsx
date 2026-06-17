import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0f1a4a] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <img
              src="/logo.png"
              alt="Heritage Roofing Inc."
              width={160}
              height={50}
              className="h-12 w-auto object-contain mb-4"
              loading="lazy"
            />
            <p className="text-white/70 font-sans text-sm leading-relaxed mb-5">
              Residential &amp; commercial roofing in Stephenville, TX. Trusted experts for roof repair, storm damage, and maintenance. Serving North and Central Texas since day one.
            </p>
            <div className="flex flex-col gap-2 text-sm font-sans">
              <a href="tel:2549687663" className="flex items-center gap-2 text-white hover:text-[#ff0000] transition-colors">
                <PhoneIcon /> <strong>254-968-7663</strong>
              </a>
              <p className="text-white/50 text-xs">Serving Stephenville, Granbury &amp; Brownwood areas</p>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-serif font-bold text-white uppercase tracking-wide text-base mb-4">Our Services</h3>
            <ul className="flex flex-col gap-2 font-sans text-sm">
              {[
                { label: 'Residential Roofing', href: '/services/residential-roofing' },
                { label: 'Commercial Roofing', href: '/services/commercial-roofing' },
                { label: 'Roof Repair', href: '/services/roof-repair' },
                { label: 'Roof Replacement', href: '/services/roof-replacement' },
                { label: 'Storm & Hail Damage', href: '/services/storm-hail-damage' },
                { label: 'Roof Inspections', href: '/services/roof-inspections' },
                { label: 'Skylights & Ventilation', href: '/services/skylights-ventilation' },
                { label: 'Emergency Repairs', href: '/services/emergency-repairs' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations column */}
          <div>
            <h3 className="font-serif font-bold text-white uppercase tracking-wide text-base mb-4">Service Areas</h3>
            <ul className="flex flex-col gap-2 font-sans text-sm">
              {[
                { label: 'Brownwood, TX', href: '/locations/brownwood' },
                { label: 'Dublin, TX', href: '/locations/dublin' },
                { label: 'Glen Rose, TX', href: '/locations/glen-rose' },
                { label: 'Granbury, TX', href: '/locations/granbury' },
                { label: 'Hamilton, TX', href: '/locations/hamilton' },
                { label: 'Hico, TX', href: '/locations/hico' },
                { label: 'Stephenville, TX', href: '/locations/stephenville' },
                { label: 'Weatherford, TX', href: '/locations/weatherford' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-serif font-bold text-white uppercase tracking-wide text-base mb-4">Company</h3>
            <ul className="flex flex-col gap-2 font-sans text-sm mb-6">
              {[
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <p className="text-white/50 uppercase text-xs tracking-widest font-semibold mb-2">Hours</p>
              <p className="text-white/70 font-sans text-sm">Mon–Fri: 8am–5pm</p>
              <p className="text-[#ff0000] font-sans text-sm font-semibold">Emergency: 7 days/week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Address bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white/50 font-sans text-xs">
            <MapPinIcon />
            <span>1590 N Bates Street, Stephenville, TX 76401</span>
          </div>
          <p className="text-white/40 font-sans text-xs">
            &copy; {new Date().getFullYear()} Heritage Roofing, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/40 font-sans text-xs">
            <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
