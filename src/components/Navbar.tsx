
import { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-xl font-semibold text-c6-dark">
            C<span className="text-c6-primary">6</span>Med
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          <a href="#services" className="nav-link">Services</a>
          <a href="#features" className="nav-link">Why Choose Us</a>
          <a href="#contact" className="nav-link">Contact</a>
          
          <a 
            href="/login" 
            className="ml-4 inline-flex items-center px-4 py-2 rounded-md bg-c6-light text-c6-primary hover:bg-c6-primary hover:text-white transition-colors text-sm font-medium"
          >
            <LogIn className="w-4 h-4 mr-1" />
            Client Login
          </a>
        </nav>

        <button 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-c6-dark" />
          ) : (
            <Menu className="h-6 w-6 text-c6-dark" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg animate-scale-in">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="px-3 py-2 text-c6-dark hover:text-c6-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#features" 
              className="px-3 py-2 text-c6-dark hover:text-c6-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#contact" 
              className="px-3 py-2 text-c6-dark hover:text-c6-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="/login" 
              className="flex items-center px-3 py-2 text-c6-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogIn className="w-4 h-4 mr-1" />
              Client Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
