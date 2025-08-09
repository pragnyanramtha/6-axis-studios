import React from 'react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1920"
            alt="Modern architecture"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Geometric Elements - Hidden on mobile for cleaner look */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/20 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary/10 rotate-12"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/5 rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-primary/10 -rotate-12"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          {/* Main Logo - Responsive sizing that shrinks if screen is too small */}
          <div className="mb-8 sm:mb-12 md:mb-16 flex justify-center">
            <img 
              src="https://images.pexels.com/photos/33361856/pexels-photo-33361856.png" 
              alt="Six Axis Studios - Design Beyond Dimensions" 
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto max-w-full opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Architecture and interiors crafted with precision, purpose, and emotional resonance.
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-medium px-2">
            We don't just design spaces — we engineer experiences, tuned to your lifestyle, climate, and context.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button 
              size="lg" 
              className="px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-primary text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              onClick={() => onPageChange('Contact')}
            >
              Book a Discovery Call
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              onClick={() => onPageChange('Process')}
            >
              Explore Our Process
            </Button>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce hidden sm:block">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm font-medium tracking-widest">SCROLL</div>
            <div className="w-0.5 h-8 bg-primary"></div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-3 grid-pattern"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-16 h-16 sm:w-24 sm:h-24 border-2 sm:border-4 border-gray-200 rotate-45 hidden sm:block"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800"
                alt="Interior design process"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-16 h-16 sm:w-32 sm:h-32 bg-gray-100 rounded-full blur-xl hidden sm:block"></div>
            </div>
            
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="text-base sm:text-lg text-gray-500 font-semibold tracking-widest uppercase">
                Our Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary leading-tight">
                Design with
                <span className="text-gray-600 block">Intention</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  At our studio, we believe great interiors begin with <strong className="text-primary">intention</strong>, not just aesthetics. 
                  We don't just match cushions to curtains — we craft spaces that reflect your lifestyle, 
                  solve everyday problems, and feel truly yours.
                </p>
                <p>
                  Our design process goes deeper than surface beauty — it's about creating layouts, flow, 
                  and functionality that improve how you live in your home. Once that's done, the decor 
                  follows naturally.
                </p>
              </div>
              <Button 
                onClick={() => onPageChange('About')}
                className="bg-primary hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Meet the Founder →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="text-base sm:text-lg text-gray-500 font-semibold tracking-widest uppercase mb-4">
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 sm:mb-6">
              Limited Projects, <span className="text-gray-600">Complete Focus</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              We take up limited projects so each one receives complete focus and attention.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Architectural Design",
                description: "Context-sensitive residential and boutique commercial spaces.",
                icon: "🏗️"
              },
              {
                title: "Interior Design",
                description: "Lifestyle-based, budget-aligned custom interiors.",
                icon: "🎨"
              },
              {
                title: "Home Renovation",
                description: "Reviving spaces without losing their soul.",
                icon: "🔨"
              },
              {
                title: "Design Consultation",
                description: "1:1 advice for design dilemmas or planning.",
                icon: "💡"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Button 
              onClick={() => onPageChange('Services')}
              variant="outline"
              size="lg"
              className="px-6 sm:px-8 py-3"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="text-base sm:text-lg text-gray-500 font-semibold tracking-widest uppercase mb-4">
              Client Words
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-6">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "We didn't expect an architect to care this much. Kalyan gave our small house more attention than most would give a villa.",
                client: "Ravi & Sunitha",
                location: "Hyderabad"
              },
              {
                quote: "He explained everything. Every line had a reason. That gave us trust and clarity in the whole process.",
                client: "Meghana A.",
                location: "NRI client"
              },
              {
                quote: "He even followed up months after we moved in. That's rare.",
                client: "Sameer R.",
                location: "Renovation Client"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                <div className="text-3xl sm:text-4xl text-primary mb-4">"</div>
                <p className="text-base sm:text-lg text-gray-700 mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-primary">{testimonial.client}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="py-16 sm:py-24 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="text-base sm:text-lg text-gray-300 font-semibold tracking-widest uppercase mb-4">
              From Sketch to Soul
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
              Our Journal
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
              Insights and thoughts from our design practice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Why size isn't everything</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Designing for flow, not footage — how smart planning makes small spaces feel larger.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Common Design Mistakes</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Design mistakes homeowners often make before calling an architect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-6">
            Ready to Start Your
            <span className="text-gray-600 block">Design Journey?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Every project is a collaboration. And every inch matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button 
              size="lg" 
              className="px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-primary text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              onClick={() => onPageChange('Contact')}
            >
              Book Discovery Call
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              onClick={() => onPageChange('Process')}
            >
              Learn Our Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};