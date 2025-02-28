
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      setFormState({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-c6-light text-c6-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="mb-6 text-c6-dark">
            Ready to Transform Your Communications?
          </h2>
          <p className="text-lg text-c6-dark/80 max-w-2xl mx-auto text-balance">
            Let's discuss how our tailored approach can help you connect with healthcare professionals and elevate your brand strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start">
              <div className="mr-4 p-3 rounded-full bg-c6-light text-c6-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-c6-dark">Email Us</h3>
                <p className="text-c6-dark/70">
                  <a href="mailto:contact@c6med.com" className="hover:text-c6-primary">
                    contact@c6med.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-3 rounded-full bg-c6-light text-c6-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-c6-dark">Call Us</h3>
                <p className="text-c6-dark/70">
                  <a href="tel:+11234567890" className="hover:text-c6-primary">
                    +1 (123) 456-7890
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-3 rounded-full bg-c6-light text-c6-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-c6-dark">Visit Us</h3>
                <p className="text-c6-dark/70">
                  123 Medical Plaza, Suite 200<br />
                  Boston, MA 02115
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-c6-dark mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-c6-primary/20 focus:border-c6-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-c6-dark mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-c6-primary/20 focus:border-c6-primary transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-c6-dark mb-2">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-c6-primary/20 focus:border-c6-primary transition-colors"
                  placeholder="Your company"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-c6-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-c6-primary/20 focus:border-c6-primary transition-colors"
                  placeholder="How can we help you?"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Schedule a Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
