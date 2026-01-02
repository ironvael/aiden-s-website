import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, ExternalLink } from "lucide-react";

const DemoPage = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
              Demo Showcase
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Preview and explore selected projects in detail.
            </p>
          </header>

          <div className="grid lg:grid-cols-[300px_1fr] gap-8">
            {/* Project Selector */}
            <aside className="space-y-2">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                Select Project
              </p>
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeProject.id === project.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 hover:bg-muted"
                  }`}
                >
                  <span className="font-medium">{project.title}</span>
                  <span className="block text-sm opacity-70">{project.category}</span>
                </button>
              ))}
            </aside>

            {/* Demo Preview */}
            <div className="space-y-8">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-3xl font-medium mb-2">
                    {activeProject.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {activeProject.longDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={`/projects/${activeProject.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      Visit Live Site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {activeProject.gallery && activeProject.gallery.length > 0 && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                      Gallery
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {activeProject.gallery.map((img, idx) => (
                        <div
                          key={idx}
                          className="aspect-video bg-muted rounded-lg overflow-hidden"
                        >
                          <img
                            src={img}
                            alt={`${activeProject.title} gallery ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DemoPage;
