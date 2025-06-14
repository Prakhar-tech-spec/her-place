
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col px-[10px] py-[10px]">
      {/* Top container with navigation bar */}
      <div className="w-full [background-color:#aec3c3] py-4 px-8 shadow rounded-t-2xl mx-0">
        <nav className="flex items-center justify-between relative">
          {/* Logo or Brand Name */}
          <span className="text-xl font-bold text-black drop-shadow-sm">HerPlace</span>
          {/* Navigation Links - centered */}
          <ul className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-8">
            <li>
              <a href="#" className="text-black font-normal hover:underline">
                Find freelancers
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-normal hover:underline">
                Find Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-normal hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-normal hover:underline">
                Solutions
              </a>
            </li>
          </ul>
          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              style={{ backgroundColor: "#aec3c3" }}
              className="border border-black text-black font-medium px-7 py-2 rounded-full text-lg shadow-none hover:shadow-lg hover:bg-[#aec3c3]"
            >
              Log in
            </Button>
            <Button
              variant="default"
              className="bg-black text-white font-semibold px-7 py-2 rounded-full text-lg hover:bg-black/90"
            >
              Join us
            </Button>
          </div>
        </nav>
      </div>
      {/* Secondary container fills the remaining visible screen */}
      <div className="w-full [background-color:#aec3c3] px-8 flex-1 rounded-none"></div>
      {/* The rest of the page remains a white canvas */}
    </div>
  );
};
export default Index;
