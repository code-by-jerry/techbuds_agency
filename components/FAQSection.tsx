type FAQItem = {
  q: string;
  a: string;
};

interface FAQSectionProps {
  title: string;
  list: FAQItem[];
}

export default function FAQSection({ title, list }: FAQSectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-custom bg-[#081124]">
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            Got Questions?
          </p>
          <h2 className="text-3xl font-bold text-primary md:text-5xl">
            {title}
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
        </div>

        <div className="space-y-3">
          {list.map((item, index) => (
            <details
              key={index}
              className="group rounded-xl border border-custom bg-surface/30 transition-all duration-300 open:border-accent-secondary/30 open:bg-accent-secondary/[0.02]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:text-accent-secondary [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent-secondary/10 text-xs font-bold text-accent-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-primary group-open:text-accent-secondary md:text-base">
                    {item.q}
                  </span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 shrink-0 text-secondary transition-transform duration-300 group-open:rotate-180 group-open:text-accent-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </summary>
              <div className="border-t border-custom px-6 py-5">
                <p className="text-sm text-secondary/80 leading-relaxed md:text-base">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
