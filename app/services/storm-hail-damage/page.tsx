import type { Metadata } from 'next'
import ServicePageLayout from '@/components/service-page-layout'

export const metadata: Metadata = {
  title: 'Storm & Hail Damage Roof Repair Texas | Heritage Roofing',
  description:
    'Storm or hail damage your roof? Heritage Roofing responds fast across Central Texas. Insurance claim support, emergency tarping, and repairs. Call 254-968-7663.',
  alternates: { canonical: 'https://heritageroofingtexas.com/services/storm-hail-damage' },
  openGraph: {
    title: 'Storm & Hail Damage Roof Repair Texas | Heritage Roofing',
    description: 'Storm and hail damaged your roof? Heritage Roofing responds fast across Stephenville TX and Central Texas. Insurance claim support, emergency tarping & repair. Call 254-968-7663.',
    url: 'https://heritageroofingtexas.com/services/storm-hail-damage',
    type: 'website',
    images: [{ url: 'https://heritageroofingtexas.com/og-image.jpg', width: 1200, height: 630, alt: 'Storm and hail damage roof repair — Heritage Roofing, Inc.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Storm & Hail Damage Roof Repair | Heritage Roofing',
    description: 'Storm or hail damaged your roof? Heritage Roofing responds fast across Central Texas. Insurance claim support. Call 254-968-7663.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

export default function StormHailDamagePage() {
  return (
    <ServicePageLayout
      title="Storm & Hail Damage Roof Repair in Texas"
      subtitle="Storm & Hail Damage"
      pageUrl="https://heritageroofingtexas.com/services/storm-hail-damage"
      heroImg="/storm-damage.jpg"
      heroImgAlt="Chalk circles marking hail impact points on asphalt shingles — Heritage Roofing storm damage inspection Texas"
      description="Texas hail and wind storms can cause serious roof damage that isn't always visible from the ground. Heritage Roofing responds quickly, documents every point of damage, and works directly with your insurance company to get your roof fixed fast."
      cta="Emergency: Call Now 7 Days/Week"
      benefits={[
        'Same-day or next-day storm response',
        'Free storm damage inspection',
        'Insurance documentation with photos',
        'Direct adjuster coordination',
        'Emergency tarping to prevent interior damage',
        'Full replacement or targeted repair',
        'Available 7 days a week including weekends',
        'No out-of-pocket surprises',
      ]}
      services={[
        {
          title: 'Hail Damage Assessment',
          description: 'Hail damage isn\'t always visible from the ground. Our trained inspectors identify granule loss, bruised shingles, cracked ridge caps, and dented metal that indicate a valid insurance claim.',
        },
        {
          title: 'Insurance Claim Support',
          description: 'We prepare detailed damage reports with photos and work directly with your insurance adjuster to ensure your claim accurately reflects the damage to your property.',
        },
        {
          title: 'Emergency Tarping',
          description: 'When a storm tears off shingles or creates active leaks, we respond fast with emergency tarping to stop water entry and protect your interior until repairs are completed.',
        },
        {
          title: 'Wind Damage Repair',
          description: 'High winds lift and blow off shingles, damage flashing, and compromise ridge caps. We identify and repair all wind damage to restore full weather protection.',
        },
        {
          title: 'Full Storm Replacement',
          description: 'When storm damage is extensive, a complete roof replacement is often the right answer. We handle the process from insurance approval through final inspection.',
        },
        {
          title: 'Post-Storm Inspection',
          description: 'Even if you don\'t see visible damage after a major storm, a professional inspection is always worthwhile. Many insurance-covered problems are only visible from the roof itself.',
        },
      ]}
      relatedServices={[
        { label: 'Roof Repair', href: '/services/roof-repair' },
        { label: 'Roof Replacement', href: '/services/roof-replacement' },
        { label: 'Emergency Repairs', href: '/services/emergency-repairs' },
        { label: 'Roof Inspections', href: '/services/roof-inspections' },
        { label: 'Residential Roofing', href: '/services/residential-roofing' },
      ]}
    />
  )
}
