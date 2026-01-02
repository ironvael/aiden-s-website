import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import Navigation from "@/components/Navigation";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || "");
  const { prev, next } = getAdjacentProjects(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-medium mb-4">Project not found</h1>
          <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>

          {/* Header */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12">
            <div className="md:col-span-8">
              <p className="text-sm text-muted-foreground tracking-wide uppercase mb-4">
                {project.category} · {project.year}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1]">
                {project.title}
              </h1>
            </div>
            <div className="md:col-span-4 flex items-end">
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium border border-border px-4 py-2 hover:bg-secondary transition-colors"
                >
                  Visit project
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-secondary">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-sm text-muted-foreground tracking-wide uppercase">Overview</p>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                {project.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Result */}
      {(project.challenge || project.solution || project.result) && (
        <section className="px-6 md:px-12 lg:px-24 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 py-16 border-t border-b border-border">
              {project.challenge && (
                <div>
                  <h3 className="text-sm text-muted-foreground tracking-wide uppercase mb-4">
                    The Challenge
                  </h3>
                  <p className="leading-relaxed">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <h3 className="text-sm text-muted-foreground tracking-wide uppercase mb-4">
                    The Solution
                  </h3>
                  <p className="leading-relaxed">{project.solution}</p>
                </div>
              )}
              {project.result && (
                <div>
                  <h3 className="text-sm text-muted-foreground tracking-wide uppercase mb-4">
                    The Result
                  </h3>
                  <p className="leading-relaxed">{project.result}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-6 md:px-12 lg:px-24 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div 
                  key={index} 
                  className={`overflow-hidden bg-secondary ${
                    index === 0 && project.gallery!.length % 2 !== 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {prev ? (
              <button 
                onClick={() => navigate(`/projects/${prev.slug}`)}
                className="group flex items-center gap-4 text-left"
              >
                <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-x-1 transition-all" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Previous</p>
                  <p className="font-display font-medium group-hover:opacity-60 transition-opacity">
                    {prev.title}
                  </p>
                </div>
              </button>
            ) : (
              <div />
            )}
            
            {next ? (
              <button 
                onClick={() => navigate(`/projects/${next.slug}`)}
                className="group flex items-center gap-4 text-right"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Next</p>
                  <p className="font-display font-medium group-hover:opacity-60 transition-opacity">
                    {next.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-6">
            Interested in working together?
          </h2>
          <a 
            href="mailto:hello@aidenhovren.com"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 font-medium hover:opacity-80 transition-opacity"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
