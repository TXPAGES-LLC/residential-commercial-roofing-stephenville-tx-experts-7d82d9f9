import Link from 'next/link'

const areaGroups = [
  {
    label: 'Stephenville Area',
    phone: '254-968-7663',
    href: 'tel:2549687663',
    cities: [
      { city: 'Stephenville', href: '/locations/stephenville' },
      { city: 'Dublin', href: '/locations/dublin' },
      { city: 'Hico', href: '/locations/hico' },
      { city: 'Eastland', href: '/locations/eastland' },
      { city: 'De Leon', href: '/locations/de-leon' },
    ],
  },
  {
    label: 'Granbury Area',
    phone: '817-573-0890',
    href: 'tel:8175730890',
    cities: [
      { city: 'Granbury', href: '/locations/granbury' },
      { city: 'Glen Rose', href: '/locations/glen-rose' },
      { city: 'Weatherford', href: '/locations/weatherford' },
      { city: 'Mineral Wells', href: '/locations/mineral-wells' },
    ],
  },
  {
    label: 'Brownwood Area',
    phone: '325-510-5768',
    href: 'tel:3255105768',
    cities: [
      { city: 'Brownwood', href: '/locations/brownwood' },
      { city: 'Hamilton', href: '/locations/hamilton' },
      { city: 'Goldthwaite', href: '/locations/goldthwaite' },
      { city: 'Comanche', href: '/locations/comanche' },
      { city: 'Santa Anna', href: '/locations/santa-anna' },
      { city: 'Coleman', href: '/locations/coleman' },
      { city: 'Bangs', href: '/locations/bangs' },
    ],
  },
]

export default function ServiceAreaSection() {
  return (
    <section style={{ backgroundColor: '#f0efeb' }} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4 text-balance">
            Serving Central Texas
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-pretty">
            Heritage Roofing, Inc. proudly serves Stephenville and surrounding communities with trusted residential and commercial roofing services. One office, three service areas — fast response and deep knowledge of Texas weather.
          </p>
        </div>

        {/* Three grouped area columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {areaGroups.map((group) => (
            <div key={group.label} className="bg-white border border-[#e2ddd6] rounded-xl p-6">
              <h3 className="font-display text-lg font-bold mb-1" style={{ color: '#0f1840' }}>
                {group.label}
              </h3>
              <a href={group.href} className="text-sm font-semibold text-[#cc0000] hover:text-[#aa0000] transition-colors block mb-4">
                {group.phone}
              </a>
              <ul className="flex flex-col gap-1">
                {group.cities.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="text-sm text-gray-700 hover:text-[#4054b2] transition-colors flex items-center gap-1.5"
                    >
                      <svg className="w-3 h-3 text-[#4054b2] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {c.city}, TX
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Office info + CTA */}
        <div className="bg-white rounded-xl p-8 border border-[#e2ddd6] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#0f1840' }}>One Office. Three Service Areas.</h3>
            <a
              href="https://www.google.com/maps?cid=12288339561500500951"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 hover:text-[#4054b2] transition-colors leading-relaxed"
            >
              <address className="not-italic">1590 N Bates Street, Stephenville, TX 76401</address>
            </a>
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 bg-[#4054b2] hover:bg-[#0f1840] text-white text-sm font-bold px-6 py-3 rounded transition-colors whitespace-nowrap"
          >
            View All Service Areas →
          </Link>
        </div>
      </div>
    </section>
  )
}
