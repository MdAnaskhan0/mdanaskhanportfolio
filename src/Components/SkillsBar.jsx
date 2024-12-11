import React from "react";

const SkillsBar = () => {
  return (
    <>
      <section className="mt-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-4 text-left font-yujiMai">
          Skills
        </h3>
        <hr className="w-16 border-t-2 border-blue-500 mb-6" />

        <div className="space-y-6">
          <ul className="space-y-4">
            {/* Skill Progress Bars */}
            {[
              "HTML", "CSS", "JavaScript", "React", "Tailwind", 
              "Node.JS", "Express.JS", "MongoDB", "MySQL", "Git", 
              "GitHub", "LaTeX", "MS Office", "Adobe Photoshop"
            ].map((skill, index) => (
              <li key={index} className="flex items-center justify-between text-lg text-gray-700 font-yujiMai">
                <span className="font-medium text-gray-900 w-1/3">{skill}</span>
                <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                  <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[90%]"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                    90%
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SkillsBar;
