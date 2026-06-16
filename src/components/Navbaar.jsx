import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import Resume_btn from "../others/Resume_btn";
//
import { motion } from "framer-motion";

const Navbaar = (props) => {
  // const location = useLocation();
  const bg_color = props.dark ? "bg-cyan-500/10" : "bg-cyan-100/20";
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "Home", path: "#home" },
    { name: "Skills", path: "#skill" },
    { name: "Projects", path: "#project" },
    { name: "About", path: "#about" },
    { name: "Contect", path: "#contect" },
  ];
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`z-50 relative  w-full flex justify-between px-5 py-3  border  rounded-xl font-bold inset-0 backdrop-blur-xl border-b  border-cyan-200/50 ${bg_color}`}
    >
      <div>
        <h2
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="w-11 h-11 rounded-full bg-linear-to-br from-cyan-300 to-blue-500 flex items-center justify-center text-white font-extrabold shadow-[0_0_20px_rgba(34,211,238,0.4)] cursor-default"
        >
          HA
        </h2>
      </div>
      <div className="md:flex hidden w-2/4 justify-between p-1">
        {links.map((link) => (
          <a
            href={link.path}
            key={link.name}
            onClick={() => scrollToSection(link.path.slice(1))}
            className="cursor-pointer pb-1 hover:text-cyan-500 transition"
          >
            {link.name}
          </a>
        ))}
        {/* {links.map((link) => {
          return (
            <a
              onClick={() => scrollToSection(link.path.slice)}
              href={link.path}
              key={link.name}
              onClick={() => {}}
              className={`cursor-pointer pb-1
                ${location.pathname == link.path ? "border-b-2  border-cyan-500 bg-linear-to-br from-cyan-700 to-blue-800 bg-clip-text text-transparent " : "border-b-2 border-transparent"}`}
            >
              {link.name}
            </a>
          );
        })} */}
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-full  bg-gray-400/60 shadow-lg left-0 w-full  font-bold flex flex-col z-20">
          {links.map((link) => (
            <a
              href={link.path}
              key={link.name}
              className="p-4 border-b border-gray-400"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
      <div className="p-1 flex  gap-10 justify-center items-center">
        <button
          onClick={() => {
            props.changeMode();
          }}
        >
          {props.dark ? (
            <FaSun className="text-yellow-400 text-3xl cursor-pointer active:scale-95 transition-transform" />
          ) : (
            <FaMoon className="text-white text-3xl cursor-pointer active:scale-95   transition-transform" />
          )}
        </button>
        <Resume_btn Shadow={props.Shadow} />
      </div>
    </motion.nav>
  );
};

export default Navbaar;
