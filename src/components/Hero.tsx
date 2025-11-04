
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-[0.03]"></div>
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="inline-block py-1 px-3 rounded-full bg-[#e2efd9] text-[#4caf50] text-sm font-medium animate-reveal">
              The Building Block of Medical Education
            </span>
          </div>
          
          <h1 className="mb-6 text-c6-dark animate-reveal stagger-1 text-balance">
            Transforming Pharmaceutical Engagement Through Trusted, Cutting-Edge Communication
          </h1>
          
          <p className="text-lg md:text-xl text-c6-dark/80 max-w-2xl mx-auto mb-10 animate-reveal stagger-2 text-balance">
            We specialize in creating meaningful connections between pharmaceutical companies and medical experts, building evidence-based narratives that drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal stagger-3">
            <a href="/#contact" className="btn-primary w-full sm:w-auto">
              Schedule a Consultation
            </a>
            <a href="/#services" className="btn-secondary w-full sm:w-auto group">
              Learn More 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}

export default Hero;
