import {
  FaArrowAltCircleRight,
  FaCheck,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";
import emp_page from "/src/assets/project_photos/emp_page.png";
import react_logo from "../assets/logos/react_logo.jpeg";
import js_logo from "../assets/logos/js_logo.jpeg";
import html_logo_icon from "../assets/logos/html_logo_icon.png";
import tailwind_logo from "../assets/logos/tailwind_logo.jpeg";
import github_logo_icon from "../assets/logos/github_logo_icon.webp";
import { motion } from "framer-motion";

const Main_project = (props) => {
  return (
    //   Main project
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`w-full flex md:flex-row gap-8 flex-col rounded-xl  md:w-5/6 border p-5 ${props.borderColor} ${props.Shadow} ${props.card_bg}`}
    >
      <img
        src={emp_page}
        className={`md:w-1/2 w-full object-fill border md:h-75 h-50 rounded-xl ${props.borderColor}`}
      ></img>
      <div className="flex flex-col gap-2 md:w-1/2 w-full">
        <h2 className="flex w-50 gap-2 items-center  bg-blue-300/90 p-2 rounded-full font-bold text-blue-700">
          <FaStar />
          Featured Project
        </h2>
        <h1 className="font-bold text-2xl ">Employee Task Manager</h1>
        <h3 className="text-blue-700 font-bold">React Project</h3>
        <p className={`text-sm font-bold leading-relaxed ${props.textColor}`}>
          A task management application where employees can view assigned tasks
          and admins can manage work efficiently. Built using React
          components,state Management,and responsive UI design
        </p>
        <div className="text-md font-bold flex flex-col gap-0.5 ml-3">
          <h3 className="flex gap-3 items-center">
            <FaCheck className="bg-blue-500 p-0.5 rounded-full" />
            Employee Dashboard
          </h3>
          <h3 className="flex gap-3 items-center">
            <FaCheck className="bg-blue-500 p-0.5 rounded-full" />
            Task Assignment
          </h3>
          <h3 className="flex gap-3 items-center">
            <FaCheck className="bg-blue-500 p-0.5 rounded-full" />
            Task Status Tracking
          </h3>
          <h3 className="flex gap-3 items-center">
            <FaCheck className="bg-blue-500 p-0.5 rounded-full" />
            Responsive Design
          </h3>
          <h3 className="flex gap-3 items-center">
            <FaCheck className="bg-blue-500 p-0.5 rounded-full" />
            Clean UI
          </h3>
        </div>
        <div>
          <h2 className="font-bold ">Tech Stack :</h2>
          <div className="flex gap-3 ml-5 mt-3">
            <img
              src={react_logo}
              className="size-10 rounded text-transparent object-cover"
            ></img>
            <img src={js_logo} className="size-10 rounded "></img>
            <img src={html_logo_icon} className="size-10 rounded "></img>
            <img src={tailwind_logo} className="size-10 rounded"></img>
          </div>
        </div>
        <div className="flex md:flex-row flex-col mt-2 gap-5">
          <a
            href="https://employeetaskmanagment.netlify.app/"
            target="_blank"
            id="btn"
            className="flex md:w-1/3 justify-center w-full bg-cyan-400 font-bold text-black items-center gap-2"
          >
            Live Demo
            <FaExternalLinkAlt />
          </a>
          <a
            href="https://github.com/harshamreliya1348/employee-task-manager"
            target="_blank"
            id="btn"
            className="flex md:w-1/2 w-full justify-center bg-black/50 text-white font-bold items-center gap-2"
          >
            <img src={github_logo_icon} className="size-5"></img>
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Main_project;
