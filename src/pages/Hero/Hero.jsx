import Me from "./../../assets/img/me.jpg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="text-slat-100 overflow-hidden py-24 md:py-20 flex justify-center items-center"
    >
      <div className="relative mx-4">
        <img
          src={Me}
          alt="Emma"
          className="h-72 w-72 object-cover rounded-full shadow-lg ring-4 ring-gray-800 hover:ring-teal-400 transition-all duration-300"
        />
      </div>
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
          A Frontend Developer passionate about crafting seamless user
          experiences — and diving into the Backend to make them come alive. I
          enjoy building modern, scalable web applications using technologies
          like React, Next.js, and Spring Boot.
        </p>
      </div>
    </section>
  );
};
