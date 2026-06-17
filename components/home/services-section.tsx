import Link from 'next/link'

const services = [
  {
    title: 'Residential Roofing',
    description: 'Full roof installation, replacement, and maintenance for homeowners across Stephenville and surrounding communities.',
    href: '/services/residential-roofing',
    img: 'https://heritageroofingtexas.com/wp-content/uploads/2024/02/Residential-Roofing.webp',
    alt: 'Residential roofing installation Stephenville TX',
  },
  {
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, metal, and flat roofing systems for businesses, warehouses, and commercial properties in Central Texas.',
    href: '/services/commercial-roofing',
    img: 'https://heritageroofingtexas.com/wp-content/uploads/2024/02/Commercial-Roofing.webp',
    alt: 'Commercial roofing Stephenville TX',
  },
  {
    title: 'Roof Repair',
    description: 'Fast, reliable roof repair for leaks, missing shingles, flashing failure, and wear damage. We find the problem and fix it right.',
    href: '/services/roof-repair',
    img: 'https://heritageroofingtexas.com/wp-content/uploads/2024/02/Roof-Repair-1.webp',
    alt: 'Roof repair Stephenville TX',
  },
  {
    title: 'Storm & Hail Damage',
    description: 'Immediate response for storm and hail-damaged roofs. We document damage, handle insurance claims, and restore your roof fast.',
    href: '/services/storm-hail-damage',
    img: 'https://heritageroofingtexas.com/wp-content/uploads/2024/02/Roofing-Contractors-1.webp',
    alt: 'Hail damage roof repair Texas',
  },
  {
    title: 'Roof Inspections',
    description: 'Comprehensive roof inspections for buyers, sellers, and homeowners. Written report, photos, and honest recommendations.',
    href: '/services/roof-inspections',
    img: 'https://heritageroofingtexas.com/wp-content/uploads/2024/02/Roof-Inspection.webp',
    alt: 'Roof inspection Stephenville TX',
  },
  {
    title: 'Skylights & Ventilation',
    description: 'Skylight installation, replacement, and attic ventilation solutions that protect your roof system and reduce energy costs.',
    href: '/services/skylights-ventilation',
    img: 'https://heritageroofingtexas.com/wp-content/uploads/2024/02/Heritage-Roofing.webp',
    alt: 'Skylight installation and attic ventilation Texas',
  },
  {
    title: 'Emergency Repairs',
    description: 'Available 7 days a week for emergency roof repairs. When a storm hits or a leak can\'t wait, call Heritage Roofing.',
    href: '/services/emergency-repairs',
    img: 'https://heritageroofingtexas.com/wp-content/uploads/2024/02/Heritage-Roofing.webp',
    alt: 'Emergency roof repair Texas',
  },
  {
    title: 'Roof Replacement',
    description: 'Full roof replacement with quality materials and professional installation. We walk you through material options and pricing.',
    href: '/services/roof-replacement',
    img: 'https://heritageroofingtexas.com/wp-content/uploads/2024/02/Roofing-Contractors-1.webp',
    alt: 'Roof replacement Stephenville TX',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-sans text-[#4054b2] font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
          <h2 id="services-heading" className="font-serif text-3xl md:text-4xl text-[#111827] font-bold text-balance">
            Roofing Services for Stephenville TX &amp; Central Texas
          </h2>
          <p className="font-sans text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            From routine maintenance to full storm-damage restoration, Heritage Roofing handles every roofing need for homeowners and businesses across North and Central Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-[#4054b2]/30 transition-all"
              aria-label={`Learn about ${service.title}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={360}
                  height={200}
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif font-bold text-[#1e2a6b] text-base mb-2 group-hover:text-[#4054b2] transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#4054b2] font-sans text-sm font-semibold mt-3">
                  Learn More
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#4054b2] hover:bg-[#2e3d8f] text-white font-serif font-bold uppercase tracking-wide text-sm px-8 py-3.5 rounded transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}
