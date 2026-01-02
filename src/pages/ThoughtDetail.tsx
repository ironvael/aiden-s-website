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
  const { prev, next } = slug
    ? getAdjacentThoughts(slug)
    : { prev: null, next: null };

  if (!thought) {
    return <Navigate to="/thoughts" replace />;
  }

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
    keywords: [
      thought.category,
      "entrepreneurship",
      "operations",
      "business",
      "Aiden Hovren",
    ],
    articleSection: thought.category,
    wordCount: thought.content.split(/\s+/).length,
    inLanguage: "en-US",
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://aidenhovren.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Thoughts",
        item: "https://aidenhovren.com/thoughts",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: thought.title,
        item: `https://aidenhovren.com/thoughts/${thought.slug}`,
      },
    ],
  };

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

      <Navigation />

      <main className="pt-32 pb-24">
        {/* Header */}
        <header className="px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/thoughts"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All thoughts
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                {thought.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {thought.readTime}
              </span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{thought.date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6">
              {thought.title}
            </h1>

            <p className="text-xl text-muted-foreground">{thought.excerpt}</p>
          </div>
        </header>

        {/* Content */}
        <article className="px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:opacity-80 prose-a:underline prose-a:underline-offset-4">
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
                    <h2
                      {...props}
                      className="text-2xl md:text-3xl font-display font-medium mt-12 mb-6"
                    >
                      {children}
                    </h2>
                  ),
                  p: ({ children, ...props }) => (
                    <p
                      {...props}
                      className="text-lg leading-relaxed text-muted-foreground mb-6"
                    >
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
                      className="border-l-2 border-border pl-4 italic text-muted-foreground my-8"
                    >
                      {children}
                    </blockquote>
                  ),
                  code: ({ children, ...props }) => (
                    <code
                      {...props}
                      className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground"
                    >
                      {children}
                    </code>
                  ),
                }}
              >
                {thought.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <nav className="px-6 md:px-12 lg:px-24 mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="border-t border-border pt-12">
              <div className="grid md:grid-cols-2 gap-8">
                {prev && (
                  <Link to={`/thoughts/${prev.slug}`} className="group">
                    <span className="text-sm text-muted-foreground mb-2 block">
                      Previous
                    </span>
                    <div className="flex items-center gap-3">
                      <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                      <span className="font-display font-medium group-hover:text-primary transition-colors">
                        {prev.title}
                      </span>
                    </div>
                  </Link>
                )}

                {next && (
                  <Link
                    to={`/thoughts/${next.slug}`}
                    className="group md:text-right md:ml-auto"
                  >
                    <span className="text-sm text-muted-foreground mb-2 block">
                      Next
                    </span>
                    <div className="flex items-center gap-3 md:justify-end">
                      <span className="font-display font-medium group-hover:text-primary transition-colors">
                        {next.title}
                      </span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </main>

      <Footer />
    </div>
  );
};

export default ThoughtDetail;
