
import React, { useState } from "react";
import CardBase from "../CardBase";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const PricingCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardBase
      variant="default"
      className="w-full max-w-sm p-6 relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className={`absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mt-12 -mr-12 blur-xl transition-all duration-500 ${isHovered ? 'scale-125' : 'scale-100'}`}></div>
      <div className={`absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full -mb-16 -ml-16 blur-xl transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}></div>
      
      <div className="relative z-10">
        <div className="absolute top-0 right-0">
          <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full transition-all duration-300 group-hover:bg-blue-500/20">
            <Star className="w-3 h-3 mr-1 fill-blue-400 transition-transform duration-300 group-hover:scale-110" />
            Most Popular
          </span>
        </div>
        
        <h3 className="text-lg font-medium text-muted-foreground mt-6">PRO PLAN</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-4xl font-bold">$29</span>
          <span className="ml-1 text-muted-foreground">/month</span>
        </div>
        
        <div className="mt-8 space-y-4">
          <div className="flex gap-3 items-center group/item transition-all duration-300 hover:translate-x-1">
            <Check className="w-5 h-5 text-blue-500 shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
            <span>Unlimited projects</span>
          </div>
          <div className="flex gap-3 items-center group/item transition-all duration-300 hover:translate-x-1">
            <Check className="w-5 h-5 text-blue-500 shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
            <span>Team collaboration tools</span>
          </div>
          <div className="flex gap-3 items-center group/item transition-all duration-300 hover:translate-x-1">
            <Check className="w-5 h-5 text-blue-500 shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
            <span>Advanced analytics</span>
          </div>
          <div className="flex gap-3 items-center group/item transition-all duration-300 hover:translate-x-1">
            <Check className="w-5 h-5 text-blue-500 shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
            <span>Priority support</span>
          </div>
          <div className="flex gap-3 items-center group/item transition-all duration-300 hover:translate-x-1">
            <Check className="w-5 h-5 text-blue-500 shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
            <span>Custom integrations</span>
          </div>
        </div>
        
        <Button 
          className={`w-full mt-8 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 relative overflow-hidden transition-all duration-300 ${
            isHovered ? 'shadow-lg shadow-blue-500/20' : ''
          } group/btn`}
        >
          <span className="relative z-10">Subscribe Now</span>
          {isHovered && (
            <span className="absolute inset-0 w-full h-full bg-white/10 animate-pulse"></span>
          )}
          <span className="absolute right-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">→</span>
        </Button>
        
        <p className="mt-3 text-xs text-center text-muted-foreground">
          30-day money-back guarantee
        </p>
      </div>
    </CardBase>
  );
};

export default PricingCard;
