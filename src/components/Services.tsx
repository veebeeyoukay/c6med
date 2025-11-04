
import { MessageSquare, Users, Lightbulb, PieChart, Briefcase, Globe } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <MessageSquare className="h-8 w-8 text-c6-primary" />,
      title: "Medical Communications",
      description: "Develop scientifically accurate and compelling communications that resonate with healthcare professionals."
    },
    {
      icon: <Users className="h-8 w-8 text-c6-primary" />,
      title: "Expert Engagement",
      description: "Connect with key opinion leaders and medical experts to build trusted relationships that enhance your brand."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-c6-primary" />,
      title: "Strategic Consulting",
      description: "Align your scientific narrative with business objectives to maximize impact and drive success."
    },
    {
      icon: <PieChart className="h-8 w-8 text-c6-primary" />,
      title: "Data Visualization",
      description: "Transform complex clinical data into clear, compelling visuals that tell your product's story."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-c6-primary" />,
      title: "Advisory Boards",
      description: "Facilitate productive discussions between your team and medical experts to gain valuable insights."
    },
    {
      icon: <Globe className="h-8 w-8 text-c6-primary" />,
      title: "Global Reach",
      description: "Execute consistent medical communications strategies across markets with cultural sensitivity."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#e2efd9] text-c6-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="mb-6 text-c6-dark">
            Connecting Science with Strategy
          </h2>
          <p className="text-lg text-c6-dark/80 max-w-2xl mx-auto text-balance">
            We provide specialized services that bridge the gap between scientific evidence and effective brand communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="feature-card group"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="p-3 mb-4 inline-block rounded-lg bg-[#e2efd9] group-hover:bg-[#e2efd9] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3 text-c6-dark group-hover:text-c6-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-c6-dark/70 text-balance">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
