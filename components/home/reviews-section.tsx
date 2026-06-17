import Link from 'next/link'

const reviews = [
  {
    name: 'Mark T.',
    location: 'Stephenville, TX',
    rating: 5,
    text: 'After the hail storm last spring, Heritage Roofing came out the next day, walked my roof, documented everything, and handled the insurance claim. New roof in two weeks. These guys are the real deal.',
    date: '2024',
  },
  {
    name: 'Donna K.',
    location: 'Granbury, TX',
    rating: 5,
    text: 'I\'ve used Heritage Roofing twice now — once for a repair and once for a full replacement. Professional crew, clean worksite, and they stood behind their work when I had a follow-up question six months later.',
    date: '2024',
  },
  {
    name: 'James R.',
    location: 'Brownwood, TX',
    rating: 5,
    text: 'Called on a Sunday after a major leak. They were at my house within three hours, got it tarped and stopped the water. Scheduled the full repair for that week. Couldn\'t ask for better response time.',
    date: '2024',
  },
  {
    name: 'Carol W.',
    location: 'Dublin, TX',
    rating: 5,
    text: 'Very honest assessment. They told me I didn\'t need a full replacement when another company said I did. Saved me thousands. That kind of honesty earns loyalty.',
    date: '2024',
  },
  {
    name: 'Tom & Linda S.',
    location: 'Hico, TX',
    rating: 5,
    text: 'Heritage handled a major commercial job for our shop. On time, on budget, and no mess left behind. We\'ll use them again without question.',
    date: '2024',
  },
  {
    name: 'Robert H.',
    location: 'Weatherford, TX',
    rating: 5,
    text: 'From inspection to completion, everything was communicated clearly. The crew was respectful of our property and finished in one day. Excellent workmanship.',
    date: '2024',
  },
]

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function ReviewsSection() {
  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-sans text-[#4054b2] font-semibold text-sm uppercase tracking-widest mb-2">What Customers Say</p>
          <h2 id="reviews-heading" className="font-serif text-3xl md:text-4xl text-[#111827] font-bold text-balance">
            Trusted by Homeowners &amp; Businesses Across Central Texas
          </h2>
          <p className="font-sans text-gray-600 mt-4 max-w-xl mx-auto">
            Real reviews from real customers. Heritage Roofing earns its reputation one roof at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="bg-[#f3f4f6] border border-gray-200 rounded-lg p-6 flex flex-col gap-3"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => <StarIcon key={i} />)}
              </div>
              <blockquote className="font-sans text-gray-700 text-sm leading-relaxed flex-1" itemProp="reviewBody">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
                <div className="w-9 h-9 rounded-full bg-[#4054b2] flex items-center justify-center text-white font-serif font-bold text-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-[#111827]" itemProp="author">{review.name}</p>
                  <p className="font-sans text-xs text-gray-500">{review.location} &bull; {review.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 border-2 border-[#4054b2] text-[#4054b2] hover:bg-[#4054b2] hover:text-white font-serif font-bold uppercase tracking-wide text-sm px-8 py-3.5 rounded transition-colors"
          >
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  )
}
