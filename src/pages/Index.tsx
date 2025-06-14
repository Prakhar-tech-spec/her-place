
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top container with navigation bar */}
      <div className="w-full [background-color:#aec3c3] py-4 px-8 shadow">
        <nav className="flex items-center justify-between">
          {/* Logo or Brand Name */}
          <span className="text-xl font-bold text-white drop-shadow-sm">MyApp</span>
          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-white font-medium hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* The rest of the page remains a white canvas */}
    </div>
  );
};

export default Index;

