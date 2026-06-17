import Link from 'next/link'

export default function ResidentialCommercialSection() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#f8f7f5' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-center mb-12 text-balance">
          Roofing for Every Property Type
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Residential */}
          <div className="relative rounded-xl overflow-hidden group" style={{ aspectRatio: '16/9' }}>
            <img
              src="/10.jpg"
              alt="Completed residential roof replacement on two-story brick home in Stephenville TX by Heritage Roofing"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
              width={800}
              height={450}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1840]/90 via-[#0f1840]/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Residential Roofing</h3>
              <p className="text-blue-100 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Protect your home and family with quality roofing installation, repair, and replacement. We work with all major shingle and metal roofing systems and help Texas homeowners navigate insurance claims after storm damage.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Asphalt Shingles', 'Metal Roofing', 'Roof Repair', 'Storm Damage'].map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 rounded" style={{ backgroundColor: 'rgba(64,84,178,0.7)', color: '#fff' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/services/residential-roofing"
                className="inline-flex items-center gap-2 bg-[#4054b2] hover:bg-[#2d3d8f] text-white font-bold px-5 py-2.5 rounded transition-colors w-fit"
              >
                Residential Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Commercial */}
          <div className="relative rounded-xl overflow-hidden group" style={{ aspectRatio: '16/9' }}>
            <img
              src="/img-1081.jpg"
              alt="Commercial metal panel roof installation on industrial building — Heritage Roofing Central Texas"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
              width={800}
              height={450}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1840]/90 via-[#0f1840]/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Commercial Roofing</h3>
              <p className="text-blue-100 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Minimizing downtime and protecting your assets with durable commercial roofing solutions. From TPO and EPDM flat roofs to metal standing seam systems — we handle projects of all sizes across Central Texas.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Flat Roofs', 'TPO / EPDM', 'Metal Roofing', 'Warehouses'].map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 rounded" style={{ backgroundColor: 'rgba(204,0,0,0.7)', color: '#fff' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/services/commercial-roofing"
                className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold px-5 py-2.5 rounded transition-colors w-fit"
              >
                Commercial Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
