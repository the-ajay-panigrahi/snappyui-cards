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
      className="w-full max-w-sm p-6 relative overflow-hidden transition-all duration-300 group border border-border bg-white/80 dark:bg-background backdrop-blur-md shadow-md rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-white/0 to-purple-100/10 dark:from-cyan-500/5 dark:to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div
        className={`absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none ${
          isHovered ? "scale-125" : "scale-100"
        }`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 transition-all duration-300">
            <InfoIcon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Getting Started
          </h3>
        </div>

        <p className="text-sm text-gray-600 dark:text-muted-foreground mb-6">
          Everything you need to know about our platform and how to make the
          most of it.
        </p>

        <Separator className="my-6 bg-cyan-400/20" />

        {/* Resource Items */}
        <div className="space-y-4">
          {/* Documentation */}
          <div
            className={`flex items-start gap-4 p-3 rounded-lg transition-all duration-300 ${
              isHovered ? "bg-cyan-100/40 dark:bg-cyan-500/5 translate-x-1" : ""
            }`}
          >
            <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-medium text-gray-800 dark:text-white">
                Documentation
              </h4>
              <p className="text-sm text-gray-600 dark:text-muted-foreground">
                Comprehensive guides and API references
              </p>
            </div>
          </div>

          {/* Examples */}
          <div
            className={`flex items-start gap-4 p-3 rounded-lg transition-all duration-300 ${
              isHovered
                ? "bg-cyan-100/40 dark:bg-cyan-500/5 translate-x-1 delay-75"
                : ""
            }`}
          >
            <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-medium text-gray-800 dark:text-white">
                Examples
              </h4>
              <p className="text-sm text-gray-600 dark:text-muted-foreground">
                Ready-to-use code snippets and demos
              </p>
            </div>
          </div>

          {/* Best Practices */}
          <div
            className={`flex items-start gap-4 p-3 rounded-lg transition-all duration-300 ${
              isHovered
                ? "bg-cyan-100/40 dark:bg-cyan-500/5 translate-x-1 delay-150"
                : ""
            }`}
          >
            <Check className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-medium text-gray-800 dark:text-white">
                Best Practices
              </h4>
              <p className="text-sm text-gray-600 dark:text-muted-foreground">
                Tips and recommendations for efficient use
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <Button className="w-full mt-6 gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white relative overflow-hidden group shadow-sm">
          <span className="relative z-10 flex items-center gap-2">
            <span>View Resources</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span
            className={`absolute inset-0 w-full h-full bg-white/10 transition-opacity duration-500 ${
              isHovered ? "opacity-30 animate-pulse" : "opacity-0"
            }`}
          />
        </Button>
      </div>
    </CardBase>
  );
};

export default InfoCard;
