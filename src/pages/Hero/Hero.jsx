import React from "react";

export const Hero = () => {
  return (
    <section id="hero" className="text-slat-100 overflow-hidden py-24 md:py-32">
      <div className="relative">
        <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-zinc-100 md:text-8xl tracking-tight">
          Hi, I'm Emma<span className="text-[#3ecfb2] tracking-tight">.</span>
        </h1>
        <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl tracking-tight">
          I'm a {""}
          <span className="font-semibold text-[#3ecfb2]">
            Frontend Developer
          </span>
        </h2>
        <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          beatae maxime autem eum corrupti, temporibus exercitationem,
          perferendis excepturi dicta voluptas eaque voluptates recusandae nemo
          praesentium alias tempora voluptatem perspiciatis ducimus. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Praesentium natus
          explicabo, et sapiente earum dolor aperiam quod repellat, ex
          cupiditate totam voluptate exercitationem nostrum error provident
          harum quam sint ut?
        </p>
      </div>
    </section>
  );
};
