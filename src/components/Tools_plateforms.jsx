import { FaToolbox } from "react-icons/fa6";
import git_logo from "../assets/logos/git_logo.jpeg";
import github_logo_icon from "../assets/logos/github_logo_icon.webp";
import { motion } from "framer-motion";

const Tools_plateforms = (props) => {
  const tools = [
    {
      logo: git_logo,
      name: "Git",
      discription:
        "I use Git for version control to manage my code,track changes,and work efficiently on projects.",
      color: "bg-orange-600",
    },
    {
      logo: github_logo_icon,
      name: "GitHUb",
      discription:
        "I use GitHub to store my projeccts in the cloud,collaborate with others,and showcase my work.",
      color: "bg-purple-500",
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-4 mt-5 ml-2 ">
        <FaToolbox className="h-6 w-6 border p-0.5 font-bold bg-purple-300 text-purple-600 rounded-full" />
        <h2 className="font-bold text-purple-500">TOOLS & PLATEFORMS</h2>
        <div className="flex flex-1 justify-end items-end h-0.5 shadow-2xl bg-purple-400/50 "></div>
      </div>

      <motion.div
        className="flex gap-15 flex-wrap mt-5  justify-center mb-5"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {tools.map((tool, idx) => {
          return (
            <div
              id="card"
              key={idx}
              className={`border rounded w-95 p-5 ${props.borderColor} ${props.Shadow}`}
            >
              <div className="flex">
                <img
                  src={tool.logo}
                  alt="img"
                  className="h-20 object-cover w-20 p-2 mt-1 rounded-full flex justify-center items-center"
                ></img>
                <div className="ml-2 flex flex-col gap-5 justify-between">
                  <h2 className="font-bold">{tool.name}</h2>
                  <p className="whitespace-wrap">{tool.discription}</p>
                  <div className={`mt-5 h-0.5 w-20 ${tool.color}`}></div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Tools_plateforms;
