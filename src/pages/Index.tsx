
import { Button } from "@/components/ui/button";
import NavLinks from "@/components/NavLinks";
import { Menu, Search, Mic, Star } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";

const Index = () => {
  // State for controlling mobile nav drawer
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col w-full py-1 px-1 md:py-2 md:px-2 lg:py-3 lg:px-3 border-4 border-white rounded-2xl transition-all duration-300 overflow-hidden">
      {/* Top navigation bar */}
      <div
        className="w-full [background-color:#aec3c3] py-2 px-2 md:py-3 md:px-3 lg:py-4 lg:px-4 shadow rounded-t-2xl mx-0"
      >
        <nav
          // 3-column Grid: [logo][links][actions]
          className="grid grid-cols-[auto_1fr_auto] items-center relative w-full"
          style={{ gridTemplateColumns: "auto 1fr auto" }}
        >
          {/* Logo or Brand Name */}
          <span className="text-xl md:text-2xl font-bold text-black drop-shadow-sm ml-4 md:ml-8 col-start-1 row-start-1">
            HerPlace
          </span>

          {/* Desktop navigation links */}
          <div className="hidden md:flex justify-center col-start-2 row-start-1">
            <NavLinks />
          </div>

          {/* Right side buttons (login & join us) */}
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

            {/* Mobile & Tablet: Hamburger menu button */}
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
                  {/* Mobile nav links, close on click */}
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
      <div className="relative flex-1 w-full [background-color:#aec3c3] py-0 px-0 md:py-0 md:px-0 lg:py-0 lg:px-0 rounded-b-2xl overflow-visible">
        {/* Hero section with FREELANCE text and content */}
        <div className="relative w-full h-full">
          {/* "FREELANCE" background text */}
          <div className="absolute inset-0 flex items-start justify-center pt-8 md:pt-12 lg:pt-16">
            <span
              className="
                font-bricolage
                text-white
                font-extrabold
                uppercase
                select-none
                pointer-events-none
                z-10
                leading-tight
                opacity-90
              "
              style={{
                fontSize: "clamp(4rem, 22vw, 16rem)",
                lineHeight: 0.9,
                fontWeight: 900,
                letterSpacing: "clamp(-0.08em, -0.05em, -0.02em)",
                textShadow: "0px 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              FREELANCE
            </span>
          </div>

          {/* Content overlay */}
          <div className="relative z-20 w-full h-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
            {/* Left side content */}
            <div className="flex-1 max-w-lg lg:max-w-xl space-y-6 lg:pr-8">
              {/* Main headline */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Find the perfect freelance services for your business
              </h1>

              {/* Search bar */}
              <div className="relative">
                <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
                  <div className="flex items-center px-4 py-3 flex-1">
                    <Search className="w-5 h-5 text-gray-500 mr-3" />
                    <input
                      type="text"
                      placeholder="Search for any services..."
                      className="flex-1 outline-none text-gray-700 placeholder-gray-500"
                    />
                    <Mic className="w-5 h-5 text-gray-500 ml-3" />
                  </div>
                  <Button className="bg-black text-white rounded-full px-6 py-3 m-1 hover:bg-gray-800">
                    <Search className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Popular skills */}
              <div className="space-y-3">
                <p className="text-sm text-gray-700 font-medium">Popular skills:</p>
                <div className="flex flex-wrap gap-2">
                  {['web design', 'ui/ux design', 'databases', 'business cards'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/80 text-gray-700 text-sm rounded-full border border-gray-200 hover:bg-white transition-colors cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service description */}
              <div className="bg-white/90 rounded-2xl p-6 backdrop-blur-sm shadow-lg">
                <p className="text-gray-700 leading-relaxed">
                  A freelance service web portal connects businesses with freelancers, facilitating project collaboration and hiring.
                </p>
              </div>
            </div>

            {/* Right side - Woman image and cards */}
            <div className="relative flex-1 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
              {/* Woman with laptop image */}
              <div className="relative">
                <img
                  src="/lovable-uploads/d93ba316-dfa0-4b80-b3bc-7692737d3906.png"
                  alt="Woman working on laptop"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />

                {/* Discover more badge */}
                <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="w-12 h-12 bg-[#aec3c3] rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#aec3c3] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                {/* Trusted Freelancers card */}
                <div className="bg-white rounded-2xl p-4 shadow-lg mb-4 w-64">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-800">Trusted Freelancers</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">200+</p>
                      <p className="text-xs text-gray-500">Satisfied Customers</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jenny profile card */}
              <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl p-4 shadow-lg w-64">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-800">@jenny</p>
                    <p className="text-sm text-gray-500">UI/Ux Designer</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                    <span>80+ projects completed</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                    <span>$30 per hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
