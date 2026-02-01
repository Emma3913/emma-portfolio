import Me from "./../../assets/img/me.jpg";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <section
      id="hero"
      className="text-slate-100 overflow-hidden py-20 md:py-24 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16"
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <img
          src={Me}
          alt="Emma"
          className="h-40 w-40 sm:h-56 sm:w-56 md:h-72 md:w-72 object-cover rounded-full shadow-lg ring-4 ring-gray-800 hover:ring-teal-400 transition-all duration-300"
        />
      </div>

      {/* Texto */}
      <div className="relative max-w-xl text-center md:text-left">
        <h1 className="pointer-events-auto text-3xl sm:text-5xl md:text-7xl font-black text-zinc-100 tracking-tight">
          {t("welcome")}
          <span className="text-[#3ecfb2]">.</span>
        </h1>

        <h2 className="pointer-events-auto mt-2 mb-4 text-lg sm:text-xl md:text-3xl text-zinc-300 tracking-tight">
          {/* {t("iam")}{" "} */}
          <span className="font-bold text-[#3ecfb2]">{t("role")}</span>
        </h2>

        <p className="pointer-events-auto text-sm sm:text-base leading-relaxed text-zinc-300">
          {t("description")}
        </p>
      </div>
    </section>
  );
};
