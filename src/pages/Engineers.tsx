
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Phone, Mail, Wrench } from "lucide-react";

type Engineer = {
  id: number;
  name: string;
  title: string;
  phone: string;
  email: string;
  description: string;
  specialties: string[];
  imageUrl: string;
};

const engineers: Engineer[] = [
  {
    id: 1,
    name: "Nico Anderson",
    title: "Race Engineer & Performance Engineer",
    phone: "+62 812-1111-2222",
    email: "nico.a@lembusuro.com",
    description: "Analyzes car performance data and provides training to improve vehicle efficiency. Manages race strategies, driver communications, and track performance analysis.",
    specialties: [
      "Race Strategy",
      "Performance Analysis",
      "Driver Coaching",
      "Data Acquisition"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?engineer,man"
  },
  {
    id: 2,
    name: "William Tan",
    title: "Software Lead & Instructor",
    phone: "+62 813-2222-3333",
    email: "william.t@lembusuro.com",
    description: "Teaches programming and race simulation (examples: MATLAB, Simulink, Python for data analysis). Develops telemetry software, race simulations, and teaches data analysis for the academy.",
    specialties: [
      "Programming Education",
      "Telemetry Systems",
      "Race Simulations",
      "Data Visualization"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?programmer,asian"
  },
  {
    id: 3,
    name: "Agus Kurniawan",
    title: "Engine Builder",
    phone: "+62 814-3333-4444",
    email: "agus.k@lembusuro.com",
    description: "Responsible for engine assembly and tuning for maximum performance. Specializes in building robust and powerful engines for various racing conditions.",
    specialties: [
      "Engine Assembly",
      "Performance Tuning",
      "Dyno Testing",
      "Engine Diagnostics"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?mechanic,engine"
  },
  {
    id: 4,
    name: "Nicholas Fentje",
    title: "Head Mechanic",
    phone: "+62 815-4444-5555",
    email: "nicholas.f@lembusuro.com",
    description: "Oversees maintenance, repairs, and optimization of race car mechanical components. Ensures vehicles are in peak condition for both racing and training.",
    specialties: [
      "Vehicle Maintenance",
      "Mechanical Repairs",
      "Component Optimization",
      "Race Day Support"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?mechanic,man"
  },
  {
    id: 5,
    name: "Diana Hartono",
    title: "Designer",
    phone: "+62 816-5555-6666",
    email: "diana.h@lembusuro.com",
    description: "Responsible for vehicle design, aerodynamics, and team concept visualization. Creates technical drawings and aesthetic designs for all team vehicles.",
    specialties: [
      "Aerodynamic Design",
      "Visual Concepts",
      "Technical Drawing",
      "3D Modeling"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?designer,woman"
  },
  {
    id: 6,
    name: "Prapto Bayu",
    title: "3D Printing & CNC Specialist",
    phone: "+62 817-6666-7777",
    email: "prapto.b@lembusuro.com",
    description: "Handles prototype production using 3D printing, laser cutting, and CNC milling. Creates custom parts and components for race vehicles.",
    specialties: [
      "3D Printing",
      "Laser Cutting",
      "CNC Milling",
      "Prototype Development"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?workshop,man"
  },
  {
    id: 7,
    name: "Hendra Ganendra",
    title: "Suspension & Chassis Engineer",
    phone: "+62 818-7777-8888",
    email: "hendra.g@lembusuro.com",
    description: "Develops suspension systems and chassis structures for stability and high performance. Specializes in optimizing vehicle dynamics for various race conditions.",
    specialties: [
      "Suspension Design",
      "Chassis Development",
      "Stability Optimization",
      "Performance Testing"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?engineer,asian"
  },
  {
    id: 8,
    name: "Slamet Riyadi",
    title: "Electrical Engineer",
    phone: "+62 819-8888-9999",
    email: "slamet.r@lembusuro.com",
    description: "Designs and optimizes vehicle electrical systems, including sensors and telemetry systems. Ensures reliable operation of all electronic components in racing conditions.",
    specialties: [
      "Electrical Systems",
      "Sensor Integration",
      "Telemetry Setup",
      "Diagnostic Tools"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?electronics,engineer"
  }
];

const Engineers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-16 md:py-24 bg-racing-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Our Engineering Team</h1>
            <div className="h-1 w-20 bg-racing-red mx-auto mb-6"></div>
            <p className="text-lg text-racing-darkgray">
              Meet the expert team behind Lembu Suro's success. Our engineers combine decades of experience
              with cutting-edge knowledge to build championship-winning vehicles and train the next generation of racers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineers.map((engineer) => (
              <EngineerCard key={engineer.id} engineer={engineer} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const EngineerCard = ({ engineer }: { engineer: Engineer }) => {
  return (
    <Card className="overflow-hidden hover-lift animate-fade-in">
      <div className="h-64 overflow-hidden">
        <img 
          src={engineer.imageUrl} 
          alt={engineer.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-1">{engineer.name}</h3>
        <div className="flex items-center gap-2 text-sm text-racing-red mb-3">
          <Briefcase size={16} />
          <span>{engineer.title}</span>
        </div>
        
        <p className="text-sm text-racing-darkgray mb-4">{engineer.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2 text-sm">
            <Phone className="w-4 h-4 mt-1 text-racing-darkgray" />
            <span className="text-racing-darkgray">{engineer.phone}</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Mail className="w-4 h-4 mt-1 text-racing-darkgray" />
            <span className="text-racing-darkgray">{engineer.email}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="font-bold text-sm mb-2 flex items-center gap-1">
            <Wrench className="w-4 h-4" /> Specialties:
          </h4>
          <div className="flex flex-wrap gap-2">
            {engineer.specialties.map((specialty, index) => (
              <span key={index} className="bg-racing-silver/50 text-racing-darkgray text-xs py-1 px-2 rounded-full">
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Engineers;
