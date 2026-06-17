import type { Metadata } from 'next'
import ServicePageLayout from '@/components/service-page-layout'

export const metadata: Metadata = {
  title: 'Emergency Roof Repair TX | Heritage Roofing — 7 Days',
  description:
    'Emergency roof repair in Stephenville TX and Central Texas. Available 7 days a week for storm damage, active leaks, and urgent repairs. Call Heritage Roofing at 254-968-7663.',
  alternates: { canonical: 'https://heritageroofingtexas.com/services/emergency-repairs' },
  openGraph: {
    title: 'Emergency Roof Repairs Texas | Heritage Roofing — Available 7 Days',
    description: 'Emergency roof repair in Stephenville TX and Central Texas. Heritage Roofing available 7 days a week for storm damage, active leaks, and urgent roof issues. Call 254-968-7663.',
    url: 'https://heritageroofingtexas.com/services/emergency-repairs',
    type: 'website',
    images: [{ url: 'https://heritageroofingtexas.com/og-image.jpg', width: 1200, height: 630, alt: 'Emergency roof repair — Heritage Roofing, Inc. available 7 days' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Roof Repairs | Heritage Roofing — 7 Days a Week',
    description: 'Emergency roof repair in Stephenville TX and Central Texas. Available 7 days a week. Call 254-968-7663.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

export default function EmergencyRepairsPage() {
  return (
    <ServicePageLayout
      title="Emergency Roof Repairs in Texas"
      subtitle="Emergency Repairs — 7 Days/Week"
      pageUrl="https://heritageroofingtexas.com/services/emergency-repairs"
      heroImg="/20200602-152806.jpg"
      heroImgAlt="Wind-damaged shingles near pipe penetration requiring emergency roof repair — Heritage Roofing Central Texas"
      description="When a storm damages your roof or an active leak can't wait until Monday, Heritage Roofing is available 7 days a week. We respond fast, stop the damage, and get you scheduled for permanent repairs."
      cta="Emergency Line — Call Now"
      benefits={[
        'Available 7 days a week including weekends',
        'Same-day response to active leaks',
        'Emergency tarping to stop water entry',
        'Serving all of Central Texas',
        'Licensed, insured crew — not day labor',
        'Honest assessment of damage and options',
        'Transparent pricing, no emergency markups',
        'Permanent repair follow-up scheduling',
      ]}
      services={[
        {
          title: 'Active Leak Response',
          description: 'An active leak causes interior damage fast. We respond same-day or next-day to locate the leak source and stop water entry immediately.',
        },
        {
          title: 'Emergency Tarping',
          description: 'When large areas of roofing are compromised, emergency tarping provides immediate protection for your home or business until permanent repairs are completed.',
        },
        {
          title: 'Post-Storm Damage Control',
          description: 'After a major storm, we prioritize securing properties against further water entry. We document all damage for insurance purposes during the emergency response.',
        },
        {
          title: 'Tree Impact Damage',
          description: 'When a tree or large limb impacts your roof, we assess structural damage, remove debris, and secure the structure against additional weather exposure.',
        },
        {
          title: 'Flashing Failure',
          description: 'Failed flashing at chimneys, pipes, or skylights can open a direct water pathway into your home. Emergency flashing repairs stop leaks at the source.',
        },
        {
          title: 'Temporary Repairs',
          description: 'When a permanent fix requires materials or conditions that aren\'t immediately available, we install quality temporary repairs that actually hold until the permanent work is done.',
        },
      ]}
      relatedServices={[
        { label: 'Storm & Hail Damage', href: '/services/storm-hail-damage' },
        { label: 'Roof Repair', href: '/services/roof-repair' },
        { label: 'Roof Inspections', href: '/services/roof-inspections' },
        { label: 'Roof Replacement', href: '/services/roof-replacement' },
        { label: 'Residential Roofing', href: '/services/residential-roofing' },
      ]}
    />
  )
}
