import type { Metadata } from 'next'
import ServicePageLayout from '@/components/service-page-layout'

export const metadata: Metadata = {
  title: 'Roof Repair Stephenville TX | Heritage Roofing',
  description:
    'Fast, reliable roof repair in Stephenville TX and Central Texas. Heritage Roofing fixes leaks, missing shingles, flashing, and storm damage. Call 254-968-7663.',
  alternates: { canonical: 'https://heritageroofingtexas.com/services/roof-repair' },
  openGraph: {
    title: 'Roof Repair Stephenville TX | Heritage Roofing',
    description: 'Fast, reliable roof repair in Stephenville TX and Central Texas. Heritage Roofing fixes leaks, missing shingles, flashing, and storm damage. Call 254-968-7663.',
    url: 'https://heritageroofingtexas.com/services/roof-repair',
    type: 'website',
    images: [{ url: 'https://heritageroofingtexas.com/roof-repair.jpg', width: 1440, height: 700, alt: 'Roof deck exposed after storm-damaged shingles removed — roof repair in progress by Heritage Roofing, Stephenville TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Repair Stephenville TX | Heritage Roofing',
    description: 'Fast, reliable roof repair in Stephenville TX and Central Texas. Call 254-968-7663.',
    images: ['https://heritageroofingtexas.com/roof-repair.jpg'],
  },
}

export default function RoofRepairPage() {
  return (
    <ServicePageLayout
      title="Roof Repair in Stephenville TX"
      subtitle="Roof Repair"
      pageUrl="https://heritageroofingtexas.com/services/roof-repair"
      heroImg="/roof-repair.jpg"
      heroImgAlt="Roof deck exposed after storm-damaged shingles removed — Heritage Roofing repair in progress"
      description="Don't let a small roof problem become a major expense. Heritage Roofing finds the source of roof leaks and damage fast, explains the fix clearly, and repairs it right the first time."
      benefits={[
        'Fast response for active leaks',
        'Accurate leak source detection',
        'Shingle, flashing, and membrane repair',
        'Transparent written estimates',
        'No unnecessary upsells',
        'Workmanship warranty on all repairs',
        'Available 7 days for emergencies',
        'Serving all of Central Texas',
      ]}
      services={[
        {
          title: 'Leak Detection & Repair',
          description: 'We trace roof leaks to the exact source — not just the symptom — and provide a permanent repair. Interior staining rarely marks the leak location directly.',
        },
        {
          title: 'Shingle Repair & Replacement',
          description: 'Missing, cracked, or curling shingles are repaired with matched materials. We never patch with mismatched products that compromise your roof\'s integrity.',
        },
        {
          title: 'Flashing Repair',
          description: 'Failed flashing at chimneys, skylights, vents, and valleys is one of the most common causes of roof leaks. We reseal and replace flashing properly.',
        },
        {
          title: 'Valley Repair',
          description: 'Roof valleys see heavy water flow and are prone to wear. We repair valley systems to restore proper drainage and prevent ice damming in cold snaps.',
        },
        {
          title: 'Ridge Cap Repair',
          description: 'Wind frequently damages ridge caps first. We repair and replace ridge cap shingles to restore both aesthetics and weather protection at the roof peak.',
        },
        {
          title: 'Flat Roof Repair',
          description: 'Blisters, seam failures, and membrane punctures on flat commercial or residential roofs are identified and repaired with compatible materials.',
        },
      ]}
      relatedServices={[
        { label: 'Storm & Hail Damage', href: '/services/storm-hail-damage' },
        { label: 'Emergency Roof Repair', href: '/services/emergency-repairs' },
        { label: 'Roof Inspections', href: '/services/roof-inspections' },
        { label: 'Roof Replacement', href: '/services/roof-replacement' },
        { label: 'Residential Roofing', href: '/services/residential-roofing' },
      ]}
    />
  )
}
