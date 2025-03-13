
import React from 'react';
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://source.unsplash.com/random/1920x1080/?racing,track)', 
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-racing-black/80 to-racing-black/80"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Dream?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and how our expertise can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-racing-red hover:bg-white hover:text-racing-red text-white gap-2">
              <PhoneCall size={18} /> Call Us
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-racing-black gap-2">
              <Mail size={18} /> Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
