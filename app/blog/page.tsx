import PageHeroBanner from "@/components/PageHeroBanner";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blogs";
import { PAGE_BANNERS } from "@/lib/page-banners";

export const metadata: Metadata = {
  title: "Blog: Web, Mobile, SEO and Ecommerce Insights",
  description:
    "Read practical business guides on custom digital platforms, web applications, SEO performance, ecommerce development, and mobile app strategy.",
  keywords: [
    "TechBuds blog",
    "custom web solutions",
    "mobile app development",
    "SEO optimization",
    "ecommerce development",
    "digital transformation",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "TechBuds Blog",
    description:
      "Insights for businesses planning websites, web applications, ecommerce platforms, SEO growth, and mobile apps.",
    type: "website",
    images: [
      {
        url: PAGE_BANNERS.blog.image,
        width: 1200,
        height: 630,
        alt: "TechBuds Blog",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Blog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "TechBuds Blog",
    description: metadata.description,
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.brief,
      datePublished: post.publishedAt,
      image: post.image,
      url: `/blog/${post.slug}`,
    })),
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeroBanner {...PAGE_BANNERS.blog} />

      <section className="border-b border-[#e2e8f0] bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-16">
          <div className="grid gap-5">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="grid overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white transition-all duration-300 hover:border-accent-secondary/30 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] md:grid-cols-[minmax(0,2fr)_3fr]"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block min-h-[220px] overflow-hidden md:h-full md:min-h-[260px]"
                  aria-label={post.title}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>

                <div className="flex flex-col justify-center p-6 md:p-7">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-[#94a3b8]">
                    <span className="rounded-full bg-accent-secondary/10 px-3 py-1 font-semibold uppercase tracking-[0.16em] text-accent-secondary">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold leading-tight md:text-2xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#1a1f2e] transition-colors duration-300 hover:text-accent-secondary"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#64748b] md:text-base">
                    {post.brief}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.seoKeywords.slice(0, 3).map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-[#f8fafc] px-3 py-1 text-xs text-[#64748b] ring-1 ring-[#e2e8f0]"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent-secondary transition-colors hover:text-[#1e293b]"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
