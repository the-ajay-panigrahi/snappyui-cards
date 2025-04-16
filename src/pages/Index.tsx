import React from "react";
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
          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-300 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <NotificationCard />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-400 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <ProfileCard
                avatarSrc="https://github.com/shadcn.png"
                avatarAlt="JD"
                name="John Doe"
                role="Senior Developer"
                badgeText="Pro"
                stats={[
                  { label: "Projects", value: "142" },
                  { label: "Following", value: "4.8k" },
                  { label: "Followers", value: "12.5k" },
                ]}
                description="Full-stack developer with 10+ years of experience in React, Node.js & TypeScript. Passionate about scalable systems and clean UI."
                skills={[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "Tailwind",
                  "GraphQL",
                ]}
              />
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
              <TravelCard
                image="https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=600"
                title="Bali, Indonesia"
                location="Tropical Paradise"
                description="Experience the ultimate tropical getaway with pristine beaches, lush rice terraces, and vibrant cultural experiences in the heart of Indonesia."
                price="$1,299"
                duration="7 Days, 6 Nights"
                rating={4.5}
                badgeText="Best Seller"
              />
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
