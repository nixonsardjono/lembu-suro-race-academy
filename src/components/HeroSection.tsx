
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://source.unsplash.com/random/1920x1080/?race,buggy,motorsport)', 
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-racing-black/70 to-racing-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto z-10 px-4 text-center relative animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          LEMBU SURO <span className="text-racing-red">RACE ACADEMY</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
          Building champions on and off the track through expert engineering and precision craftsmanship
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-racing-red hover:bg-racing-black text-white text-lg px-8 py-6 hover-lift"
            size="lg"
          >
            View Our Projects
          </Button>
          <Button 
            onClick={() => scrollToSection('services')}
            variant="outline" 
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 hover-lift"
            size="lg"
          >
            Our Services
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" 
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="h-10 w-10 text-white" />
      </div>
    </div>
  );
};

export default HeroSection;
