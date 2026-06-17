import Link from 'next/link'

export default function StormDamageSection() {
  return (
    <section style={{ backgroundColor: '#0f1840' }} className="py-16 lg:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#cc0000] text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Storm & Hail Damage Alert
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4 text-balance">
              Hail Hit Your Roof? We Respond Fast.
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Central Texas storms move fast and hail damage is often invisible to the untrained eye. Our certified inspectors assess damage, document findings, and work directly with your insurance adjuster so you get the coverage you deserve.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Free post-storm roof inspections — no obligation',
                'Same-day emergency tarping to prevent interior water damage',
                'Insurance claim documentation and adjuster coordination',
                'Full restoration from inspection to final installation',
                'Available 7 days a week for emergency calls',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="tel:2549687663"
                className="inline-flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] active:bg-[#880000] text-white font-bold px-6 py-4 rounded transition-colors w-full sm:w-auto"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
                </svg>
                Emergency: 254-968-7663
              </a>
              <Link
                href="/services/storm-hail-damage"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0f1840] font-bold px-6 py-4 rounded transition-colors w-full sm:w-auto"
              >
                Storm Damage Info
              </Link>
            </div>
          </div>

          {/* Hail damage photos + insurance process */}
          <div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/storm-damage.jpg"
                  alt="Chalk-circled hail impact marks on asphalt shingles at roof valley — Heritage Roofing storm inspection"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                />
              </div>
              <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/20200602-152909.jpg"
                  alt="Hail damage on asphalt shingles with circled impact marks — Heritage Roofing inspection"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                />
              </div>
              <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/roof-repair.jpg"
                  alt="Missing shingles exposing roof decking — storm repair in progress by Heritage Roofing"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                />
              </div>
              <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/20200602-152952.jpg"
                  alt="Close-up hail damage marks on asphalt shingles in Central Texas"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <h3 className="font-display text-xl font-semibold mb-6 text-yellow-300">Our Storm Claim Process</h3>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Free Roof Inspection', desc: 'We assess all storm and hail damage, document with photos, and give you a complete report.' },
                { step: '2', title: 'Insurance Claim Filing', desc: 'We help you file your claim and provide documentation your adjuster needs.' },
                { step: '3', title: 'Adjuster Meeting', desc: 'Our team meets with your adjuster on-site to ensure all damage is properly recorded.' },
                { step: '4', title: 'Repair or Replacement', desc: 'Once approved, we complete the work quickly with quality materials and stand behind it.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ backgroundColor: '#4054b2' }}>
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1">{item.title}</h4>
                    <p className="text-sm text-blue-200 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
