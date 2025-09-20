export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white opacity-0 animate-fade-in">Hi I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Adesh</span>
            <span
              className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
                         bg-clip-text text-transparent ml-2 
                         opacity-0 animate-fade-in-delay-2"
            >
              {" "}Rawas
            </span>
          </h1>

          <p className="text-lg text-white max-w-2xl mx-auto">
            who loves building modern web apps with React, Node.js, Express, and MongoDB 🚀
          </p>

          <div className="pt-4">
            <a
              href="#projects"
              className="inline-block px-6 py-3 text-lg font-medium rounded-2xl 
                         bg-primary text-white shadow-lg 
                         hover:bg-primary/80 hover:shadow-primary/50 
                         transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-300">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mt-1 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};
