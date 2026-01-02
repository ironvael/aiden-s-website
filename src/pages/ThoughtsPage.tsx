import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { thoughts } from "@/data/thoughts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Structured data for thoughts/blog collection
const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Thoughts by Aiden Hovren",
  "description": "Ideas, lessons, and stories from the entrepreneurial journey. Essays on operations, systems thinking, and building ventures.",
  "url": "https://aidenhovren.com/thoughts",
  "author": {
    "@type": "Person",
    "name": "Aiden Hovren",
    "url": "https://aidenhovren.com"
  },
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": thoughts.length,
    "itemListElement": thoughts.map((thought, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://aidenhovren.com/thoughts/${thought.slug}`,
      "name": thought.title
    }))
  }
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aidenhovren.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Thoughts",
      "item": "https://aidenhovren.com/thoughts"
    }
  ]
};

const ThoughtsPage = () => {
  const featuredThoughts = thoughts.filter((t) => t.featured);
  const otherThoughts = thoughts.filter((t) => !t.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Thoughts - Essays on Entrepreneurship & Operations"
        description="Ideas, lessons, and stories from Aiden Hovren's entrepreneurial journey. Essays on operations, systems thinking, and building ventures that last."
        url="/thoughts"
        structuredData={[collectionStructuredData, breadcrumbData]}
      />
      <Navigation />
      
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">
              Thoughts
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Ideas, lessons, and stories from the journey. Writing helps me think—these are the artifacts of that process.
            </p>
          </div>

          {/* Featured Posts */}
          {featuredThoughts.length > 0 && (
            <section className="mb-20">
              <p className="text-sm text-muted-foreground tracking-wide uppercase mb-8">Featured</p>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredThoughts.map((thought) => (
                  <Link
                    key={thought.id}
                    to={`/thoughts/${thought.slug}`}
                    className="group relative bg-muted/30 border border-border rounded-lg p-8 hover:bg-muted/50 hover:border-foreground/20 transition-all duration-300"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                          {thought.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{thought.readTime}</span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-display font-medium mb-3 group-hover:text-primary transition-colors">
                        {thought.title}
                      </h2>
                      <p className="text-muted-foreground flex-grow mb-6">
                        {thought.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{thought.date}</span>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <p className="text-sm text-muted-foreground tracking-wide uppercase mb-8">All Posts</p>
            <div className="space-y-0 divide-y divide-border">
              {otherThoughts.map((thought) => (
                <Link
                  key={thought.id}
                  to={`/thoughts/${thought.slug}`}
                  className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted/20 -mx-4 px-4 transition-colors"
                >
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-primary">
                        {thought.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{thought.readTime}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-medium group-hover:text-primary transition-colors">
                      {thought.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 md:hidden">
                      {thought.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-sm text-muted-foreground">{thought.date}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThoughtsPage;
