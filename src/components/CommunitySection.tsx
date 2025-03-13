
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Calendar, ChevronRight, Users, Rss } from "lucide-react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Race Preparation: The Ultimate Guide",
    excerpt: "Learn the essential steps to prepare your vehicle for race day, from technical inspections to final adjustments.",
    date: "June 15, 2023",
    category: "Racing",
    imageUrl: "https://source.unsplash.com/random/800x600/?race,car"
  },
  {
    id: 2,
    title: "The Art of Suspension Tuning",
    excerpt: "Discover how proper suspension setup can dramatically improve handling and lap times on any track.",
    date: "May 22, 2023",
    category: "Technical",
    imageUrl: "https://source.unsplash.com/random/800x600/?suspension,car"
  },
  {
    id: 3,
    title: "Restoration Project: 1967 Mustang",
    excerpt: "Follow our complete restoration journey of a classic 1967 Ford Mustang from barn find to show car quality.",
    date: "April 10, 2023",
    category: "Restoration",
    imageUrl: "https://source.unsplash.com/random/800x600/?classic,mustang"
  }
];

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding bg-racing-lightgray">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Community & News</h2>
          <div className="h-1 w-20 bg-racing-red mx-auto mb-6"></div>
          <p className="text-lg text-racing-darkgray">
            Join our community of motorsport enthusiasts. Stay updated with our latest projects, 
            technical articles, and industry insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Rss size={24} className="text-racing-red" />
              Latest from our Blog
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="mt-8 text-right">
              <Button variant="outline" className="border-racing-red text-racing-red hover:bg-racing-red hover:text-white">
                View All Posts <ChevronRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar size={24} className="text-racing-red" />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              <EventCard 
                title="Open House & Demo Day" 
                date="August 20, 2023" 
                location="Lembu Suro Headquarters"
                description="Visit our facility, meet the team, and see our latest projects in person."
              />
              
              <EventCard 
                title="Desert Racing Championship" 
                date="September 5-7, 2023" 
                location="Arizona Desert Speedway"
                description="Watch our team compete in the annual desert racing championship."
              />
              
              <EventCard 
                title="Restoration Workshop" 
                date="October 15, 2023" 
                location="Lembu Suro Academy"
                description="Learn restoration techniques from our experts in this hands-on workshop."
              />
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-6 flex items-center gap-2">
              <Users size={24} className="text-racing-red" />
              Join the Conversation
            </h3>
            <Card className="bg-white border-racing-red/20 hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare size={24} className="text-racing-red" />
                  <h4 className="text-lg font-semibold">Motorsport Forum</h4>
                </div>
                <p className="text-racing-darkgray mb-4">
                  Connect with fellow enthusiasts, share your projects, and get advice from our team of experts.
                </p>
                <Button className="w-full bg-racing-black hover:bg-racing-red text-white">
                  Join the Forum
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-racing-darkgray mb-6 max-w-2xl mx-auto">
            Stay updated with our latest projects, technical articles, and upcoming events. 
            We'll send you monthly updates with exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
            />
            <Button className="bg-racing-red hover:bg-racing-black text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Card className="overflow-hidden hover-lift animate-fade-in">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline" className="text-xs text-racing-red">
            {post.category}
          </Badge>
          <span className="text-xs text-gray-500">{post.date}</span>
        </div>
        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
        <p className="text-racing-darkgray text-sm mb-4 line-clamp-3">{post.excerpt}</p>
        <Button variant="link" className="text-racing-red p-0 h-auto font-semibold">
          Read More <ChevronRight size={16} className="ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

const EventCard = ({ 
  title, 
  date, 
  location, 
  description 
}: { 
  title: string; 
  date: string; 
  location: string; 
  description: string; 
}) => {
  return (
    <Card className="bg-white border-racing-red/20 hover-lift animate-fade-in">
      <CardContent className="pt-6">
        <h4 className="text-lg font-bold">{title}</h4>
        <div className="flex items-center gap-2 text-sm text-racing-red mt-1 mb-2">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        <p className="text-sm text-gray-500 mb-2">{location}</p>
        <p className="text-racing-darkgray text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CommunitySection;
