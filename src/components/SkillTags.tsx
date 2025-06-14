
import React from 'react';

const skills = ['web design', 'ui/ux design', 'databases', 'business cards'];

const SkillTags = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 mt-4">
      <span className="text-gray-700 font-medium">Popular skills:</span>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <button
            key={skill}
            className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 text-sm font-medium"
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillTags;
