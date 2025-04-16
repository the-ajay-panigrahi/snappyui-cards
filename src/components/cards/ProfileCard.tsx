import React, { useState } from "react";
import CardBase from "../CardBase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProfileCard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <CardBase
      className={`w-full max-w-sm rounded-xl border border-border shadow-md overflow-hidden
        bg-white dark:bg-gray-900 transition-colors duration-300`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4 bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 ring-2 ring-blue-500">
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              John Doe
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Senior Developer
            </p>
          </div>
        </div>
        <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
          Pro
        </Badge>
      </div>

      {/* Stats Section */}
      <div className="flex justify-around text-center py-4 bg-gray-50 dark:bg-gray-800 border-t border-b border-border">
        {[
          { label: "Projects", value: "142" },
          { label: "Following", value: "4.8k" },
          { label: "Followers", value: "12.5k" },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-base font-semibold text-gray-900 dark:text-white">
              {item.value}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
          <p className="mb-4">
            Full-stack developer with 10+ years of experience in React, Node.js
            & TypeScript. Passionate about scalable systems and clean UI.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "TypeScript", "Tailwind", "GraphQL"].map(
              (skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-blue-300 text-blue-600 dark:border-blue-400 dark:text-blue-300"
                >
                  {skill}
                </Badge>
              )
            )}
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-2 px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-border">
        <Button
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "View Less" : "View More"}
        </Button>
        <Button
          variant="outline"
          className="text-blue-600 border-blue-300 hover:bg-blue-100 dark:text-blue-300 dark:border-blue-500 dark:hover:bg-blue-500/10"
        >
          Follow
        </Button>
      </div>
    </CardBase>
  );
};

export default ProfileCard;
