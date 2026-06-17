'use client'

import type { ReactNode } from 'react'
import { trackCallClick } from '@/lib/gtag'

interface Props {
  href: string
  phoneNumber: string
  location: string
  className?: string
  children: ReactNode
}

/**
 * A drop-in replacement for <a href="tel:..."> that fires a GA4
 * generate_lead event before the native phone intent triggers.
 */
export default function TrackedCallLink({
  href,
  phoneNumber,
  location,
  className,
  children,
}: Props) {
  return (
    <a
      href={href}
      onClick={() => trackCallClick(phoneNumber, location)}
      className={className}
    >
      {children}
    </a>
  )
}
