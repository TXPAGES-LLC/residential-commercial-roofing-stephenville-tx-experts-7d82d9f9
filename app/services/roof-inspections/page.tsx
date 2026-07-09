import type { Metadata } from 'next'
import ServicePageLayout from '@/components/service-page-layout'

export const metadata: Metadata = {
  title: 'Roof Inspections Stephenville TX | Heritage Roofing',
  description:
    'Professional roof inspections in Stephenville TX and Central Texas. Written report with photos and honest recommendations. Free estimates — call Heritage Roofing at 254-968-7663.',
  alternates: { canonical: 'https://heritageroofingtexas.com/services/roof-inspections' },
  openGraph: {
    title: 'Roof Inspections Stephenville TX | Heritage Roofing',
    description: 'Professional roof inspections in Stephenville TX and Central Texas. Written report, photos, and honest recommendations. Free estimate. Heritage Roofing — call 254-968-7663.',
    url: 'https://heritageroofingtexas.com/services/roof-inspections',
    type: 'website',
    images: [{ url: 'https://heritageroofingtexas.com/img-1081.jpg', width: 1440, height: 700, alt: 'Heritage Roofing inspector examining completed commercial metal roof in Central Texas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Inspections Stephenville TX | Heritage Roofing',
    description: 'Professional roof inspections in Stephenville TX and Central Texas. Written report with photos. Call 254-968-7663.',
    images: ['https://heritageroofingtexas.com/img-1081.jpg'],
  },
}

export default function RoofInspectionsPage() {
  return (
    <ServicePageLayout
      title="Roof Inspections in Stephenville TX"
      subtitle="Roof Inspections"
      pageUrl="https://heritageroofingtexas.com/services/roof-inspections"
      heroImg="/img-1081.jpg"
      heroImgAlt="Heritage Roofing inspector on residential roof Stephenville TX"
      description="A thorough roof inspection from Heritage Roofing gives you an honest, documented assessment of your roof's condition — whether you're buying a home, filing an insurance claim, or just staying ahead of problems."
      cta="Schedule a Free Inspection"
      benefits={[
        'Written inspection report with photos',
        'Honest assessment — no unnecessary repairs',
        'Pre-purchase home inspection ready',
        'Insurance claim documentation',
        'Post-storm damage assessment',
        'Annual maintenance inspection programs',
        'Same-day or next-day scheduling available',
        'Serving all of Central Texas',
      ]}
      services={[
        {
          title: 'Residential Roof Inspection',
          description: 'Comprehensive inspection of all roofing components including shingles, flashing, gutters, ridge, valleys, ventilation, and interior signs of water damage.',
        },
        {
          title: 'Commercial Roof Inspection',
          description: 'Detailed inspection of flat and low-slope commercial roofing systems. We identify membrane failures, drainage issues, and penetration problems before they become expensive.',
        },
        {
          title: 'Pre-Purchase Inspection',
          description: 'Don\'t buy a home with a hidden roofing problem. Our pre-purchase inspections give buyers a clear picture of remaining roof life and any immediate issues.',
        },
        {
          title: 'Storm Damage Inspection',
          description: 'After hail or high winds, we document all damage with detailed photographs and written reports suitable for insurance claims and adjuster meetings.',
        },
        {
          title: 'Annual Maintenance Inspection',
          description: 'Catching small problems early prevents major repairs. Our annual inspection program helps extend roof life and keeps your warranty coverage intact.',
        },
        {
          title: 'Warranty Inspection',
          description: 'Manufacturer and contractor warranties often have inspection requirements. We provide documentation to keep your coverage valid.',
        },
      ]}
      relatedServices={[
        { label: 'Roof Repair', href: '/services/roof-repair' },
        { label: 'Storm & Hail Damage', href: '/services/storm-hail-damage' },
        { label: 'Roof Replacement', href: '/services/roof-replacement' },
        { label: 'Residential Roofing', href: '/services/residential-roofing' },
        { label: 'Commercial Roofing', href: '/services/commercial-roofing' },
      ]}
    />
  )
}
