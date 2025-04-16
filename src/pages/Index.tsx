import React from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import NotificationCard from "@/components/cards/NotificationCard";
import ProfileCard from "@/components/cards/ProfileCard";
import PricingCard from "@/components/cards/PricingCard";
import AnalyticsCard from "@/components/cards/AnalyticsCard";
import InfoCard from "@/components/cards/InfoCard";
import BlogCard from "@/components/cards/BlogCard";
import ProductCard from "@/components/cards/ProductCard";
import TravelCard from "@/components/cards/TravelCard";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 p-4 md:p-8 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-200 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <ProjectCard />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-300 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <NotificationCard />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-400 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <ProfileCard />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-500 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <PricingCard />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-600 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <AnalyticsCard />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-700 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <InfoCard />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-800 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <BlogCard />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-900 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <ProductCard />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-1000 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <TravelCard />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Index;
