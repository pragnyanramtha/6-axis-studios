import React from 'react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Bright modern living space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
          {/* Trust Bar - Top */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm mb-8 opacity-90">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>20+ custom projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>100% client satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>Serving Hyderabad & beyond</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight tracking-tight">
            From Empty Rooms to<br />
            <span className="text-accent">Extraordinary Spaces</span> —<br />
            Designed Around You
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto opacity-90">
            Architecture and interiors that blend beauty, function, and emotion —
            turning every square foot into a space you love to live in.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => onPageChange('Contact')}
            >
              Book Your Free Design Consultation
            </Button>
            <button 
              className="text-white hover:text-accent transition-colors duration-300 underline text-lg"
              onClick={() => onPageChange('Process')}
            >
              Learn How We Work →
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Social Proof Teaser */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary">Featured in</span>
              <span>Local Architecture Magazine</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary">Trusted by</span>
              <span>20+ homeowners</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary">Rated</span>
              <span>5/5 by clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Beautifully designed interior space"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-primary">
                Design That Works as Beautifully as It Looks
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every space tells a story. We listen to yours and translate it into designs 
                that not only look beautiful but feel authentic to who you are.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-medium text-primary">Space Optimisation</h4>
                    <p className="text-muted-foreground">Make the most of every inch.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-medium text-primary">Lifestyle Fit</h4>
                    <p className="text-muted-foreground">Designs tailored to how you live.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-medium text-primary">Future-Proof</h4>
                    <p className="text-muted-foreground">Timeless style that lasts years, not seasons.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  className="text-primary hover:text-accent transition-colors duration-300 underline"
                  onClick={() => onPageChange('About')}
                >
                  Meet the Founder →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-primary mb-6">
              From First Sketch to Final Cushion — We Handle It All
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Architectural Design",
                description: "Context-driven designs for residential & boutique commercial spaces.",
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Interior Design",
                description: "Lifestyle-based, budget-aligned, visually stunning.",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                badge: "Most Popular"
              },
              {
                title: "Home Renovation",
                description: "Refresh your space without losing its soul.",
                image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Design Consultation",
                description: "1:1 advice for design dilemmas.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                   onClick={() => onPageChange('Services')}>
                {service.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {service.badge}
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => onPageChange('Process')}
            >
              View Our Process →
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-primary mb-6">
              Real Clients. Real Results. Real Love.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Six Axis Studios transformed our cramped apartment into a spacious, beautiful home. Every corner now serves a purpose.",
                name: "Priya Sharma",
                location: "Jubilee Hills, HYD",
                project: "2BHK Apartment Renovation",
                rating: 5
              },
              {
                quote: "The team understood our lifestyle perfectly. Our home office is now both functional and inspiring.",
                name: "Rajesh Kumar",
                location: "Gachibowli, HYD",
                project: "Home Office Design",
                rating: 5
              },
              {
                quote: "From concept to completion, the process was seamless. We couldn't be happier with our new space.",
                name: "Anita Reddy",
                location: "Banjara Hills, HYD",
                project: "Villa Interior Design",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-medium text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-sm text-accent">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              className="text-primary hover:text-accent transition-colors duration-300 underline"
              onClick={() => onPageChange('Contact')}
            >
              See More Projects →
            </button>
          </div>
        </div>
      </section>

      {/* Process Section Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-primary mb-6">
              Here's How It Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description: "We understand your space & needs."
              },
              {
                step: "02",
                title: "Design Blueprint",
                description: "Your custom plan with visuals."
              },
              {
                step: "03",
                title: "Execution",
                description: "Seamless coordination & build."
              },
              {
                step: "04",
                title: "Final Reveal",
                description: "A space that feels yours."
              }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-medium mx-auto">
                  {process.step}
                </div>
                <h3 className="text-xl font-medium text-primary">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => onPageChange('Contact')}
            >
              Book Your Free Design Consultation →
            </Button>
          </div>
        </div>
      </section>

      {/* Final Conversion Push */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-primary">
              Your Dream Space is One Call Away
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Every project starts with a conversation. No pressure. No obligation. 
              Just ideas tailored to you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => onPageChange('Contact')}
              >
                Book Your Free Design Consultation
              </Button>
              <button 
                className="text-primary hover:text-accent transition-colors duration-300 underline"
                onClick={() => onPageChange('Process')}
              >
                See How We Work →
              </button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Serving Hyderabad homeowners & businesses since 2019. 100% client satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};