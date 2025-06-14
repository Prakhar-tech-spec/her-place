
import { Button } from "@/components/ui/button";
import NavLinks from "@/components/NavLinks";
import { Menu } from "lucide-react";
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
      <div className="relative flex-1 w-full [background-color:#aec3c3] py-0 px-0 md:py-0 md:px-0 lg:py-0 lg:px-0 rounded-b-2xl overflow-visible">
        {/* "FREELANCE" spanning full width with enhanced responsiveness */}
        <div className="w-full flex flex-col pt-12 md:pt-16 lg:pt-20">
          {/* Full width container for FREELANCE text */}
          <div className="w-full flex items-center h-[min(25vw,220px)] sm:h-[min(22vw,200px)] md:h-[min(15vw,160px)] lg:h-[min(12vw,130px)] xl:h-[min(10vw,120px)] 2xl:h-[min(8vw,110px)] px-2 sm:px-4 md:px-6 lg:px-8 relative">
            {/* "FREELANCE" text stretches to fill entire width */}
            <div className="w-full overflow-hidden">
              <span
                className="
                  font-bricolage
                  text-white
                  font-extrabold
                  uppercase
                  select-none
                  pointer-events-none
                  z-10
                  block
                  text-left
                  leading-tight
                  w-full
                "
                style={{
                  fontSize: "clamp(2.5rem, 18vw, 12rem)",
                  lineHeight: 0.95,
                  fontWeight: 900,
                  letterSpacing: "clamp(-0.05em, -0.02em, 0em)",
                  textShadow: "0px 2px 8px rgba(0,0,0,0.11), 0 1px 3px rgba(0,0,0,0.09)",
                  width: "100%",
                  transform: "scaleX(clamp(1.1, 1.3, 1.4))",
                  transformOrigin: "left center",
                }}
              >
                FREELANCE
              </span>
            </div>
            
            {/* Woman with laptop image positioned on the right side */}
            <div className="absolute right-4 md:right-8 lg:right-12 top-1/2 transform -translate-y-1/2 z-20">
              <img 
                src="/lovable-uploads/70ff0b38-73ba-4b64-adaf-26cb0d9b84a9.png"
                alt="Woman working on laptop"
                className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* The rest of the page remains a white canvas */}
    </div>
  );
};

export default Index;
