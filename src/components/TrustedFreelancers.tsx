
import React from 'react';
import { Star } from 'lucide-react';

const TrustedFreelancers = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Trusted Freelancers</h3>
        <div className="flex text-orange-400">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={16} fill="currentColor" />
          ))}
        </div>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center text-white text-sm font-medium"
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-2xl font-bold text-gray-900 mb-1">200+</div>
      <div className="text-gray-600">Satisfied Customers</div>
    </div>
  );
};

export default TrustedFreelancers;
