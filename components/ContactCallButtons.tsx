'use client'

import { trackCallClick } from '@/lib/gtag'

interface Area {
  label: string
  cities: string
  phone: string
  href: string
}

interface Props {
  areas: Area[]
}

export default function ContactCallButtons({ areas }: Props) {
  return (
    <div className="space-y-4">
      {areas.map((area) => (
        <div
          key={area.label}
          className="bg-white rounded-xl border border-[#e2ddd6] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4"
        >
          <div>
            <p className="font-semibold text-gray-900">{area.label}</p>
            <p className="text-sm text-gray-600 mt-0.5">{area.cities}</p>
          </div>
          <a
            href={area.href}
            onClick={() => trackCallClick(area.phone, 'contact_page')}
            className="inline-flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] active:bg-[#880000] text-white text-sm font-bold px-5 py-3 rounded transition-colors sm:flex-shrink-0 sm:whitespace-nowrap w-full sm:w-auto"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" />
            </svg>
            {area.phone}
          </a>
        </div>
      ))}
    </div>
  )
}
