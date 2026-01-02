import { Mail, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

const Footer = () => {
  return (
    <footer id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16">
          {/* Left - CTA */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-6">
              Let's create<br />
              something<br />
              <span className="text-primary">together.</span>
            </h2>
            <p className="text-background/60 max-w-md mb-8">
              Whether you have a project in mind, want to collaborate, 
              or just say hi — I'd love to hear from you.
            </p>
            <a 
              href="mailto:hello@aidenhovren.com" 
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-full font-display font-semibold hover-lift wiggle"
            >
              <Mail className="w-5 h-5" />
              hello@aidenhovren.com
            </a>
          </div>

          {/* Right - Socials */}
          <div className="md:text-right">
            <p className="text-sm text-background/40 mb-6 font-body">
              Find me on the internet
            </p>
            <div className="flex md:justify-end gap-4 mb-12">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 hover:border-primary transition-all hover-grow"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter tease */}
            <div className="bg-background/5 rounded-2xl p-6 text-left">
              <p className="font-display font-semibold mb-2">Stay in the loop ✦</p>
              <p className="text-sm text-background/60 mb-4">
                Occasional updates on new projects, thoughts, and adventures.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 bg-background/10 border border-background/20 rounded-lg px-4 py-2 text-sm placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-display font-semibold hover:bg-primary/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40 font-body">
            © 2025 Aiden Hovren. Built with curiosity.
          </p>
          <nav className="flex gap-6">
            <a href="#about" className="text-sm text-background/60 hover:text-background transition-colors link-underline">
              About
            </a>
            <a href="#projects" className="text-sm text-background/60 hover:text-background transition-colors link-underline">
              Projects
            </a>
            <a href="#thoughts" className="text-sm text-background/60 hover:text-background transition-colors link-underline">
              Thoughts
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
