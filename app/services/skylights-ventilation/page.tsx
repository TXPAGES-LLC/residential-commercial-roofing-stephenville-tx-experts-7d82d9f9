import type { Metadata } from 'next'
import ServicePageLayout from '@/components/service-page-layout'

export const metadata: Metadata = {
  title: 'Skylights & Attic Ventilation TX | Heritage Roofing',
  description:
    'Skylight installation, replacement, and attic ventilation services in Stephenville TX. Heritage Roofing improves comfort and roof longevity. Call 254-968-7663.',
  alternates: { canonical: 'https://heritageroofingtexas.com/services/skylights-ventilation' },
  openGraph: {
  title: 'Skylights & Attic Ventilation TX | Heritage Roofing',
    description: 'Skylight installation, replacement, and attic ventilation services in Stephenville TX. Heritage Roofing improves comfort and roof longevity. Call 254-968-7663.',
    url: 'https://heritageroofingtexas.com/services/skylights-ventilation',
    type: 'website',
    images: [{ url: 'https://heritageroofingtexas.com/og-image.jpg', width: 1200, height: 630, alt: 'Skylight and ventilation installation — Heritage Roofing, Inc.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skylight Installation & Attic Ventilation | Heritage Roofing',
    description: 'Skylight installation and attic ventilation in Stephenville TX. Improve comfort and roof life. Call 254-968-7663.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

export default function SkylightsVentilationPage() {
  return (
    <ServicePageLayout
      title="Skylights & Attic Ventilation in Texas"
      subtitle="Skylights & Ventilation"
      pageUrl="https://heritageroofingtexas.com/services/skylights-ventilation"
      heroImg="/metal-roof.jpg"
      heroImgAlt="White standing seam metal roof with turbine ventilation — Heritage Roofing skylights and ventilation TX"
      description="Heritage Roofing installs and replaces skylights and designs proper attic ventilation systems that extend roof life, reduce energy costs, and keep your home more comfortable in Texas heat."
      benefits={[
        'Skylight installation and replacement',
        'Proper flashing for watertight skylights',
        'Ridge vent, soffit, and powered ventilation',
        'Attic ventilation assessment included',
        'Reduce cooling costs in Texas summers',
        'Prevent moisture and mold issues',
        'Licensed and fully insured installation',
        'All brands and sizes available',
      ]}
      services={[
        {
          title: 'Skylight Installation',
          description: 'New skylight installation with proper deck cutting, flashing, and waterproofing. We size, position, and flash skylights to eliminate leak risk from day one.',
        },
        {
          title: 'Skylight Replacement',
          description: 'Leaking or outdated skylights are removed and replaced with modern, energy-efficient units. We properly reflash and reseal every skylight we install.',
        },
        {
          title: 'Attic Ventilation Assessment',
          description: 'Insufficient ventilation is one of the leading causes of premature roof failure in Texas. We calculate required ventilation and recommend the right solution.',
        },
        {
          title: 'Ridge & Soffit Vents',
          description: 'A continuous ridge vent combined with adequate soffit venting creates proper airflow through your attic, reducing heat buildup and moisture.',
        },
        {
          title: 'Powered Attic Ventilators',
          description: 'In extreme heat conditions, powered attic ventilators provide active exhausting of superheated attic air, reducing cooling loads significantly.',
        },
        {
          title: 'Gable Vents',
          description: 'Gable vents provide additional attic ventilation and are particularly effective when combined with a comprehensive balanced ventilation strategy.',
        },
      ]}
      relatedServices={[
        { label: 'Residential Roofing', href: '/services/residential-roofing' },
        { label: 'Roof Replacement', href: '/services/roof-replacement' },
        { label: 'Roof Inspections', href: '/services/roof-inspections' },
        { label: 'Roof Repair', href: '/services/roof-repair' },
        { label: 'Commercial Roofing', href: '/services/commercial-roofing' },
      ]}
    />
  )
}
