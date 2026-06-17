'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How much does a new roof cost in Central Texas?',
    a: 'Roof replacement costs vary based on size, pitch, materials, and complexity. Most residential roofs in Stephenville, Granbury, and Brownwood range from $8,000 to $15,000 for asphalt shingles. We provide free estimates with transparent pricing and financing options.',
  },
  {
    q: 'How long does a roof replacement take?',
    a: 'Most residential roof replacements are completed in 1-3 days depending on weather, roof size, and complexity. Commercial projects vary. We provide a clear timeline during your estimate and communicate any changes immediately.',
  },
  {
    q: 'Will my insurance cover storm damage?',
    a: 'Many homeowner policies cover wind and hail damage. We provide free storm damage inspections, document findings with photos, and work directly with your insurance adjuster to ensure you get fair coverage. We do not charge for claim assistance.',
  },
  {
    q: 'Do you offer emergency roof repair?',
    a: 'Yes. We offer emergency tarping and repair services 7 days a week for urgent situations like storm damage, leaks, or tree damage. Call us immediately at 254-968-7663 (Stephenville), 817-573-0890 (Granbury), or 325-510-5768 (Brownwood).',
  },
  {
    q: 'What roof types and materials do you work with?',
    a: 'We install and repair asphalt shingles, metal roofing, TPO, EPDM, tile, and specialty systems. We work on both residential and commercial properties including flat roofs, low-slope roofs, and steep-pitch roofs.',
  },
  {
    q: 'How often should I have my roof inspected?',
    a: 'We recommend inspecting your roof at least once a year and after any major storm. Regular inspections catch small issues before they become expensive problems. We offer free inspections for storm damage and affordable maintenance inspections.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Heritage Roofing, Inc. is fully licensed, bonded, and insured in Texas. We carry general liability and workers compensation insurance to protect you and our crew.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Stephenville, Granbury, Brownwood, Hico, Dublin, Glen Rose, Weatherford, and surrounding Central Texas communities. Call us to confirm service in your area.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty">
              Common roofing questions answered. If you need more information, call us at 254-968-7663.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#e2ddd6] rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[#f8f7f5] transition-colors"
                  aria-expanded={openIndex === idx}
                >
                  <h3 className="font-semibold text-base pr-4">{faq.q}</h3>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === idx && (
                  <div className="px-5 pb-5 text-sm text-gray-700 leading-relaxed border-t border-[#e2ddd6] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-4">Still have questions?</p>
            <a
              href="/faq"
              className="inline-flex items-center gap-2 border-2 border-[#4054b2] text-[#4054b2] hover:bg-[#4054b2] hover:text-white font-bold px-6 py-3 rounded transition-colors"
            >
              View All FAQs
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
