import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Venture One",
    description: "A creative studio focused on digital experiences.",
    category: "Startup",
    year: "2024",
  },
  {
    title: "The Creator's Toolkit",
    description: "Resources and tools for the modern entrepreneur.",
    category: "Product",
    year: "2023",
  },
  {
    title: "Community Hub",
    description: "Building connections between creators worldwide.",
    category: "Platform",
    year: "2023",
  },
  {
    title: "Side Project X",
    description: "Experimental ideas that turned into something real.",
    category: "Experiment",
    year: "2022",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground tracking-wide uppercase">Selected Work</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl md:text-2xl leading-relaxed">
              A collection of ventures, products, and experiments.
            </p>
          </div>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {projects.map((project) => (
            <article 
              key={project.title}
              className="group py-8 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg md:text-xl font-display font-medium group-hover:opacity-60 transition-opacity">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {project.description}
                  </p>
                </div>
                <div className="text-right shrink-0 hidden sm:block">
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                  <p className="text-sm text-muted-foreground">{project.year}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
