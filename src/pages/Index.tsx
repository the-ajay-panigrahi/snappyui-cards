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
              <NotificationCard
                notifications={[
                  {
                    id: 1,
                    message: "Your call has been confirmed.",
                    time: "1 hour ago",
                    read: false,
                  },
                  {
                    id: 2,
                    message: "You have a new message!",
                    time: "2 hours ago",
                    read: false,
                  },
                  {
                    id: 3,
                    message: "Your subscription is expiring soon!",
                    time: "5 hours ago",
                    read: false,
                  },
                ]}
                setNotifications={(newNotifications) => {
                  console.log("Set Notifications:", newNotifications);
                }}
                pushEnabled={true}
                setPushEnabled={(val) => {
                  console.log("Set Push Enabled:", val);
                }}
              />
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
              <PricingCard
                planName="PRO PLAN"
                price="$29"
                pricePeriod="month"
                isPopular={true}
                features={[
                  "Unlimited projects",
                  "Team collaboration tools",
                  "Advanced analytics",
                  "Priority support",
                  "Custom integrations",
                ]}
                buttonText="Subscribe Now"
                guaranteeText="30-day money-back guarantee"
              />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-600 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <AnalyticsCard
                title="Monthly Overview"
                percentageChange={15.7}
                visitors={30845}
                progressValue={60}
                goal={75}
                newUsers={210}
                pageViews="5.2m"
                revenue="$20,300"
              />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-700 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <InfoCard
                title="Getting Started"
                description="Everything you need to know about our platform and how to make the most of it."
                buttonText="Explore Docs"
                onClick={() => console.log("Button clicked!")}
                items={[
                  {
                    icon: (
                      <span className="text-xl" role="img" aria-label="book">
                        📘
                      </span>
                    ),
                    title: "Documentation",
                    description: "Comprehensive guides and API references",
                  },
                  {
                    icon: (
                      <span className="text-xl" role="img" aria-label="code">
                        💻
                      </span>
                    ),
                    title: "Examples",
                    description: "Ready-to-use code snippets and demos",
                  },
                ]}
              />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-800 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <BlogCard
                image="https://images.pexels.com/photos/31606510/pexels-photo-31606510/free-photo-of-elegant-modern-dining-room-with-outdoor-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                category="Architecture"
                date="April 14, 2025"
                readTime="5 min read"
                title="The Future of Sustainable Architecture"
                description="Exploring how modern architectural designs are embracing sustainability through innovative materials and energy-efficient approaches that reduce environmental impact while creating stunning spaces."
                onReadMore={() => console.log("Read More clicked")}
                onShare={() => console.log("Share clicked")}
              />
            </div>
          </div>

          <div className="col-span-1 flex justify-center items-start animate-fade-in opacity-0 animation-delay-900 hover:z-10">
            <div className="transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 w-full">
              <ProductCard
                imageSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                imageAlt="Product"
                saleText="Sale"
                isFavoriteInitial={false}
                productName="Premium Running Shoes"
                productPrice="$129.99"
                productOldPrice="$199.99"
                productDiscount="35% OFF"
                productDescription="Lightweight, responsive cushioning with breathable mesh upper for maximum comfort during your run."
                productRating={4}
              />
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
