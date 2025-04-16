
import React, { useState } from "react";
import CardBase from "../CardBase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProfileCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CardBase
      variant="gradient"
      className={`w-full max-w-sm relative overflow-hidden transition-all duration-500 ${
        expanded ? "min-h-[420px]" : "min-h-[220px]"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-r from-indigo-600/20 to-indigo-800/30"></div>
      
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <Avatar className="h-16 w-16 border-2 border-white/10 ring-2 ring-blue-500 transition-all duration-300 hover:scale-105">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {isHovering && (
              <span className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse"></span>
            )}
          </div>
          
          <div>
            <h3 className="text-xl font-bold leading-none mb-1 text-white">John Doe</h3>
            <p className="text-indigo-200/80">Senior Developer</p>
          </div>
          
          <Badge className="ml-auto bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all duration-300">Pro</Badge>
        </div>
        
        <div className="flex justify-around mb-6 text-sm">
          <div className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <span className="font-bold text-white">142</span>
            <span className="text-indigo-200/80">Projects</span>
          </div>
          <div className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <span className="font-bold text-white">4.8k</span>
            <span className="text-indigo-200/80">Following</span>
          </div>
          <div className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <span className="font-bold text-white">12.5k</span>
            <span className="text-indigo-200/80">Followers</span>
          </div>
        </div>
        
        <div className={`overflow-hidden transition-all duration-500 ${
          expanded ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
        }`}>
          <p className="text-indigo-200/80 mb-4">
            Full-stack developer with over 10 years of experience in building web applications using React, Node.js, and TypeScript. Passionate about clean code and user-centric design.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {["React", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL"].map((skill, index) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className={`bg-blue-500/10 text-blue-300 border-blue-500/30 transition-all duration-300 hover:bg-blue-500/20 
                  animate-fade-in ${index > 0 ? `delay-${index * 100}` : ''}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex gap-2 mt-4">
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "View Less" : "View More"}
          </Button>
          <Button 
            variant="outline" 
            className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 group"
          >
            <span className="flex items-center">
              Follow
              <span className="ml-1 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                +
              </span>
            </span>
          </Button>
        </div>
      </div>
      
      {isHovering && (
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl transition-all duration-500 animate-pulse"></div>
      )}
    </CardBase>
  );
};

export default ProfileCard;
