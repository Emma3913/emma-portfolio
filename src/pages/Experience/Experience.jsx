import React from "react";

export default function Experience() {
  return (
    <section className="section-wrapper relative" id="experience">
      <div
        class="flex items-center gap-8 mb-12"
        style={{ flexDirection: "row-reverse" }}
      >
        <div class="w-full h-[1px] bg-zinc-700 relative"></div>
        <h2 className="text-white">
          <div class="relative overflow-hidden w-fit">
            <div style={{ opacity: 1, transform: "none" }}>
              <span class="text-3xl md:text-5xl font-black text-end">
                Experience<span class="text-[#3ecfb2]">.</span>
              </span>
            </div>
            <div
              class="absolute bottom-1 left-0 right-0 top-1 z-20 bg-[#3ecfb2]"
              style={{ left: "100%" }}
            ></div>
          </div>
        </h2>
      </div>

      <div className="mb-6 border-b pb-6 border-zinc-700">
        <div className="flex items-center justify-between mb-2">
          <div className="relative overflow-hidden w-fit">
            <div className="opacity-100 transform-none">
              <span className="font-bold text-xl text-white">Google</span>
            </div>
          </div>
          <div className="relative overflow-hidden w-fit">
            <div className="opacity-100 transform-none">
              <span className="text-white">2022 - Present</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="relative overflow-hidden w-fit">
            <div className="opacity-100 transform-none">
              <span className="text-[#3ecfb2] font-bold">
                Software Engineer
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden w-fit">
            <div className="opacity-100 transform-none">
              <span className="text-white">Atlanta</span>
            </div>
          </div>
        </div>
        <p className="mb-6 text-zinc-300 leading-relaxed">
          I help build and scale Google Photos. Increased throughput of our
          primary services by 70%. Migrated backend service from Java to Go.
          Also helped make it look prettier.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-white px-2 py-1 rounded bg-zinc-700">
            Angular
          </span>
          <span className="text-xs text-white px-2 py-1 rounded bg-zinc-700">
            Python
          </span>
          <span className="text-xs text-white px-2 py-1 rounded bg-zinc-700">
            GCP
          </span>
          <span className="text-xs text-white px-2 py-1 rounded bg-zinc-700">
            Git
          </span>
          <span className="text-xs text-white px-2 py-1 rounded bg-zinc-700">
            GitHub
          </span>
          <span className="text-xs text-white px-2 py-1 rounded bg-zinc-700">
            Java
          </span>
          <span className="text-xs text-white px-2 py-1 rounded bg-zinc-700">
            Golang
          </span>
          <span className="text-xs text-white px-2 py-1 rounded bg-zinc-700">
            K8s
          </span>
        </div>
      </div>
    </section>
  );
}
