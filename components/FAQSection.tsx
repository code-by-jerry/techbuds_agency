type FAQItem = {
  q: string;
  a: string;
};

type FAQTheme = "light" | "dark";

interface FAQSectionProps {
  title: string;
  list: FAQItem[];
  theme?: FAQTheme;
}

const faqThemes: Record<
  FAQTheme,
  {
    section: string;
    item: string;
    itemOpen: string;
    summary: string;
    answer: string;
    answerBorder: string;
  }
> = {
  dark: {
    section: "border-t border-custom bg-[#081124]",
    item: "bg-white/[0.04] backdrop-blur-sm",
    itemOpen: "open:bg-white/[0.07] open:shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
    summary: "text-primary",
    answer: "text-secondary/80",
    answerBorder: "border-white/10",
  },
  light: {
    section: "border-y border-[#e2e8f0] bg-[#f8fafc]",
    item: "border-[#e2e8f0] bg-white shadow-sm",
    itemOpen: "open:border-accent-secondary/30 open:shadow-md",
    summary: "text-[#1e293b]",
    answer: "text-[#64748b]",
    answerBorder: "border-[#e2e8f0]",
  },
};

export default function FAQSection({
  title,
  list,
  theme = "dark",
}: FAQSectionProps) {
  const styles = faqThemes[theme];

  return (
    <section className={`relative overflow-hidden ${styles.section}`}>
      <div className="relative mx-auto max-w-4xl px-6 py-20 md:px-12 md:py-28">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            Got Questions?
          </p>
          <h2
            className={`text-3xl font-bold md:text-5xl ${
              theme === "light" ? "text-[#1e293b]" : "text-primary"
            }`}
          >
            {title}
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
        </div>

        <div className="space-y-3">
          {list.map((item, index) => (
            <details
              key={index}
              className={`group rounded-2xl transition-all duration-300 ${styles.item} ${styles.itemOpen}`}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:text-accent-secondary [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent-secondary/10 text-xs font-bold text-accent-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-sm font-semibold group-open:text-accent-secondary md:text-base ${styles.summary}`}
                  >
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
              <div className={`border-t px-6 py-5 ${styles.answerBorder}`}>
                <p className={`text-sm leading-relaxed md:text-base ${styles.answer}`}>
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
