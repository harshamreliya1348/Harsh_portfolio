import { FaUser, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import Resume_btn from "../others/Resume_btn";
import { motion } from "framer-motion";
const About_content = (props) => {
  return (
    <motion.div
      className="md:w-2/3 w-full "
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="w-full md:px-15 px-10 py-7 ">
        <div>
          <h1 className="text-5xl md:mt-4 mt-10 font-extrabold whitespace-nowrap ">
            <span className="border-b-3 border-blue-800">A</span>bout
            <span className="text-blue-800"> Me</span>
          </h1>
        </div>
        <div className="leading-relaxed font-bold  mt-10">
          <p>
            I'm a BCA student passionate about building clean, responsive and
            user-friendly web application. I enjoy turnig ideas into real
            application using Reaact, JavaScript and modern UI libraries.
          </p>
        </div>
        <div className="mt-11">
          <div className="flex gap-2 flex-wrap mt-3">
            <FaUser className="text-blue-800 text-xl" />
            <h2 className="font-bold">Name : </h2>
            <div>
              <h2>Harsh Amreliya</h2>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap mt-3">
            <MdLocationOn className="text-blue-800 text-xl" />
            <h2 className="font-bold">Location : </h2>
            <div>
              <h2>Bhavnagar,Gujarat</h2>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap mt-3">
            <FaEnvelope className="text-blue-800 text-xl" />
            <h2 className="font-bold">Email : </h2>
            <div>
              <h2>amreliyaharsh1348@gmail.com</h2>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap mt-3">
            <FaBriefcase className="text-blue-800 text-xl" />
            <h2 className="font-bold">Experience : </h2>
            <div>
              <h2>Fresher</h2>
            </div>
          </div>
        </div>
        <div className=" mt-11">
          <Resume_btn Shadow={props.Shadow} />
        </div>
      </div>
    </motion.div>
  );
};

export default About_content;
