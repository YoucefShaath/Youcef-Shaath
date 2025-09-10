import Skill from "./Skill";
import SkillsData from "./SkillsData.json";

let skills = SkillsData.Skills.map((skill, index) => {
  return (
    <Skill
      key={skill.name}
      link={skill.icon}
      name={skill.name}
      level={skill.level}
      description={skill.description}
      index={index}
    />
  );
});

export default function Skills() {
  return (
    <div
      className="flex flex-col bg-[#F9F7F7] text-black p-8 shadow-lg shadow-[#124170]/35 w-[90%] rounded-3xl mb-10 ml-[5%] scroll-mt-20"
      id="skills"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-700">My Skills</h2>
      <ul className="flex flex-wrap justify-around gap-8">{skills}</ul>
    </div>
  );
}
