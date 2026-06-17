export default function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-[#4054b2]" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 id="cta-heading" className="font-serif text-3xl md:text-4xl text-white font-bold text-balance mb-4">
              Ready to Fix Your Roof? Call Heritage Roofing Today.
            </h2>
            <p className="font-sans text-white/80 text-base leading-relaxed mb-6">
              Whether you&apos;re dealing with storm damage, a slow leak, or you just want a professional inspection before a home sale, Heritage Roofing is ready. Call, and we&apos;ll be there.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-sans text-white/60 text-xs uppercase tracking-widest">Stephenville</span>
                <a href="tel:2549687663" className="font-serif font-bold text-white text-xl hover:text-[#ff0000] transition-colors">254-968-7663</a>
              </div>
              <div className="hidden sm:block w-px bg-white/20 self-stretch" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <span className="font-sans text-white/60 text-xs uppercase tracking-widest">Granbury</span>
                <a href="tel:8175730890" className="font-serif font-bold text-white text-xl hover:text-[#ff0000] transition-colors">817-573-0890</a>
              </div>
              <div className="hidden sm:block w-px bg-white/20 self-stretch" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <span className="font-sans text-white/60 text-xs uppercase tracking-widest">Brownwood</span>
                <a href="tel:3255105768" className="font-serif font-bold text-white text-xl hover:text-[#ff0000] transition-colors">325-510-5768</a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-xl p-8">
            <h3 className="font-serif font-bold text-white text-xl mb-5">Quick Contact</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-sans text-white/70 text-sm">Address</span>
                <span className="font-sans text-white font-medium text-sm">1590 N Bates Street, Stephenville, TX 76401</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-white/70 text-sm">Office Hours</span>
                <span className="font-sans text-white font-medium text-sm">Monday–Friday: 8am–5pm</span>
                <span className="font-sans text-[#ff9999] font-medium text-sm">Emergency Repairs Available 7 Days/Week</span>
              </div>
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="tel:2549687663"
                  className="flex items-center justify-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white font-serif font-bold uppercase tracking-wide py-3.5 rounded transition-colors w-full"
                >
                  <PhoneIcon />
                  Call Stephenville: 254-968-7663
                </a>
                <p className="font-sans text-white/50 text-xs text-center">No contact forms — just a real phone call to a real local roofer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
    </svg>
  )
}
