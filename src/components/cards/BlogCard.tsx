import React, { useState } from "react";
import CardBase from "../CardBase";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BlogCard = ({
  image,
  category,
  date,
  readTime,
  title,
  description,
  onReadMore,
  onShare,
}: {
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  onReadMore?: () => void;
  onShare?: () => void;
}) => {
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
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1">
            {category}
          </Badge>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-transparent">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-2">
            <span role="img" aria-label="calendar">
              📅
            </span>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span role="img" aria-label="clock">
              ⏱️
            </span>
            <span>{readTime}</span>
          </div>
        </div>

        <h2
          className={`text-xl font-bold mb-2 transition-all duration-300 ${
            isHovered ? "text-blue-500" : "text-slate-800 dark:text-white"
          }`}
        >
          {title}
        </h2>

        <p className="text-slate-600 dark:text-muted-foreground text-sm mb-6 line-clamp-3">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="sm"
            className="group/btn flex items-center gap-2 transition-all duration-300 transform-gpu border-slate-200 dark:border-slate-700"
            onClick={onReadMore}
          >
            <span role="img" aria-label="book">
              📘
            </span>
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
            onClick={onShare}
          >
            <span role="img" aria-label="share" className="text-lg">
              🔗
            </span>
          </Button>
        </div>
      </div>
    </CardBase>
  );
};

export default BlogCard;
