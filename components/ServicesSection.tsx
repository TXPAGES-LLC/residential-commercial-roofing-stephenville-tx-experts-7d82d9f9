import Link from 'next/link'

const services = [
  {
    title: 'Residential Roofing',
    description: 'New installation, roof replacement, and repair services for Texas homeowners. Asphalt shingles, metal roofing, and more.',
    href: '/services/residential-roofing',
    img: '/13.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Commercial Roofing',
    description: 'Durable, cost-effective roofing solutions for commercial properties, warehouses, and multi-unit buildings across Texas.',
    href: '/services/commercial-roofing',
    img: '/img-1081.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Storm & Hail Damage',
    description: 'Fast storm damage assessment, insurance claim assistance, and emergency tarping. We handle the entire restoration process.',
    href: '/services/storm-hail-damage',
    img: '/storm-damage.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Roof Repair',
    description: 'Expert roof leak repair, shingle replacement, flashing repair, and maintenance to extend the life of your roof.',
    href: '/services/roof-repair',
    img: '/roof-repair.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Roof Replacement',
    description: 'Complete tear-off and re-roof services. Quality materials, expert installation, and comprehensive warranties.',
    href: '/services/roof-replacement',
    img: '/20160324-120523.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Roof Inspections',
    description: 'Thorough roof inspections for real estate transactions, insurance claims, and preventive maintenance.',
    href: '/services/roof-inspections',
    img: '/20180529-125627.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Skylights & Ventilation',
    description: 'Skylight installation, attic ventilation systems, and roof vents to improve energy efficiency and air circulation.',
    href: '/services/skylights-ventilation',
    img: '/20200207-103254.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Emergency Repairs',
    description: 'Available 7 days a week for emergency roof repairs, tarping, and water damage prevention after storms.',
    href: '/services/emergency-repairs',
    img: '/20200602-152806.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4 text-balance" style={{ color: '#1a1a1a' }}>
            Complete Roofing Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-pretty">
            Heritage Roofing, Inc. provides professional residential and commercial roofing services throughout Stephenville, Granbury, Brownwood, and Central Texas. Quality workmanship, honest pricing, and reliable service every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-white border border-[#e2ddd6] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Fixed aspect ratio prevents CLS even before the image loads */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', height: '192px' }}>
                <img
                  src={service.img}
                  alt={`${service.title} services in Stephenville TX`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  {service.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-[#4054b2] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
