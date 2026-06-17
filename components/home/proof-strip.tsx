const stats = [
  { value: '25+', label: 'Years Serving Texas' },
  { value: '5,000+', label: 'Roofs Completed' },
  { value: '3', label: 'Office Locations' },
  { value: '4.9★', label: 'Average Review Rating' },
  { value: '100%', label: 'Licensed & Insured' },
  { value: '7 Days', label: 'Emergency Availability' },
]

export default function ProofStrip() {
  return (
    <section className="bg-[#4054b2] py-10" aria-label="Heritage Roofing credentials and proof points">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5">
              <span className="font-serif font-bold text-white text-2xl md:text-3xl leading-none">{stat.value}</span>
              <span className="font-sans text-white/70 text-xs uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
