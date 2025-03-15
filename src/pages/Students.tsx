
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Phone, Mail, School } from "lucide-react";

type Student = {
  id: number;
  name: string;
  age: number;
  phone: string;
  email: string;
  school: string;
  achievements: string[];
  imageUrl: string;
};

const students: Student[] = [
  {
    id: 1,
    name: "Michael Wijaya",
    age: 17,
    phone: "+62 812-3456-7890",
    email: "michael.w@example.com",
    school: "Jakarta International School",
    achievements: [
      "Junior Racing Championship 2022 - 1st Place",
      "Regional Offroad Competition - 2nd Place",
      "Best Rookie Award 2021"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?teenager,boy"
  },
  {
    id: 2,
    name: "Sarah Tanujaya",
    age: 15,
    phone: "+62 813-4567-8901",
    email: "sarah.t@example.com",
    school: "Bandung Science Academy",
    achievements: [
      "Youth Racing Series - Top 3 Finalist",
      "Engineering Project Competition - 1st Place",
      "Most Improved Driver 2023"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?teenage,girl"
  },
  {
    id: 3,
    name: "David Sugianto",
    age: 22,
    phone: "+62 814-5678-9012",
    email: "david.s@example.com",
    school: "University of Indonesia - Mechanical Engineering",
    achievements: [
      "National Engineering Competition - Winner",
      "Adult Racing League - 3rd Place",
      "Published Paper on Race Car Aerodynamics"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?young,man"
  },
  {
    id: 4,
    name: "Olivia Hartono",
    age: 16,
    phone: "+62 815-6789-0123",
    email: "olivia.h@example.com",
    school: "Surabaya International School",
    achievements: [
      "Women in Motorsport Award 2022",
      "Junior Technical Challenge - Winner",
      "Perfect Attendance - 2 Years"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?teen,girl"
  },
  {
    id: 5,
    name: "Jason Kusuma",
    age: 19,
    phone: "+62 816-7890-1234",
    email: "jason.k@example.com",
    school: "Bali Technical Institute",
    achievements: [
      "Beach Buggy Race Series - Champion",
      "Mechanical Troubleshooting Competition - 1st Place",
      "Student Mentor of the Year"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?young,asian,man"
  },
  {
    id: 6,
    name: "Anita Nugroho",
    age: 14,
    phone: "+62 817-8901-2345",
    email: "anita.n@example.com",
    school: "Jakarta STEM Academy",
    achievements: [
      "Junior Racing League - Newcomer Award",
      "Science Fair - Motorsport Technology Category Winner",
      "Perfect Race Attendance"
    ],
    imageUrl: "https://source.unsplash.com/random/300x300/?young,girl"
  }
];

const Students = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-16 md:py-24 bg-racing-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Our Students</h1>
            <div className="h-1 w-20 bg-racing-red mx-auto mb-6"></div>
            <p className="text-lg text-racing-darkgray">
              Meet the talented young racers and engineers who have trained with Lembu Suro Race Academy.
              From beginners to championship winners, our students represent the future of motorsport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const StudentCard = ({ student }: { student: Student }) => {
  return (
    <Card className="overflow-hidden hover-lift animate-fade-in">
      <div className="h-64 overflow-hidden">
        <img 
          src={student.imageUrl} 
          alt={student.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2">{student.name}</h3>
        <div className="flex items-center gap-2 text-sm text-racing-red mb-3">
          <GraduationCap size={16} />
          <span>Age: {student.age}</span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2 text-sm">
            <School className="w-4 h-4 mt-1 text-racing-darkgray" />
            <span className="text-racing-darkgray">{student.school}</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Phone className="w-4 h-4 mt-1 text-racing-darkgray" />
            <span className="text-racing-darkgray">{student.phone}</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Mail className="w-4 h-4 mt-1 text-racing-darkgray" />
            <span className="text-racing-darkgray">{student.email}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="font-bold text-sm mb-2">Achievements:</h4>
          <ul className="text-sm text-racing-darkgray list-disc list-inside">
            {student.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Students;
