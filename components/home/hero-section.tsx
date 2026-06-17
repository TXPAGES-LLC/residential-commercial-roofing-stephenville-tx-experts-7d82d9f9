import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] md:min-h-[680px] flex items-center"
      aria-label="Hero — Heritage Roofing Stephenville TX"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://heritageroofingtexas.com/wp-content/uploads/2024/02/slider-3.webp"
          alt="Roofing work in progress — Heritage Roofing Stephenville TX"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1e2a6b]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-[#ff0000] text-white text-xs font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">
            <span>Stephenville &bull; Granbury &bull; Brownwood &bull; Central Texas</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight text-balance mb-5">
            Roofing Stephenville TX Experts You Can Count On
          </h1>

          <p className="font-sans text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Heritage Roofing, Inc. delivers residential and commercial roofing, roof repair, storm and hail damage restoration, and emergency service across North and Central Texas. Licensed. Local. Proven.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="tel:2549687663"
              className="inline-flex items-center justify-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white font-serif font-bold uppercase tracking-wide text-base px-7 py-4 rounded transition-colors shadow-lg"
              aria-label="Call Heritage Roofing at 254-968-7663"
            >
              <PhoneIcon />
              Call 254-968-7663
            </a>
            <Link
              href="/services/roof-inspections"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-sans font-semibold text-base px-7 py-4 rounded transition-colors"
            >
              Free Roof Inspection
            </Link>
          </div>

          {/* Quick trust signals */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/70 font-sans text-sm">
            <TrustItem label="Licensed & Insured" />
            <TrustItem label="Emergency Service 7 Days/Week" />
            <TrustItem label="Storm Damage Specialists" />
            <TrustItem label="Free Estimates" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustItem({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <svg className="w-4 h-4 text-[#ff0000] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      {label}
    </span>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
    </svg>
  )
}
