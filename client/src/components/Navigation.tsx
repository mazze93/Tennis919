import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import logoImg from "@assets/logo.jpg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/lessons", label: "Lessons" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
  ];

  const isActive = (path: string) => location === path || (path !== "/" && location.startsWith(path));

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-background/95 backdrop-blur-sm"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md p-2 -ml-2" 
            data-testid="link-home"
          >
            <img src={logoImg} alt="Tennis 919 Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full" />
            <span className="font-heading font-bold text-base md:text-lg text-foreground">TENNIS 919</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = link.href;
                }}
                className={`text-sm font-medium transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md ${
                  isActive(link.href) ? "text-accent font-semibold" : "text-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => (window.location.href = "/shop")}
              data-testid="button-cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => (window.location.href = "/playbook")}
              data-testid="button-account"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              className="bg-accent hover:bg-accent text-accent-foreground"
              onClick={() => (window.location.href = "https://calendly.com/tennis919")}
              data-testid="button-book-lesson"
            >
              Book Now
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2" data-testid="menu-mobile">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    window.location.href = link.href;
                  }}
                  className={`block px-4 py-2 text-sm font-medium rounded-md hover-elevate active-elevate-2 ${
                    isActive(link.href) ? "bg-muted text-accent font-semibold" : "text-foreground"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 px-4 pt-3 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => (window.location.href = "/shop")}
                  className="flex-1"
                  data-testid="button-mobile-cart"
                >
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => (window.location.href = "/playbook")}
                  className="flex-1"
                  data-testid="button-mobile-account"
                >
                  <User className="h-5 w-5" />
                </Button>
              </div>
              <Button
                variant="default"
                className="mx-4 mt-3 bg-accent hover:bg-accent text-accent-foreground w-[calc(100%-2rem)]"
                onClick={() => (window.location.href = "https://calendly.com/tennis919")}
                data-testid="button-mobile-book"
              >
                Book a Lesson
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
