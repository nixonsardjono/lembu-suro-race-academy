
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Calendar, ChevronRight, Users, Star, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

type Testimonial = {
  id: number;
  name: string;
  age: number;
  quote: string;
  relation: string;
  imageUrl: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Wijaya",
    age: 17,
    quote: "Nixon isn't just a teacher, he's a mentor who changed my life. His patience and deep understanding of racing mechanics helped me go from a complete novice to winning my first junior championship. He cares about each student as if they were his own children.",
    relation: "Student (3 years)",
    imageUrl: "https://source.unsplash.com/random/800x600/?teenager,racing"
  },
  {
    id: 2,
    name: "Sarah Tanujaya",
    age: 15,
    quote: "What makes Nixon special is his ability to solve problems on the spot. During my first race, we had an unexpected suspension issue, and he calmly talked me through the fix over radio. His quick thinking saved our race day and taught me more than any classroom session could.",
    relation: "Student (2 years)",
    imageUrl: "https://source.unsplash.com/random/800x600/?teenage,girl"
  },
  {
    id: 3,
    name: "David Sugianto",
    age: 22,
    quote: "As an engineering student, I was amazed by Nixon's technical knowledge. He doesn't just teach racing; he explains the physics, mechanics, and strategy in a way that's both comprehensive and easy to understand. His academy transformed my theoretical knowledge into practical skills.",
    relation: "Student (1 year)",
    imageUrl: "https://source.unsplash.com/random/800x600/?young,man"
  }
];

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding bg-racing-lightgray">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Community</h2>
          <div className="h-1 w-20 bg-racing-red mx-auto mb-6"></div>
          <p className="text-lg text-racing-darkgray">
            We're more than just a race academy - we're a family of passionate individuals sharing the love for motorsport.
            Meet our students, engineers, and hear their stories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star size={24} className="text-racing-red" />
              Student Testimonials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            <div className="mt-8 text-right">
              <Button 
                asChild
                variant="outline" 
                className="border-racing-red text-racing-red hover:bg-racing-red hover:text-white"
              >
                <Link to="/students">
                  View All Students <ChevronRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase size={24} className="text-racing-red" />
              Our Engineering Team
            </h3>
            <Card className="bg-white border-racing-red/20 hover-lift mb-6">
              <CardContent className="pt-6">
                <h4 className="text-lg font-bold">Expert Engineers & Instructors</h4>
                <p className="text-racing-darkgray mt-2 mb-4">
                  Our diverse team of specialists brings expertise from various motorsport disciplines. From race strategy to mechanical engineering, our instructors are industry professionals dedicated to sharing their knowledge.
                </p>
                <Button 
                  asChild
                  className="w-full bg-racing-black hover:bg-racing-red text-white"
                >
                  <Link to="/engineers">
                    Meet Our Team
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mt-10 mb-6 flex items-center gap-2">
              <Users size={24} className="text-racing-red" />
              Founder's Story
            </h3>
            <Card className="bg-white border-racing-red/20 hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full bg-racing-silver flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img 
                      src="https://source.unsplash.com/random/200x200/?man,portrait" 
                      alt="Nixon Sardjono" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Nixon Sardjono</h4>
                    <p className="text-sm text-racing-red">Founder & Lead Instructor</p>
                  </div>
                </div>
                <p className="text-racing-darkgray mb-4">
                  "I started this academy from the ashes of a nearly bankrupt mechanic shop. My father taught me to fix cars, and it became our shared passion. What began as helping neighbors with their offroad rigs evolved when people saw my race buggy and wanted the same for themselves.
                </p>
                <p className="text-racing-darkgray mb-4">
                  Soon, parents started asking me to teach their children not just how to build buggies, but how to race them - everything from race strategy and engineering to finding the smoothest racing lines and avoiding mechanical damage. Seeing these young racers grow from timid beginners to confident champions has been my life's greatest reward."
                </p>
                <Badge variant="outline" className="text-xs text-racing-red">
                  Est. 2010
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Racing Family</h3>
          <p className="text-racing-darkgray mb-6 max-w-2xl mx-auto">
            Whether you're looking to become a racer, improve your engineering skills, or simply share your passion for motorsport,
            our doors are open to enthusiasts of all ages and skill levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
            />
            <Button className="bg-racing-red hover:bg-racing-black text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="overflow-hidden hover-lift animate-fade-in">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src={testimonial.imageUrl} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold">{testimonial.name}</h3>
            <div className="flex items-center text-sm text-racing-red">
              <GraduationCap size={14} className="mr-1" />
              <span>{testimonial.relation} | Age: {testimonial.age}</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <MessageSquare size={24} className="text-racing-red/20 absolute -left-1 -top-1" />
          <p className="text-racing-darkgray text-sm italic pl-5 border-l-2 border-racing-red/20 mb-4">
            "{testimonial.quote}"
          </p>
        </div>
        <div className="flex justify-start">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-racing-red fill-racing-red" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunitySection;
