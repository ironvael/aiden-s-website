import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Venture One",
    description: "A creative studio focused on digital experiences.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  },
  {
    title: "The Creator's Toolkit",
    description: "Resources and tools for the modern entrepreneur.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
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

        {/* Preview cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project) => (
            <article 
              key={project.title}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-secondary aspect-[4/3] mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-display font-medium">{project.title}</h3>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-sm font-medium link-hover"
        >
          View all projects
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
