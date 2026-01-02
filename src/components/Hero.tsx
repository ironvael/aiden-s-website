const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24">
      <div className="max-w-3xl">
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
    </section>
  );
};

export default Hero;
