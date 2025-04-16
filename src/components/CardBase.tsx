
import { cn } from "@/lib/utils";
import React from "react";

export interface CardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hover" | "gradient" | "highlight" | "glass";
}

const CardBase = ({
  children,
  className,
  variant = "default",
  ...props
}: CardBaseProps) => {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300",
        {
          "bg-card text-card-foreground shadow-sm border border-border": variant === "default",
          "bg-card text-card-foreground shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-border": variant === "hover",
          "bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-800/20": variant === "gradient",
          "bg-card text-card-foreground shadow-md border-l-4 border border-blue-500": variant === "highlight",
          "backdrop-blur-md bg-black/40 border border-white/10 text-white": variant === "glass",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardBase;
