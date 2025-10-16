import React from "react";
import LonelyCar from "./../../../public/lonelyCar.jpg";
import CardProject from "../../components/common/CardProject";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <div
        className="flex items-center gap-8 mb-12"
        style={{ flexDirection: "row" }}
      >
        <div className="w-full h-[1px] bg-zinc-700 relative"></div>
        <h2 className="text-white">
          <div className="relative overflow-hidden w-fit">
            <div style={{ opacity: 1, transform: "none" }}>
              <span className="text-3xl md:text-5xl font-black text-end">
                Projects<span className="text-[#3ecfb2]">.</span>
              </span>
            </div>
            <div
              className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-[#3ecfb2]"
              style={{ left: "100%" }}
            ></div>
          </div>
        </h2>
      </div>
      {/* <div className="grid gap-12 grid-cols-1 md:grid-cols-2"> */}
      <span className="relative text-white text-3xl font-black text-center">
        We are still working on this section :)
      </span>
      {/* <CardProject
          imageProject={LonelyCar}
          descriptionProject={"Este es un proyecto chidote"}
          nameProject={"Ezybuy"}
          subNameProject={"Ezybuy"}
        /> */}
      {/* </div> */}
    </section>
  );
};
