import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blogs";

export default function ServiceBlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="border-t border-[#e2e8f0] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
              From Our Blog
            </p>
            <h2 className="text-2xl font-bold text-[#1e293b] md:text-3xl">
              Insights that help you{" "}
              <span className="text-accent-secondary">decide smarter.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-secondary transition-colors hover:text-[#1e293b]"
          >
            View all posts
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-auto w-full"
                />
              </Link>
              <div className="pt-4">
                <span className="inline-block rounded-full bg-accent-secondary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent-secondary">
                  {post.category}
                </span>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="mt-3 text-base font-bold leading-snug text-[#1a1f2e] transition-colors duration-300 hover:text-accent-secondary">
                    {post.title}
                  </h3>
                </Link>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#64748b]">
                  {post.brief}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-[#94a3b8]">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays size={12} />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
