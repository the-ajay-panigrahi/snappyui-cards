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
      className="w-full max-w-md overflow-hidden group shadow-lg rounded-xl border border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <img
          src="https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Tropical beach"
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110 rotate-1" : "scale-100"
          }`}
        />

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-black/10 to-transparent dark:from-black/60 dark:via-black/20 to-0%"></div>

        {/* Share Icon */}
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md hover:bg-white/40 dark:hover:bg-white/20 text-white"
          >
            <Share className="w-4 h-4" />
          </Button>
        </div>

        {/* Title & Info */}
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl font-bold text-white drop-shadow">
            Bali, Indonesia
          </h2>
          <div className="flex items-center text-white/90 mb-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">Tropical Paradise</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i <= 4.5
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-white/40"
                  }`}
                />
              ))}
              <span className="text-xs text-white ml-1">(128)</span>
            </div>
            <Badge className="bg-green-500 text-white shadow-md">
              Best Seller
            </Badge>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-5 bg-background">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">7 Days, 6 Nights</span>
          </div>
          <div className="text-xl font-bold text-primary">
            $1,299{" "}
            <span className="text-xs text-muted-foreground font-normal">
              / person
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-5">
          Experience the ultimate tropical getaway with pristine beaches, lush
          rice terraces, and vibrant cultural experiences in the heart of
          Indonesia.
        </p>

        <Button
          className={`w-full gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white transition-all duration-300 relative overflow-hidden ${
            isHovered ? "shadow-lg shadow-blue-500/20" : ""
          }`}
        >
          <PlaneTakeoff
            className={`w-4 h-4 transition-all duration-300 ${
              isHovered ? "translate-x-1 -translate-y-1" : ""
            }`}
          />
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
