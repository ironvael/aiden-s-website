import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { projects, Project } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group relative block opacity-0 animate-fade-in ${project.featured ? "md:col-span-2 md:row-span-2" : ""}`}
      style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative overflow-hidden bg-secondary rounded-sm ${
          project.featured ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Gradient overlay - always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Border glow effect */}
        <div className="absolute inset-0 rounded-sm ring-1 ring-inset ring-foreground/0 group-hover:ring-foreground/10 transition-all duration-500" />

        {/* Content overlay */}
        <div
          className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-background/20 backdrop-blur-sm rounded text-background/90 text-xs font-medium uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-background/60 text-xs">{project.year}</span>
          </div>
          <h3
            className={`font-display font-medium text-background mb-2 transition-transform duration-500 ${
              project.featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
            } ${isHovered ? "translate-x-0" : "-translate-x-2"}`}
          >
            {project.title}
          </h3>
          <p className={`text-background/80 text-sm md:text-base max-w-md transition-all duration-500 delay-75 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          }`}>
            {project.description}
          </p>
        </div>

        {/* Arrow button */}
        <div
          className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-background flex items-center justify-center transition-all duration-500 shadow-lg ${
            isHovered ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-45"
          }`}
        >
          <ArrowUpRight className="w-5 h-5 text-foreground" />
        </div>

        {/* Corner accent */}
        <div className={`absolute bottom-0 left-0 w-1 h-0 bg-primary transition-all duration-500 ${
          isHovered ? "h-16" : "h-0"
        }`} />
      </div>

      {/* Bottom info - visible when not hovered */}
      <div className={`mt-4 transition-all duration-300 ${isHovered ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}`}>
        <div className="flex items-center justify-between">
          <h3 className="font-display font-medium text-lg">{project.title}</h3>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
      </div>
    </Link>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-24 pt-16 border-t border-border text-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-muted-foreground mb-4">Interested in working together?</p>
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
