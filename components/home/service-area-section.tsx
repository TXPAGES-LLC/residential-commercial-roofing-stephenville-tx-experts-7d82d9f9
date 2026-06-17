import Link from 'next/link'

const cities = [
  { name: 'Brownwood', href: '/locations/brownwood', county: 'Brown County' },
  { name: 'Dublin', href: '/locations/dublin', county: 'Erath County' },
  { name: 'Glen Rose', href: '/locations/glen-rose', county: 'Somervell County' },
  { name: 'Granbury', href: '/locations/granbury', county: 'Hood County' },
  { name: 'Hamilton', href: '/locations/hamilton', county: 'Hamilton County' },
  { name: 'Hico', href: '/locations/hico', county: 'Hamilton County' },
  { name: 'Stephenville', href: '/locations/stephenville', county: 'Erath County' },
  { name: 'Weatherford', href: '/locations/weatherford', county: 'Parker County' },
]

export default function ServiceAreaSection() {
  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="service-area-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div>
            <p className="font-sans text-[#4054b2] font-semibold text-sm uppercase tracking-widest mb-2">Where We Work</p>
            <h2 id="service-area-heading" className="font-serif text-3xl md:text-4xl text-[#111827] font-bold text-balance mb-5">
              Roofing Service Across North &amp; Central Texas
            </h2>
            <p className="font-sans text-gray-600 leading-relaxed mb-6">
              Heritage Roofing is based in Stephenville, TX and serves homeowners and businesses across the Stephenville, Granbury, and Brownwood areas — along with the surrounding communities in between.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed mb-8">
              Our crews are local, our response times are fast, and we know the weather patterns, building codes, and materials that perform best in Central Texas.
            </p>
            <a
              href="tel:2549687663"
              className="inline-flex items-center gap-2 bg-[#4054b2] hover:bg-[#2e3d8f] text-white font-serif font-bold uppercase tracking-wide px-6 py-3.5 rounded transition-colors"
            >
              <PhoneIcon />
              Call 254-968-7663
            </a>
          </div>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((city) => (
                <Link
                  key={city.href}
                  href={city.href}
                  className="group flex flex-col bg-[#f3f4f6] hover:bg-[#4054b2] border border-gray-200 hover:border-[#4054b2] rounded-lg px-4 py-3.5 transition-all"
                  aria-label={`Roofing services in ${city.name}, TX`}
                >
                  <span className="font-serif font-bold text-[#1e2a6b] group-hover:text-white text-sm transition-colors">{city.name}</span>
                  <span className="font-sans text-gray-500 group-hover:text-white/70 text-xs mt-0.5 transition-colors">{city.county}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
    </svg>
  )
}
