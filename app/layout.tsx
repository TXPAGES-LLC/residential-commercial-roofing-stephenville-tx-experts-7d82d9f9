import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import ScrollToTop from '@/components/ScrollToTop'
import Analytics from '@/components/Analytics'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})

const OG_TITLE = 'Heritage Roofing, Inc. | Stephenville TX Roofing Contractor'
const OG_DESCRIPTION =
  'Trusted roofing contractor in Stephenville, TX since 1986. Residential & commercial roofing, storm & hail damage repair, roof inspections, and emergency service. Call 254-968-7663.'
const BASE_URL = 'https://heritageroofingtexas.com'
const OG_IMAGE = `${BASE_URL}/og-image.jpg`

export const metadata: Metadata = {
  title: 'Heritage Roofing, Inc. | Stephenville TX Roofers Since 1986',
  description: OG_DESCRIPTION,
  keywords:
    'roofing Stephenville TX, roof repair Stephenville, commercial roofing Texas, residential roofing, storm damage repair, hail damage roof, Heritage Roofing Inc, roofing contractor since 1986',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: BASE_URL },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon-dark-32x32.png',
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: BASE_URL,
    siteName: 'Heritage Roofing, Inc.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Stone home with new architectural shingle roof — Heritage Roofing, Inc. Stephenville TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export const viewport: Viewport = {
  themeColor: '#0f1840',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  maximumScale: 5,
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      '@id': 'https://heritageroofingtexas.com/#business',
      name: 'Heritage Roofing, Inc.',
      url: 'https://heritageroofingtexas.com',
      logo: 'https://heritageroofingtexas.com/2026-logo.png',
      image: 'https://heritageroofingtexas.com/og-image.jpg',
      foundingDate: '1986',
      telephone: '+12549687663',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1590 N Bates Street',
        addressLocality: 'Stephenville',
        addressRegion: 'TX',
        postalCode: '76401',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 32.2207, longitude: -98.2023 },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Stephenville', containedInPlace: 'TX' },
        { '@type': 'City', name: 'Granbury', containedInPlace: 'TX' },
        { '@type': 'City', name: 'Brownwood', containedInPlace: 'TX' },
        { '@type': 'City', name: 'Dublin', containedInPlace: 'TX' },
        { '@type': 'City', name: 'Glen Rose', containedInPlace: 'TX' },
        { '@type': 'City', name: 'Mineral Wells', containedInPlace: 'TX' },
        { '@type': 'City', name: 'Hamilton', containedInPlace: 'TX' },
        { '@type': 'City', name: 'Hico', containedInPlace: 'TX' },
        { '@type': 'City', name: 'Weatherford', containedInPlace: 'TX' },
        { '@type': 'City', name: 'Eastland', containedInPlace: 'TX' },
        { '@type': 'City', name: 'De Leon', containedInPlace: 'TX' },
        { '@type': 'City', name: 'Coleman', containedInPlace: 'TX' },
        { '@type': 'City', name: 'Comanche', containedInPlace: 'TX' },
      ],
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://heritageroofingtexas.com/#website',
      url: 'https://heritageroofingtexas.com',
      name: 'Heritage Roofing, Inc.',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} bg-[#f8f7f5]`}>
      <head>
        {/* Preload the homepage LCP image so the browser discovers it immediately */}
        <link
          rel="preload"
          as="image"
          href="/12.jpg"
          fetchPriority="high"
        />
        {/* Preconnect to Google Fonts CDN to shave font latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ScrollToTop />
        <Analytics />
        {children}
        {/* GA4 — Google tag (gtag.js). One snippet, loaded once here.
            Client-side route changes are tracked by <Analytics /> above.
            page_path is omitted from config to avoid double-counting on hard load. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DDG076BECM"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DDG076BECM');
          `}
        </Script>
      </body>
    </html>
  )
}
