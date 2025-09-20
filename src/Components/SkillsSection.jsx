import { useState } from "react";

const skills = [
  { name: "HTML/CSS", level: 90, category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Javascript", level: 90, category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", level: 85, category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }, // ✅ fixed
  { name: "Node.js", level: 80, category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", level: 85, category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }, // ⚠️ only b/w available
  { name: "MongoDB", level: 80, category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", level: 75, category: "tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Github", level: 80, category: "tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", level: 95, category: "tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
];



export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, key) => (
          <div
            key={key}
            className="bg-[#0f172a] p-4 rounded-lg shadow-lg flex items-center gap-4 hover:scale-105 transition-transform"
          >
            {/* Logo */}
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded shadow-md">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-8 h-8 object-contain"
              />
            </div>

            {/* Name and Progress */}
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white font-semibold text-sm md:text-base">
                  {skill.name}
                </span>
                <span className="text-white text-xs md:text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded">
                <div
                  className="bg-primary h-2 rounded"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
