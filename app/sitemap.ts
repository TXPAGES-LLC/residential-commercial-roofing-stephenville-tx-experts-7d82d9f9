import type { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/lib/blog/api'

/**
 * Dynamic sitemap served by Next.js at /sitemap.xml.
 *
 * Requirements:
 *  - Every URL is a physically hardcoded absolute URL (protocol + domain + path).
 *  - No redirected, noindex, parameterised, or www/HTTP variants.
 *  - Blog post URLs are always built as https://heritageroofingtexas.com/blog/{slug}
 *    regardless of what the upstream JSON canonicalUrl field contains, so junk
 *    values from the blog manager can never pollute the sitemap.
 */

// Every static URL is written out in full — no template literals, no env vars.
const STATIC_URLS: MetadataRoute.Sitemap = [
  // ── Core ──────────────────────────────────────────────────────────────────
  { url: 'https://heritageroofingtexas.com',          changeFrequency: 'weekly',  priority: 1.0 },
  { url: 'https://heritageroofingtexas.com/contact',  changeFrequency: 'monthly', priority: 0.9 },
  { url: 'https://heritageroofingtexas.com/gallery',  changeFrequency: 'monthly', priority: 0.8 },
  { url: 'https://heritageroofingtexas.com/blog',     changeFrequency: 'weekly',  priority: 0.8 },

  // ── Services ──────────────────────────────────────────────────────────────
  { url: 'https://heritageroofingtexas.com/services',                        changeFrequency: 'monthly', priority: 0.9 },
  { url: 'https://heritageroofingtexas.com/services/residential-roofing',    changeFrequency: 'monthly', priority: 0.9 },
  { url: 'https://heritageroofingtexas.com/services/commercial-roofing',     changeFrequency: 'monthly', priority: 0.9 },
  { url: 'https://heritageroofingtexas.com/services/roof-repair',            changeFrequency: 'monthly', priority: 0.9 },
  { url: 'https://heritageroofingtexas.com/services/roof-replacement',       changeFrequency: 'monthly', priority: 0.9 },
  { url: 'https://heritageroofingtexas.com/services/storm-hail-damage',      changeFrequency: 'monthly', priority: 0.9 },
  { url: 'https://heritageroofingtexas.com/services/roof-inspections',       changeFrequency: 'monthly', priority: 0.8 },
  { url: 'https://heritageroofingtexas.com/services/skylights-ventilation',  changeFrequency: 'monthly', priority: 0.8 },
  { url: 'https://heritageroofingtexas.com/services/emergency-repairs',      changeFrequency: 'monthly', priority: 0.9 },

  // ── Locations ─────────────────────────────────────────────────────────────
  { url: 'https://heritageroofingtexas.com/locations',                  changeFrequency: 'monthly', priority: 0.9  },
  { url: 'https://heritageroofingtexas.com/locations/stephenville',     changeFrequency: 'monthly', priority: 0.85 },
  { url: 'https://heritageroofingtexas.com/locations/granbury',         changeFrequency: 'monthly', priority: 0.85 },
  { url: 'https://heritageroofingtexas.com/locations/brownwood',        changeFrequency: 'monthly', priority: 0.85 },
  { url: 'https://heritageroofingtexas.com/locations/dublin',           changeFrequency: 'monthly', priority: 0.75 },
  { url: 'https://heritageroofingtexas.com/locations/hico',             changeFrequency: 'monthly', priority: 0.75 },
  { url: 'https://heritageroofingtexas.com/locations/eastland',         changeFrequency: 'monthly', priority: 0.75 },
  { url: 'https://heritageroofingtexas.com/locations/de-leon',          changeFrequency: 'monthly', priority: 0.75 },
  { url: 'https://heritageroofingtexas.com/locations/glen-rose',        changeFrequency: 'monthly', priority: 0.75 },
  { url: 'https://heritageroofingtexas.com/locations/weatherford',      changeFrequency: 'monthly', priority: 0.75 },
  { url: 'https://heritageroofingtexas.com/locations/mineral-wells',    changeFrequency: 'monthly', priority: 0.75 },
  { url: 'https://heritageroofingtexas.com/locations/hamilton',         changeFrequency: 'monthly', priority: 0.75 },
  { url: 'https://heritageroofingtexas.com/locations/goldthwaite',      changeFrequency: 'monthly', priority: 0.75 },
  { url: 'https://heritageroofingtexas.com/locations/comanche',         changeFrequency: 'monthly', priority: 0.75 },
  { url: 'https://heritageroofingtexas.com/locations/santa-anna',       changeFrequency: 'monthly', priority: 0.75 },
  { url: 'https://heritageroofingtexas.com/locations/coleman',          changeFrequency: 'monthly', priority: 0.75 },
  { url: 'https://heritageroofingtexas.com/locations/bangs',            changeFrequency: 'monthly', priority: 0.75 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ── Blog post routes ───────────────────────────────────────────────────────
  // URL is always built from the slug — never trusts post.seo.canonicalUrl,
  // which could contain junk, relative paths, or wrong domains from the CMS.
  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const posts = await getPublishedPosts()
    blogRoutes = posts.map((post) => ({
      url: `https://heritageroofingtexas.com/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {
    // Upstream JSON unavailable — return without blog routes rather than erroring
  }

  return [...STATIC_URLS, ...blogRoutes]
}
