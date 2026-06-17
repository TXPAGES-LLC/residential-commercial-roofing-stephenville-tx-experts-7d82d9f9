'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: 'How quickly can Heritage Roofing respond after a storm?',
    a: 'We prioritize storm-damage calls and typically respond the same day or next day. For active leaks and emergencies, we\'re available 7 days a week, including weekends and holidays.',
  },
  {
    q: 'Do you work with homeowners\' insurance for storm damage?',
    a: 'Yes. We document all storm and hail damage with photos and detailed reports, and we work directly with your insurance adjuster to ensure your claim accurately covers the damage.',
  },
  {
    q: 'What areas does Heritage Roofing serve in Texas?',
    a: 'We serve Stephenville, Granbury, Brownwood, and communities throughout Erath, Hood, Brown, Hamilton, Somervell, Comanche, and surrounding counties in North and Central Texas.',
  },
  {
    q: 'How long does a typical roof replacement take?',
    a: 'Most residential roof replacements are completed in one to two days. Commercial projects and larger homes may take longer depending on size and complexity.',
  },
  {
    q: 'Do you offer any kind of roof warranty?',
    a: 'Yes. Heritage Roofing backs all workmanship with a labor warranty, and we install manufacturer-warranted materials. Warranty terms depend on the materials and system chosen — we explain all options before you commit.',
  },
  {
    q: 'What roofing materials do you install?',
    a: 'We install architectural asphalt shingles, metal roofing, TPO and EPDM flat roofing, modified bitumen, and tile. We help you choose the right material based on your budget, climate, and building type.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-20 bg-[#f3f4f6]" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-sans text-[#4054b2] font-semibold text-sm uppercase tracking-widest mb-2">Common Questions</p>
          <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl text-[#111827] font-bold text-balance">
            Frequently Asked Roofing Questions
          </h2>
        </div>

        <dl className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <dt className="font-serif font-bold text-[#1e2a6b] text-base" itemProp="name">{faq.q}</dt>
                <span className={`shrink-0 w-6 h-6 rounded-full bg-[#4054b2] flex items-center justify-center text-white transition-transform ${openIndex === i ? 'rotate-45' : ''}`} aria-hidden="true">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <dd
                  className="px-5 pb-4 font-sans text-gray-600 text-sm leading-relaxed"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <span itemProp="text">{faq.a}</span>
                </dd>
              )}
            </div>
          ))}
        </dl>

        <div className="text-center mt-8">
          <Link href="/faq" className="font-sans text-[#4054b2] font-semibold hover:underline text-sm">
            View all FAQ &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
