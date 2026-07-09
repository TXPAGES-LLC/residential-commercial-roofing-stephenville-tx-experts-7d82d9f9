/**
 * GA4 gtag helper — single source of truth for all conversion events.
 * Event names and parameters are standardised here so every component
 * fires identical, consistently-named events that match the reporting setup.
 */

export const GA_MEASUREMENT_ID = 'G-DDG076BECM'

// Safely call gtag in any environment (SSR, test, preview)
function fire(event: string, params: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', event, params)
}

/**
 * Fired when a user clicks any tel: link (call button, footer, contact page).
 * Maps to the GA4 recommended event `generate_lead` (drives conversion reporting).
 *
 * @param phoneNumber  E.g. '254-968-7663'
 * @param location     Where on the page, e.g. 'hero', 'footer', 'contact_page', 'mobile_fab'
 */
export function trackCallClick(phoneNumber: string, location: string) {
  fire('generate_lead', {
    lead_source: 'phone_call',
    phone_number: phoneNumber,
    button_location: location,
  })
}

/**
 * Fired when a user clicks a non-phone CTA (e.g. "Get Free Estimate").
 * Uses the GA4 recommended event `select_content`.
 *
 * @param label     Human-readable button text, e.g. 'Get Free Estimate'
 * @param location  Where on the page, e.g. 'hero', 'service_page_cta'
 * @param destination  href the user is navigating to
 */
export function trackCtaClick(label: string, location: string, destination: string) {
  fire('select_content', {
    content_type: 'cta_button',
    content_id: label,
    button_location: location,
    destination_url: destination,
  })
}

/**
 * Fired when a user submits a contact/estimate form.
 * Uses the GA4 recommended conversion event `generate_lead`.
 *
 * @param formName  E.g. 'contact_form', 'estimate_request'
 * @param location  Page slug or section, e.g. '/contact'
 */
export function trackFormSubmit(formName: string, location: string) {
  fire('generate_lead', {
    lead_source: 'form_submission',
    form_name: formName,
    button_location: location,
  })
}

/**
 * Fired when a user clicks an outbound link leaving the site (GBP, review, maps).
 * Uses the GA4 recommended event `click` with standard `outbound` parameter.
 *
 * @param destination  The full outbound URL
 * @param label        Human-readable description, e.g. 'Google Maps', 'Leave Review'
 * @param location     Where on the page, e.g. 'contact_page', 'footer'
 */
export function trackOutboundClick(destination: string, label: string, location: string) {
  fire('click', {
    outbound: true,
    link_url: destination,
    link_text: label,
    button_location: location,
  })
}

// Extend global Window type once so no component needs its own declare global
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
