
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-racing-black text-xl font-bold mr-1">LEMBU</span>
              <span className="text-racing-red text-xl font-bold">SURO</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="font-medium text-racing-black hover:text-racing-red transition-colors">
              Home
            </Link>
            <a href="#about" className="font-medium text-racing-black hover:text-racing-red transition-colors">
              About
            </a>
            <a href="#projects" className="font-medium text-racing-black hover:text-racing-red transition-colors">
              Projects
            </a>
            <a href="#services" className="font-medium text-racing-black hover:text-racing-red transition-colors">
              Services
            </a>
            <a href="#community" className="font-medium text-racing-black hover:text-racing-red transition-colors">
              Community
            </a>
            <Button className="bg-racing-red hover:bg-racing-black text-white">
              Contact Us
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Menu Toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="flex flex-col space-y-4 px-4 py-6 bg-white border-t">
            <Link 
              to="/" 
              className="font-medium text-racing-black hover:text-racing-red transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="font-medium text-racing-black hover:text-racing-red transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="font-medium text-racing-black hover:text-racing-red transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#services" 
              className="font-medium text-racing-black hover:text-racing-red transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#community" 
              className="font-medium text-racing-black hover:text-racing-red transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <Button className="bg-racing-red hover:bg-racing-black text-white w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
