import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { blogPosts, getBlogBySlug } from "@/lib/blogs";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | TechBuds",
    };
  }

  return {
    title: post.title,
    description: post.brief,
    keywords: post.seoKeywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.brief,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.brief,
      images: [post.image],
    },
  };
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.brief,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "TechBuds",
    },
    publisher: {
      "@type": "Organization",
      name: "TechBuds",
    },
    keywords: post.seoKeywords.join(", "),
  };

  return (
    <div className="bg-brand">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <section className="relative overflow-hidden border-b border-custom bg-[#081124]">
          <div
            className="pointer-events-none absolute inset-0 opacity-100"
            style={{
              backgroundImage:
                "url(https://ik.imagekit.io/codebyjerry/techbuds/bg_pattern_1.png?updatedAt=1779048956013)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[#081124]/48" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-red-500/[0.05] blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6 py-12 md:px-12 md:py-20">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-red-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-secondary/70">
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

            <h1 className="text-4xl font-bold leading-tight text-primary md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-base leading-8 text-secondary md:text-lg">
              {post.brief}
            </p>
          </div>
        </section>

        <section className="border-b border-custom bg-surface/40">
          <div className="mx-auto max-w-5xl px-6 py-10 md:px-12 md:py-14">
            <img
              src={post.image}
              alt={post.title}
              className="h-auto w-full rounded-xl border border-white/10 object-cover"
            />
          </div>
        </section>

        <section className="bg-[#081124]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:px-12 md:py-20 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="max-w-4xl">
              {post.sections.map((section) => (
                <section key={section.heading} className="mb-12 last:mb-0">
                  <h2 className="text-2xl font-bold text-primary md:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-8 text-secondary/85"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Other Blogs
                </h2>
                <div className="mt-5 space-y-4">
                  {relatedPosts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="group block rounded-lg border border-white/10 bg-[#0b1226] p-4 transition-all duration-300 hover:border-red-400/30 hover:bg-white/[0.05]"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-400">
                        {item.category}
                      </p>
                      <h3 className="mt-2 text-sm font-bold leading-6 text-primary transition-colors group-hover:text-red-400">
                        {item.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-secondary/70">
                        {item.brief}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  SEO Focus
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.seoKeywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-secondary/80"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-red-400/20 bg-red-500/[0.06] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                  Need a Platform?
                </p>
                <h2 className="mt-2 text-lg font-bold text-primary">
                  Build a scalable digital product with TechBuds.
                </h2>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-red-600"
                >
                  Start Project
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <section className="border-t border-custom bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-12 text-center md:px-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
            Keep Reading
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            Explore More Digital Growth Insights
          </h2>
          <Link
            href="/blog"
            className="mt-6 inline-flex rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-bold text-primary transition-all duration-300 hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-400"
          >
            View All Blogs
          </Link>
        </div>
      </section>
    </div>
  );
}
