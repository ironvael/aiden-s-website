const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-24">
      <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
        {/* Left content */}
        <div className="max-w-3xl lg:max-w-xl xl:max-w-2xl">
          <p 
            className="text-muted-foreground text-sm tracking-wide uppercase mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Entrepreneur & Creator
          </p>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Aiden Hovren
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Building things that matter. I create ventures, tell stories, and explore ideas at the intersection of creativity and business.
          </p>
        </div>

        {/* Right decorative element */}
        <div 
          className="hidden lg:flex items-center justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative w-72 h-72 xl:w-96 xl:h-96">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-border/40" />
            {/* Middle ring */}
            <div className="absolute inset-8 rounded-full border border-border/30" />
            {/* Inner ring */}
            <div className="absolute inset-16 rounded-full border border-border/20" />
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-foreground/60" />
            </div>
            {/* Accent line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
