import type { Metadata } from 'next'
import ServicePageLayout from '@/components/service-page-layout'

export const metadata: Metadata = {
  title: 'Residential Roofing Stephenville TX | Heritage Roofing',
  description:
    'Expert residential roofing in Stephenville TX and Central Texas. New roof installation, replacement, and repair by Heritage Roofing. Licensed & insured. Call 254-968-7663.',
  alternates: { canonical: 'https://heritageroofingtexas.com/services/residential-roofing' },
  openGraph: {
    title: 'Residential Roofing Stephenville TX | Heritage Roofing',
    description: 'Expert residential roofing in Stephenville TX and Central Texas. New roof installation, replacement, and repair by Heritage Roofing. Licensed & insured. Call 254-968-7663.',
    url: 'https://heritageroofingtexas.com/services/residential-roofing',
    type: 'website',
    images: [{ url: 'https://heritageroofingtexas.com/12.jpg', width: 1440, height: 700, alt: 'Stone ranch home with new dark gray architectural shingles — residential roofing by Heritage Roofing, Stephenville TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Roofing Stephenville TX | Heritage Roofing',
    description: 'Expert residential roofing in Stephenville TX. New installation, replacement, and repair. Call 254-968-7663.',
    images: ['https://heritageroofingtexas.com/12.jpg'],
  },
}

export default function ResidentialRoofingPage() {
  return (
    <ServicePageLayout
      title="Residential Roofing in Stephenville TX"
      subtitle="Residential Roofing"
      pageUrl="https://heritageroofingtexas.com/services/residential-roofing"
      heroImg="/12.jpg"
      heroImgAlt="Single-story stone ranch home with new dark gray architectural shingles — Heritage Roofing, Stephenville TX"
      description="Heritage Roofing installs, replaces, and repairs residential roofs across Stephenville and Central Texas. From architectural shingles to metal roofing, we match the right system to your home, budget, and climate."
      benefits={[
        'Licensed & insured roofing contractor',
        'Architectural shingles, metal, tile, and more',
        'Honest assessment — no unnecessary upsells',
        'Manufacturer-backed material warranties',
        'Workmanship warranty on every job',
        'Clean jobsite, complete cleanup',
        'Free roof inspection and estimate',
        'Serving Erath County and surrounding areas',
      ]}
      services={[
        {
          title: 'New Roof Installation',
          description: 'Full new roof installation for new construction homes across Stephenville, Granbury, and Central Texas. We guide you through material selection and install with precision.',
        },
        {
          title: 'Roof Replacement',
          description: 'When repair isn\'t enough, we remove your old roof system and install a fresh, warranted replacement. Efficient, clean, and done right.',
        },
        {
          title: 'Shingle Roofing',
          description: 'Architectural asphalt shingles are the most popular choice for Texas homes. We install impact-resistant options that hold up against hail and wind.',
        },
        {
          title: 'Metal Roofing',
          description: 'Standing seam and corrugated metal roofing is increasingly popular in Texas for its durability, energy efficiency, and longevity of 40–70 years.',
        },
        {
          title: 'Roof Maintenance',
          description: 'Regular maintenance extends roof life significantly. We offer annual inspection programs to catch problems early and prevent costly damage.',
        },
        {
          title: 'Emergency Roof Repairs',
          description: 'When storms hit, we respond fast. Emergency tarping and repair service available 7 days a week to protect your home.',
        },
      ]}
      relatedServices={[
        { label: 'Roof Repair', href: '/services/roof-repair' },
        { label: 'Roof Replacement', href: '/services/roof-replacement' },
        { label: 'Storm & Hail Damage', href: '/services/storm-hail-damage' },
        { label: 'Roof Inspections', href: '/services/roof-inspections' },
        { label: 'Emergency Roof Repair', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
