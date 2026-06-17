import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import MobileCallButton from '@/components/MobileCallButton'
import Link from 'next/link'

export const metadata = {
  title: 'Roofing Project Gallery | Heritage Roofing — Stephenville TX',
  description:
    'Browse completed roofing projects by Heritage Roofing, Inc. across Stephenville, Granbury, and Brownwood, TX. Residential, commercial, storm damage, and metal roofing photos.',
  alternates: { canonical: 'https://heritageroofingtexas.com/gallery' },
  openGraph: {
    title: 'Roofing Project Gallery | Heritage Roofing, Inc. — Stephenville TX',
    description: 'Browse real roofing projects completed by Heritage Roofing, Inc. in Stephenville, Granbury, Brownwood, and surrounding Central Texas communities.',
    url: 'https://heritageroofingtexas.com/gallery',
    type: 'website',
    images: [
      {
        url: 'https://heritageroofingtexas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heritage Roofing, Inc. roofing project gallery — Stephenville TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Project Gallery | Heritage Roofing, Inc.',
    description: 'Browse real roofing projects completed by Heritage Roofing, Inc. across Central Texas.',
    images: ['https://heritageroofingtexas.com/og-image.jpg'],
  },
}

const categories = [
  {
    label: 'Completed Projects',
    description: 'Finished residential and commercial roofing jobs completed by Heritage Roofing, Inc. across Stephenville and Central Texas.',
    photos: [
      {
        src: '/10.jpg',
        alt: 'Two-story brick and stone home with new dark brown architectural shingles — Heritage Roofing Stephenville TX',
        caption: 'Residential replacement — two-story brick home',
      },
      {
        src: '/11.jpg',
        alt: 'Completed roof replacement on two-story stone home in Central Texas — Heritage Roofing',
        caption: 'Completed re-roof — stone and brick home',
      },
      {
        src: '/12.jpg',
        alt: 'Single-story stone ranch home with new dark gray architectural shingles surrounded by oak trees — Stephenville TX',
        caption: 'Stone ranch home — new architectural shingles',
      },
      {
        src: '/13.jpg',
        alt: 'Modern Texas stone home with taupe architectural shingles — Heritage Roofing new construction',
        caption: 'New construction — modern stone home',
      },
      {
        src: '/14.jpg',
        alt: 'Completed roof on modern stone home with charcoal shingles and stone exterior — Heritage Roofing TX',
        caption: 'Modern stone home — charcoal shingles',
      },
      {
        src: '/9.jpg',
        alt: 'Large Spanish Mediterranean mansion with clay tile roof under construction — Heritage Roofing crew on site',
        caption: 'Spanish Mediterranean estate — clay tile roof',
      },
      {
        src: '/img-1081.jpg',
        alt: 'Commercial metal panel roof installation on industrial building in Central Texas — Heritage Roofing',
        caption: 'Commercial metal panel roof — industrial building',
      },
    ],
  },
  {
    label: 'Notable Projects',
    description: 'Historic restorations and landmark properties roofed by Heritage Roofing in the Stephenville area.',
    photos: [
      {
        src: '/oxford-house-stephenville-tx-historical-house-museum-arcella-shake-75.jpg',
        alt: 'Oxford House Historical Museum in Stephenville TX — Heritage Roofing cedar shake shingle restoration on Victorian landmark',
        caption: 'Oxford House — Stephenville Historical Museum cedar shake restoration',
      },
    ],
  },
  {
    label: 'Storm & Hail Damage',
    description: 'Real hail and storm damage documentation from inspections across Central Texas.',
    photos: [
      {
        src: '/storm-damage.jpg',
        alt: 'Chalk circles marking hail impact points on asphalt shingles at roof valley — Heritage Roofing storm damage inspection',
        caption: 'Hail impacts circled at roof valley',
      },
      {
        src: '/roof-repair.jpg',
        alt: 'Roof decking exposed after storm-damaged shingles removed — repair in progress Heritage Roofing TX',
        caption: 'Storm repair — decking exposed, ready for re-shingle',
      },
      {
        src: '/20200602-152812.jpg',
        alt: 'Cracked and peeling asphalt shingles from age and storm wear — Stephenville TX roof inspection',
        caption: 'Damaged shingles — candidate for replacement',
      },
      {
        src: '/20200602-152909.jpg',
        alt: 'Hail impact marks circled on asphalt shingles during Heritage Roofing inspection',
        caption: 'Hail impact documentation',
      },
      {
        src: '/20200602-152937.jpg',
        alt: 'Multiple hail damage points circled on brown asphalt shingles',
        caption: 'Multiple hail strikes per square foot',
      },
      {
        src: '/20200602-152952.jpg',
        alt: 'Close-up hail damage with stress cracks on asphalt roof shingles',
        caption: 'Stress cracking from hail impact',
      },
      {
        src: '/20200818-125426.jpg',
        alt: 'Granule loss and dark patches on asphalt shingle roof indicating age damage',
        caption: 'Granule loss and blistering',
      },
      {
        src: '/20200602-152806.jpg',
        alt: 'Wind-blown and cracked shingles near pipe boot — storm damage in Central Texas',
        caption: 'Wind damage near pipe penetration',
      },
    ],
  },
  {
    label: 'Roof Repair & Replacement',
    description: 'Residential tear-offs, shingle replacement, and repair work completed by our crew.',
    photos: [
      {
        src: '/20160324-120423.jpg',
        alt: 'Heritage Roofing crew tearing off old residential roof in Central Texas',
        caption: 'Residential tear-off in progress',
      },
      {
        src: '/20160324-120523.jpg',
        alt: 'Heritage Roofing workers completing roof tear-off and prep for new shingles',
        caption: 'Full tear-off before re-roof',
      },
      {
        src: '/20180529-125627.jpg',
        alt: 'Hail damaged shingles with impact marks documented for insurance claim',
        caption: 'Hail damage prior to replacement',
      },
      {
        src: '/20180529-125647.jpg',
        alt: 'Close-up storm damage on asphalt shingles requiring replacement',
        caption: 'Impact damage requiring full replacement',
      },
    ],
  },
  {
    label: 'Commercial Roofing',
    description: 'Flat roof systems, TPO, and metal roofing on commercial properties across Central Texas.',
    photos: [
      {
        src: '/img-0228.jpg',
        alt: 'White TPO flat roof with pipe boots and HVAC penetrations on commercial building — Heritage Roofing TX',
        caption: 'TPO flat roof installation',
      },
      {
        src: '/img-0229.jpg',
        alt: 'White TPO commercial flat roof with parapet edge and pipe boots — Stephenville TX',
        caption: 'Commercial flat roof with clean parapet edge',
      },
      {
        src: '/img-1135.jpg',
        alt: 'Large white commercial foam/TPO roof with curb-mounted HVAC unit — Heritage Roofing',
        caption: 'Commercial roof system — HVAC curb detail',
      },
      {
        src: '/img-1136.jpg',
        alt: 'Wide commercial TPO flat roof with pipe penetrations — Heritage Roofing Central Texas',
        caption: 'Full commercial flat roof view',
      },

    ],
  },
  {
    label: 'Metal Roofing',
    description: 'Standing seam and corrugated metal roof installations for residential and commercial properties.',
    photos: [
      {
        src: '/20161221-141703.jpg',
        alt: 'Standing seam metal roof on stone building with chimney — Heritage Roofing Stephenville TX',
        caption: 'Standing seam metal roof on stone building',
      },
      {
        src: '/20161221-145144.jpg',
        alt: 'White corrugated metal roof panels installed on agricultural building — Central Texas',
        caption: 'Corrugated metal roof installation',
      },
    ],
  },
  {
    label: 'Roofing Materials',
    description: 'The range of roofing materials Heritage Roofing installs — from asphalt shingles and metal to TPO, tile, and slate.',
    photos: [
      {
        src: '/composition-roof.jpg',
        alt: 'Architectural asphalt composition shingles — the most common residential roofing material in Central Texas',
        caption: 'Architectural asphalt composition shingles',
      },
      {
        src: '/metal-roof-2.jpg',
        alt: 'Green standing seam metal roof on residential building — Heritage Roofing metal roofing TX',
        caption: 'Standing seam metal roof — residential',
      },
      {
        src: '/metal-roof.jpg',
        alt: 'White standing seam metal roof on commercial building — durable and energy-efficient roofing',
        caption: 'Standing seam metal roof — commercial',
      },
      {
        src: '/tpo-roof.jpg',
        alt: 'White TPO single-ply flat roof with skylights and pipe penetrations — commercial roofing',
        caption: 'TPO single-ply flat roof system',
      },
      {
        src: '/granulated-roll-roofing.jpg',
        alt: 'Granulated built-up gravel flat roof with HVAC equipment — commercial flat roofing Central Texas',
        caption: 'Built-up gravel flat roof with HVAC',
      },
      {
        src: '/modified-bitumen-roof.jpg',
        alt: 'Modified bitumen flat roof on large commercial building — Heritage Roofing Stephenville TX',
        caption: 'Modified bitumen flat roof system',
      },
      {
        src: '/tile-roof.jpg',
        alt: 'Terra cotta clay barrel tile roof — durable residential roofing option',
        caption: 'Clay barrel tile roofing',
      },
      {
        src: '/slate-roof.jpg',
        alt: 'Natural dark slate tile roof with wood fascia — premium residential roofing material',
        caption: 'Natural slate tile roofing',
      },
    ],
  },
  {
    label: 'Roof Details & Repairs',
    description: 'Flashings, pipe boots, ventilation, and detail work.',
    photos: [
      {
        src: '/img-0624.jpg',
        alt: 'Brick chimney with metal step flashing repair on asphalt shingle roof — Heritage Roofing',
        caption: 'Chimney flashing repair',
      },
      {
        src: '/img-0762.jpg',
        alt: 'Residential composition shingle roof with chimney flashing detail — Heritage Roofing Stephenville TX',
        caption: 'Composition shingle roof — chimney flashing detail',
      },
      {
        src: '/20200207-103254.jpg',
        alt: 'Roof vent pipe boot on asphalt shingle roof — Heritage Roofing ventilation service',
        caption: 'Pipe boot and roof vent detail',
      },
      {
        src: '/img-0619.jpg',
        alt: 'White metal roof section with turbine vent — Heritage Roofing metal roofing Texas',
        caption: 'Metal roof with turbine ventilation',
      },
    ],
  },
]

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* Page Header */}
        <section style={{ backgroundColor: '#0f1840' }} className="py-12 sm:py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300 mb-2">Our Work</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Roofing Project Gallery
            </h1>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed text-pretty">
              Real photos from real jobs — residential and commercial roofing, storm damage documentation, metal roofs, and repair work across Stephenville, Granbury, Brownwood, and Central Texas.
            </p>
          </div>
        </section>

        {/* Categories */}
        {categories.map((cat) => (
          <section key={cat.label} className="py-14 border-b border-gray-100 last:border-0">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-1" style={{ color: '#0f1840' }}>
                {cat.label}
              </h2>
              <p className="text-gray-500 text-sm mb-8">{cat.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {cat.photos.map((photo) => (
                  <figure key={photo.src} className="group rounded-lg overflow-hidden bg-gray-100">
                    {/* Aspect ratio container prevents CLS before image loads */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={300}
                      />
                    </div>
                    <figcaption className="px-3 py-2 text-xs text-gray-500 leading-snug">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Services strip */}
        <section style={{ backgroundColor: '#f5f3ef' }} className="py-10 px-4 border-t border-[#e2ddd6]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4054b2] mb-4">Our Services</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'Residential Roofing', href: '/services/residential-roofing' },
                { label: 'Commercial Roofing', href: '/services/commercial-roofing' },
                { label: 'Roof Repair', href: '/services/roof-repair' },
                { label: 'Roof Replacement', href: '/services/roof-replacement' },
                { label: 'Storm & Hail Damage', href: '/services/storm-hail-damage' },
                { label: 'Roof Inspections', href: '/services/roof-inspections' },
                { label: 'Emergency Repairs', href: '/services/emergency-repairs' },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-sm font-medium text-[#0f1840] border border-[#e2ddd6] bg-white hover:border-[#4054b2] hover:text-[#4054b2] px-4 py-2 rounded-full transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#0f1840' }} className="py-14 text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3 text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Call Heritage Roofing, Inc. for a free inspection and estimate — residential, commercial, storm damage, or metal roofing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:2549687663"
                className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold px-6 py-3 rounded transition-colors"
              >
                Call 254-968-7663
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0f1840] font-bold px-6 py-3 rounded transition-colors"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCallButton />
    </>
  )
}
