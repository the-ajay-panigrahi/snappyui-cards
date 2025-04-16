
import React, { useState } from "react";
import CardBase from "../CardBase";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Star, Share, PlaneTakeoff } from "lucide-react";

const TravelCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardBase
      variant="glass"
      className="w-full max-w-md overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Tropical beach"
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 rotate-1' : 'scale-100'}`}
        />
        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="absolute top-4 right-4">
          <Button variant="ghost" size="icon" className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white">
            <Share className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl font-bold text-white mb-1">Bali, Indonesia</h2>
          <div className="flex items-center text-white/90 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">Tropical Paradise</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i <= 4.5 ? "text-yellow-400 fill-current" : "text-white/40"}`}
                />
              ))}
              <span className="text-xs text-white ml-1">(128)</span>
            </div>
            <Badge className="bg-green-500/80 hover:bg-green-600/80 text-white backdrop-blur-sm">
              Best Seller
            </Badge>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">7 Days, 6 Nights</span>
          </div>
          <div className="text-xl font-bold">
            $1,299 <span className="text-xs text-muted-foreground font-normal">/ person</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-5">
          Experience the ultimate tropical getaway with pristine beaches, lush rice terraces, and vibrant cultural experiences in the heart of Indonesia.
        </p>
        
        <Button 
          className={`w-full gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white transition-all duration-300 relative overflow-hidden ${
            isHovered ? 'shadow-lg shadow-blue-500/20' : ''
          }`}
        >
          <PlaneTakeoff className={`w-4 h-4 transition-all duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
          <span>Book This Trip</span>
          {isHovered && (
            <span className="absolute inset-0 w-full h-full bg-white/10 animate-pulse"></span>
          )}
        </Button>
      </div>
    </CardBase>
  );
};

export default TravelCard;
