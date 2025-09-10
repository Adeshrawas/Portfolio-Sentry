const projects = [
    {
        id: 1,
        title: "WebRTC",
        description:
            "A peer-to-peer video chat application built using WebRTC and Socket.io that allows real-time communication between users, mimicking basic functionality of apps like Zoom.",
        image: "/projects/project1.jpg",
        tags: ["React", "TailwindCSS", "WebRTC", "Socket.io", "Node.js"],
        githubUrl: "https://github.com/Adeshrawas/webrtc-p2p",
    },
    {
        id: 2,
        title: "LeetCode Extension",
        description:
            "LeetCode Whisper is a lightweight Chrome Extension designed to enhance the competitive programming experience on LeetCode.",
        image: "/projects/project2.png",
        tags: ["JavaScript", "React", "TailwindCSS", "Chrome API"],
        githubUrl: "https://github.com/Adeshrawas/leetcode-extension",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative text-white">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group rounded-lg overflow-hidden flex flex-col h-full
                                       shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="flex justify-center items-center h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay / Text */}
                            <div className="p-6 flex flex-col flex-grow
                                            bg-gray-900/30 backdrop-blur-md rounded-b-lg">
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
