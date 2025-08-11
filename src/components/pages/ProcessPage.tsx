import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';

interface ProcessPageProps {
  onPageChange: (page: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onPageChange }) => {
  const steps = [
    {
      number: "01",
      title: "Listen",
      description: "Understand needs, vision, site, lifestyle, and constraints.",
      detail: "We begin every project by truly listening. We want to understand not just what you want, but how you live, what challenges you face, and what dreams you have for your space."
    },
    {
      number: "02", 
      title: "Learn",
      description: "Research context, climate, Vastu (if applicable), and materials.",
      detail: "Every site has a story. We study the context, climate patterns, local materials, and if you wish, Vastu principles to ensure your design works with, not against, its environment."
    },
    {
      number: "03",
      title: "Sketch & Propose",
      description: "Concepts, zoning, and moodboards.",
      detail: "Ideas come to life through sketches. We present multiple concepts, explore spatial zoning options, and create moodboards that capture the essence of your future space."
    },
    {
      number: "04",
      title: "Detail",
      description: "Working drawings, 3D, and specifications.",
      detail: "Every line has a reason. We develop detailed working drawings, create 3D visualizations, and specify every material and finish with precision and purpose."
    },
    {
      number: "05",
      title: "Execute & Supervise",
      description: "On-ground design support.",
      detail: "I don't delegate vision. I'm present during execution, ensuring that every detail translates from paper to reality with the quality and care it deserves."
    },
    {
      number: "06",
      title: "Handover + Aftercare",
      description: "Continued support after move-in.",
      detail: "Our relationship doesn't end at handover. We provide continued support as you settle into your new space, making adjustments and ensuring everything works perfectly."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="text-lg text-gray-500 font-semibold tracking-widest uppercase mb-4">
            How We Work
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Our Process
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Clarity creates trust. Here's how we work with you to bring your vision to life.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1454165804606-c3d57bc86b40' :
                      index === 1 ? '1503387837-b154d5074bd2' :
                      index === 2 ? '1586023492125-27b2c045efd7' :
                      index === 3 ? '1503594384566-461fe158e797' :
                      index === 4 ? '1504307651254-35680f356dfd' :
                      '1560472354-b33ff0c44a43'
                    }?q=80&w=800`}
                    alt={`${step.title} process`}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                <div className="flex items-center space-x-4">
                  <div className="text-6xl font-black text-gray-200">{step.number}</div>
                  <h2 className="text-3xl md:text-4xl font-black text-primary">{step.title}</h2>
                </div>
                <p className="text-xl text-gray-700 font-medium leading-relaxed">
                  {step.description}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Philosophy */}
        <div className="mt-32 bg-gray-50 rounded-3xl p-12 md:p-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">
              Every Project is a Collaboration
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              This process isn't rigid — it's responsive. Some projects need more listening, others need more detailing. 
              What remains constant is our commitment to clarity, communication, and bringing your vision to life with precision and care.
            </p>
            <div className="text-2xl font-medium text-primary italic">
              "Every inch matters."
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Ready to Start Your Design Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our process can bring your vision to life.
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
              onClick={() => onPageChange('Services')}
              className="px-8 py-3"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};