
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-racing-lightgray">
      <div className="text-center max-w-md px-4">
        <h1 className="text-8xl font-bold text-racing-red mb-6">404</h1>
        <h2 className="text-2xl font-bold text-racing-black mb-4">Page Not Found</h2>
        <p className="text-racing-darkgray mb-8">
          We couldn't find the page you're looking for. It might have been removed, renamed, or is temporarily unavailable.
        </p>
        <Button 
          onClick={() => navigate('/')}
          className="bg-racing-red hover:bg-racing-black text-white flex items-center gap-2"
        >
          <Home size={18} /> Back to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
