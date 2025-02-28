
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-200">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-semibold text-c6-dark">
                C<span className="text-c6-primary">6</span>Med
              </span>
            </a>
            <p className="text-c6-dark/70 max-w-md mb-6 text-balance">
              A boutique medical education and communications firm specializing in creating trusted connections between pharmaceutical companies and medical experts.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-white border border-gray-200 text-c6-dark hover:text-c6-primary hover:border-c6-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white border border-gray-200 text-c6-dark hover:text-c6-primary hover:border-c6-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white border border-gray-200 text-c6-dark hover:text-c6-primary hover:border-c6-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 text-c6-dark">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-c6-dark/70 hover:text-c6-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#features" className="text-c6-dark/70 hover:text-c6-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-c6-dark/70 hover:text-c6-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/login" className="text-c6-dark/70 hover:text-c6-primary transition-colors">
                  Client Login
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 text-c6-dark">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-c6-dark/70 hover:text-c6-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-c6-dark/70 hover:text-c6-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-c6-dark/70 hover:text-c6-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-c6-dark/70 hover:text-c6-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-c6-dark/60 text-sm">
          <p>&copy; {currentYear} C6Med. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
