import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onPageChange }) => {
  const services = [
    {
      title: "Architectural Design",
      icon: "🏗️",
      description: "Context-sensitive residential and boutique commercial spaces.",
      details: [
        "Residential architecture tailored to your lifestyle",
        "Boutique commercial spaces that reflect your brand",
        "Context-sensitive design that responds to climate and culture",
        "Sustainable and energy-efficient solutions",
        "Complete architectural documentation and approvals"
      ],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800"
    },
    {
      title: "Interior Design", 
      icon: "🎨",
      description: "Lifestyle-based, budget-aligned custom interiors.",
      details: [
        "Custom interior solutions based on how you live",
        "Budget-conscious design without compromising quality",
        "Space planning and furniture layout optimization",
        "Material selection and color coordination",
        "Complete interior execution and styling"
      ],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800"
    },
    {
      title: "Home Renovation",
      icon: "🔨", 
      description: "Reviving spaces without losing their soul.",
      details: [
        "Sensitive renovation that preserves character",
        "Structural assessment and improvement",
        "Modern upgrades with traditional charm",
        "Phased renovation for occupied homes",
        "Heritage and old home restoration"
      ],
      image: "https://images.unsplash.com/photo-1503594384566-461fe158e797?q=80&w=800"
    },
    {
      title: "Design Consultation",
      icon: "💡",
      description: "1:1 advice for design dilemmas or planning.",
      details: [
        "One-on-one design guidance sessions",
        "Space planning and layout optimization",
        "Material and color selection advice",
        "Problem-solving for challenging spaces",
        "Second opinions on existing designs"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="text-lg text-gray-500 font-semibold tracking-widest uppercase mb-4">
            What We Do
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We take up limited projects so each one receives complete focus and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white shadow-lg w-16 h-16 rounded-full flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-black text-primary">{service.title}</h2>
                </div>
                <p className="text-xl text-gray-700 font-medium leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-32 bg-primary text-white rounded-3xl p-12 md:p-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-8">
              Limited Projects, Complete Focus
            </h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              We deliberately limit the number of projects we take on. This isn't about exclusivity — 
              it's about ensuring each client receives the attention, care, and detailed focus their project deserves.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              Every project gets the founder's direct involvement, from initial concept to final handover.
            </p>
          </div>
        </div>

        {/* Process Integration */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-12 md:p-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-primary mb-4">
              How We Deliver These Services
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every service follows our proven 6-step process: Listen, Learn, Sketch & Propose, Detail, Execute & Supervise, Handover + Aftercare.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => onPageChange('Process')}
              size="lg"
              variant="outline"
              className="px-8 py-3"
            >
              Learn About Our Process
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-primary mb-6">
            Ready to Discuss Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's talk about your specific needs and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onPageChange('Contact')}
              className="px-8 py-3"
            >
              Book Discovery Call
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => onPageChange('About')}
              className="px-8 py-3"
            >
              Meet the Founder
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};