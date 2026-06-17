import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata: Metadata = {
  title: 'Roofing Services Stephenville TX | Heritage Roofing',
  description:
    'Complete roofing services across Central Texas. Residential, commercial, storm damage, inspections, and emergency repairs. Heritage Roofing — licensed & insured since 1986.',
  alternates: { canonical: 'https://heritageroofingtexas.com/services' },
  openGraph: {
    title: 'Roofing Services Stephenville TX | Heritage Roofing',
    description: 'Complete roofing services in Stephenville TX and Central Texas. Residential, commercial, repair, storm damage, inspections, skylights, and emergency roofing. Call 254-968-7663.',
    url: 'https://heritageroofingtexas.com/services',
    type: 'website',
    images: [{ url: 'https://heritageroofingtexas.com/og-image.jpg', width: 1200, height: 630, alt: 'Heritage Roofing, Inc. roofing services — Stephenville TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services Stephenville TX | Heritage Roofing',
    description: 'Complete roofing services across Stephenville TX and Central Texas. Call 254-968-7663.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

const services = [
  {
    title: 'Residential Roofing',
    description: 'New installation, replacement, and ongoing maintenance for homes across Stephenville and Central Texas.',
    href: '/services/residential-roofing',
    img: '/composition-roof.jpg',
    alt: 'Architectural asphalt composition shingles — residential roofing Stephenville TX',
  },
  {
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, metal, and flat roofing systems for businesses and commercial properties.',
    href: '/services/commercial-roofing',
    img: '/tpo-roof.jpg',
    alt: 'White TPO flat commercial roof with skylights and vents — Heritage Roofing TX',
  },
  {
    title: 'Roof Repair',
    description: 'Fast, reliable roof repair for leaks, storm damage, missing shingles, and failing flashing.',
    href: '/services/roof-repair',
    img: '/20200602-152812.jpg',
    alt: 'Cracked shingles near pipe boot requiring roof repair — Heritage Roofing Stephenville TX',
  },
  {
    title: 'Roof Replacement',
    description: 'Complete roof replacement with quality materials and workmanship warranty. We walk you through every option.',
    href: '/services/roof-replacement',
    img: '/20160324-120423.jpg',
    alt: 'Heritage Roofing crew performing full roof tear-off and replacement in Central Texas',
  },
  {
    title: 'Storm & Hail Damage',
    description: 'Fast response after storms. Damage documentation, insurance support, and full restoration.',
    href: '/services/storm-hail-damage',
    img: '/20200602-152909.jpg',
    alt: 'Hail impact marks circled on asphalt shingles — storm damage inspection Heritage Roofing TX',
  },
  {
    title: 'Roof Inspections',
    description: 'Written inspection reports with photos. Pre-purchase, post-storm, and annual maintenance inspections.',
    href: '/services/roof-inspections',
    img: '/20180529-125627.jpg',
    alt: 'Roof inspection showing granule loss and impact damage on shingles — Heritage Roofing',
  },
  {
    title: 'Skylights & Ventilation',
    description: 'Skylight installation and attic ventilation solutions that protect your roof and reduce energy costs.',
    href: '/services/skylights-ventilation',
    img: '/20200207-103254.jpg',
    alt: 'Roof vent and pipe boot on asphalt shingle roof — Heritage Roofing ventilation services TX',
  },
  {
    title: 'Emergency Repairs',
    description: "Available 7 days a week. When a storm hits or a leak can't wait, call Heritage Roofing.",
    href: '/services/emergency-repairs',
    img: '/20200602-152806.jpg',
    alt: 'Wind-damaged shingles requiring emergency roof repair — Heritage Roofing Central Texas',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://heritageroofingtexas.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://heritageroofingtexas.com/services' },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SiteHeader />
      <main id="main-content">
        <section className="bg-[#1e2a6b] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-white/60 font-sans text-xs mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Services</span>
            </nav>
            <h1 className="font-serif text-4xl md:text-5xl text-white font-bold text-balance mb-4">
              Roofing Services in Stephenville TX &amp; Central Texas
            </h1>
            <p className="font-sans text-white/80 text-lg max-w-2xl">
              Heritage Roofing provides complete residential and commercial roofing services across North and Central Texas. Licensed, insured, and backed by real warranties.
            </p>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-[#4054b2]/30 transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={service.img} alt={service.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width={360} height={200} />
                  </div>
                  <div className="p-5">
                    <h2 className="font-serif font-bold text-[#1e2a6b] text-base mb-2 group-hover:text-[#4054b2] transition-colors">{service.title}</h2>
                    <p className="font-sans text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-[#4054b2] font-sans text-sm font-semibold mt-3">Learn More <span aria-hidden="true">→</span></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#4054b2] py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-white font-bold mb-4">Need a Roofing Estimate? Call Today.</h2>
            <p className="font-sans text-white/80 mb-6">Heritage Roofing serves all of Central Texas. Call the office nearest you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2549687663" className="inline-flex items-center justify-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white font-serif font-bold uppercase tracking-wide px-6 py-3.5 rounded transition-colors">
                Stephenville: 254-968-7663
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCallButton />
    </>
  )
}
