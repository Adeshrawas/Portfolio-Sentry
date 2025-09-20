import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "WebRTC",
    description:
      "A peer-to-peer video chat application built using WebRTC and Socket.io that allows real-time communication between users.",
    image: "https://api.emphie.com/uploads/48db8a78d29f1130e507966964fb27b6_7cdcee162a.jpeg",
    tags: ["React", "TailwindCSS", "WebRTC", "Socket.io", "Node.js"],
    githubUrl: "https://github.com/Adeshrawas/webrtc-p2p",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "My personal portfolio website showcasing my projects, skills, and achievements as a web developer.",
    image: "https://cdn.slidemodel.com/wp-content/uploads/21550-01-portfolio-presentation-template-16x9-1.jpg",
    tags: ["React", "TailwindCSS", "JavaScript"],
    githubUrl: "https://github.com/Adeshrawas/Portfolio-Sentry",
  },
  {
    id: 3,
    title: "LeetCode Extension",
    description:
      "LeetCode Whisper is a lightweight Chrome Extension designed to enhance the competitive programming experience on LeetCode.",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*2i9TlQ8_EFSs3T741jrmig.png",
    tags: ["JavaScript", "React", "TailwindCSS", "Chrome API"],
    githubUrl: "https://github.com/Adeshrawas/leetcode-extension",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative text-white rounded-[1px]">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111827] rounded-lg flex flex-col h-full 
                         shadow-[0_0_8px_2px_rgba(255,255,255,0.15)] 
                         transition-shadow duration-300 
                         hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.5)]"
            >
              {/* Image */}
              <div className="flex justify-center items-center h-48 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain h-full w-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4 flex-grow">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary/80 text-white font-semibold px-4 py-2 rounded transition-colors duration-300 mt-auto"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
