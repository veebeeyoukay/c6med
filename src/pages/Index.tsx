
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Animate elements when they enter the viewport
    const animateElements = () => {
      const elements = document.querySelectorAll('.feature-card');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });
      
      elements.forEach((el) => {
        observer.observe(el);
      });
      
      return () => {
        elements.forEach((el) => {
          observer.unobserve(el);
        });
      };
    };
    
    const timer = setTimeout(animateElements, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
