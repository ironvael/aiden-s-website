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

const ThoughtDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const thought = slug ? getThoughtBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentThoughts(slug) : { prev: null, next: null };

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
    author: { "@type": "Person", name: "Aiden Hovren", url: "https://aidenhovren.com" },
    publisher: { "@type": "Person", name: "Aiden Hovren", url: "https://aidenhovren.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://aidenhovren.com/thoughts/${thought.slug}` },
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

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
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

      <Navigation />

      <main className="pt-28 pb-24">
        {/* Hero backdrop */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>

          {/* Header */}
          <header className="px-6 md:px-12 lg:px-24">
            <div className="max-w-3xl mx-auto pt-12 pb-10">
              <Link
                to="/thoughts"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border bg-background/60">
                  <ArrowLeft className="w-4 h-4" />
                </span>
                <span className="underline underline-offset-4 decoration-border hover:decoration-foreground">
                  All thoughts
                </span>
              </Link>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/15">
                  {thought.category}
                </span>
                <span className="text-xs text-muted-foreground">{thought.readTime}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <time className="text-xs text-muted-foreground" dateTime={isoDate}>
                  {thought.date}
                </time>
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.05] tracking-tight">
                {thought.title}
              </h1>

              <p className="mt-5 text-lg md:text-xl leading-relaxed text-muted-foreground">
                {thought.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Written by Aiden
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1">
                  ~{thought.content.split(/\s+/).length.toLocaleString()} words
                </span>
              </div>
            </div>
          </header>
        </div>

        {/* Content */}
        <article className="px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto">
            {/* “Paper” container (feels like a real post) */}
            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur px-6 md:px-10 py-10 shadow-sm">
              <div
                className="
                  prose max-w-none
                  prose-headings:font-display prose-headings:text-foreground
                  prose-p:text-muted-foreground
                  prose-strong:text-foreground
                  prose-a:text-primary hover:prose-a:opacity-80
                  prose-a:underline prose-a:underline-offset-4
                  prose-hr:border-border
                  prose-blockquote:border-border
                  prose-li:text-muted-foreground
                  prose-code:text-foreground
                "
              >
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
                    h2: ({ children, ...props }) => (
                      <h2 {...props} className="text-2xl md:text-3xl font-display font-medium mt-12 mb-5">
                        {children}
                      </h2>
                    ),
                    h3: ({ children, ...props }) => (
                      <h3 {...props} className="text-xl md:text-2xl font-display font-medium mt-10 mb-4">
                        {children}
                      </h3>
                    ),
                    p: ({ children, ...props }) => (
                      <p {...props} className="text-[18px] leading-8 text-muted-foreground mb-6">
                        {children}
                      </p>
                    ),
                    ul: ({ children, ...props }) => (
                      <ul {...props} className="my-6 space-y-2">
                        {children}
                      </ul>
                    ),
                    ol: ({ children, ...props }) => (
                      <ol {...props} className="my-6 space-y-2">
                        {children}
                      </ol>
                    ),
                    li: ({ children, ...props }) => (
                      <li {...props} className="leading-8 text-muted-foreground">
                        {children}
                      </li>
                    ),
                    blockquote: ({ children, ...props }) => (
                      <blockquote
                        {...props}
                        className="my-10 pl-6 border-l-2 border-primary/40 text-foreground/90"
                      >
                        <div className="text-xl md:text-2xl font-display leading-snug">{children}</div>
                      </blockquote>
                    ),
                    code: ({ children, ...props }) => (
                      <code
                        {...props}
                        className="rounded-md bg-muted px-1.5 py-0.5 text-[13px] border border-border"
                      >
                        {children}
                      </code>
                    ),
                    pre: ({ children, ...props }) => (
                      <pre
                        {...props}
                        className="my-8 overflow-x-auto rounded-2xl border border-border bg-muted/30 p-5 text-sm leading-6"
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

              {/* Prev/Next as blog cards */}
              {(prev || next) && (
                <div className="mt-14 pt-10 border-t border-border">
                  <div className="grid md:grid-cols-2 gap-4">
                    {prev ? (
                      <Link
                        to={`/thoughts/${prev.slug}`}
                        className="group rounded-2xl border border-border p-5 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                          Previous
                        </div>
                        <div className="mt-2 font-display font-medium text-foreground group-hover:text-primary transition-colors">
                          {prev.title}
                        </div>
                      </Link>
                    ) : (
                      <div className="hidden md:block" />
                    )}

                    {next ? (
                      <Link
                        to={`/thoughts/${next.slug}`}
                        className="group rounded-2xl border border-border p-5 hover:bg-muted/30 transition-colors md:text-right"
                      >
                        <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                          Next
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        <div className="mt-2 font-display font-medium text-foreground group-hover:text-primary transition-colors">
                          {next.title}
                        </div>
                      </Link>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ThoughtDetail;
