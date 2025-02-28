
import { ArrowRight, Calendar, Award, Users, Heart, Building, Check, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-[#e2efd9] text-c6-primary text-sm font-medium mb-4">
              Our Story
            </span>
            <h1 className="mb-6 text-c6-dark">
              About C6Med: The Building Block of Medical Education
            </h1>
            <p className="text-lg text-c6-dark/80 max-w-2xl mx-auto">
              Founded with a mission to transform pharmaceutical communications, C6Med bridges the gap between pharmaceutical companies and healthcare professionals through innovative, evidence-based educational content.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-c6-dark">Our Mission</h2>
              <p className="text-lg text-c6-dark/80 mb-6">
                At C6Med, our mission is to elevate the standard of medical communications. We believe that effective communication between pharmaceutical companies and healthcare professionals is essential for advancing medical knowledge and improving patient outcomes.
              </p>
              <p className="text-lg text-c6-dark/80 mb-6">
                We are committed to creating evidence-based, compliant, and engaging content that resonates with medical experts and drives meaningful results for our pharmaceutical partners. By bridging scientific expertise with innovative communication strategies, we help transform complex medical information into impactful educational experiences.
              </p>
              <a href="#contact" className="btn-primary inline-flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Medical professionals in discussion" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 p-4 bg-[#e2efd9] rounded-lg shadow-lg">
                <p className="text-c6-primary font-medium">Trusted expertise since 2005</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#e2efd9] text-c6-primary text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="mb-6 text-c6-dark">Our History</h2>
            <p className="text-lg text-c6-dark/80">
              Since our founding, we've been dedicated to excellence in medical communications, growing alongside the evolving healthcare landscape.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#e2efd9]"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "2005",
                  title: "C6Med is Founded",
                  description: "C6Med is established with a vision to transform pharmaceutical communications through evidence-based approaches."
                },
                {
                  year: "2010",
                  title: "Expansion of Services",
                  description: "We expanded our service offerings to include comprehensive medical education programs and strategic advisory services."
                },
                {
                  year: "2015",
                  title: "Digital Transformation",
                  description: "Embraced digital platforms to deliver innovative medical content, reaching healthcare professionals globally."
                },
                {
                  year: "2020",
                  title: "Virtual Education Leadership",
                  description: "Pioneered virtual medical education solutions, adapting to the changing healthcare environment."
                },
                {
                  year: "Present",
                  title: "Continued Innovation",
                  description: "Today, we continue to lead the industry with cutting-edge communication strategies and a commitment to scientific excellence."
                }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2"></div>
                  
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-c6-primary text-white shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <Calendar className="w-6 h-6" />
                  </div>
                  
                  <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-md">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#e2efd9] text-c6-primary text-sm font-medium mb-2">{item.year}</span>
                    <h3 className="text-xl font-medium mb-2 text-c6-dark">{item.title}</h3>
                    <p className="text-c6-dark/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#e2efd9] text-c6-primary text-sm font-medium mb-4">
              What We Stand For
            </span>
            <h2 className="mb-6 text-c6-dark">Our Core Values</h2>
            <p className="text-lg text-c6-dark/80">
              These principles guide everything we do and form the foundation of our approach to medical communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-c6-primary" />,
                title: "Scientific Integrity",
                description: "We uphold the highest standards of scientific accuracy and evidence-based communication in all our work."
              },
              {
                icon: <Users className="w-8 h-8 text-c6-primary" />,
                title: "Meaningful Engagement",
                description: "We focus on creating content that truly resonates with healthcare professionals and drives real value."
              },
              {
                icon: <Heart className="w-8 h-8 text-c6-primary" />,
                title: "Collaborative Excellence",
                description: "We work closely with our clients as true partners to achieve exceptional results together."
              },
              {
                icon: <Building className="w-8 h-8 text-c6-primary" />,
                title: "Ethical Practice",
                description: "We maintain the highest ethical standards in all client relationships and communications."
              },
              {
                icon: <Check className="w-8 h-8 text-c6-primary" />,
                title: "Quality Focus",
                description: "We are committed to delivering exceptional quality in every aspect of our work."
              },
              {
                icon: <ArrowRight className="w-8 h-8 text-c6-primary" />,
                title: "Forward Thinking",
                description: "We continuously innovate to stay ahead of industry trends and deliver cutting-edge solutions."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-medium mb-4 text-c6-dark">{value.title}</h3>
                <p className="text-c6-dark/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success */}
      <section className="py-16 bg-[#e2efd9]/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#e2efd9] text-c6-primary text-sm font-medium mb-4">
              Success Stories
            </span>
            <h2 className="mb-6 text-c6-dark">Client Impact</h2>
            <p className="text-lg text-c6-dark/80">
              Our work has made a meaningful difference for pharmaceutical companies and healthcare professionals alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Oncology Education Program",
                description: "Developed a comprehensive educational initiative that reached over 5,000 oncologists, improving treatment protocol adherence by 27%.",
                metric: "27% Improvement"
              },
              {
                title: "Cardiovascular Treatment Launch",
                description: "Supported the successful launch of a novel cardiovascular therapy through targeted educational content for cardiologists.",
                metric: "4,500+ HCPs Reached"
              },
              {
                title: "Rare Disease Awareness",
                description: "Created an award-winning awareness campaign for a rare disease, significantly reducing time to diagnosis for patients.",
                metric: "Award-Winning"
              }
            ].map((case_, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-[#e2efd9] flex items-center justify-center mb-6">
                  <span className="text-c6-primary font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-c6-dark">{case_.title}</h3>
                <p className="text-c6-dark/80 mb-4">{case_.description}</p>
                <span className="inline-block py-1 px-3 rounded-full bg-[#e2efd9] text-c6-primary text-sm font-medium">
                  {case_.metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#e2efd9] text-c6-primary text-sm font-medium mb-4">
              Meet Our Experts
            </span>
            <h2 className="mb-6 text-c6-dark">Our Leadership Team</h2>
            <p className="text-lg text-c6-dark/80">
              With decades of combined experience in pharmaceutical communications, our team brings unparalleled expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marcy Fink DuVal",
                role: "Founder & CEO",
                bio: "With over 25 years in healthcare communications, Marcy brings exceptional expertise in medical education and pharmaceutical marketing. Her background includes leadership positions at major healthcare communications agencies. Marcy holds an MBA and has led award-winning medical education initiatives throughout her career.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                linkedin: "https://www.linkedin.com/in/marcy-fink-duval-25b33b7/"
              },
              {
                name: "Michael Roberts, PharmD",
                role: "Medical Director",
                bio: "Michael ensures scientific accuracy across all our communications, leveraging his extensive background in pharmacology and clinical practice to develop evidence-based content that resonates with healthcare professionals.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                linkedin: "#"
              },
              {
                name: "Sarah Johnson, MS",
                role: "Strategic Communications Lead",
                bio: "Sarah translates complex medical information into compelling narratives that resonate with healthcare professionals. Her background in both science and communications gives her a unique perspective on effective medical education.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                linkedin: "#"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden transition-all hover:shadow-lg">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-c6-primary hover:text-white transition-colors"
                    aria-label={`${member.name}'s LinkedIn Profile`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-c6-dark">{member.name}</h3>
                  <p className="text-c6-primary font-medium mb-3">{member.role}</p>
                  <p className="text-c6-dark/80">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center">
            <h2 className="mb-6 text-c6-dark">Join Our Team</h2>
            <p className="text-lg text-c6-dark/80 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about medical communications and want to make a difference in healthcare education.
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
