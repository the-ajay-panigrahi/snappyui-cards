
import React, { useState } from "react";
import CardBase from "../CardBase";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { InfoIcon, ExternalLink, BookOpen, Code, Check } from "lucide-react";

const InfoCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardBase
      variant="glass"
      className="w-full max-w-sm p-6 relative overflow-hidden transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl transition-all duration-500 ${isHovered ? 'scale-125' : 'scale-100'}`}></div>
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full bg-cyan-500/10">
            <InfoIcon className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold">Getting Started</h3>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Everything you need to know about our platform and how to make the most of it.
        </p>
        
        <Separator className="my-6 bg-cyan-500/20" />
        
        <div className="space-y-4">
          <div className={`flex items-start gap-4 p-3 rounded-lg transition-all duration-300 ${isHovered ? 'bg-cyan-500/5' : ''}`}>
            <BookOpen className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-medium">Documentation</h4>
              <p className="text-sm text-muted-foreground">Comprehensive guides and API references</p>
            </div>
          </div>
          
          <div className={`flex items-start gap-4 p-3 rounded-lg transition-all duration-300 ${isHovered ? 'bg-cyan-500/5' : ''}`}>
            <Code className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-medium">Examples</h4>
              <p className="text-sm text-muted-foreground">Ready-to-use code snippets and demos</p>
            </div>
          </div>
          
          <div className={`flex items-start gap-4 p-3 rounded-lg transition-all duration-300 ${isHovered ? 'bg-cyan-500/5' : ''}`}>
            <Check className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-medium">Best Practices</h4>
              <p className="text-sm text-muted-foreground">Tips and recommendations for efficient use</p>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full mt-6 gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
        >
          <span>View Resources</span>
          <ExternalLink className="w-4 h-4" />
          <span className={`absolute inset-0 w-full h-full bg-white/10 ${isHovered ? 'animate-pulse' : 'opacity-0'}`}></span>
        </Button>
      </div>
    </CardBase>
  );
};

export default InfoCard;
