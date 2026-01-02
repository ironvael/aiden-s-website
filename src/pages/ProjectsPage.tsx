import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";

const projects = [
  {
    id: 1,
    title: "Venture One",
    description: "A creative studio focused on crafting bold digital experiences that challenge the status quo.",
    category: "Startup",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "The Creator's Toolkit",
    description: "Resources and tools designed for entrepreneurs who refuse to settle for ordinary.",
    category: "Product",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "Community Hub",
    description: "A platform connecting ambitious creators across the globe.",
    category: "Platform",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Side Project X",
    description: "Experimental ideas that evolved into something unexpected.",
    category: "Experiment",
    year: "2022",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Brand Studio",
    description: "Visual identity work for startups ready to make their mark.",
    category: "Agency",
    year: "2022",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className={`group relative cursor-pointer ${
        project.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden bg-secondary ${
        project.featured ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/3]"
      }`}>
        {/* Image */}
        <img 
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-foreground/0 transition-all duration-500 ${
          isHovered ? "bg-foreground/60" : ""
        }`} />
        
        {/* Content overlay */}
        <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}>
          <p className="text-background/70 text-sm mb-2">
            {project.category} · {project.year}
          </p>
          <h3 className={`font-display font-medium text-background mb-2 ${
            project.featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
          }`}>
            {project.title}
          </h3>
          <p className="text-background/80 text-sm md:text-base max-w-md">
            {project.description}
          </p>
        </div>

        {/* Arrow */}
        <div className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-background flex items-center justify-center transition-all duration-500 ${
          isHovered ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-2 -translate-y-2"
        }`}>
          <ArrowUpRight className="w-5 h-5 text-foreground" />
        </div>
      </div>

      {/* Bottom info - visible when not hovered */}
      <div className={`mt-4 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
        <div className="flex items-center justify-between">
          <h3 className="font-display font-medium text-lg">{project.title}</h3>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
      </div>
    </article>
  );
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <p 
              className="text-muted-foreground text-sm tracking-wide uppercase mb-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Selected Work
            </p>
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Projects
            </h1>
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              A curated collection of ventures, products, and experiments — each one a step in the journey.
            </p>
          </div>

          {/* Projects Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div 
            className="mt-24 pt-16 border-t border-border text-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-muted-foreground mb-4">
              Interested in working together?
            </p>
            <a 
              href="mailto:hello@aidenhovren.com"
              className="inline-flex items-center gap-2 text-lg font-display font-medium link-hover"
            >
              Get in touch
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
