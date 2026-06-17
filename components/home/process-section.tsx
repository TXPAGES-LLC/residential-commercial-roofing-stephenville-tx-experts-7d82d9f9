const steps = [
  {
    step: '01',
    title: 'Call or Request an Inspection',
    description: 'Call any of our three Texas offices or use the website to schedule a free roof inspection. We respond same-day or next-day.',
  },
  {
    step: '02',
    title: 'We Inspect & Document',
    description: 'A Heritage Roofing technician inspects your roof, identifies all problem areas, and documents findings with photos for your records and your insurance adjuster.',
  },
  {
    step: '03',
    title: 'You Get a Clear Estimate',
    description: 'We provide a detailed written estimate — no confusing line items, no hidden fees. We explain exactly what needs to be done and why.',
  },
  {
    step: '04',
    title: 'We Complete the Work',
    description: 'Our licensed crew completes the job efficiently and cleans up completely. We stand behind every repair and replacement with our workmanship warranty.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-20 bg-[#1e2a6b]" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-sans text-[#ff0000] font-semibold text-sm uppercase tracking-widest mb-2">How It Works</p>
          <h2 id="process-heading" className="font-serif text-3xl md:text-4xl text-white font-bold text-balance">
            Simple Process. Professional Results.
          </h2>
          <p className="font-sans text-white/70 mt-4 max-w-xl mx-auto">
            We&apos;ve simplified roofing service so you always know what to expect — from first call to final inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-white/20" aria-hidden="true" />
              )}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 h-full hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-[#4054b2] rounded-full flex items-center justify-center mb-4 relative z-10">
                  <span className="font-serif font-bold text-white text-lg">{step.step}</span>
                </div>
                <h3 className="font-serif font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="font-sans text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
