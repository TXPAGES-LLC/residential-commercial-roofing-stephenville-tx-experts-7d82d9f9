import type { Metadata } from 'next'
import ServicePageLayout from '@/components/service-page-layout'

export const metadata: Metadata = {
  title: 'Commercial Roofing Stephenville TX | Heritage Roofing',
  description:
    'Commercial roofing in Stephenville, Granbury & Central Texas. TPO, EPDM, metal, and flat roofing systems for businesses. Heritage Roofing — call 254-968-7663.',
  alternates: { canonical: 'https://heritageroofingtexas.com/services/commercial-roofing' },
  openGraph: {
    title: 'Commercial Roofing Stephenville TX | Heritage Roofing',
    description: 'Commercial roofing in Stephenville, Granbury & Central Texas. TPO, EPDM, metal, and flat roofing systems for businesses. Heritage Roofing — call 254-968-7663.',
    url: 'https://heritageroofingtexas.com/services/commercial-roofing',
    type: 'website',
    images: [{ url: 'https://heritageroofingtexas.com/og-image.jpg', width: 1200, height: 630, alt: 'Commercial roofing by Heritage Roofing, Inc. — Stephenville TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Roofing Stephenville TX | Heritage Roofing',
    description: 'Commercial roofing in Stephenville, Granbury & Central Texas. TPO, EPDM, metal, and flat roofing for businesses. Call 254-968-7663.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

export default function CommercialRoofingPage() {
  return (
    <ServicePageLayout
      title="Commercial Roofing in Stephenville TX"
      subtitle="Commercial Roofing"
      pageUrl="https://heritageroofingtexas.com/services/commercial-roofing"
      heroImg="/tpo-roof.jpg"
      heroImgAlt="White TPO flat roof with pipe boots on commercial building — Heritage Roofing Stephenville TX"
      description="Heritage Roofing provides complete commercial roofing services for businesses, warehouses, retail, churches, and industrial properties across Central Texas. We install low-slope and flat roofing systems built for Texas conditions."
      benefits={[
        'TPO, EPDM, modified bitumen & metal systems',
        'Minimal business disruption during installation',
        'Detailed project timelines and communication',
        'Manufacturer-certified installation',
        'Preventive maintenance programs',
        'Emergency commercial repairs available',
        'Licensed & fully insured crews',
        'Competitive pricing with written estimates',
      ]}
      services={[
        {
          title: 'TPO Roofing',
          description: 'Thermoplastic polyolefin (TPO) is one of the most efficient flat roofing systems for Texas. Energy-reflective and durable in our heat and UV exposure.',
        },
        {
          title: 'EPDM Roofing',
          description: 'Ethylene propylene diene monomer (EPDM) rubber roofing offers excellent durability and weather resistance for low-slope commercial buildings.',
        },
        {
          title: 'Metal Commercial Roofing',
          description: 'Standing seam metal roofing for commercial buildings offers 40+ years of service life with minimal maintenance requirements.',
        },
        {
          title: 'Modified Bitumen',
          description: 'A proven commercial roofing system for flat and low-slope applications. Multiple installation methods available including torchdown and cold-applied.',
        },
        {
          title: 'Commercial Roof Repair',
          description: 'We diagnose and repair commercial roof problems fast to minimize business interruption. Leak detection, membrane repair, and flashing work.',
        },
        {
          title: 'Roof Coatings & Restoration',
          description: 'Extend the life of your existing commercial roof with elastomeric coatings. A cost-effective alternative to full replacement in many cases.',
        },
      ]}
      relatedServices={[
        { label: 'Roof Inspections', href: '/services/roof-inspections' },
        { label: 'Roof Repair', href: '/services/roof-repair' },
        { label: 'Storm & Hail Damage', href: '/services/storm-hail-damage' },
        { label: 'Emergency Repairs', href: '/services/emergency-repairs' },
        { label: 'Skylights & Ventilation', href: '/services/skylights-ventilation' },
      ]}
    />
  )
}
