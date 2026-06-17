'use client'

import { trackCallClick } from '@/lib/gtag'

export default function MobileCallButton() {
  function handlePhoneClick() {
    trackCallClick('254-968-7663', 'mobile_fab')
  }

  return (
    <a
      href="tel:2549687663"
      onClick={handlePhoneClick}
      /* fab-safe-bottom adds env(safe-area-inset-bottom) so the FAB sits above
         the iPhone home bar. will-change: transform promotes to its own GPU layer. */
      className="fab-safe-bottom fixed right-4 z-50 lg:hidden flex items-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] active:bg-[#880000] text-white font-bold px-5 py-3 rounded-full shadow-2xl transition-colors"
      style={{ willChange: 'transform' }}
      aria-label="Call Heritage Roofing at 254-968-7663"
    >
      <svg className="w-5 h-5 shrink-0 animate-pulse" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"/>
      </svg>
      Call Now
    </a>
  )
}
