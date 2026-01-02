import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
       <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-sm text-muted-foreground tracking-wide uppercase">Connect</p>
            </div>
            
            <div className="md:col-span-8 space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed">
                Interested in working together or just want to say hello?
              </p>
              
              <div className="flex flex-wrap gap-6">
                <a 
                  href="mailto:hello@aidenhovren.com" 
                  className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                  hello@aidenhovren.com
                </a>
                <a 
                  href="/resume.pdf" 
                  download
                  className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                  Download Resume
                </a>
              </div>

                <div className="flex gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        <div className="pt-16 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <p className="text-sm text-muted-foreground">
            © 2025 Aiden Hovren
          </p>
          <nav className="flex gap-8">
            <a href="https://x.com/theaidenhovren" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              X
            </a>
            <a href="https://linkedin.com/in/aidenhovren" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/ironvael" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://instagram.com/aidenhovren" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
