import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { projects, Project } from "@/data/projects";
import SEO from "@/components/SEO";

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group relative block ${project.featured ? "md:col-span-2 md:row-span-2" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative overflow-hidden bg-secondary ${
          project.featured ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-foreground/0 transition-all duration-500 ${
            isHovered ? "bg-foreground/60" : ""
          }`}
        />

        {/* Content overlay */}
        <div
          className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-background/70 text-sm mb-2">
            {project.category} · {project.year}
          </p>
          <h3
            className={`font-display font-medium text-background mb-2 ${
              project.featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="text-background/80 text-sm md:text-base max-w-md">{project.description}</p>
        </div>

        {/* Arrow */}
        <div
          className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-background flex items-center justify-center transition-all duration-500 ${
            isHovered ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-2 -translate-y-2"
          }`}
        >
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
    </Link>
  );
};

// Structured data for projects collection
const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Projects by Aiden Hovren",
  "description": "A curated collection of ventures, products, and experiments by Aiden Hovren - entrepreneur and operations expert.",
  "url": "https://aidenhovren.com/projects",
  "author": {
    "@type": "Person",
    "name": "Aiden Hovren",
    "url": "https://aidenhovren.com"
  },
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": projects.length,
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://aidenhovren.com/projects/${project.slug}`,
      "name": project.title
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
      "name": "Projects",
      "item": "https://aidenhovren.com/projects"
    }
  ]
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Projects - Entrepreneurial Ventures & Products"
        description="Explore Aiden Hovren's portfolio of entrepreneurial ventures, products, and experiments. From Ironvael to Operations University - building businesses focused on operational excellence."
        url="/projects"
        structuredData={[collectionStructuredData, breadcrumbData]}
      />
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
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
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
