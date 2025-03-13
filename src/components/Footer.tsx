
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-racing-black text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-white text-2xl font-bold mr-1">LEMBU</span>
              <span className="text-racing-red text-2xl font-bold">SURO</span>
            </div>
            <p className="text-gray-300 mb-6">
              Professional race engineering, custom builds, and motorsport expertise.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-racing-red">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-racing-red">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-racing-red">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-racing-red">
                <Youtube size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-racing-red transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-racing-red transition-colors">About Us</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-racing-red transition-colors">Projects</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-racing-red transition-colors">Services</a>
              </li>
              <li>
                <a href="#community" className="text-gray-300 hover:text-racing-red transition-colors">Community</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-racing-red transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-racing-red transition-colors">Race Buggy Builds</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-racing-red transition-colors">Classic Restorations</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-racing-red transition-colors">Performance Modifications</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-racing-red transition-colors">Race Setup Advice</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-racing-red transition-colors">Technical Consultation</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-racing-red transition-colors">Project Management</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-racing-red flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Motorsport Way,<br />
                  Speed City, SC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-racing-red flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-racing-red flex-shrink-0" />
                <span className="text-gray-300">info@lembusuro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Lembu Suro Race Academy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-racing-red text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-racing-red text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-racing-red text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
