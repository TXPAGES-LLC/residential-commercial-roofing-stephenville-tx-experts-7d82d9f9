import Link from 'next/link'

const projects = [
  { src: 'https://heritageroofingtexas.com/wp-content/uploads/2024/01/residential-roofing.webp', alt: 'Completed residential roof installation Stephenville TX' },
  { src: 'https://heritageroofingtexas.com/wp-content/uploads/2024/01/commercial-roofing.webp', alt: 'Commercial flat roof project Central Texas' },
  { src: 'https://heritageroofingtexas.com/wp-content/uploads/2024/01/storm-damage.webp', alt: 'Storm damage roof repair after Texas hailstorm' },
  { src: 'https://heritageroofingtexas.com/wp-content/uploads/2024/01/roof-replacement.webp', alt: 'Complete roof replacement with new shingles' },
  { src: 'https://heritageroofingtexas.com/wp-content/uploads/2024/01/roof-repair.webp', alt: 'Professional roof leak repair Stephenville' },
  { src: 'https://heritageroofingtexas.com/wp-content/uploads/2024/01/roof-inspection.webp', alt: 'Thorough roof inspection services Texas' },
]

export default function GallerySection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4 text-balance">
            Recent Projects
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty">
            See the quality and craftsmanship we bring to every roofing project across Stephenville, Granbury, Brownwood, and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <div key={idx} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border-2 border-[#4054b2] text-[#4054b2] hover:bg-[#4054b2] hover:text-white font-bold px-6 py-3 rounded transition-colors"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
