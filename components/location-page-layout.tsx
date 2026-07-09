import Link from 'next/link'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import MobileCallButton from './MobileCallButton'

interface LocationPageLayoutProps {
  city: string
  county: string
  phone: string
  phoneFormatted: string
  intro: string
  body: string
  services: { title: string; href: string }[]
  localFacts: string[]
}

export default function LocationPageLayout({
  city,
  county,
  phone,
  phoneFormatted,
  intro,
  body,
  services,
  localFacts,
}: LocationPageLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#1e2a6b] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-white/60 font-sans text-xs mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-white">{city}</span>
            </nav>
            <h1 className="font-serif text-4xl md:text-5xl text-white font-bold text-balance mb-4">
              Roofing in {city}, TX — Heritage Roofing
            </h1>
            <p className="font-sans text-white/80 text-lg max-w-2xl leading-relaxed mb-8">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] active:bg-[#aa0000] text-white font-serif font-bold uppercase tracking-wide px-7 py-4 rounded transition-colors w-full sm:w-auto"
              >
                <PhoneIcon />
                Call {phoneFormatted}
              </a>
              <Link
                href="/services/roof-inspections"
                className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white font-sans font-semibold px-7 py-4 rounded transition-colors w-full sm:w-auto"
              >
                Free Roof Inspection
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl font-bold text-[#1e2a6b] mb-4">
                  Trusted Roofing Contractor in {city}, {county} County
                </h2>
                <div className="font-sans text-gray-700 text-base leading-relaxed space-y-4 mb-8">
                  <p>{body}</p>
                  <p>
                    Whether you need a full roof replacement after hail damage, a fast repair on an active leak, or a pre-purchase inspection before closing, Heritage Roofing serves {city} and surrounding {county} County communities with the same crew, the same standards, and the same commitment to standing behind our work.
                  </p>
                </div>

                {/* Local facts */}
                <div className="bg-[#f3f4f6] border border-gray-200 rounded-xl p-6 mb-8">
                  <h3 className="font-serif font-bold text-[#1e2a6b] text-lg mb-4">Roofing in {city} — What You Should Know</h3>
                  <ul className="flex flex-col gap-3">
                    {localFacts.map((fact) => (
                      <li key={fact} className="flex items-start gap-2.5 font-sans text-gray-700 text-sm">
                        <svg className="w-4 h-4 text-[#4054b2] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services in this city */}
                <h3 className="font-serif font-bold text-[#1e2a6b] text-xl mb-4">Roofing Services Available in {city}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2 bg-[#f3f4f6] hover:bg-[#4054b2] border border-gray-200 hover:border-[#4054b2] text-[#1e2a6b] hover:text-white rounded-lg px-4 py-3 font-sans text-sm font-medium transition-all"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside>
                <div className="bg-[#1e2a6b] rounded-xl p-5 sm:p-6 text-white lg:sticky lg:top-24">
                  <h3 className="font-serif font-bold text-lg mb-2">Roofing in {city}?</h3>
                  <p className="font-sans text-white/70 text-sm mb-5">Call Heritage Roofing for a free estimate. We know {city} weather, local codes, and what materials work best here.</p>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center justify-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white font-serif font-bold uppercase tracking-wide py-3 rounded transition-colors w-full text-sm mb-4"
                  >
                    <PhoneIcon /> Call {phoneFormatted}
                  </a>
                  <div className="flex flex-col gap-2 text-sm font-sans">
                    <div className="flex items-center gap-2 text-white/60">
                      <MapPinIcon /> {city}, {county} County, TX
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <ClockIcon /> Mon–Fri 8am–5pm
                    </div>
                    <div className="flex items-center gap-2 text-[#ff9999]">
                      <PhoneIcon /> Emergency: 7 days/week
                    </div>
                  </div>
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <p className="font-sans text-white/50 text-xs uppercase tracking-widest mb-3">Other Offices</p>
                    <a href="tel:2549687663" className="block text-white/70 hover:text-white text-sm font-sans mb-1.5 transition-colors">Stephenville: 254-968-7663</a>
                    <a href="tel:8175730890" className="block text-white/70 hover:text-white text-sm font-sans mb-1.5 transition-colors">Granbury: 817-573-0890</a>
                    <a href="tel:3255105768" className="block text-white/70 hover:text-white text-sm font-sans transition-colors">Brownwood: 325-510-5768</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-[#4054b2] py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-white font-bold mb-4">Serving {city} and All of {county} County</h2>
            <p className="font-sans text-white/80 mb-6">Heritage Roofing is local, licensed, and ready to help. Call the office nearest to {city} today.</p>
            <a href={`tel:${phone}`} className="inline-flex items-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white font-serif font-bold uppercase tracking-wide px-8 py-4 rounded transition-colors">
              <PhoneIcon /> Call {phoneFormatted}
            </a>
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

function MapPinIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
