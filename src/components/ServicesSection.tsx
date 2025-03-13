
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Wrench, Car, Settings, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-racing-black text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-racing-red">Services</span></h2>
          <div className="h-1 w-20 bg-racing-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            From custom race buggy builds to classic restorations and professional motorsport consultation,
            our team delivers excellence in every project.
          </p>
        </div>

        <Tabs defaultValue="custom" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-racing-darkgray">
              <TabsTrigger value="custom" className="text-sm md:text-base data-[state=active]:bg-racing-red">
                Custom Projects
              </TabsTrigger>
              <TabsTrigger value="consultation" className="text-sm md:text-base data-[state=active]:bg-racing-red">
                Consultation
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="Race Buggy Builds" 
                description="Custom-designed racing buggies built to your specifications and competition requirements."
                icon={<Car size={40} className="text-racing-red" />}
                features={[
                  "Full chassis design and fabrication",
                  "Custom suspension systems",
                  "Engine building and tuning",
                  "Race-ready safety equipment",
                  "Comprehensive testing and setup"
                ]}
                price="Starting at $25,000"
              />
              
              <ServiceCard 
                title="Classic Restorations" 
                description="Meticulous restoration of classic vehicles with modern reliability improvements."
                icon={<Wrench size={40} className="text-racing-red" />}
                features={[
                  "Period-correct restoration",
                  "Chassis and body repair",
                  "Engine rebuilding",
                  "Interior restoration",
                  "Electrical system modernization"
                ]}
                price="Starting at $15,000"
              />
              
              <ServiceCard 
                title="Performance Modifications" 
                description="Expert modifications to enhance the performance and handling of your vehicle."
                icon={<Settings size={40} className="text-racing-red" />}
                features={[
                  "Engine performance upgrades",
                  "Suspension and handling improvements",
                  "Brake system upgrades",
                  "Custom exhaust systems",
                  "ECU tuning and optimization"
                ]}
                price="Starting at $5,000"
              />
            </div>
          </TabsContent>

          <TabsContent value="consultation">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="Race Setup Advice" 
                description="Professional guidance on optimizing your race vehicle for specific tracks and conditions."
                icon={<Car size={40} className="text-racing-red" />}
                features={[
                  "Suspension setup and tuning",
                  "Gear ratio optimization",
                  "Tire selection and pressure guidance",
                  "Aerodynamic adjustments",
                  "Driver coaching and feedback"
                ]}
                price="$150/hour"
              />
              
              <ServiceCard 
                title="Technical Consultation" 
                description="Expert technical advice for racers, teams, and enthusiasts."
                icon={<MessageCircle size={40} className="text-racing-red" />}
                features={[
                  "Vehicle dynamics analysis",
                  "Performance troubleshooting",
                  "Build planning and parts selection",
                  "Race strategy development",
                  "Technical regulations compliance"
                ]}
                price="$125/hour"
              />
              
              <ServiceCard 
                title="Project Management" 
                description="End-to-end management of your motorsport or restoration project."
                icon={<Settings size={40} className="text-racing-red" />}
                features={[
                  "Build scheduling and timeline creation",
                  "Parts sourcing and vendor management",
                  "Budget planning and control",
                  "Quality assurance and testing",
                  "Documentation and certification"
                ]}
                price="Custom quotes"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-racing-darkgray p-8 rounded-lg max-w-4xl mx-auto text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-6">
            Contact us today to discuss your custom build, restoration, or consultation needs.
            Our team of experts is ready to bring your vision to life.
          </p>
          <Button className="bg-racing-red hover:bg-white hover:text-racing-red text-white">
            Request a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  features, 
  price 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  features: string[]; 
  price: string; 
}) => {
  return (
    <Card className="bg-racing-darkgray border-racing-red/20 hover-lift animate-fade-in">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check size={18} className="text-racing-red mt-1 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-lg font-bold text-racing-red mb-4">{price}</p>
        <Button className="w-full bg-transparent border border-racing-red text-racing-red hover:bg-racing-red hover:text-white">
          Inquire Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServicesSection;
