import { Code, User, Briefcase } from "lucide-react";
import Resume from "../assets/New Resume.pdf";

// ✅ Named export
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-white">About </span>
            <span className="text-primary">Me</span>
          </h2>
          <h3 className="mt-6 text-xl font-semibold text-white">Passionate Web Developer</h3>
          <p className="mt-4 text-white leading-relaxed">
            I specialize in creating responsive, accessible, and performant web applications.
          </p>
          <p className="mt-2 text-white leading-relaxed">
            Constantly learning new technologies and techniques to stay at the forefront.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="bg-[#111827] p-6 rounded-xl shadow-lg flex items-start gap-4 hover:scale-[1.02] transition-transform">
            <Code className="text-primary w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-white">Web Development</h4>
              <p className="text-gray-300 text-sm">
                Creating responsive websites and web applications.
              </p>
            </div>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl shadow-lg flex items-start gap-4 hover:scale-[1.02] transition-transform">
            <User className="text-primary w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-white">UI/UX Design</h4>
              <p className="text-gray-300 text-sm">Designing intuitive interfaces.</p>
            </div>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl shadow-lg flex items-start gap-4 hover:scale-[1.02] transition-transform">
            <Briefcase className="text-primary w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-white">Project Management</h4>
              <p className="text-gray-300 text-sm">Leading projects from start to finish.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
