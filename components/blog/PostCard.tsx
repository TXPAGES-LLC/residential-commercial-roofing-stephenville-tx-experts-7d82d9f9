import Link from 'next/link'
import type { BlogPost } from '@/lib/blog/types'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface PostCardProps {
  post: BlogPost
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-xl border border-[#e2ddd6] overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      style={{ display: 'flex' }}
    >
      {/* Hero image */}
      {post.heroImageUrl && (
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <img
            src={post.heroImageUrl}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
            width={800}
            height={450}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="text-xs font-semibold uppercase tracking-wide text-[#4054b2] bg-[#4054b2]/10 px-2 py-0.5 rounded"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="font-display text-xl font-bold text-[#0f1840] leading-snug mb-2 group-hover:text-[#4054b2] transition-colors text-balance">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1 mb-4 text-pretty">
          {post.excerpt}
        </p>

        {/* Meta footer */}
        <div className="flex items-center justify-between gap-2 pt-4 border-t border-[#e2ddd6] text-xs text-gray-500 mt-auto">
          <div className="flex items-center gap-1.5">
            {/* Author icon */}
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Shai</span>
          </div>
          <div className="flex items-center gap-3">
            {post.readingTimeMinutes && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTimeMinutes} min read
              </span>
            )}
            <time dateTime={post.publishAt}>{formatDate(post.publishAt)}</time>
          </div>
        </div>
      </div>
    </Link>
  )
}
