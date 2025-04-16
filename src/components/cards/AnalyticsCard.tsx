import React, { useState, useEffect } from "react";
import CardBase from "../CardBase";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowUp, BarChart2, TrendingUp, Users } from "lucide-react";

const AnalyticsCard = ({
  title = "",
  percentageChange = 0,
  visitors = 0,
  progressValue = 0,
  goal = 0,
  newUsers = 0,
  pageViews = "",
  revenue = "",
}) => {
  const [progress, setProgress] = useState(progressValue);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newValue = prev + (Math.random() * 4 - 2);
        return Math.min(100, Math.max(0, newValue));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CardBase
      variant="default"
      className="w-full max-w-sm p-6 relative group border-slate-200 dark:border-slate-800"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl`}
      ></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium">{title}</h3>
          <span className="flex items-center text-green-500 text-sm font-medium bg-green-500/10 px-2 py-1 rounded-full group-hover:bg-green-500/20 transition-all duration-300">
            <ArrowUp className="w-3 h-3 mr-1 transition-transform duration-300 group-hover:scale-125" />
            {percentageChange}%
          </span>
        </div>

        <div className="mt-4">
          <div className="text-3xl font-bold transition-all duration-500 group-hover:scale-105 group-hover:translate-x-1 inline-block">
            {visitors}
          </div>
          <div className="text-sm text-muted-foreground">
            Total visitors this week
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-sm mb-1">
            <span>Weekly Goal</span>
            <span className="font-medium">{goal}%</span>
          </div>
          <Progress
            value={progress}
            className={`h-2 transition-all duration-500 group-hover:h-3 ${
              progress > 66
                ? "bg-green-200"
                : progress > 33
                ? "bg-yellow-200"
                : "bg-red-200"
            }`}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
          <div
            className={`p-3 rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
              isActive
                ? "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800"
                : "bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700"
            }`}
          >
            <Users className="w-4 h-4 text-blue-500 mb-1 transition-transform duration-300 group-hover:scale-110" />
            <div className="font-medium">{newUsers}</div>
            <div className="text-muted-foreground text-xs">New Users</div>
          </div>

          <div
            className={`p-3 rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
              isActive
                ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                : "bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700"
            }`}
          >
            <BarChart2 className="w-4 h-4 text-green-500 mb-1 transition-transform duration-300 group-hover:scale-110" />
            <div className="font-medium">{pageViews}</div>
            <div className="text-muted-foreground text-xs">Page Views</div>
          </div>

          <div
            className={`p-3 rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
              isActive
                ? "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800"
                : "bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700"
            }`}
          >
            <TrendingUp className="w-4 h-4 text-purple-500 mb-1 transition-transform duration-300 group-hover:scale-110" />
            <div className="font-medium">{revenue}</div>
            <div className="text-muted-foreground text-xs">Revenue</div>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full mt-6 border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition-all duration-300 group/btn"
        >
          <span className="flex items-center">
            View Full Report
            <span className="ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0">
              →
            </span>
          </span>
        </Button>
      </div>
    </CardBase>
  );
};

export default AnalyticsCard;
