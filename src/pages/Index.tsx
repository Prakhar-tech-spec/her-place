
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
        {/* "FREELANCE" aligned under nav's columns */}
        <div
          className="
            w-full flex flex-col"
        >
          {/* Responsive container aligns with nav's left and right columns */}
          <div
            className="
              mx-0 sm:mx-0
              flex items-center
              h-[min(21vw,204px)] md:h-[min(13vw,148px)] xl:h-[min(9vw,110px)]
              "
            style={{
              // Match the left of the logo (ml-4 md:ml-8)
              marginLeft: "1rem",
              marginRight: "0",
              // On md and up, match larger margin
              ...(window.innerWidth >= 768 && { marginLeft: "2rem" }),
              // For right, squeeze to match Join us button edge
              maxWidth: "100%",
              // We'll use an inner div for the precise text alignment
            }}
          >
            {/* "FREELANCE" text stretches to fill, but not wider than nav's content area */}
            <div
              className="relative w-full"
              style={{
                // The right side — [Join us] padding: px-6 … md:px-7; the nav has pr-2/pr-4 too.
                // So, subtract from 100vw:
                //  - left margin to logo (1/2rem)
                //  - right space (button px, nav's pr, etc.)
                // Approximate: on md, ml-8 (2rem), nav pr-4 (1rem).
                // Nudge until the "E" of "FREELANCE" sits below "s" of "Join us".
                maxWidth: "calc(100vw - 2rem - 8.5rem)", // 2rem (ml-8) + "Join us"/button group width guess (~8.5rem)
                // On mobile, use smaller guess
                ...(window.innerWidth < 768
                  ? { maxWidth: "calc(100vw - 1rem - 7rem)" }
                  : {}),
                height: "100%",
              }}
            >
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
                "
                style={{
                  fontSize: "clamp(2.2rem, 16vw, 9.6rem)",
                  lineHeight: 0.98,
                  fontWeight: 900,
                  letterSpacing: "-0.065em",
                  width: "100%",
                  textShadow: "0px 2px 8px rgba(0,0,0,0.11), 0 1px 3px rgba(0,0,0,0.09)",
                  whiteSpace: "nowrap",
                }}
              >
                FREELANCE
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* The rest of the page remains a white canvas */}
    </div>
  );
};

export default Index;
