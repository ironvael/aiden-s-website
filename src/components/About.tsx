const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground tracking-wide uppercase">About</p>
          </div>
          
          <div className="md:col-span-8 space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed">
              I'm an entrepreneur and creator driven by curiosity. Whether launching a new venture or crafting content, I believe in building with intention.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Every project is an opportunity to learn, experiment, and create something meaningful. I'm drawn to the space where ideas meet execution — where the "what if" becomes "what is."
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              When I'm not building, you'll find me exploring new concepts, connecting with creators, and chasing the next interesting problem to solve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
