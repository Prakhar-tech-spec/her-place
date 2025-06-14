
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
    <div className="min-h-screen bg-[#f8fafc] flex flex-col w-full py-3 px-2 md:py-6 md:px-5 lg:px-16 border-4 border-white rounded-2xl transition-all duration-300">
      {/* Top navigation bar */}
      <div className="w-full [background-color:#aec3c3] py-4 px-3 md:py-6 md:px-8 shadow rounded-t-2xl mx-0">
        <nav className="flex items-center justify-between relative w-full">
          {/* Logo or Brand Name */}
          <span className="text-xl md:text-2xl font-bold text-black drop-shadow-sm">
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
      <div className="w-full [background-color:#aec3c3] px-2 md:px-8 flex-1 rounded-b-2xl"></div>
      {/* The rest of the page remains a white canvas */}
    </div>
  );
};

export default Index;
