export default function TrustStrip() {
  return (
    <section style={{ backgroundColor: '#f0efeb' }} className="py-8 border-b border-[#e2ddd6]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold mb-1" style={{ color: '#4054b2' }}>
              30+
            </div>
            <div className="text-sm md:text-base text-gray-700 font-medium">Years in Business</div>
          </div>

          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold mb-1" style={{ color: '#4054b2' }}>
              5,000+
            </div>
            <div className="text-sm md:text-base text-gray-700 font-medium">Projects Completed</div>
          </div>

          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold mb-1" style={{ color: '#cc0000' }}>
              A+
            </div>
            <div className="text-sm md:text-base text-gray-700 font-medium">BBB Accredited</div>
          </div>

          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold mb-1" style={{ color: '#cc0000' }}>
              24/7
            </div>
            <div className="text-sm md:text-base text-gray-700 font-medium">Emergency Service</div>
          </div>
        </div>
      </div>
    </section>
  )
}
