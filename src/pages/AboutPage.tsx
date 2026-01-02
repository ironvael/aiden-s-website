import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";

const socials = [
  { name: "LinkedIn", href: "https://linkedin.com/in/aidenhovren", icon: Linkedin },
  { name: "X / Twitter", href: "https://x.com/theaidenhovren", icon: Twitter },
  { name: "GitHub", href: "https://github.com/ironvael", icon: Github },
  { name: "Instagram", href: "https://instagram.com/aidenhovren", icon: Instagram },
];

const skills = [
  { category: "Operations", items: ["Process Optimization", "Systems Design", "Lean Six Sigma", "Aviation Operations"] },
  { category: "Building", items: ["Product Strategy", "Curriculum Development", "Content Creation", "Business Development"] },
  { category: "Tools", items: ["Notion", "Figma", "Analytics", "AI Tools"] },
];

const interests = [
  "Philosophy", "Systems Theory", "Design", "Writing", "Technology", "Psychology"
];

const timeline = [
  { year: "2025", title: "Founded Ironvael", description: "Created a holding structure to unify all ventures under one roof. All projects preparing to launch and scale." },
  { year: "2025", title: "Started Operations University", description: "Began building an educational platform focused on operational excellence and systems thinking." },
  { year: "2024", title: "Transitioned to Civilian Life", description: "Left the Navy. Worked as an MH-60S SME writing curriculum for new aircrewmen. Started pursuing Lean Six Sigma Green Belt." },
  { year: "2023", title: "U.S. Navy Rescue Swimmer", description: "Discovered a passion for aviation operations and systems while serving. This became the foundation for everything that followed." },
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

        {/* Contact CTA */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <p className="text-sm text-muted-foreground tracking-wide uppercase">Connect</p>
              </div>
              
              <div className="md:col-span-8 space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed">
                  Interested in working together or just want to say hello?
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <a 
                    href="mailto:hello@aidenhovren.com" 
                    className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                  >
                    hello@aidenhovren.com
                  </a>
                  <a 
                    href="/resume.pdf" 
                    download
                    className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                  >
                    Download Resume
                  </a>
                </div>

                <div className="flex gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
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
