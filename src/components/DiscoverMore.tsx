
import React from 'react';

const DiscoverMore = () => {
  return (
    <div className="absolute top-1/3 right-1/4 transform translate-x-1/2">
      <div className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 flex items-center justify-center shadow-lg">
        <div className="text-center">
          <div className="w-8 h-8 mx-auto mb-1 grid grid-cols-2 gap-0.5">
            {[1, 2, 3, 4].map((dot) => (
              <div key={dot} className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
            ))}
          </div>
          <div className="text-xs text-gray-600 font-medium leading-tight">
            discover more
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
