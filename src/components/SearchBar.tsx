
import React, { useState } from 'react';
import { Mic, Search } from 'lucide-react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full max-w-2xl">
      <div className="relative flex items-center bg-white rounded-full shadow-lg border border-gray-200">
        <div className="flex items-center pl-4 pr-2 flex-1">
          <Search className="text-gray-400 mr-3" size={20} />
          <input
            type="text"
            placeholder="Search for any services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 py-4 text-gray-700 bg-transparent outline-none placeholder-gray-400"
          />
        </div>
        <div className="flex items-center gap-2 pr-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Mic className="text-gray-600" size={20} />
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
