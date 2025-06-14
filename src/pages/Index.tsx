
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
        </nav>
      </div>
      {/* Secondary container fills the remaining visible screen */}
      <div className="w-full [background-color:#aec3c3] px-8 flex-1 rounded-none"></div>
      {/* The rest of the page remains a white canvas */}
    </div>
  );
};
export default Index;
