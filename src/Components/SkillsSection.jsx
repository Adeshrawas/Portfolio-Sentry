import { useState } from "react";

const skills = [
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "Javascript", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 85, category: "backend" },
    { name: "MongoDB", level: 80, category: "backend" },
    { name: "Git", level: 75, category: "tools" },
    { name: "Github", level: 80, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" }
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        className={`px-5 py-2 rounded-full transition-colors duration-300 ${
                            activeCategory === category
                                ? "bg-primary text-white"
                                : "bg-gray-700 text-white"
                        }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                    .filter(skill =>
                        activeCategory === "all"
                            ? true
                            : skill.category === activeCategory
                    )
                    .map((skill, key) => (
                        <div
                            key={key}
                            className="bg-[#0f172a] p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg text-white">
                                    {skill.name}
                                </h3>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-primary h-2"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <span className="text-white font-medium">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};
