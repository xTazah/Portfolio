import { useState, useEffect } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { cn } from "@/lib/utils";

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState("AboutMe");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["AboutMe", "Work", "Projects"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About me", href: "#AboutMe", id: "AboutMe" },
    { name: "Work", href: "#Work", id: "Work" },
    { name: "Projects", href: "#Projects", id: "Projects" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FK
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 relative group",
                  activeSection === item.id
                    ? "text-purple-400"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-200",
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            ))}
          </div>

          {/* Theme Switcher */}
          <div className="flex items-center">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};