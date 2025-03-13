
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

// Project types
type Project = {
  id: number;
  title: string;
  description: string;
  category: 'buggy' | 'restoration' | 'custom';
  imageUrl: string;
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Fury X3 Race Buggy",
    description: "Championship-winning off-road buggy with custom suspension and 240HP engine.",
    category: 'buggy',
    imageUrl: "https://source.unsplash.com/random/800x600/?buggy,race",
    tags: ["Racing", "Custom Build", "Championship"],
    featured: true
  },
  {
    id: 2,
    title: "Desert Storm Racer",
    description: "Long-range desert racer with reinforced chassis and advanced cooling system.",
    category: 'buggy',
    imageUrl: "https://source.unsplash.com/random/800x600/?desert,race",
    tags: ["Off-Road", "Endurance", "Custom"]
  },
  {
    id: 3,
    title: "1968 Ford Mustang Restoration",
    description: "Complete restoration with performance upgrades and modern reliability improvements.",
    category: 'restoration',
    imageUrl: "https://source.unsplash.com/random/800x600/?mustang,classic",
    tags: ["Classic", "Restoration", "Performance"],
    featured: true
  },
  {
    id: 4,
    title: "Rally-Ready Subaru Impreza",
    description: "Full rally preparation including roll cage, suspension, and engine modifications.",
    category: 'custom',
    imageUrl: "https://source.unsplash.com/random/800x600/?rally,subaru",
    tags: ["Rally", "Modification", "Performance"]
  },
  {
    id: 5,
    title: "Dune Jumper X1",
    description: "Lightweight buggy designed for dune racing with specialized suspension.",
    category: 'buggy',
    imageUrl: "https://source.unsplash.com/random/800x600/?dune,buggy",
    tags: ["Dune", "Lightweight", "Racing"]
  },
  {
    id: 6,
    title: "1972 Datsun 240Z Restoration",
    description: "Period-correct restoration with subtle performance enhancements.",
    category: 'restoration',
    imageUrl: "https://source.unsplash.com/random/800x600/?vintage,sports,car",
    tags: ["Classic", "Japanese", "Restoration"]
  },
  {
    id: 7,
    title: "Rock Crawler Extreme",
    description: "Purpose-built rock crawler with articulating suspension and winch systems.",
    category: 'custom',
    imageUrl: "https://source.unsplash.com/random/800x600/?rock,crawler",
    tags: ["Off-Road", "Crawler", "Custom"]
  },
  {
    id: 8,
    title: "Track Day Porsche 911",
    description: "Street-legal 911 with comprehensive track-focused modifications.",
    category: 'custom',
    imageUrl: "https://source.unsplash.com/random/800x600/?porsche,track",
    tags: ["Track", "Performance", "Modification"],
    featured: true
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Projects</h2>
          <div className="h-1 w-20 bg-racing-red mx-auto mb-6"></div>
          <p className="text-lg text-racing-darkgray">
            Explore our portfolio of championship-winning race buggies, meticulous restorations, 
            and custom builds designed for performance and precision.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-racing-lightgray">
              <TabsTrigger value="all" className="text-sm md:text-base">All Projects</TabsTrigger>
              <TabsTrigger value="buggy" className="text-sm md:text-base">Race Buggies</TabsTrigger>
              <TabsTrigger value="restoration" className="text-sm md:text-base">Restorations</TabsTrigger>
              <TabsTrigger value="custom" className="text-sm md:text-base">Custom Builds</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="buggy" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="restoration" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="custom" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button className="bg-racing-black hover:bg-racing-red text-white gap-2">
            View All Projects <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden hover-lift animate-fade-in">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-0 right-0 m-2">
            <Badge className="bg-racing-red">Featured</Badge>
          </div>
        )}
      </div>
      <CardContent className="pt-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-racing-darkgray mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Button variant="outline" className="w-full border-racing-red text-racing-red hover:bg-racing-red hover:text-white">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectsSection;
