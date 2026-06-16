import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import PlateForms from "../others/PlateForms";
import { Link } from "react-router";
const Leftcontent = (props) => {
  const h1Color = props.dark
    ? " bg-linear-to-tl from-cyan-400 to-blue-500 "
    : "bg-linear-to-tl from-cyan-800 to-blue-600  ";

  return (
    <div className="z-20 w-full md:w-1/2 flex flex-col  gap-5 py-15 md:py-9 md:px-15 px-6 ">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/80 backdrop-blur-md border border-green-300 shadow-[0_0_20px_rgba(34,197,94,0.25)]hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>

        <span className="font-medium text-green-800">
          Available for Internship
        </span>

        <span className="text-yellow-500 animate-bounce">✨</span>
      </div>
      <div className="cursor-default">
        <h1 className="text-2xl font-bold md:whitespace-nowrap">Hi, I'm</h1>
        <h1 className="text-5xl mt-4 font-extrabold md:whitespace-nowrap">
          Harsh <span className="text-blue-800">Amreliya</span>
        </h1>
        <h2
          className={`font-bold mt-4 leading-tight text-xl md:whitespace-nowrap text-transparent bg-clip-text ${h1Color}`}
        >
          Frontend Developer
        </h2>
      </div>
      <div className="cursor-default h-10">
        <TypeAnimation
          sequence={[
            "I build responsive and user-friendly web applications using React, JavaScript, and modern web technologies.",
            5000,
          ]}
          wrapper="p"
          speed={70}
          cursor={true}
          repeat={0}
          className="leading-tight font-bold"
        />
      </div>
      <div className="flex  gap-5 mt-5  md:gap-20 md:mt-2 lg:mt-9.5">
        <Link
          to="/projects"
          id="btn"
          className={`bg-cyan-800 flex gap-3 justify-center items-center text-white font-bold whitespace-nowrap ${props.Shadow}`}
        >
          View Projects
          <FaArrowRight />
        </Link>
        <Link
          to="/contect"
          id="btn"
          className={`font-bold bg-red-500 flex gap-3 justify-center items-center text-white whitespace-nowrap ${props.Shadow} `}
        >
          Contect me
          <FaPhone className="rotate-90" />
        </Link>
      </div>
      <PlateForms />
    </div>
  );
};

export default Leftcontent;
