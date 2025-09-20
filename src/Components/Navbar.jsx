import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Connect", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4">
      <div className="container mx-auto flex justify-end items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 rounded-lg hover:text-primary transition md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
