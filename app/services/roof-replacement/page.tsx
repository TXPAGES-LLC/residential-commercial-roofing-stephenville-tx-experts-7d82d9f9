import type { Metadata } from 'next'
import ServicePageLayout from '@/components/service-page-layout'

export const metadata: Metadata = {
  title: 'Roof Replacement Stephenville TX | Heritage Roofing',
  description:
    'Full roof replacement in Stephenville TX and Central Texas. Heritage Roofing removes old roofing, installs quality systems with material warranties. Call 254-968-7663.',
  alternates: { canonical: 'https://heritageroofingtexas.com/services/roof-replacement' },
  openGraph: {
    title: 'Roof Replacement Stephenville TX | Heritage Roofing',
    description: 'Full roof replacement in Stephenville TX and Central Texas. Heritage Roofing removes old roofing, installs quality systems with material warranties. Call 254-968-7663.',
    url: 'https://heritageroofingtexas.com/services/roof-replacement',
    type: 'website',
    images: [{ url: 'https://heritageroofingtexas.com/og-image.jpg', width: 1200, height: 630, alt: 'Roof replacement by Heritage Roofing, Inc. — Stephenville TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Replacement Stephenville TX | Heritage Roofing',
    description: 'Full roof replacement in Stephenville TX and Central Texas. Written estimate, full tear-off. Call 254-968-7663.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

export default function RoofReplacementPage() {
  return (
    <ServicePageLayout
      title="Roof Replacement in Stephenville TX"
      subtitle="Roof Replacement"
      pageUrl="https://heritageroofingtexas.com/services/roof-replacement"
      heroImg="/composition-roof.jpg"
      heroImgAlt="Architectural asphalt composition shingles — full roof replacement by Heritage Roofing Stephenville TX"
      description="When your roof has reached the end of its life or sustained damage beyond repair, Heritage Roofing provides complete roof replacement with quality materials, professional installation, and workmanship you can count on."
      benefits={[
        'Complete tear-off and disposal included',
        'Manufacturer-warranted material systems',
        'Impact-resistant shingle options available',
        'Full deck inspection and repair',
        'Proper ventilation assessment & correction',
        'Clean worksite and complete debris removal',
        'Written estimate with no hidden costs',
        'Financing options available',
      ]}
      services={[
        {
          title: 'Asphalt Shingle Replacement',
          description: 'We install 30-year and lifetime architectural shingles including impact-resistant Class 4 options that may qualify for insurance discounts.',
        },
        {
          title: 'Metal Roof Installation',
          description: 'Standing seam and metal panel systems offer 40–70 year lifespans with minimal maintenance. Increasingly popular for Texas homes and commercial buildings.',
        },
        {
          title: 'Deck Inspection & Repair',
          description: 'Every roof replacement includes a full deck inspection. Soft, rotted, or damaged decking is replaced before new materials are installed.',
        },
        {
          title: 'Underlayment & Ice & Water',
          description: 'We install quality synthetic underlayment and ice & water shield at all vulnerable areas for added leak protection beneath every new roof.',
        },
        {
          title: 'Ventilation Upgrade',
          description: 'Improper attic ventilation shortens roof life dramatically. We assess and correct ventilation as part of every replacement project.',
        },
        {
          title: 'Tile Roofing',
          description: 'Concrete and clay tile roofing for homes requiring a distinctive aesthetic. Long-lasting and low-maintenance when installed over a proper substrate.',
        },
      ]}
      relatedServices={[
        { label: 'Residential Roofing', href: '/services/residential-roofing' },
        { label: 'Commercial Roofing', href: '/services/commercial-roofing' },
        { label: 'Storm & Hail Damage', href: '/services/storm-hail-damage' },
        { label: 'Roof Inspections', href: '/services/roof-inspections' },
        { label: 'Skylights & Ventilation', href: '/services/skylights-ventilation' },
      ]}
    />
  )
}
