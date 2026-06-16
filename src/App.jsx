import { Route, Routes } from "react-router";
import Navbaar from "./components/Navbaar";
import Home from "./Pages.jsx/Home";
import About from "./Pages.jsx/About";
import Contect from "./Pages.jsx/Contect";
import Projects from "./Pages.jsx/Projects";
import Skills from "./Pages.jsx/Skills";
import { useEffect, useState } from "react";

export const App = () => {
  useEffect(() => {
    const savedMode = localStorage.getItem("mode");

    if (savedMode) {
      const parsed = JSON.parse(savedMode);
      setMode(parsed);

      if (parsed.background === "bg-slate-950") {
        setDark(false);
      } else {
        setDark(true);
      }
    }
  }, []);
  const [dark, setDark] = useState(true);
  const darkMode = {
    background: "bg-slate-950",
    textColor: "text-white",
  };
  const lightMode = {
    background: "bg-[#e3feff]",
    textColor: "text-black",
  };

  const [mode, setMode] = useState(lightMode);

  const changeMode = () => {
    if (dark) {
      setMode(darkMode);
      setDark(false);
      localStorage.setItem("mode", JSON.stringify(darkMode));
    } else {
      setMode(lightMode);
      setDark(true);
      localStorage.setItem("mode", JSON.stringify(lightMode));
    }
  };
  const borderColor = !dark ? "border-gray-700" : "border-gray-200";

  const Shadow = !dark
    ? "shadow-md shadow-gray-400/50"
    : "shadow-[0_8px_25px_rgba(0,0,0,0.15)]";

  return (
    <div
      className={` h-screen overflow-auto ${mode.background} ${mode.textColor}`}
    >
      <Navbaar changeMode={changeMode} dark={dark} Shadow={Shadow} />

      <section id="home">
        <Home Shadow={Shadow} dark={!dark} borderColor={borderColor} />
      </section>
      <section id="skill">
        <Skills Shadow={Shadow} dark={!dark} borderColor={borderColor} />
      </section>
      <section id="project">
        <Projects Shadow={Shadow} dark={!dark} borderColor={borderColor} />
      </section>
      <section id="about">
        <About Shadow={Shadow} dark={!dark} borderColor={borderColor} />
      </section>
      <section id="contect">
        <Contect Shadow={Shadow} dark={!dark} borderColor={borderColor} />
      </section>
      {/* <Routes>
        <Route path="/" element={<Home Shadow={Shadow} dark={!dark} />}></Route>
        <Route path="/about" element={<About Shadow={Shadow} />}></Route>
        <Route
          path="/contect"
          element={
            <Contect Shadow={Shadow} dark={!dark} borderColor={borderColor} />
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <Projects Shadow={Shadow} dark={!dark} borderColor={borderColor} />
          }
        ></Route>
        <Route
          path="/skills"
          element={
            <Skills dark={!dark} Shadow={Shadow} borderColor={borderColor} />
          }
        ></Route>
      </Routes> */}
    </div>
  );
};

export default App;
