import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const PlateForms = () => {
  return (
    <div className="flex mt-4 gap-5 text-3xl ">
      <a
        href="https://github.com/harshamreliya1348"
        target="_blank"
        id="btn"
        className="border bg-pink-200 text-black/90 border-gray-400 rounded-full p-2 cursor-pointer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/harsh-amreliya-068475405/"
        id="btn"
        className="border bg-pink-200 border-gray-400 text-black/90 rounded-full p-2 cursor-pointer"
      >
        <FaLinkedin />
      </a>
      {/* 
      <a
        id="btn"
        className="border bg-pink-200 border-gray-400 text-black/90 rounded-full p-2 cursor-pointer"
      >
        <FaInstagram />
      </a> */}
    </div>
  );
};

export default PlateForms;
