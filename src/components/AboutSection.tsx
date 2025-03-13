
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, Trophy, Clock, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-racing-lightgray">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Lembu Suro</h2>
          <div className="h-1 w-20 bg-racing-red mx-auto mb-6"></div>
          <p className="text-lg text-racing-darkgray">
            We are a premier motorsport engineering team dedicated to building championship-winning race buggies, 
            restoring classic vehicles, and providing expert consultation services to racing enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="animate-slide-in [animation-delay:200ms]">
            <h3 className="text-2xl font-bold mb-4 text-racing-black">Our Story</h3>
            <p className="text-racing-darkgray mb-4">
              Founded in 2010, Lembu Suro Race Academy was born from a passion for motorsport engineering and racing. 
              What started as a small garage project has evolved into a full-fledged race team and academy, helping 
              drivers and engineers reach their full potential.
            </p>
            <p className="text-racing-darkgray">
              Our team combines decades of racing experience with cutting-edge engineering techniques to deliver 
              vehicles that perform at the highest level while maintaining reliability and safety.
            </p>
          </div>

          <div className="animate-slide-in [animation-delay:400ms]">
            <h3 className="text-2xl font-bold mb-4 text-racing-black">Founder & Lead Engineer</h3>
            <div className="flex gap-4 items-start">
              <div className="w-24 h-24 rounded-full bg-racing-silver flex items-center justify-center overflow-hidden flex-shrink-0">
                <User size={40} className="text-racing-darkgray" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-racing-black">John Doe</h4>
                <p className="text-sm text-racing-red mb-2">Lead Engineer & Founder</p>
                <p className="text-racing-darkgray">
                  With over 15 years of experience in motorsport engineering, John has worked with championship-winning teams 
                  across various racing disciplines. His meticulous approach to vehicle dynamics and aerodynamics has helped 
                  many drivers achieve podium finishes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover-lift animate-fade-in [animation-delay:100ms]">
            <CardContent className="pt-6">
              <div className="text-racing-red mb-4 flex justify-center">
                <Trophy size={48} />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Championship Wins</h3>
              <p className="text-4xl font-bold text-center text-racing-red">12+</p>
              <p className="text-center text-racing-darkgray mt-2">
                Victories in regional and national buggy racing competitions
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-fade-in [animation-delay:200ms]">
            <CardContent className="pt-6">
              <div className="text-racing-red mb-4 flex justify-center">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Years Experience</h3>
              <p className="text-4xl font-bold text-center text-racing-red">15+</p>
              <p className="text-center text-racing-darkgray mt-2">
                Years of combined motorsport engineering experience
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-fade-in [animation-delay:300ms]">
            <CardContent className="pt-6">
              <div className="text-racing-red mb-4 flex justify-center">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Team Members</h3>
              <p className="text-4xl font-bold text-center text-racing-red">8</p>
              <p className="text-center text-racing-darkgray mt-2">
                Skilled engineers, mechanics, and racing specialists
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-fade-in [animation-delay:400ms]">
            <CardContent className="pt-6">
              <div className="text-racing-red mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Custom Builds</h3>
              <p className="text-4xl font-bold text-center text-racing-red">30+</p>
              <p className="text-center text-racing-darkgray mt-2">
                Custom race vehicles and restorations completed
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
