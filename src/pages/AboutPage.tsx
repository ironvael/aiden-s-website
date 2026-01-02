import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const skills = [
  { category: "Building", items: ["Product Strategy", "Systems Design", "Brand Development", "Content Creation"] },
  { category: "Thinking", items: ["First Principles", "Pattern Recognition", "Long-term Planning", "Risk Assessment"] },
  { category: "Tools", items: ["Notion", "Figma", "Analytics", "AI Tools"] },
];

const interests = [
  "Philosophy", "Systems Theory", "Design", "Writing", "Technology", "Psychology"
];

const timeline = [
  { year: "2025", title: "Founded Ironvael", description: "A holding structure for durable projects and systems." },
  { year: "2024", title: "Building in Public", description: "Started documenting the journey of creating and launching ventures." },
  { year: "2023", title: "First Ventures", description: "Explored product ideas and learned the fundamentals of building." },
  { year: "2022", title: "The Spark", description: "Discovered the intersection of technology, design, and entrepreneurship." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section with Photo */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-4">
                <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/50">
                    <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 tracking-wide">Entrepreneur & Creator</p>
              </div>
              
              <div className="md:col-span-8 space-y-6">
                <p className="text-sm text-muted-foreground tracking-wide uppercase">About</p>
                <h1 className="text-3xl md:text-4xl font-serif leading-tight">
                  I'm Aiden Hovren—an entrepreneur and creator driven by curiosity.
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Whether launching a new venture or crafting content, I believe in building with intention. Every project is an opportunity to learn, experiment, and create something meaningful.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm drawn to the space where ideas meet execution—where the "what if" becomes "what is." I think in systems, design for durability, and optimize for clarity over cleverness.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not building, you'll find me exploring new concepts, connecting with creators, and chasing the next interesting problem to solve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Interests */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <p className="text-sm text-muted-foreground tracking-wide uppercase">Skills & Interests</p>
              </div>
              
              <div className="md:col-span-8 space-y-12">
                {/* Skills Grid */}
                <div className="grid sm:grid-cols-3 gap-8">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h3 className="text-sm font-medium mb-4">{skillGroup.category}</h3>
                      <ul className="space-y-2">
                        {skillGroup.items.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-sm font-medium mb-4">Currently Interested In</h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <span 
                        key={interest}
                        className="px-3 py-1 text-sm text-muted-foreground border border-border rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <p className="text-sm text-muted-foreground tracking-wide uppercase">Timeline</p>
              </div>
              
              <div className="md:col-span-8">
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={item.year} className="relative pl-8 border-l border-border">
                      <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-foreground" />
                      <p className="text-sm text-muted-foreground mb-1">{item.year}</p>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <p className="text-sm text-muted-foreground tracking-wide uppercase">Connect</p>
              </div>
              
              <div className="md:col-span-8">
                <p className="text-xl md:text-2xl leading-relaxed mb-6">
                  Interested in working together or just want to say hello?
                </p>
                <a 
                  href="mailto:hello@aidenhovren.com" 
                  className="inline-block text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                  hello@aidenhovren.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
