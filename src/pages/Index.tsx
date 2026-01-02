import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ComingUp from "@/components/ComingUp";
import Projects from "@/components/Projects";
import Thoughts from "@/components/Thoughts";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Comprehensive WebPage schema for homepage
const webPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Aiden Hovren - Entrepreneur & Operations Expert",
  "description": "Aiden Hovren is an entrepreneur and operations expert. Former Navy Rescue Swimmer, Lean Six Sigma certified, founder of Ironvael and Operations University.",
  "url": "https://aidenhovren.com",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Aiden Hovren",
    "url": "https://aidenhovren.com"
  },
  "about": {
    "@type": "Person",
    "name": "Aiden Hovren",
    "jobTitle": "Entrepreneur & Operations Expert",
    "url": "https://aidenhovren.com"
  },
  "mainEntity": {
    "@type": "Person",
    "name": "Aiden Hovren",
    "url": "https://aidenhovren.com",
    "image": "https://aidenhovren.com/og-image.jpg",
    "jobTitle": "Entrepreneur & Operations Expert",
    "description": "Former Navy Rescue Swimmer turned entrepreneur. Lean Six Sigma Green Belt certified founder of Ironvael and Operations University.",
    "knowsAbout": ["Operations", "Lean Six Sigma", "Entrepreneurship", "Systems Thinking", "Process Optimization"],
    "sameAs": [
      "https://linkedin.com/in/aidenhovren",
      "https://x.com/theaidenhovren",
      "https://github.com/ironvael",
      "https://instagram.com/aidenhovren"
    ]
  },
  "keywords": "Aiden Hovren, entrepreneur, operations expert, Lean Six Sigma, Ironvael, Operations University, Navy Rescue Swimmer, business ventures, operational excellence, systems thinking"
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ironvael",
  "url": "https://ironvael.com",
  "logo": "https://aidenhovren.com/ironvael.png",
  "description": "Systems-driven holding company that builds, operates, and invests in resilient businesses.",
  "founder": {
    "@type": "Person",
    "name": "Aiden Hovren",
    "url": "https://aidenhovren.com"
  },
  "foundingDate": "2025",
  "sameAs": [
    "https://linkedin.com/in/aidenhovren",
    "https://x.com/theaidenhovren"
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Entrepreneur & Operations Expert | Founder of Ironvael"
        description="Aiden Hovren is an entrepreneur and operations expert. Former Navy Rescue Swimmer, Lean Six Sigma certified, founder of Ironvael and Operations University. Building ventures focused on operational excellence."
        url="/"
        structuredData={[webPageStructuredData, organizationStructuredData]}
      />
      <Navigation />
      <main>
        <Hero />
        <ComingUp />
        <Projects />
        <Thoughts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
