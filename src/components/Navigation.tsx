import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/projects" },
  { label: "Thoughts", href: "/#thoughts" },
  { label: "Contact", href: "/#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    // If it's a hash link and we're on the home page, scroll smoothly
    if (href.startsWith("/#") && location.pathname === "/") {
      const element = document.querySelector(href.replace("/", ""));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-medium">
          Aiden Hovren
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith("/projects") ? (
                <Link 
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a 
                  href={link.href} 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <button 
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border px-6 py-8">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/projects") ? (
                  <Link 
                    to={link.href}
                    className="text-lg font-display"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className="text-lg font-display"
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
