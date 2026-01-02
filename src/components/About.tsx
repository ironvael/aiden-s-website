import { Sparkles, Rocket, Heart } from "lucide-react";

const About = () => {
  const traits = [
    { icon: Sparkles, label: "Creative Thinker", color: "text-primary" },
    { icon: Rocket, label: "Builder", color: "text-accent" },
    { icon: Heart, label: "Passionate", color: "text-primary" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm text-muted-foreground font-body">01</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">About</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Bio */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              I'm an entrepreneur and creator who believes the best ideas come from{" "}
              <span className="text-primary font-semibold">curiosity</span> and{" "}
              <span className="text-accent font-semibold">experimentation</span>.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Whether I'm launching a new venture, crafting content, or exploring 
              uncharted territory—I'm driven by the thrill of building something 
              from nothing. Every project is a chance to learn, grow, and create 
              impact.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              When I'm not building, you'll find me diving into new ideas, 
              connecting with fellow creators, or chasing the next big "what if?"
            </p>

            {/* Traits */}
            <div className="flex flex-wrap gap-3 pt-4">
              {traits.map(({ icon: Icon, label, color }) => (
                <div 
                  key={label}
                  className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full hover-grow cursor-default"
                >
                  <Icon className={`w-4 h-4 ${color}`} />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl flex items-center justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0">
                <div className="absolute top-8 left-8 w-16 h-16 border-2 border-primary/30 rounded-full animate-float" />
                <div className="absolute bottom-12 right-12 w-24 h-24 border-2 border-accent/30 rounded-2xl rotate-12 animate-float" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-primary/40 rounded-full blur-sm animate-float" style={{ animationDelay: "2s" }} />
              </div>
              
              {/* Center content */}
              <div className="text-center z-10 px-8">
                <span className="text-6xl md:text-8xl">✦</span>
                <p className="mt-4 text-sm text-muted-foreground font-body">
                  Always creating
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-2 rounded-full shadow-soft">
              <span className="text-sm font-display font-semibold">Open to collaborate →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
