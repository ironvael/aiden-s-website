import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Venture One",
    description: "A creative studio pushing the boundaries of digital experiences.",
    category: "Startup",
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "The Creator's Toolkit",
    description: "Resources and tools for the modern entrepreneur.",
    category: "Product",
    year: "2023",
    featured: false,
  },
  {
    id: 3,
    title: "Community Hub",
    description: "Building connections between creators worldwide.",
    category: "Platform",
    year: "2023",
    featured: false,
  },
  {
    id: 4,
    title: "Side Project X",
    description: "Experimental ideas that turned into something beautiful.",
    category: "Experiment",
    year: "2022",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm text-muted-foreground font-body">02</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Projects & Ventures</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article 
              key={project.id}
              className={`group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover-lift cursor-pointer transition-all ${
                project.featured ? "md:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-body bg-muted px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-body">
                    {project.year}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">More projects coming soon...</p>
          <button className="inline-flex items-center gap-2 text-primary font-display font-semibold link-underline">
            <ExternalLink className="w-4 h-4" />
            View full portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
