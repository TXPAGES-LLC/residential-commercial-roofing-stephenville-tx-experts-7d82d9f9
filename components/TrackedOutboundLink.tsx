'use client'

import type { ReactNode } from 'react'
import { trackOutboundClick } from '@/lib/gtag'

interface Props {
  href: string
  label: string
  location: string
  className?: string
  children: ReactNode
}

/**
 * A drop-in replacement for outbound <a target="_blank"> links that fires
 * a GA4 `click` (outbound) event before the browser opens the external URL.
 */
export default function TrackedOutboundLink({
  href,
  label,
  location,
  className,
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackOutboundClick(href, label, location)}
      className={className}
    >
      {children}
    </a>
  )
}
