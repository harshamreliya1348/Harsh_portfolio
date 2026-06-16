import Main_project from "../components/Main_project";
import OtherProjects from "../components/OtherProjects";

const Projects = (props) => {
  const textColor = props.dark ? "text-white/90" : "text-gray-600";
  const card_bg = props.dark ? "bg-gray-100/10" : "bg-cyan-200/10";
  const h1Color = props.dark
    ? " bg-linear-to-tl from-cyan-400 to-blue-500 "
    : "bg-linear-to-tl from-cyan-800 to-blue-600  ";

  return (
    <div className="h-full md:px-15 py-4 px-3 cursor-default">
      <div className="w-full md:px-15 px-5">
        <div>
          <h1 className="text-5xl md:mt-4 mt-5 font-extrabold whitespace-nowrap ">
            <span className="border-b-3 border-blue-800 ">M</span>
            <span className="">y</span>
            <span className="text-blue-800"> Projects</span>
          </h1>
          <h2
            className={`text-3xl  mt-8 font-bold whitespace-nowrap text-transparent bg-clip-text ${h1Color}`}
          >
            Projects I've Built
          </h2>
        </div>

        <div
          className={`leading-relaxed font-bold  mt-6 w-full md:w-1/2 ${textColor}`}
        >
          <p>
            Here are some projects I have created while learning frontend
            devlopment.These projects helped me strengthen my
            React,JavaScript,HTML,CSS,and problem-solving skills.
          </p>
        </div>
      </div>
      {/* projects */}
      <div className="mt-5 md:px-10 flex flex-col">
        <div className="w-full flex justify-center">
          <Main_project
            borderColor={props.borderColor}
            Shadow={props.Shadow}
            textColor={textColor}
            card_bg={card_bg}
          />
        </div>
        <OtherProjects
          borderColor={props.borderColor}
          Shadow={props.Shadow}
          textColor={textColor}
          card_bg={card_bg}
        />
      </div>
    </div>
  );
};

export default Projects;
