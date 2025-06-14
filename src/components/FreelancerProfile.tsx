
import React from 'react';

const FreelancerProfile = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-white font-medium">
          J
        </div>
        <div>
          <div className="text-gray-600 text-sm">@jenny</div>
          <div className="font-semibold text-gray-900">UI/Ux Designer</div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-700 text-sm">80+ projects completed</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-green-600 text-xs font-bold">$</span>
          </div>
          <span className="text-gray-700 text-sm">$30 per hour</span>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;
