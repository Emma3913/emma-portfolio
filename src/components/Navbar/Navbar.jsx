import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="no-scrollbar bg-zinc-950 h-screen sticky top-0 z-20 flex flex-col items-center overflow-y-scroll text-white">
      <span class="shrink-0 text-xl font-black leading-[1] size-10 flex items-center justify-center my-4">
        E<span class="text-[#3ecfb2]">.</span>
      </span>
      <a
        class="writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full bg-zinc-800 border-[#3ecfb2] opacity-100"
        href="/#about"
        style={{ transform: "none" }}
      >
        About
      </a>
      <a
        className="writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
        href="/#projects"
        style={{ transform: "none" }}
      >
        Projects
      </a>
      <a
        className="writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
        href="#"
        style={{ transform: "none" }}
      >
        Exp.
      </a>
      <a
        className="writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
        href="#"
        style={{ transform: "none" }}
      >
        Contact
      </a>
    </nav>
  );
};
