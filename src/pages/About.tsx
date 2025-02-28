
import { ArrowRight } from "lucide-react";
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
              Founded with a mission to transform pharmaceutical communications, C6Med bridges the gap between pharmaceutical companies and healthcare professionals.
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
                We are committed to creating evidence-based, compliant, and engaging content that resonates with medical experts and drives meaningful results for our pharmaceutical partners.
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

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
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
                title: "Scientific Integrity",
                description: "We uphold the highest standards of scientific accuracy and evidence-based communication in all our work."
              },
              {
                title: "Meaningful Engagement",
                description: "We focus on creating content that truly resonates with healthcare professionals and drives real value."
              },
              {
                title: "Collaborative Excellence",
                description: "We work closely with our clients as true partners to achieve exceptional results together."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-[#e2efd9] flex items-center justify-center mb-6">
                  <span className="text-c6-primary font-medium text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-c6-dark">{value.title}</h3>
                <p className="text-c6-dark/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
                name: "Dr. Elizabeth Chen",
                role: "Founder & CEO",
                bio: "With over 15 years of experience in medical communications, Dr. Chen leads our team with a passion for evidence-based storytelling.",
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "Michael Roberts, PharmD",
                role: "Medical Director",
                bio: "Michael ensures scientific accuracy across all our communications, leveraging his extensive background in pharmacology.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "Sarah Johnson, MS",
                role: "Strategic Communications Lead",
                bio: "Sarah translates complex medical information into compelling narratives that resonate with healthcare professionals.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
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

      <Footer />
    </div>
  );
}
