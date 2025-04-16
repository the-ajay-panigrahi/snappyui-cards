
import React from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import NotificationCard from "@/components/cards/NotificationCard";
import ProfileCard from "@/components/cards/ProfileCard";
import PricingCard from "@/components/cards/PricingCard";
import AnalyticsCard from "@/components/cards/AnalyticsCard";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Beautiful Card Components</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of elegant, interactive card components with subtle micro-interactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 flex justify-center items-start transform transition-all duration-300 hover:scale-[1.02]">
            <ProjectCard />
          </div>
          
          <div className="col-span-1 flex justify-center items-start transform transition-all duration-300 hover:scale-[1.02]">
            <NotificationCard />
          </div>
          
          <div className="col-span-1 flex justify-center items-start transform transition-all duration-300 hover:scale-[1.02]">
            <ProfileCard />
          </div>
          
          <div className="col-span-1 flex justify-center items-start transform transition-all duration-300 hover:scale-[1.02]">
            <PricingCard />
          </div>
          
          <div className="col-span-1 flex justify-center items-start transform transition-all duration-300 hover:scale-[1.02]">
            <AnalyticsCard />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-medium mb-4">Try hovering, clicking, and interacting with the cards</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Each card has unique micro-interactions and subtle animations
          </p>
        </div>
      </div>
      
      <ThemeToggle />
    </div>
  );
};

export default Index;
