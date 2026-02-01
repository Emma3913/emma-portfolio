import { useTranslation } from "react-i18next";
import CardExperience from "../../components/common/CardExperience";
import { technologies, technologiesRecent } from "../../data";

export default function Experience() {
  const { t, i18n } = useTranslation();
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
                {t("experience")}
                <span class="text-[#3ecfb2]">.</span>
              </span>
            </div>
            <div
              class="absolute bottom-1 left-0 right-0 top-1 z-20 bg-[#3ecfb2]"
              style={{ left: "100%" }}
            ></div>
          </div>
        </h2>
      </div>

      <CardExperience
        company={"TEKSI Technology Consultants S.A. de C.V."}
        date={"May – August 2024"}
        description={t("firstExperienceDescription")}
        location={"Tehuacán, Puebla"}
        position={"Fullstack Developer"}
        technologies={technologies}
      />

      <CardExperience
        company={"Maxikash – Motorcycle Finance Company"}
        date={"January 2025 – Present"}
        description={t("secondExperienceDescription")}
        location={"Mexico City"}
        position={"Backend Developer"}
        technologies={technologiesRecent}
      />
    </section>
  );
}
