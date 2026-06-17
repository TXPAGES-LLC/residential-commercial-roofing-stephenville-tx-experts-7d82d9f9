const steps = [
  {
    number: '1',
    title: 'Contact & Inspection',
    description: 'Call us or request an estimate online. We schedule a thorough roof inspection at your convenience — always free, no obligation.',
  },
  {
    number: '2',
    title: 'Assessment & Quote',
    description: 'We assess the condition, take measurements, and provide a clear written estimate with material options and timelines.',
  },
  {
    number: '3',
    title: 'Scheduling & Prep',
    description: 'Once approved, we order materials, schedule your project, and handle all permits. We protect your property before work begins.',
  },
  {
    number: '4',
    title: 'Expert Installation',
    description: 'Our licensed crew completes the work efficiently with minimal disruption. Quality control inspections at every phase.',
  },
  {
    number: '5',
    title: 'Final Walkthrough',
    description: 'We walk the property with you, ensure complete satisfaction, and provide warranty documentation.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4 text-balance">
            Our Process
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty">
            From initial inspection to final walkthrough, every Heritage Roofing project follows a proven process built on transparency, quality, and customer service.
          </p>
        </div>

        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-[#e2ddd6]" style={{ width: 'calc(100% - 80px)', marginLeft: '40px' }} />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center font-display text-2xl font-bold text-white mb-4 shadow-lg" style={{ backgroundColor: '#4054b2' }}>
                  {step.number}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="tel:2549687663"
            className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold px-8 py-3 rounded transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
            </svg>
            Get Started: 254-968-7663
          </a>
        </div>
      </div>
    </section>
  )
}
