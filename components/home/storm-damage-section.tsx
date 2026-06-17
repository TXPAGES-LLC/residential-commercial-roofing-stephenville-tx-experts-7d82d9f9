import Link from 'next/link'

export default function StormDamageSection() {
  return (
    <section className="bg-[#1e2a6b] py-16 md:py-20" aria-labelledby="storm-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div>
            <div className="inline-flex items-center gap-2 bg-[#ff0000] text-white text-xs font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-5">
              Storm &amp; Hail Damage Response
            </div>
            <h2 id="storm-heading" className="font-serif text-3xl md:text-4xl text-white font-bold text-balance mb-5">
              Hail Hit Your Roof? We Respond Fast.
            </h2>
            <p className="font-sans text-white/80 text-base leading-relaxed mb-4">
              Texas hail storms can cause serious damage that isn&apos;t always visible from the ground. Small leaks and cracked shingles become major interior damage fast — especially in our heat and humidity.
            </p>
            <p className="font-sans text-white/80 text-base leading-relaxed mb-6">
              Heritage Roofing responds quickly after storms hit, documents every point of damage, and works directly with your insurance adjuster. We handle the paperwork — you get your roof fixed.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Free storm damage inspection',
                'Insurance claim documentation and support',
                'Emergency tarping and temporary repairs',
                'Full roof replacement or targeted repair',
                'Available 7 days a week, including weekends',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-sans text-white/80 text-sm">
                  <svg className="w-4 h-4 text-[#ff0000] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:2549687663"
                className="inline-flex items-center justify-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white font-serif font-bold uppercase tracking-wide px-6 py-3.5 rounded transition-colors"
              >
                <PhoneIcon />
                Call for Emergency Service
              </a>
              <Link
                href="/services/storm-hail-damage"
                className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white font-sans font-semibold px-6 py-3.5 rounded transition-colors"
              >
                Storm Damage Details
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://heritageroofingtexas.com/wp-content/uploads/2024/02/Roofing-Contractors-1.webp"
              alt="Heritage Roofing crew repairing storm-damaged roof in Texas"
              className="w-full rounded-lg shadow-2xl"
              loading="lazy"
              width={600}
              height={450}
            />
            <div className="absolute -bottom-4 -left-4 bg-[#ff0000] text-white px-6 py-4 rounded shadow-xl hidden md:block">
              <p className="font-serif font-bold text-2xl leading-none">7 Days</p>
              <p className="font-sans text-sm text-white/80 mt-0.5">Emergency Availability</p>
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
