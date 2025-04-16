import React, { useState } from "react";
import CardBase from "../CardBase";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { InfoIcon, ExternalLink } from "lucide-react";

interface InfoItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface InfoCardProps {
  title: string;
  description: string;
  items: InfoItem[];
  buttonText?: string;
  onClick?: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  items,
  buttonText = "View Resources",
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardBase
      variant="glass"
      className="w-full max-w-sm p-6 relative overflow-hidden transition-all duration-300 group border border-border bg-white/80 dark:bg-background backdrop-blur-md shadow-md rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-white/0 to-purple-100/10 dark:from-cyan-500/5 dark:to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div
        className={`absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none ${
          isHovered ? "scale-125" : "scale-100"
        }`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10">
            <InfoIcon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
        </div>

        <p className="text-sm text-gray-600 dark:text-muted-foreground mb-6">
          {description}
        </p>
        <Separator className="my-6 bg-cyan-400/20" />

        {/* Items */}
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 p-3 rounded-lg transition-all duration-300 ${
                isHovered
                  ? `bg-cyan-100/40 dark:bg-cyan-500/5 translate-x-1 delay-${
                      idx * 75
                    }`
                  : ""
              }`}
            >
              <div className="mt-0.5 shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <Button
          className="w-full mt-6 gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white relative overflow-hidden group shadow-sm"
          onClick={onClick}
        >
          <span className="relative z-10 flex items-center gap-2">
            <span>{buttonText}</span>
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
