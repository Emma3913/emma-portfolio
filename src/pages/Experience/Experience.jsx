import CardExperience from "../../components/common/CardExperience";
import { technologies, technologiesRecent } from "../../data";

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

      <CardExperience
        company={"TEKSI Technology Consultants S.A. de C.V."}
        date={"May – August 2024"}
        description={
          "Developed REST APIs with Spring Boot for a project in the financial sector. Created dynamic components in React + TypeScript, consuming APIs with Axios. Worked as a team using SCRUM, participating in sprints, and implementing best practices."
        }
        location={"Tehuacán, Puebla"}
        position={"Fullstack Developer"}
        technologies={technologies}
      />

      <CardExperience
        company={"Maxikash – Motorcycle Finance Company"}
        date={"January 2025 – Present"}
        description={
          "Development of REST endpoints in Spring Boot 3 with Java 17, applying best practices and architectural standards. Implementation and maintenance of modules in a Java Web App system (Java 8, legacy) used for credit management. Support in the development of a mobile application using React Native CLI + TypeScript, including the generation of the deployment file for the Google Play Store. Integration of MySQL databases for data persistence. Participation in an agile team using the SCRUM methodology."
        }
        location={"Mexico City"}
        position={"Backend Developer"}
        technologies={technologiesRecent}
      />
    </section>
  );
}
