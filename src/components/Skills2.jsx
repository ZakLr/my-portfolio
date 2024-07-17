

import React, { useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaJava,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai"; // Placeholder for technologies without a direct match
import DotsEffect from "./DotsEffect";

// Map of icon components
const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaJava,
  FaDocker,
  FaLinux,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiPytorch,
  AiOutlineAntDesign, // Placeholder
};

// Data array with icon names as strings
const skillsData = [
  { name: "HTML", iconName: "FaHtml5", category: "frontend" },
  { name: "CSS", iconName: "FaCss3Alt", category: "frontend" },
  { name: "JavaScript", iconName: "FaJsSquare", category: "frontend" },
  { name: "React.js", iconName: "FaReact", category: "frontend" },
  { name: "Next.js", iconName: "SiNextdotjs", category: "frontend" },
  { name: "Tailwind CSS", iconName: "SiTailwindcss", category: "frontend" },
  { name: "Framer Motion", iconName: "AiOutlineAntDesign", category: "frontend" }, // Placeholder
  { name: "Node.js", iconName: "FaNodeJs", category: "backend" },
  { name: "Express.js", iconName: "SiExpress", category: "backend" },
  { name: "Nest.js", iconName: "SiNestjs", category: "backend" },
  { name: "PostgreSQL", iconName: "SiPostgresql", category: "backend" },
  { name: "MongoDB", iconName: "SiMongodb", category: "backend" },
  { name: "Firebase", iconName: "SiFirebase", category: "backend" },
  { name: "Prisma", iconName: "SiPrisma", category: "backend" },
  { name: "Python", iconName: "FaPython", category: "machineLearning" },
  { name: "NumPy", iconName: "SiNumpy", category: "machineLearning" },
  { name: "Pandas", iconName: "SiPandas", category: "machineLearning" },
  { name: "Scikit-learn", iconName: "AiOutlineAntDesign", category: "machineLearning" }, // Placeholder
  { name: "TensorFlow", iconName: "SiTensorflow", category: "machineLearning" },
  { name: "Keras", iconName: "AiOutlineAntDesign", category: "machineLearning" }, // Placeholder
  { name: "PyTorch", iconName: "SiPytorch", category: "machineLearning" },
  { name: "Git", iconName: "FaGitAlt", category: "other" },
  { name: "CI/CD", iconName: "AiOutlineAntDesign", category: "other" }, // Placeholder
  { name: "Java", iconName: "FaJava", category: "other" },
  { name: "Docker", iconName: "FaDocker", category: "other" },
  { name: "Linux", iconName: "FaLinux", category: "other" },
];

// Helper function to get icon component
const getIconComponent = (iconName) => {
  const IconComponent = iconMap[iconName] || AiOutlineAntDesign;
  return <IconComponent />;
};

const Skills2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const filteredSkills = skillsData.filter(
    (skill) => skill.category === selectedCategory
  );
  const ref = useRef(null);

  return (
    <section
      id="skills"
      className="flex h-max min-h-[100vh] w-full items-center justify-center bg-background-primary text-text-primary relative "
    >
      <div className="container mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
        <h2  className="mt-4 inline pb-8 text-4xl font-bold text-text-primary lg:text-6xl">
          Skills
        </h2>
        <div className="mb-4 flex justify-center px-5" ref={ ref}>
          <button

            className={`mr-4 rounded-md text-md lg:text-xl px-4 py-2 text-text-primary hover:bg-highlight focus:ring-2 focus:ring-background-primary focus:ring-offset-2 ${
              selectedCategory === "frontend" ? "bg-highlight" : ""
            }`}
            onClick={() => {
              setSelectedCategory("frontend");
              //scroll into ref.current
              ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Frontend
          </button>
          <button

            className={`mr-4 rounded-md text-md lg:text-xl px-4 py-2 text-text-primary hover:bg-highlight focus:ring-2 focus:ring-background-primary focus:ring-offset-2 ${
              selectedCategory === "backend" ? "bg-highlight" : ""
            }`}
            onClick={() => {
              setSelectedCategory("backend");
              //scroll into ref.current
              ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Backend
          </button>
          <button

            className={`mr-1 rounded-md text-md lg:text-xl px-4 py-2 text-text-primary hover:bg-highlight focus:ring-2 focus:ring-background-primary focus:ring-offset-2 ${
              selectedCategory === "machineLearning" ? "bg-highlight" : ""
            }`}
            onClick={() => {
              setSelectedCategory("machineLearning");
              //scroll into ref.current
              ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Machine Learning
          </button>
          <button

            className={`rounded-md text-md lg:text-xl px-4 py-2 text-text-primary hover:bg-highlight focus:ring-2 focus:ring-background-primary focus:ring-offset-2 ${
              selectedCategory === "other" ? "bg-highlight" : ""
            }`}
            onClick={() => {
              setSelectedCategory("other");
              //scroll into ref.current
              ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Other
          </button>
        </div>
        <div className="mt-9 flex flex-wrap items-center justify-center">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="m-6 flex h-[9rem] w-[9rem] flex-col items-center justify-center rounded-lg border-2 border-text-primary bg-primary p-4 text-center text-text duration-500 hover:scale-[1.1] hover:shadow-[0_0_10px_0_highlight] 2sm:mx-[1rem] sm:mx-[2rem] xl:h-[9.5rem] xl:w-[9.5rem]"
            >
              <div className="mx-auto text-highlight mt-2 h-[5rem] w-[5rem] xl:h-[5.5rem] xl:w-[5.5rem] text-[5rem] xl:text-[5.5rem]">
                {getIconComponent(skill.iconName)}
              </div>
              <p className="mt-2 text-lg text-text-primary">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <DotsEffect bottom={2} right={0} opacity={0.4} rows={4} columns={4}/>
      <DotsEffect top={-1} left={0} opacity={0.4} rows={4} columns={4}/>
    </section>
  );
};

export default Skills2;
