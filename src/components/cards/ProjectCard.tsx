
import React, { useState } from "react";
import CardBase from "../CardBase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProjectCard = () => {
  const [inputValue, setInputValue] = useState("");
  const [framework, setFramework] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardBase 
      variant="gradient"
      className="w-full max-w-md p-8 relative transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mt-12 -mr-12 blur-2xl transition-all duration-500 ${isHovered ? 'opacity-70 scale-125' : 'opacity-30'}`}></div>
      <div className={`absolute bottom-0 left-0 w-16 h-16 bg-indigo-500/10 rounded-full -mb-8 -ml-8 blur-xl transition-all duration-500 ${isHovered ? 'opacity-70 scale-125' : 'opacity-0'}`}></div>
      
      <h2 className="text-4xl font-bold mb-2 tracking-tight">
        Create project
      </h2>
      <p className="text-slate-400 mb-8">
        Deploy your new project in one-click.
      </p>

      <div className="space-y-6 relative z-10">
        <div className="space-y-2">
          <label className="text-lg font-medium transition-all duration-300 inline-block">Name</label>
          <Input 
            placeholder="Name of your project"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={`bg-black/30 border-white/10 hover:border-white/30 focus:border-blue-500/70 transition-all text-white placeholder:text-slate-500 ${isHovered ? 'shadow-[0_0_15px_rgba(59,130,246,0.1)]' : ''}`}
          />
        </div>

        <div className="space-y-2">
          <label className="text-lg font-medium transition-all duration-300 inline-block">Framework</label>
          <Select value={framework} onValueChange={setFramework}>
            <SelectTrigger className={`bg-black/30 border-white/10 hover:border-white/30 focus:border-blue-500/70 transition-all text-white ${isHovered ? 'shadow-[0_0_15px_rgba(59,130,246,0.1)]' : ''}`}>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-white/10 text-white">
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="svelte">Svelte</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-between pt-4 gap-4">
          <Button
            variant="outline"
            className="bg-transparent hover:bg-white/5 text-white border-white/20 hover:border-white/30 transition-all duration-300"
          >
            Cancel
          </Button>
          <Button
            className={`bg-white text-black hover:bg-white/90 relative overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-[0_0_15px_rgba(255,255,255,0.3)]' : ''}`}
          >
            {isHovered && (
              <span className="absolute inset-0 w-full h-full bg-white/20 animate-pulse"></span>
            )}
            <span className="relative z-10">Deploy</span>
          </Button>
        </div>
      </div>
    </CardBase>
  );
};

export default ProjectCard;
