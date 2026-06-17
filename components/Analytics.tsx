'use client'

/**
 * Fires a GA4 `page_view` on every App Router client-side navigation.
 * Must be rendered once inside the root layout <body>.
 * The initial page_view is handled by the gtag 'config' call in layout.tsx.
 */

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'

export default function Analytics() {
  const pathname = usePathname()
  const previousPath = useRef<string | null>(null)

  useEffect(() => {
    // Skip the very first render — the gtag config call in layout.tsx
    // already fires the initial page_view on hard load.
    if (previousPath.current === null) {
      previousPath.current = pathname
      return
    }

    // Only fire when the path genuinely changes (not on re-renders)
    if (previousPath.current === pathname) return
    previousPath.current = pathname

    if (typeof window.gtag !== 'function') return

    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: pathname,
      send_to: GA_MEASUREMENT_ID,
    })
  }, [pathname])

  return null
}
