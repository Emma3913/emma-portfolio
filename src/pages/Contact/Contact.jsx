import React from "react";

export default function Contact() {
  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-xl mx-auto px-8 py-12 rounded-xl">
        <div className="relative overflow-hidden w-full">
          <div className="opacity-100 transform-none">
            <h4 className="text-4xl text-white md:text-5xl text-center font-black">
              Contact<span className="text-[#3ecfb2]">.</span>
            </h4>
          </div>
        </div>
        <div className="relative overflow-hidden w-full">
          <div className="opacity-100 transform-none">
            <p className="text-center my-8 text-zinc-300 leading-relaxed">
              Shoot me an email if you want to connect! You can also find me on
              <a
                target="_blank"
                className="text-indigo-300 hover:underline"
                href="https://www.linkedin.com"
              >
                {" "}
                Linkedin{" "}
              </a>
              or
              <a
                target="_blank"
                className="text-indigo-300 hover:underline"
                href="https://www.twitter.com"
              >
                {" "}
                Twitter{" "}
              </a>
              if that's more your speed.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden w-full">
          <div className="opacity-100 transform-none text-white">
            <a href="mailto:bob.ross@notreal.com">
              <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-indigo-300 transition-colors">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path>
                </svg>
                <span>evaqueroaquino@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
