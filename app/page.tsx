import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import HeroSection from '@/components/HeroSection'
import TrustStrip from '@/components/TrustStrip'
import ServicesSection from '@/components/ServicesSection'
import StormDamageSection from '@/components/StormDamageSection'
import ResidentialCommercialSection from '@/components/ResidentialCommercialSection'
import ServiceAreaSection from '@/components/ServiceAreaSection'
import ProcessSection from '@/components/ProcessSection'
import ReviewsSection from '@/components/ReviewsSection'
import FAQSection from '@/components/FAQSection'
import ConversionSection from '@/components/ConversionSection'
import MobileCallButton from '@/components/MobileCallButton'

export const metadata = {
  title: 'Heritage Roofing, Inc. | Stephenville TX Roofers Since 1986',
  description:
    'Trusted roofing contractor in Stephenville TX since 1986. Residential & commercial roofing, storm damage repair, roof inspections, and emergency service. Call 254-968-7663.',
  alternates: { canonical: 'https://heritageroofingtexas.com' },
  openGraph: {
    title: 'Heritage Roofing, Inc. | Roofing Contractor Stephenville TX Since 1986',
    description:
      'Trusted roofing contractor in Stephenville, TX since 1986. Residential & commercial roofing, storm damage, inspections, and emergency service. Call 254-968-7663.',
    url: 'https://heritageroofingtexas.com',
    siteName: 'Heritage Roofing, Inc.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stone home with finished architectural shingle roof — Heritage Roofing, Inc. Stephenville TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heritage Roofing, Inc. | Stephenville TX Roofing Contractor',
    description:
      'Trusted roofing contractor in Stephenville, TX since 1986. Residential & commercial roofing, storm damage, inspections, and emergency service. Call 254-968-7663.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <StormDamageSection />
        <ResidentialCommercialSection />
        <ServiceAreaSection />
        <ProcessSection />
        <ReviewsSection />
        <FAQSection />
        <ConversionSection />
      </main>
      <SiteFooter />
      <MobileCallButton />
    </>
  )
}
