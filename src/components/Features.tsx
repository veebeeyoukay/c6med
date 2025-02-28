
import { Check } from 'lucide-react';

export function Features() {
  const features = [
    "Deep pharmaceutical industry expertise",
    "Connections with leading medical experts",
    "Evidence-based communication strategies",
    "Seamless integration with your brand",
    "Compliance-focused approach",
    "Measurable engagement outcomes"
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Medical professionals collaborating" 
                  className="w-full h-auto object-cover image-filter"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-c6-primary rounded-full flex items-center justify-center text-white font-medium p-2 text-center text-sm shadow-lg">
                Trusted by leading pharma companies
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block py-1 px-3 rounded-full bg-[#e2efd9] text-c6-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            
            <h2 className="mb-6 text-c6-dark">
              Setting the Standard in Medical Communications
            </h2>
            
            <p className="text-lg text-c6-dark/80 mb-8 text-balance">
              We combine scientific expertise with strategic thinking to create impactful pharmaceutical communications that resonate with healthcare professionals.
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 p-1 rounded-full bg-[#e2efd9] text-c6-primary mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-c6-dark">{feature}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="btn-primary">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
