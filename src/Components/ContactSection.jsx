import { Mail } from "lucide-react";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-12 px-4 bg-secondary/30 flex flex-col items-center justify-end"
    >
      {/* Connect With Me Text */}
      <span
        className="text-2xl md:text-3xl font-bold mb-6
                   bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                   bg-clip-text text-transparent tracking-widest text-center"
      >
        CONNECT WITH ME
      </span>

      {/* Icons Row */}
      <div className="flex items-center gap-6">
        <a
          href="mailto:aadeshraws2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Mail size={32} className="text-white" />
        </a>

        <a
          href="https://x.com/RawasAadesh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Twitter size={32} className="text-white" />
        </a>

        <a
          href="https://www.instagram.com/aadeshrawas_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Instagram size={32} className="text-white" />
        </a>

        <a
          href="https://www.linkedin.com/in/rawas-adesh-256a4a2a5/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Linkedin size={32} className="text-white" />
        </a>
      </div>
    </section>
  );
};
