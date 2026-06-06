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
    <div className="bg-brand">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeroBanner {...PAGE_BANNERS.blog} />

      <section className="border-b border-custom bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="grid overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-red-400/30 hover:bg-white/[0.05] md:grid-cols-[340px_1fr]"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block overflow-hidden bg-[#0b1226]"
                  aria-label={post.title}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-full"
                  />
                </Link>

                <div className="flex flex-col justify-center p-6 md:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-secondary/70">
                    <span className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-red-400">
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

                  <h2 className="text-2xl font-bold leading-tight text-primary md:text-3xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary transition-colors hover:text-red-400"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-secondary/80 md:text-base">
                    {post.brief}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.seoKeywords.slice(0, 3).map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-secondary/70"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-red-400 transition-colors hover:text-red-300"
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
