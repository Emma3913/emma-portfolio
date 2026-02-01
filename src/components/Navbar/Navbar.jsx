import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const { t, i18n } = useTranslation();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleActiveSection = () => {
      let current = "#hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = `#${section.getAttribute("id")}`;
        }
      });
      if (window.innerHeight + scrollY >= document.body.offsetHeight - 50) {
        const last = sections[sections.length - 1];
        current = `#${last.getAttribute("id")}`;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  return (
    <nav className="no-scrollbar bg-zinc-950 h-screen sticky top-0 z-20 flex flex-col items-center overflow-y-scroll text-white">
      {/* <span className="shrink-0 text-xl font-black leading-[1] size-10 flex items-center justify-center my-4"> */}
      <span
        className={`shrink-0 text-xl font-black leading-[1] size-10 flex items-center justify-center my-4 ${
          activeSection === "#hero" ? "transform-all" : ""
        }`}
      >
        E<span className="text-[#3ecfb2]">.</span>
      </span>

      {/* About */}
      <a
        href="#about"
        onClick={(e) => handleScroll(e, "#about")}
        className={`writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full ${
          activeSection === "#about"
            ? "bg-zinc-800 border-[#3ecfb2] opacity-100"
            : "border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
        }`}
      >
        {t("aboutNavbar")}
      </a>

      {/* Projects */}
      <a
        href="#projects"
        onClick={(e) => handleScroll(e, "#projects")}
        className={`writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full ${
          activeSection === "#projects"
            ? "bg-zinc-800 border-[#3ecfb2] opacity-100"
            : "border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
        }`}
      >
        {t("projectsNavbar")}
      </a>

      {/* Experience */}
      <a
        href="#experience"
        onClick={(e) => handleScroll(e, "#experience")}
        className={`writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full ${
          activeSection === "#experience"
            ? "bg-zinc-800 border-[#3ecfb2] opacity-100"
            : "border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
        }`}
      >
        {t("experienceNavbar")}
      </a>

      {/* Contact */}
      <a
        href="#contact"
        onClick={(e) => handleScroll(e, "#contact")}
        className={`writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full ${
          activeSection === "#contact"
            ? "bg-zinc-800 border-[#3ecfb2] opacity-100"
            : "border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
        }`}
      >
        {t("contactNavbar")}
      </a>
    </nav>
  );
};
