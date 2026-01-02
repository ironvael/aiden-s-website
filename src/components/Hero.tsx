import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 blob blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/20 blob blur-3xl" style={{ animationDelay: "2s" }} />
      
      {/* Main content */}
      <div className="relative z-10 max-w-5xl">
        <p 
          className="text-muted-foreground text-sm md:text-base mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Hey, I'm
        </p>
        
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[0.9] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Aiden<br />
          <span className="text-gradient">Hovren</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-foreground/80 max-w-xl mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Entrepreneur & Creator building things that 
          <span className="squiggle ml-2">matter</span>.
        </p>
        
        <div 
          className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-display font-semibold hover-lift wiggle"
          >
            See my work
          </a>
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 border-2 border-foreground/20 px-6 py-3 rounded-full font-display font-medium hover:border-primary hover:text-primary transition-colors"
          >
            About me
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        <ArrowDown className="w-6 h-6 animate-bounce-soft text-muted-foreground" />
      </div>
      
      {/* Side decoration */}
      <div 
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 opacity-0 animate-fade-in"
        style={{ animationDelay: "0.8s" }}
      >
        {["01", "02", "03", "04"].map((num, i) => (
          <span 
            key={num} 
            className={`text-xs font-body ${i === 0 ? "text-primary" : "text-muted-foreground/40"}`}
          >
            {num}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
