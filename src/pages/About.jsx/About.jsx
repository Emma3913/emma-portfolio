import React from "react";
import BoxTechnologies from "../../components/common/BoxTechnologies";

export const About = () => {
  return (
    <>
      <section id="about" className="section-wrapper">
        <div
          class="flex items-center gap-8 mb-12"
          style={{ flexDirection: "row-reverse" }}
        >
          <div class="w-full h-[1px] bg-zinc-700 relative"></div>
          <h2 className="text-white">
            <div class="relative overflow-hidden w-fit">
              <div style={{ opacity: 1, transform: "none" }}>
                <span class="text-3xl md:text-5xl font-black text-end">
                  About<span class="text-[#3ecfb2]">.</span>
                </span>
              </div>
              <div
                class="absolute bottom-1 left-0 right-0 top-1 z-20 bg-[#3ecfb2]"
                style={{ left: "100%" }}
              ></div>
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-4">
            <div className="relative overflow-hidden w-fit">
              <div style={{ opacity: 1, transform: "none" }}>
                <p className="leading-relaxed text-zinc-300">
                  <span className="bg-[#3ecfb2] text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                    H
                  </span>
                  ey! I'm Emma, We are still working on this section.
                </p>
              </div>
              <div
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-[#3ecfb2]"
                style={{ left: "100%" }}
              ></div>
            </div>

            <div className="relative overflow-hidden w-fit">
              <div style={{ opacity: 1, transform: "none" }}>
                <p className="leading-relaxed text-zinc-300">
                  {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quibusdam, temporibus sapiente in nisi minima molestias quidem
                  ipsam praesentium, similique consequuntur voluptas nam
                  corrupti sunt reiciendis maiores earum dolorum? Perspiciatis,
                  exercitationem. */}
                  {/* We are still working on this section. */}
                </p>
              </div>
              <div
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-[#3ecfb2]"
                style={{ left: "100%" }}
              ></div>
            </div>

            <div className="relative overflow-hidden w-fit">
              <div style={{ opacity: 1, transform: "none" }}>
                <p className="leading-relaxed text-zinc-300">
                  {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus animi id molestias suscipit sed, labore omnis numquam et
                  eos, commodi nulla harum, modi dicta. Soluta dignissimos
                  beatae culpa aliquam fugit! */}
                  {/* We are still working on this section. */}
                </p>
              </div>
              <div
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-[#3ecfb2]"
                style={{ left: "100%" }}
              ></div>
            </div>

            <div className="relative overflow-hidden w-fit">
              <div style={{ opacity: 1, transform: "none" }}>
                <p className="leading-relaxed text-zinc-300">
                  {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit, incidunt quam tempore itaque illum iusto beatae
                  quidem ratione facere est in eum atque quisquam, vel dolore
                  facilis possimus reiciendis sunt. */}
                  {/* We are still working on this section. */}
                </p>
              </div>
              <div
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-[#3ecfb2]"
                style={{ left: "100%" }}
              ></div>
            </div>

            <div className="relative overflow-hidden w-fit">
              <div style={{ opacity: 1, transform: "none" }}>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4 text-sm text-red-300">
                    <span>My links</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                    </svg>
                  </div>
                  <div className="flex items-center text-lg gap-4">
                    <a
                      className="text-zinc-300 hover:text-red-300 transition-colors"
                      target="_blank"
                      rel="nofollow"
                      href="https://www.linkedin.com"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                    <a
                      className="text-zinc-300 hover:text-red-300 transition-colors"
                      target="_blank"
                      rel="nofollow"
                      href="https://www.github.com"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .321.21.694.825.577C20.564 21.094 24 16.596 24 12.297c0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                    <a
                      className="text-zinc-300 hover:text-red-300 transition-colors"
                      target="_blank"
                      rel="nofollow"
                      href="https://www.twitter.com"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.633 4.87c-.836.371-1.732.621-2.674.733.96-.578 1.698-1.494 2.042-2.58-.897.532-1.892.918-2.947 1.125-.846-.899-2.055-1.459-3.395-1.459-2.564 0-4.646 2.082-4.646 4.646 0 .365.04.722.115 1.065-3.86-.194-7.29-2.046-9.586-4.868-.401.689-.632 1.49-.632 2.355 0 1.623.828 3.058 2.086 3.895-.766-.025-1.487-.235-2.116-.587v.059c0 2.268 1.611 4.162 3.747 4.594-.393.107-.808.164-1.236.164-.302 0-.595-.029-.884-.084.595 1.854 2.321 3.207 4.377 3.244-1.606 1.262-3.624 2.014-5.81 2.014-.376 0-.746-.022-1.114-.065 2.07 1.326 4.528 2.097 7.167 2.097 8.612 0 13.327-7.14 13.327-13.327 0-.203-.004-.406-.012-.608.914-.661 1.707-1.48 2.335-2.418z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-[#3ecfb2]"
                style={{ left: "100%" }}
              ></div>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden w-fit">
              <div style={{ opacity: 1, transform: "none" }}>
                <div>
                  <h4 className="flex items-center mb-6 text-white">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      className="text-[#3ecfb2] text-2xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"></path>
                    </svg>
                    <span className="font-bold ml-2">Use at work</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-12 text-white">
                    <BoxTechnologies nameTechnology={"JavaScript"} />
                  </div>
                </div>
              </div>
              <div
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-[#3ecfb2]"
                style={{ left: "100%" }}
              ></div>
            </div>
            <div className="relative overflow-hidden w-fit">
              <div style={{ opacity: 1, transform: "none" }}>
                <div>
                  <h4 className="flex items-center mb-6 text-white">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      className="text-[#3ecfb2] text-2xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                    </svg>
                    <span className="font-bold ml-2">Use for fun</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-12 text-white">
                    <BoxTechnologies nameTechnology={"Rust"} />
                  </div>
                </div>
              </div>
              <div
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-[#3ecfb2]"
                style={{ left: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
