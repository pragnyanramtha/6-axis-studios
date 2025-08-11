import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">
            About Six Axis Studios
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Design beyond dimensions, crafted with intention and purpose.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Our Philosophy</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
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
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800"
              alt="Design philosophy"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Founder's Note */}
        <div className="bg-gray-50 rounded-3xl p-12 md:p-20 mb-20">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <img
                src="https://raw.githubusercontent.com/pragnyanramtha/phoos-/refs/heads/main/kal.jpeg"
                alt="Kalyan Ram - Founder"
                className="w-64 h-64 object-cover rounded-2xl shadow-xl mx-auto"
              />
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-2">Founder's Note</h2>
                <div className="text-xl text-gray-600 mb-6">Kalyan Ram</div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm <strong className="text-primary">Kalyan Ram</strong>, the person behind Six Axis Studios.
                </p>
                <p>
                  For the past five years, I've worked closely with clients—sometimes even barefoot on dusty sites—to translate
                  their visions into spaces they can truly live in.
                </p>
                <p>
                  This studio was created to go deeper: into detail, dimension, and dialogue.
                </p>
                <p>
                  I don't delegate vision. I walk with you through it.
                </p>
                <div className="text-xl font-medium text-primary italic">
                  "Every project is a collaboration. And every inch matters."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Founder's Note */}
        <div className="bg-secondary/20 rounded-3xl p-12 md:p-20 mb-20">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <img
                src="https://raw.githubusercontent.com/pragnyanramtha/phoos-/refs/heads/main/WhatsApp%20Image%202025-08-11%20at%2003.39.38_ab43830c.jpg"
                alt="Sai Charan Raju B - Co-Founder"
                className="w-64 h-64 object-cover rounded-2xl shadow-xl mx-auto"
              />
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-2">Co-Founder's Note</h2>
                <div className="text-xl text-gray-600 mb-6">Ar. Sai Charan Raju B.</div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Hello, I'm <strong className="text-primary">Ar. Sai Charan Raju B.</strong>
                </p>
                <p>
                  At Six Axis Studios, every design begins with a story — one that unfolds in every direction of possibility. 
                  The six axes of space — three positive, three negative — are more than coordinates to us; they are our creative 
                  compass, guiding us to explore every dimension of design with purpose, imagination, and precision.
                </p>
                <p>
                  I imagine, explore, and experiment; my co-founder grounds these ideas with practical expertise, bringing them 
                  to life with purpose and detail. Together, we craft experiences that inspire today and endure tomorrow.
                </p>
                <div className="text-xl font-medium text-primary italic">
                  "— Co-Founders, Six Axis Studios"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every project and every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Intention Over Aesthetics",
                description: "Every design decision serves a purpose beyond just looking good — it must improve how you live.",
                icon: "🎯"
              },
              {
                title: "Personal Involvement",
                description: "I don't delegate vision. From concept to completion, you work directly with the founder.",
                icon: "🤝"
              },
              {
                title: "Limited Projects",
                description: "We take on fewer projects to ensure each receives complete focus and attention to detail.",
                icon: "🔍"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-primary text-white rounded-3xl p-12 md:p-20 mb-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-8">
              Five Years of Dedicated Practice
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black mb-2">5+</div>
                <div className="text-lg opacity-90">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">50+</div>
                <div className="text-lg opacity-90">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">100%</div>
                <div className="text-lg opacity-90">Personal Involvement</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-black text-primary mb-6">
            Ready to Start a Collaboration?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can bring your vision to life together.
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
              onClick={() => onPageChange('Process')}
              className="px-8 py-3"
            >
              Learn Our Process
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};