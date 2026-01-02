import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import aidenPhoto from "@/assets/aiden-photo.jpg";
import SEO from "@/components/SEO";

const socials = [
  { name: "LinkedIn", href: "https://linkedin.com/in/aidenhovren", icon: Linkedin },
  { name: "X / Twitter", href: "https://x.com/theaidenhovren", icon: Twitter },
  { name: "GitHub", href: "https://github.com/ironvael", icon: Github },
  { name: "Instagram", href: "https://instagram.com/aidenhovren", icon: Instagram },
];

const skills = [
  {
    category: "Operations",
    items: [
      "Process Optimization",
      "Systems Design",
      "Lean Six Sigma",
      "Risk & Decision-Making"
    ]
  },
  {
    category: "Building",
    items: [
      "Product Strategy",
      "Curriculum Development",
      "Business Development",
      "Content Creation"
    ]
  },
  {
    category: "Technology",
    items: [
      "Frontend Web Development",
      "UI/UX Systems Thinking",
      "AI-Assisted Development",
      "Analytics & Instrumentation"
    ]
  },
  {
    category: "Leadership",
    items: [
      "Crisis Response",
      "Training & Instruction",
      "Team Operations",
      "Operational Discipline"
    ]
  },
  {
    category: "Brand & Marketing",
    items: [
      "Brand Positioning",
      "Messaging & Copywriting",
      "Audience Building",
      "Go-To-Market Basics"
    ]
  },
  {
    category: "Tooling",
    items: [
      "Notion",
      "Figma",
      "GitHub",
      "Automation Platforms"
    ]
  }
];

const interests = [
  "Systems",
  "Operations",
  "Design",
  "Education",
  "Technology",
  "Automation",
  "Writing",
  "Strategy",
  "Longevity"
];

const timeline = [
  { year: "2025", title: "Founded Ironvael", description: "Created a holding structure to unify all ventures under one roof. All projects preparing to launch and scale." },
  { year: "2025", title: "Started Operations University", description: "Began building an educational platform focused on operational excellence and systems thinking." },
  { year: "2024", title: "Transitioned to Civilian Life", description: "Left the Navy. Worked as an MH-60S SME writing curriculum for new aircrewmen. Started pursuing Lean Six Sigma Green Belt." },
  { year: "2023", title: "U.S. Navy Rescue Swimmer", description: "Discovered a passion for aviation operations and systems while serving. This became the foundation for everything that followed." },
];

// ProfilePage structured data with detailed Person markup
const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "About Aiden Hovren",
  "description": "Learn about Aiden Hovren - former Navy Rescue Swimmer turned entrepreneur. Founder of Ironvael and Operations University.",
  "url": "https://aidenhovren.com/about",
  "mainEntity": {
    "@type": "Person",
    "name": "Aiden Hovren",
    "givenName": "Aiden",
    "familyName": "Hovren",
    "url": "https://aidenhovren.com",
    "image": "https://aidenhovren.com/og-image.jpg",
    "jobTitle": "Entrepreneur & Operations Expert",
    "description": "Former U.S. Navy Rescue Swimmer turned entrepreneur. Lean Six Sigma Green Belt certified founder building ventures focused on operational excellence and systems thinking.",
    "knowsAbout": [
      "Operations Management",
      "Lean Six Sigma",
      "Entrepreneurship",
      "Systems Thinking",
      "Process Optimization",
      "Business Strategy",
      "Product Strategy",
      "Aviation Operations",
      "Crisis Response",
      "Team Leadership"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Lean Six Sigma Green Belt"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "military",
        "name": "U.S. Navy Rescue Swimmer"
      }
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "United States Navy"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Ironvael",
      "url": "https://ironvael.com"
    },
    "affiliation": [
      {
        "@type": "Organization",
        "name": "Ironvael",
        "url": "https://ironvael.com",
        "description": "Systems-driven holding company that builds, operates, and invests in resilient businesses."
      },
      {
        "@type": "EducationalOrganization",
        "name": "Operations University",
        "description": "Modern education platform focused on operations excellence, systems thinking, and real-world execution."
      }
    ],
    "sameAs": [
      "https://linkedin.com/in/aidenhovren",
      "https://x.com/theaidenhovren",
      "https://github.com/ironvael",
      "https://instagram.com/aidenhovren"
    ],
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Entrepreneur",
        "occupationalCategory": "Business Owner"
      },
      {
        "@type": "Occupation",
        "name": "Operations Expert",
        "occupationalCategory": "Operations Management"
      }
    ]
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
      "name": "About",
      "item": "https://aidenhovren.com/about"
    }
  ]
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About - Former Navy Rescue Swimmer & Entrepreneur"
        description="Learn about Aiden Hovren - former U.S. Navy Rescue Swimmer turned entrepreneur. Lean Six Sigma certified founder of Ironvael and Operations University, building ventures focused on operational excellence."
        url="/about"
        structuredData={[profileStructuredData, breadcrumbData]}
      />
      <Navigation />
      <main className="pt-24">
        {/* Hero Section with Photo */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-4">
                <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
                  <img 
                    src={aidenPhoto} 
                    alt="Aiden Hovren" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-3 tracking-wide">Former Navy Rescue Swimmer · Entrepreneur</p>
              </div>
              
              <div className="md:col-span-8 space-y-6">
                <p className="text-sm text-muted-foreground tracking-wide uppercase">About</p>
                <h1 className="text-3xl md:text-4xl font-serif leading-tight">
                  I'm Aiden Hovren—a former U.S. Navy Rescue Swimmer turned entrepreneur.
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  My time in the military gave me more than discipline—it sparked a deep fascination with aviation operations and how systems work under pressure. After transitioning out, I realized that same operational mindset could be applied to building businesses.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I faced difficulties breaking into the civilian workforce, I decided to build my own path. I started learning everything I could about business, operations, and entrepreneurship. That journey led me to create Operations University and eventually Ironvael—a holding structure for ventures built on systems thinking and operational excellence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I also assist nonprofits with digitalization and web development, helping mission-driven organizations build the systems they need to scale their impact.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, all ventures under Ironvael are preparing to launch and scale. I'm focused on building durable systems that don't just survive contact with reality—they thrive in it.
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
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
