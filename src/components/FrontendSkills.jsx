import { FaCode } from "react-icons/fa";
import html_logo_icon from "../assets/logos/html_logo_icon.png";
import css_logo from "../assets/logos/css_logo.jpeg";
import js_logo from "../assets/logos/js_logo.jpeg";
import git_logo from "../assets/logos/git_logo.jpeg";
import github_logo_icon from "../assets/logos/github_logo_icon.webp";
import react_logo from "../assets/logos/react_logo.jpeg";
import tailwind_logo from "../assets/logos/tailwind_logo.jpeg";

const FrontendSkills = (props) => {
  const frontendSkills = [
    {
      name: "HTML",
      icon: html_logo_icon,
      description: "Structuring the web with semantic and accessible HTML.",
      color: "bg-orange-500",
    },
    {
      name: "CSS",
      icon: css_logo,
      description: "Creating responsive and modern user interfaces.",
      color: " bg-blue-500",
    },
    {
      name: "JavaScript",
      icon: js_logo,
      description: "Adding interactivity and dynamic behavior.",
      color: "bg-yellow-500",
    },
    {
      name: "React",
      icon: react_logo,
      description: "Building reusable and scalable UI components.",
      color: "bg-cyan-600",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind_logo,
      description: "Utility-first CSS framework for rapid UI development.",
      color: "bg-sky-400",
    },
    {
      name: "Git",
      icon: git_logo,
      description: "Version control and source code management.",
      color: "bg-pink-500",
    },
    {
      name: "GitHub",
      icon: github_logo_icon,
      description: "Hosting repositories and collaborating on projects.",
      color: "bg-purple-500",
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-4 mt-5 ml-2 ">
        <FaCode className="h-5 w-5 border p-0.5 font-bold bg-purple-300 text-purple-600 rounded-full" />
        <h2 className="font-bold text-purple-500">FRONTEND SKILLS</h2>
        <div className="flex flex-1 justify-end items-end h-0.5 shadow-2xl bg-purple-400/50 "></div>
      </div>
      <div
        id="skill"
        className="flex  gap-5 lg:justify-center ml-2 md:ml-0 md:justify-start mt-5 flex-nowrap overflow-auto "
      >
        {frontendSkills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div
              key={idx}
              id="card"
              className={`h-75  w-37 border rounded flex flex-col justify-between items-center  p-2 shrink-0 ${props.borderColor} ${props.Shadow}`}
            >
              <img
                src={Icon}
                alt="img"
                className="size-20 object-cover w-20 p-2 mt-1 rounded-[20px] flex justify-center items-center"
              ></img>
              <h2 className="font-extrabold mt-5 ">{skill.name}</h2>
              <p className="leading-relaxed mt-7">{skill.description}</p>
              <div className={`mt-5 h-0.5 w-full ${skill.color}`}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrontendSkills;
