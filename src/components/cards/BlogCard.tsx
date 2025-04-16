import React, { useState } from "react";
import CardBase from "../CardBase";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, Clock, Share2 } from "lucide-react";

const BlogCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardBase
      variant="default"
      className="w-full max-w-md overflow-hidden group shadow-md dark:shadow-slate-800/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src="https://images.pexels.com/photos/31582891/pexels-photo-31582891/free-photo-of-futuristic-geometric-architecture-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Architectural Interior"
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1">
            Architecture
          </Badge>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-transparent">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3" />
            <span>April 14, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>5 min read</span>
          </div>
        </div>

        <h2
          className={`text-xl font-bold mb-2 transition-all duration-300 ${
            isHovered ? "text-blue-500" : "text-slate-800 dark:text-white"
          }`}
        >
          The Future of Sustainable Architecture
        </h2>

        <p className="text-slate-600 dark:text-muted-foreground text-sm mb-6 line-clamp-3">
          Exploring how modern architectural designs are embracing
          sustainability through innovative materials and energy-efficient
          approaches that reduce environmental impact while creating stunning
          spaces.
        </p>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="sm"
            className="group/btn flex items-center gap-2 transition-all duration-300 transform-gpu border-slate-200 dark:border-slate-700"
          >
            <BookOpen className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
            <span className="relative">
              Read More
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 ${
                  isHovered ? "scale-x-100" : ""
                }`}
              ></span>
            </span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full transition-all duration-300 ${
              isHovered
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                : ""
            }`}
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </CardBase>
  );
};

export default BlogCard;
