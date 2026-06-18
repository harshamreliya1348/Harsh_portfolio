import { FaFolderClosed } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import github_logo_icon from "../assets/logos/github_logo_icon.webp";
import html_logo_icon from "../assets/logos/html_logo_icon.png";
import css_logo from "../assets/logos/css_logo.jpeg";
import js_logo from "../assets/logos/js_logo.jpeg";
import react_logo from "../assets/logos/react_logo.jpeg";
import weather_icon from "../assets/logos/weather-icon.png";
import weather_page from "/src/assets/project_photos/weather_page.png";
import quize_page from "/src/assets/project_photos/quize_page.png";
import rock_page from "/src/assets/project_photos/rock_page.png";
import tic_page from "/src/assets/project_photos/tic_page.png";
import To_Do_page from "/src/assets/project_photos/To-Do_page.png";
import amazon_page from "/src/assets/project_photos/amazon_page.png";
import port_page from "/src/assets/project_photos/port_page.png";
import currency_page from "/src/assets/project_photos/currency_page.png";

const OtherProjects = (props) => {
  const projects = [
    {
      img_url: port_page,
      title: "Portfolio Website",
      description:
        "A modern developer portfolio built with React and Tailwind CSS featuring projects, skills, and contact information.",
      tech_icons: [js_logo, html_logo_icon, css_logo, react_logo],
      live_url:
        "https://6a33ecabec77fcb11056429a--willowy-crisp-04756a.netlify.app/",
      github_url: "https://github.com/harshamreliya1348/Harsh_portfolio",
    },
    {
      img_url: currency_page,
      title: "Currency Converter",
      description:
        "A real-time currency converter that allows users to quickly convert between different currencies using live exchange rates.",
      tech_icons: [js_logo, html_logo_icon, css_logo],
      live_url: "https://harshamreliya1348.github.io/Currency_Converter/",
      github_url: "https://github.com/harshamreliya1348/Currency_Converter",
    },
    {
      img_url: weather_page,
      title: "Weather App",
      description:
        "A weather application that provides real-time weather updates using a weather API with a clean and responsive UI.",
      tech_icons: [js_logo, html_logo_icon, css_logo, weather_icon],
      live_url: "https://harshamreliya1348.github.io/weather_cheaking/",
      github_url: "https://github.com/harshamreliya1348/weather_cheaking",
    },

    {
      img_url: To_Do_page,
      title: "Todo App",
      description:
        "A simple and responsive todo application with task management and local storage support.",
      tech_icons: [js_logo, html_logo_icon, css_logo],
      live_url: "https://harshamreliya1348.github.io/To-Do_list/",
      github_url: "https://github.com/harshamreliya1348/To-do_list",
    },

    {
      img_url: amazon_page,
      title: "Amazon_Demo",
      description:
        "A responsive Amazon-inspired landing page showcasing modern UI design, product sections, and smooth user experience.",
      tech_icons: [html_logo_icon, css_logo],
      live_url: "https://harshamreliya1348.github.io/amazon_demo/",
      github_url: "https://github.com/harshamreliya1348/amazon_demo",
    },

    {
      img_url: quize_page,
      title: "Question & Answer App",
      description:
        "An interactive Q&A application where users can view questions and answers in a clean and user-friendly interface.",
      tech_icons: [js_logo, html_logo_icon, css_logo],
      live_url: "https://harshamreliya1348.github.io/quize_app/",
      github_url: "https://github.com/harshamreliya1348/quize_app",
    },

    {
      img_url: rock_page,
      title: "Rock paper scissors",
      description:
        "An interactive Rock Paper Scissors game built with JavaScript featuring score tracking and dynamic gameplay.",
      tech_icons: [js_logo, html_logo_icon, css_logo],
      live_url: "https://harshamreliya1348.github.io/rock_paper_scissor/",
      github_url: "https://github.com/harshamreliya1348/rock_paper_scissor",
    },
    {
      img_url: tic_page,
      title: "Tic Tac Toe",
      description:
        "A classic Tic Tac Toe game with win detection, draw handling, and an intuitive user interface.",
      tech_icons: [js_logo, html_logo_icon, css_logo],
      live_url: "https://harshamreliya1348.github.io/tic_tac_toe/",
      github_url: "https://github.com/harshamreliya1348/tick_tac_toep",
    },
  ];
  return (
    <div className="">
      <h2 className="flex mt-5 gap-5  items-center font-bold text-xl">
        <FaFolderClosed className="text-blue-800" />
        Other Projects
      </h2>
      <div className="mt-5 flex flex-nowrap overflow-auto w-full gap-5 ">
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              className={`border-2 md:w-130 w-full flex shrink-0  flex-col gap-3 rounded-xl p-2 ${props.card_bg} ${props.borderColor}  `}
            >
              {/* card img section */}
              <div className="flex md:flex-row flex-col gap-3">
                <div className="md:w-1/2 md:h-full w-full">
                  <img
                    src={project.img_url}
                    className={`w-full md:h-3/4 object-cover border rounded-xl ${props.borderColor}`}
                  ></img>
                </div>
                {/* card content */}
                <div>
                  <h2 className="font-bold text-xl">{project.title}</h2>
                  <p
                    className={`text-sm md:w-55 w-full mt-2 leading-relaxed ${props.textColor}`}
                  >
                    {project.description}
                  </p>
                  <h2 className="mt-2 font-bold">Tech :</h2>
                  <div className="flex gap-3">
                    {project.tech_icons.map((tech_icon, idx) => {
                      return (
                        <img
                          key={idx}
                          src={tech_icon}
                          alt="img"
                          className="size-8 mt-2 ml-3"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex mt-4 gap-2">
                <a
                  href={project.live_url}
                  target="_blank"
                  id="btn"
                  className="flex md:w-1/3 justify-center w-full bg-cyan-400 font-bold text-black items-center gap-2"
                >
                  Live Demo
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github_url}
                  target="_blank"
                  id="btn"
                  className="flex md:w-1/4 w-full justify-center bg-black/50 text-white font-bold items-center gap-2"
                >
                  <img src={github_logo_icon} className="size-5"></img>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProjects;
