
import React, { useState } from "react";
import CardBase from "../CardBase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ProfileCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CardBase
      variant="highlight"
      className={`w-full max-w-sm relative overflow-hidden transition-all duration-500 ${
        expanded ? "h-[420px]" : "h-[220px]"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
      
      <div className="p-6 relative">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-16 w-16 border-2 border-white/10 ring-2 ring-blue-500 transition-all duration-300">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          
          <div>
            <h3 className="text-xl font-bold leading-none mb-1">John Doe</h3>
            <p className="text-muted-foreground">Senior Developer</p>
          </div>
          
          <Badge className="ml-auto bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">Pro</Badge>
        </div>
        
        <div className="flex items-center gap-4 mb-6 text-sm">
          <div className="flex flex-col items-center">
            <span className="font-bold">142</span>
            <span className="text-muted-foreground">Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">4.8k</span>
            <span className="text-muted-foreground">Following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">12.5k</span>
            <span className="text-muted-foreground">Followers</span>
          </div>
        </div>
        
        <div className={`overflow-hidden transition-all duration-500 ${
          expanded ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
        }`}>
          <p className="text-muted-foreground mb-4">
            Full-stack developer with over 10 years of experience in building web applications using React, Node.js, and TypeScript. Passionate about clean code and user-centric design.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {["React", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL"].map((skill) => (
              <Badge key={skill} variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex gap-2 mt-4">
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "View Less" : "View More"}
          </Button>
          <Button 
            variant="outline" 
            className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50"
          >
            Follow
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
