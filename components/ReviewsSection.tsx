const reviews = [
  {
    name: 'Sarah M.',
    location: 'Stephenville, TX',
    rating: 5,
    text: 'Heritage Roofing replaced our entire roof after hail damage. They handled the insurance claim, showed up on time, and finished in two days. Roof looks amazing and the crew was respectful and professional.',
  },
  {
    name: 'Mike T.',
    location: 'Granbury, TX',
    rating: 5,
    text: 'Called them for an emergency leak on a Sunday. They came out the same day, tarped it, and came back Monday to fix it permanently. Fair price, honest service. Highly recommend.',
  },
  {
    name: 'Linda R.',
    location: 'Brownwood, TX',
    rating: 5,
    text: 'We own a commercial building and needed flat roof work. Heritage gave us a detailed estimate, completed the work on schedule, and stayed within budget. Great communication throughout.',
  },
  {
    name: 'James W.',
    location: 'Hico, TX',
    rating: 5,
    text: 'Best roofing company in Central Texas. They repaired our chimney flashing and replaced damaged shingles. No high-pressure sales, just straightforward honest service.',
  },
]

export default function ReviewsSection() {
  return (
    <section style={{ backgroundColor: '#f8f7f5' }} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty">
            Real reviews from real customers across Stephenville, Granbury, Brownwood, and Central Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-[#e2ddd6] shadow-sm">
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">"{review.text}"</p>
              <div className="text-sm">
                <p className="font-semibold" style={{ color: '#1a1a1a' }}>{review.name}</p>
                <p className="text-gray-600">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 border-2 border-[#4054b2] text-[#4054b2] hover:bg-[#4054b2] hover:text-white font-bold px-6 py-3 rounded transition-colors"
          >
            Read All Reviews
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
