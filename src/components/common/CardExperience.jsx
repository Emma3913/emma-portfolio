import BoxTechnologies from "./BoxTechnologies";

const CardExperience = ({
  company,
  date,
  position,
  location,
  description,
  technologies,
}) => {
  return (
    <div className="mb-6 border-b pb-6 border-zinc-700">
      <div className="flex items-center justify-between mb-2">
        <div className="relative overflow-hidden w-fit">
          <div className="opacity-100 transform-none">
            <span className="font-bold text-xl text-white">{company}</span>
          </div>
        </div>
        <div className="relative overflow-hidden w-fit">
          <div className="opacity-100 transform-none">
            <span className="text-white">{date}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="relative overflow-hidden w-fit">
          <div className="opacity-100 transform-none">
            <span className="text-[#3ecfb2] font-bold">{position}</span>
          </div>
        </div>
        <div className="relative overflow-hidden w-fit">
          <div className="opacity-100 transform-none">
            <span className="text-white">{location}</span>
          </div>
        </div>
      </div>
      <p className="mb-6 text-zinc-300 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <BoxTechnologies key={index} nameTechnology={tech.technology} />
        ))}
      </div>
    </div>
  );
};

export default CardExperience;
