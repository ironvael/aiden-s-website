import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { thoughts } from "@/data/thoughts";

const Thoughts = () => {
  const previewThoughts = thoughts.slice(0, 3);

  return (
    <section id="thoughts" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground tracking-wide uppercase">Thoughts</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl md:text-2xl leading-relaxed">
              Ideas, lessons, and stories from the journey.
            </p>
          </div>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {previewThoughts.map((thought) => (
            <Link 
              key={thought.id}
              to={`/thoughts/${thought.slug}`}
              className="group py-6 flex items-center justify-between gap-8"
            >
              <div className="flex-grow">
                <h3 className="text-base md:text-lg font-display font-medium group-hover:text-primary transition-colors">
                  {thought.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 hidden md:block">
                  {thought.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <p className="text-sm text-muted-foreground">
                  {thought.date}
                </p>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link 
            to="/thoughts" 
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group"
          >
            View all thoughts
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Thoughts;
