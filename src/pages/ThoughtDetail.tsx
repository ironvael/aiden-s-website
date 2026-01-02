import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getThoughtBySlug, getAdjacentThoughts } from "@/data/thoughts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Helper to convert "Dec 2025" to ISO date
const parseDate = (dateStr: string): string => {
  const months: Record<string, string> = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const [month, year] = dateStr.split(" ");
  return `${year}-${months[month] || "01"}-01`;
};

// --- TOC helpers ---
type TocItem = { id: string; text: string; level: 2 | 3 };

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const extractText = (node: any): string => {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node?.props?.children) return extractText(node.props.children);
  return "";
};

const ThoughtDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const thought = slug ? getThoughtBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentThoughts(slug) : { prev: null, next: null };

  const articleRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);

  if (!thought) return <Navigate to="/thoughts" replace />;

  const isoDate = parseDate(thought.date);

  // Article structured data
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: thought.title,
    description: thought.excerpt,
    url: `https://aidenhovren.com/thoughts/${thought.slug}`,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Person",
      name: "Aiden Hovren",
      url: "https://aidenhovren.com",
    },
    publisher: {
      "@type": "Person",
      name: "Aiden Hovren",
      url: "https://aidenhovren.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aidenhovren.com/thoughts/${thought.slug}`,
    },
    keywords: [thought.category, "entrepreneurship", "operations", "business", "Aiden Hovren"],
    articleSection: thought.category,
    wordCount: thought.content.split(/\s+/).length,
    inLanguage: "en-US",
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aidenhovren.com" },
      { "@type": "ListItem", position: 2, name: "Thoughts", item: "https://aidenhovren.com/thoughts" },
      { "@type": "ListItem", position: 3, name: thought.title, item: `https://aidenhovren.com/thoughts/${thought.slug}` },
    ],
  };

  // Build TOC by scanning markdown for h2/h3
  const toc: TocItem[] = useMemo(() => {
    const lines = thought.content.split("\n");
    const items: TocItem[] = [];
    for (const line of lines) {
      const h2 = line.match(/^##\s+(.*)/);
      const h3 = line.match(/^###\s+(.*)/);
      if (h2?.[1]) {
        const text = h2[1].trim();
        items.push({ id: slugify(text), text, level: 2 });
      } else if (h3?.[1]) {
        const text = h3[1].trim();
        items.push({ id: slugify(text), text, level: 3 });
      }
    }
    // Deduplicate ids (in case of repeated headings)
    const seen = new Map<string, number>();
    return items.map((it) => {
      const count = seen.get(it.id) ?? 0;
      seen.set(it.id, count + 1);
      return count === 0 ? it : { ...it, id: `${it.id}-${count + 1}` };
    });
  }, [thought.content]);

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;

      // When article is above the viewport, start tracking
      const total = el.scrollHeight - viewportH;
      const scrolled =
        window.scrollY - (el.offsetTop - 120); // offset for nav

      const p = total <= 0 ? 0 : Math.min(1, Math.max(0, scrolled / total));
      setProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active heading observer
  useEffect(() => {
    if (!toc.length) return;

    const ids = toc.map((t) => t.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // choose the most visible/closest to top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [toc]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={thought.title}
        description={thought.excerpt}
        url={`/thoughts/${thought.slug}`}
        type="article"
        article={{
          publishedTime: isoDate,
          author: "Aiden Hovren",
          tags: [thought.category, "entrepreneurship", "operations", "business"],
        }}
        structuredData={[articleStructuredData, breadcrumbData]}
      />

      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-75"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <Navigation />

      <main className="pt-28 pb-24">
        {/* HERO */}
        <section className="relative px-6 md:px-12 lg:px-24">
          {/* subtle background */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>

          <div className="max-w-6xl mx-auto">
            <Link
              to="/thoughts"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All thoughts
            </Link>

            <div className="mt-10 grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {thought.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{thought.readTime}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <time className="text-xs text-muted-foreground" dateTime={isoDate}>
                    {thought.date}
                  </time>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.05] tracking-tight">
                  {thought.title}
                </h1>

                <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {thought.excerpt}
                </p>

                {/* micro meta */}
                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Written by Aiden
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
                    ~{thought.content.split(/\s+/).length.toLocaleString()} words
                  </span>
                </div>
              </div>

              {/* TOC (desktop) */}
              <aside className="lg:col-span-4 hidden lg:block">
                <div className="sticky top-28">
                  <div className="rounded-2xl border border-border bg-card/50 backdrop-blur px-5 py-5 shadow-sm">
                    <p className="text-sm font-medium mb-3">On this page</p>

                    {toc.length ? (
                      <ul className="space-y-2">
                        {toc.map((item) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className={[
                                "block text-sm transition-colors",
                                item.level === 3 ? "pl-4" : "",
                                activeId === item.id
                                  ? "text-foreground"
                                  : "text-muted-foreground hover:text-foreground",
                              ].join(" ")}
                            >
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Add <code className="rounded bg-muted px-1 py-0.5">##</code> headings to enable a table of contents.
                      </p>
                    )}

                    <div className="mt-5 pt-5 border-t border-border">
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        {prev ? (
                          <Link
                            to={`/thoughts/${prev.slug}`}
                            className="rounded-xl border border-border px-3 py-2 hover:bg-muted/40 transition-colors"
                          >
                            <span className="text-muted-foreground">Prev</span>
                            <div className="mt-1 line-clamp-2 text-foreground">{prev.title}</div>
                          </Link>
                        ) : (
                          <div className="rounded-xl border border-border px-3 py-2 text-muted-foreground opacity-60">
                            Prev
                          </div>
                        )}

                        {next ? (
                          <Link
                            to={`/thoughts/${next.slug}`}
                            className="rounded-xl border border-border px-3 py-2 hover:bg-muted/40 transition-colors text-right"
                          >
                            <span className="text-muted-foreground">Next</span>
                            <div className="mt-1 line-clamp-2 text-foreground">{next.title}</div>
                          </Link>
                        ) : (
                          <div className="rounded-xl border border-border px-3 py-2 text-muted-foreground opacity-60 text-right">
                            Next
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="mt-14 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-10">
              {/* spacer column aligns with TOC */}
              <div className="hidden lg:block lg:col-span-4" />

              <article ref={(n) => (articleRef.current = n)} className="lg:col-span-8">
                <div className="rounded-2xl border border-border bg-card/30 backdrop-blur px-6 md:px-10 py-10 shadow-sm">
                  <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:opacity-80 prose-a:underline prose-a:underline-offset-4 prose-hr:border-border prose-blockquote:border-border">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({ href, children, ...props }) => {
                          const isExternal = !!href && /^https?:\/\//.test(href);
                          return (
                            <a
                              href={href}
                              {...props}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                            >
                              {children}
                            </a>
                          );
                        },
                        h2: ({ children, ...props }) => {
                          const text = extractText(children);
                          return (
                            <h2
                              {...props}
                              id={slugify(text)}
                              className="scroll-mt-28 text-2xl md:text-3xl font-display font-medium mt-12 mb-6"
                            >
                              {children}
                            </h2>
                          );
                        },
                        h3: ({ children, ...props }) => {
                          const text = extractText(children);
                          return (
                            <h3
                              {...props}
                              id={slugify(text)}
                              className="scroll-mt-28 text-xl md:text-2xl font-display font-medium mt-10 mb-4"
                            >
                              {children}
                            </h3>
                          );
                        },
                        p: ({ children, ...props }) => (
                          <p {...props} className="text-lg leading-relaxed text-muted-foreground mb-6">
                            {children}
                          </p>
                        ),
                        ul: ({ children, ...props }) => (
                          <ul {...props} className="my-6 space-y-2 text-muted-foreground">
                            {children}
                          </ul>
                        ),
                        ol: ({ children, ...props }) => (
                          <ol {...props} className="my-6 space-y-2 text-muted-foreground">
                            {children}
                          </ol>
                        ),
                        li: ({ children, ...props }) => (
                          <li {...props} className="leading-relaxed">
                            {children}
                          </li>
                        ),
                        blockquote: ({ children, ...props }) => (
                          <blockquote
                            {...props}
                            className="my-8 rounded-2xl border border-border bg-muted/30 px-5 py-4 italic text-muted-foreground"
                          >
                            {children}
                          </blockquote>
                        ),
                        code: ({ children, ...props }) => (
                          <code {...props} className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
                            {children}
                          </code>
                        ),
                        pre: ({ children, ...props }) => (
                          <pre
                            {...props}
                            className="my-8 overflow-x-auto rounded-2xl border border-border bg-muted/30 p-5 text-sm"
                          >
                            {children}
                          </pre>
                        ),
                        hr: (props) => <hr {...props} className="my-10 border-border" />,
                      }}
                    >
                      {thought.content}
                    </ReactMarkdown>
                  </div>

                  {/* Mobile prev/next */}
                  <div className="mt-14 pt-10 border-t border-border lg:hidden">
                    <div className="grid md:grid-cols-2 gap-4">
                      {prev && (
                        <Link
                          to={`/thoughts/${prev.slug}`}
                          className="group rounded-2xl border border-border p-5 hover:bg-muted/30 transition-colors"
                        >
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                            Previous
                          </div>
                          <div className="mt-2 font-display font-medium text-foreground">{prev.title}</div>
                        </Link>
                      )}

                      {next && (
                        <Link
                          to={`/thoughts/${next.slug}`}
                          className="group rounded-2xl border border-border p-5 hover:bg-muted/30 transition-colors md:text-right"
                        >
                          <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                            Next
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                          <div className="mt-2 font-display font-medium text-foreground">{next.title}</div>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop prev/next (under article) */}
                <div className="mt-10 hidden lg:block">
                  <div className="grid md:grid-cols-2 gap-6">
                    {prev && (
                      <Link
                        to={`/thoughts/${prev.slug}`}
                        className="group rounded-2xl border border-border p-6 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                          Previous
                        </div>
                        <div className="mt-2 font-display font-medium text-foreground group-hover:text-primary transition-colors">
                          {prev.title}
                        </div>
                      </Link>
                    )}

                    {next && (
                      <Link
                        to={`/thoughts/${next.slug}`}
                        className="group rounded-2xl border border-border p-6 hover:bg-muted/30 transition-colors text-left md:text-right"
                      >
                        <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                          Next
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        <div className="mt-2 font-display font-medium text-foreground group-hover:text-primary transition-colors">
                          {next.title}
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThoughtDetail;
