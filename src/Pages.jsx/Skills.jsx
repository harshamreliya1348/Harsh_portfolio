import FrontendSkills from "../components/FrontendSkills";
import { TypeAnimation } from "react-type-animation";
import Tools_plateforms from "../components/Tools_plateforms";
import { FaAward } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

const Skills = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className="md:px-15 mt-10 cursor-defaults ">
      <h2 className="md:ml-2 text-5xl md:p-0 p-3 md:mt-4 mt-10 font-extrabold whitespace-nowrap">
        <span className="border-b-3 border-blue-800">M</span>
        <span className="">y</span>
        <span className="text-blue-800">Skills</span>
      </h2>
      <h1 className="text-2xl font-bold p-3 ml-2 md:p-2 mt-4 md:mt-10 border w-40 border-gray-300 shadow-xl rounded-xl whitespace-nowrap">
        Skills I Have
      </h1>

      <div
        ref={ref}
        className="md:w-95 w-88 h-20 cursor-default ml-4 md:ml-2 mt-5 md:mt-8font-semibold"
      >
        {inView && (
          <TypeAnimation
            sequence={[
              "As a frontend devloper fresher,I have learned the fundamentals and built projects using the following technologies and tools.",
              5000,
            ]}
            wrapper="p"
            speed={70}
            cursor={true}
            repeat={0}
            className=" leading-relaxed  font-bold"
          />
        )}
      </div>
      <FrontendSkills
        dark={props.dark}
        Shadow={props.Shadow}
        borderColor={props.borderColor}
      />
      <Tools_plateforms
        dark={props.dark}
        Shadow={props.Shadow}
        borderColor={props.borderColor}
      />
      <div className="w-full px-5 md:px-10 mb-15 text-black">
        <div className="flex justify-between items-center mt-10 p-4 bg-[#f1e1ff] border border-[#e7dfff] shadow-2xl rounded-lg">
          <div className="flex">
            <MdWorkspacePremium className="md:size-15 size-25 text-purple-600 " />
            <div className="ml-4">
              <h2 className="font-bold">Always Learning</h2>
              <p className="leading-tight  text-sm md:text-[15px] md:leading-relaxed w-[80%] whitespace-wrap mt-3">
                I'm continuously learning new technologies and improving my
                skills to build better,user-friendly web experiences.
              </p>
            </div>
          </div>
          <HiSparkles className="md:size-15 size-25 text-purple-600 " />
        </div>
      </div>
    </div>
  );
};

export default Skills;
