
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
      <div className="w-full [background-color:#aec3c3] py-2 px-2 md:py-3 md:px-3 lg:py-4 lg:px-4 shadow rounded-t-2xl mx-0">
        <nav className="flex items-center justify-between relative w-full">
          {/* Logo or Brand Name */}
          <span className="text-xl md:text-2xl font-bold text-black drop-shadow-sm ml-4 md:ml-8">
            HerPlace
          </span>

          {/* Desktop navigation links */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <NavLinks />
          </div>

          {/* Right side buttons (always visible, spacing adapts for screens) */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="outline"
              className="border border-black text-black font-medium px-6 py-2.5 md:px-7 md:py-3 rounded-full text-base md:text-lg shadow-none bg-[#aec3c3] transition-colors duration-200 hover:bg-black hover:text-white"
            >
              Log in
            </Button>
            <Button
              variant="default"
              className="bg-black text-white font-semibold px-6 py-2.5 md:px-7 md:py-3 rounded-full text-base md:text-lg border border-black transition-colors duration-200 hover:bg-[#aec3c3] hover:text-black hover:border-black"
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
      {/* Secondary container fills the remaining visible screen */}
      <div className="relative flex-1 w-full [background-color:#aec3c3] py-0 px-0 md:py-0 md:px-0 lg:py-0 lg:px-0 rounded-b-2xl overflow-visible">
        <div className="w-full h-full flex items-center justify-center overflow-visible">
          {/* Text Container */}
          <div className="flex items-center justify-center w-full px-2 md:px-6 lg:px-12 xl:px-20 h-[min(20vw,200px)] md:h-[min(13vw,150px)] xl:h-[min(10vw,120px)]">
            <span
              className="
                font-bricolage
                text-white
                font-extrabold
                uppercase
                pointer-events-none
                select-none
                z-10
                text-center
                w-full
                leading-[0.95]
                tracking-[-0.055em]
                "
              style={{
                fontSize: "clamp(2.2rem, 14vw, 10rem)",
                lineHeight: "1",
                letterSpacing: "-0.055em",
                // ensure text never overflows its box
                width: "100%",
                display: "block",
                fontWeight: 900,
                textShadow:
                  "0px 2px 8px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)",
                // whiteSpace: "nowrap", // let the browser wrap if needed, as in the design
              }}
            >
              FREELANCE
            </span>
          </div>
        </div>
      </div>
      {/* The rest of the page remains a white canvas */}
    </div>
  );
};

export default Index;

