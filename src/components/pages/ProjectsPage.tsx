import React, { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: "Modern Villa Residence",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800",
      description: "A stunning modern villa featuring clean lines and sustainable design principles.",
      year: "2024",
      location: "Beverly Hills, CA"
    },
    {
      id: 2,
      title: "Urban Office Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      description: "Contemporary office space designed to foster collaboration and innovation.",
      year: "2023",
      location: "Downtown Los Angeles"
    },
    {
      id: 3,
      title: "Eco-Friendly Housing",
      category: "Sustainable",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800",
      description: "Environmentally conscious residential project with energy-efficient systems.",
      year: "2024",
      location: "Portland, OR"
    },
    {
      id: 4,
      title: "Cultural Arts Center",
      category: "Public",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=800",
      description: "A dynamic cultural space that serves as a community hub for arts and creativity.",
      year: "2023",
      location: "San Francisco, CA"
    },
    {
      id: 5,
      title: "Luxury Penthouse",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
      description: "Sophisticated penthouse design with panoramic city views and premium finishes.",
      year: "2024",
      location: "Manhattan, NY"
    },
    {
      id: 6,
      title: "Mixed-Use Development",
      category: "Urban Planning",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
      description: "Integrated development combining residential, commercial, and recreational spaces.",
      year: "2023",
      location: "Seattle, WA"
    },
    {
      id: 7,
      title: "Minimalist Loft",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800",
      description: "Industrial loft conversion emphasizing open space and natural light.",
      year: "2024",
      location: "Brooklyn, NY"
    },
    {
      id: 8,
      title: "Tech Campus",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800",
      description: "State-of-the-art technology campus promoting innovation and collaboration.",
      year: "2023",
      location: "Silicon Valley, CA"
    },
    {
      id: 9,
      title: "Green Apartment Complex",
      category: "Sustainable",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
      description: "Multi-family housing with integrated green spaces and solar energy systems.",
      year: "2024",
      location: "Austin, TX"
    },
    {
      id: 10,
      title: "Museum of Contemporary Art",
      category: "Public",
      image: "https://images.unsplash.com/photo-1554993831-da80f882e61b?q=80&w=800",
      description: "Bold architectural statement for showcasing modern and contemporary art.",
      year: "2023",
      location: "Chicago, IL"
    },
    {
      id: 11,
      title: "Waterfront Mansion",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
      description: "Luxurious waterfront estate with seamless indoor-outdoor living.",
      year: "2024",
      location: "Malibu, CA"
    },
    {
      id: 12,
      title: "Retail Flagship Store",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
      description: "Innovative retail space that redefines the shopping experience.",
      year: "2023",
      location: "Miami, FL"
    },
    {
      id: 13,
      title: "Solar Community",
      category: "Sustainable",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
      description: "Net-zero energy community with advanced sustainable technologies.",
      year: "2024",
      location: "Phoenix, AZ"
    },
    {
      id: 14,
      title: "Urban Transit Hub",
      category: "Public",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800",
      description: "Multi-modal transportation center designed for efficiency and comfort.",
      year: "2023",
      location: "Denver, CO"
    },
    {
      id: 15,
      title: "Mountain Retreat",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800",
      description: "Contemporary mountain home that embraces the natural landscape.",
      year: "2024",
      location: "Aspen, CO"
    },
    {
      id: 16,
      title: "Innovation District",
      category: "Urban Planning",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      description: "Master-planned district fostering entrepreneurship and technology development.",
      year: "2023",
      location: "Boston, MA"
    },
    {
      id: 17,
      title: "Boutique Hotel",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      description: "Intimate luxury hotel with unique architectural character.",
      year: "2024",
      location: "Charleston, SC"
    },
    {
      id: 18,
      title: "Passive House Development",
      category: "Sustainable",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
      description: "Ultra-efficient housing development meeting passive house standards.",
      year: "2024",
      location: "Vermont"
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Sustainable', 'Public', 'Urban Planning'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our portfolio of innovative architectural designs that push the boundaries of creativity and functionality.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 transition-all duration-300 ${
                  filter === category 
                    ? 'bg-primary text-white' 
                    : 'border-gray-300 text-gray-600 hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 font-medium">{project.location}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 font-medium">
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
          <Button size="lg" variant="outline" className="px-8">
            Load More Projects
          </Button>
        </div>
      </div>
    </div>
  );
};