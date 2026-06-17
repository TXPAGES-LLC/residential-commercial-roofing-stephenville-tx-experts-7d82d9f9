import Link from 'next/link'

const galleryImages = [
  {
    src: 'https://heritageroofingtexas.com/wp-content/uploads/2026/05/10654.jpg',
    alt: 'Completed residential roof replacement Stephenville TX',
  },
  {
    src: 'https://heritageroofingtexas.com/wp-content/uploads/2026/05/11729.jpg',
    alt: 'Heritage Roofing crew on commercial roofing project Texas',
  },
  {
    src: 'https://heritageroofingtexas.com/wp-content/uploads/2026/04/medium-shot-man-working-roof_23-2149343643.jpg',
    alt: 'Roofing contractor working on a Texas home',
  },
  {
    src: 'https://heritageroofingtexas.com/wp-content/uploads/2024/02/Roofing-Contractors-1.webp',
    alt: 'Heritage Roofing team — roofing contractors Stephenville',
  },
  {
    src: 'https://heritageroofingtexas.com/wp-content/uploads/2024/02/Residential-Roofing.webp',
    alt: 'New residential roof shingle installation Central Texas',
  },
  {
    src: 'https://heritageroofingtexas.com/wp-content/uploads/2024/02/Commercial-Roofing.webp',
    alt: 'Commercial flat roof installation Texas',
  },
]

export default function GallerySection() {
  return (
    <section className="py-16 md:py-20 bg-[#f3f4f6]" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-sans text-[#4054b2] font-semibold text-sm uppercase tracking-widest mb-2">Our Work</p>
          <h2 id="gallery-heading" className="font-serif text-3xl md:text-4xl text-[#111827] font-bold text-balance">
            Recent Roofing Projects in Stephenville &amp; Central Texas
          </h2>
          <p className="font-sans text-gray-600 mt-4 max-w-xl mx-auto">
            Browse completed residential and commercial roofing projects from the Heritage Roofing team.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, i) => (
            <div
              key={i}
              className="aspect-video overflow-hidden rounded-lg shadow-sm bg-gray-200"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={480}
                height={270}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#4054b2] hover:bg-[#2e3d8f] text-white font-serif font-bold uppercase tracking-wide text-sm px-8 py-3.5 rounded transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
