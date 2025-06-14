
import { Button } from "@/components/ui/button";
import NavLinks from "@/components/NavLinks";
import SearchBar from "@/components/SearchBar";
import SkillTags from "@/components/SkillTags";
import TrustedFreelancers from "@/components/TrustedFreelancers";
import FreelancerProfile from "@/components/FreelancerProfile";
import ServiceDescription from "@/components/ServiceDescription";
import DiscoverMore from "@/components/DiscoverMore";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";

const Index = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col w-full py-1 px-1 md:py-2 md:px-2 lg:py-3 lg:px-3 border-4 border-white rounded-2xl transition-all duration-300 overflow-hidden">
      {/* Top navigation bar */}
      <div className="w-full [background-color:#aec3c3] py-2 px-2 md:py-3 md:px-3 lg:py-4 lg:px-4 shadow rounded-t-2xl mx-0">
        <nav className="grid grid-cols-[auto_1fr_auto] items-center relative w-full" style={{ gridTemplateColumns: "auto 1fr auto" }}>
          <span className="text-xl md:text-2xl font-bold text-black drop-shadow-sm ml-4 md:ml-8 col-start-1 row-start-1">
            HerPlace
          </span>

          <div className="hidden md:flex justify-center col-start-2 row-start-1">
            <NavLinks />
          </div>

          <div className="flex items-center gap-2 md:gap-4 col-start-3 row-start-1 pr-2 md:pr-4">
            <Button
              variant="outline"
              className="border border-black text-black font-medium px-6 py-2.5 md:px-7 md:py-3 rounded-full text-base md:text-lg shadow-none bg-[#aec3c3] transition-colors duration-200 hover:bg-black hover:text-white"
            >
              Log in
            </Button>
            <Button
              variant="default"
              className="bg-black text-white font-semibold px-6 py-2.5 md:px-7 md:py-3 rounded-full text-base md:text-lg border border-black transition-colors duration-200 hover:bg-[#aec3c3] hover:text-black hover:border-black"
              id="joinus-btn"
            >
              Join us
            </Button>

            <div className="flex md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <button
                    aria-label="Open main menu"
                    className="ml-2 p-2 rounded-full hover:bg-black/10 transition"
                  >
                    <Menu size={28} />
                  </button>
                </SheetTrigger>
                <SheetContent side="top" className="p-0 min-h-[210px] bg-[#aec3c3]">
                  <div className="flex flex-col items-center pt-6 gap-3">
                    <NavLinks onClick={() => setOpen(false)} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>

      {/* Main content area */}
      <div className="relative flex-1 w-full [background-color:#aec3c3] rounded-b-2xl overflow-hidden">
        {/* Hero section with two-column layout */}
        <div className="relative min-h-[600px] lg:min-h-[700px]">
          {/* Background FREELANCE text */}
          <div className="absolute inset-0 flex items-start pt-8 lg:pt-16">
            <span
              className="font-bricolage text-white font-extrabold uppercase select-none pointer-events-none block text-left leading-none w-full whitespace-nowrap opacity-40"
              style={{
                fontSize: "clamp(4rem, 18vw, 12rem)",
                lineHeight: 0.9,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                textShadow: "0px 2px 8px rgba(0,0,0,0.11), 0 1px 3px rgba(0,0,0,0.09)",
                transform: "scaleX(1.5)",
                transformOrigin: "left center",
              }}
            >
              FREELANCE
            </span>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 h-full px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16">
            {/* Left column - Content */}
            <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                  Find the perfect freelance services for your business
                </h1>
                
                <SearchBar />
                <SkillTags />
              </div>
            </div>

            {/* Right column - Image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/lovable-uploads/43c5ebf6-e829-4577-940e-684438a01d5e.png"
                  alt="Woman working on laptop"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
                />
                <DiscoverMore />
              </div>
            </div>
          </div>
        </div>

        {/* Content cards section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
            {/* Service description */}
            <div className="lg:col-span-1 flex items-start">
              <ServiceDescription />
            </div>
            
            {/* Trusted freelancers card */}
            <div className="flex justify-center lg:justify-start">
              <TrustedFreelancers />
            </div>
            
            {/* Freelancer profile card */}
            <div className="flex justify-center lg:justify-end">
              <FreelancerProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
