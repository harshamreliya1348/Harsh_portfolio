import { TypeAnimation } from "react-type-animation";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import github_logo_icon from "../assets/logos/github_logo_icon.webp";
import linkedin_logo from "../assets/logos/linkedin_logo.avif";
import insta_logo from "../assets/logos/insta_logo.webp";
import Contact_form from "../components/Contact_form";
import { useInView } from "react-intersection-observer";

const Contect = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const textColor = props.dark ? "text-white/90" : "text-gray-600";
  const h1Color = props.dark
    ? " bg-linear-to-tl from-cyan-400 to-blue-500 "
    : "bg-linear-to-tl from-cyan-800 to-blue-600  ";
  const ContectInformation = [
    {
      icon: FaEnvelope,
      title: "Email",
      detail: "amreliyaharsh1348@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      detail: "+91 87800 85542",
    },
    {
      icon: MdLocationOn,
      title: "Location",
      detail: "Bhavnagar ,Gujarat",
    },
  ];
  const OnlinePlateform = [
    {
      icon: github_logo_icon,
      title: "GitHub",
      detail: "https://github.com/harshamreliya1348",
    },
    {
      icon: linkedin_logo,
      title: "Linkedin",
      detail: "https://www.linkedin.com/in/harsh-amreliya-068475405/",
    },
    // {
    //   icon: insta_logo,
    //   title: "Instagram",
    //   detail: "https://Instagram.com",
    // },
  ];
  return (
    <div className="h-full md:px-15 py-10 px-5 cursor-default">
      <div className="flex flex-col gap-4">
        <h2 className="font-extrabold text-4xl">
          <span className="border-b-3 border-blue-800">C</span>ONTACT
          <span className="text-blue-800"> ME</span>
        </h2>
        <div ref={ref}>
          {inView && (
            <TypeAnimation
              sequence={["Let's Work Together", 5000]}
              wrapper="h1"
              speed={50}
              cursor={true}
              repeat={0}
              className={`text-3xl mt-2 font-bold bg-clip-text text-transparent whitespace-nowrap ${h1Color}`}
            ></TypeAnimation>
          )}
        </div>
        <p
          className={`font-bold text-sm leading-relaxed mt-5 md:w-[77%] w-[89%] ${textColor} `}
        >
          I'm currently looking for a Frontend Developer intership to gain
          real-world experience ,improve my skills and contribute to meaningful
          projects.Feel free to reach out if you have an opportunity or would
          like to collaborate.
        </p>
      </div>
      <div className="flex justify-center md:gap-20 gap-10 w-full flex-wrap">
        <div
          className={`flex flex-col justify-center  bg-transparent w-full md:w-1/3 mt-15 px-6 md:px-8 py-10 gap-4 border rounded ${props.borderColor}  ${props.Shadow}`}
        >
          <h2 className="font-extrabold text-2xl mb-2">Contact Information</h2>
          {ContectInformation.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div
                key={idx}
                className={`flex gap-4 items-center border rounded-xl p-5 ${props.borderColor}`}
              >
                <div className="h-full">
                  <Icon
                    className={`bg-violet-500/20 text-purple-600 h-8 w-8 p-1 rounded-full ${info.title == "Phone" ? "rotate-90" : "rotate-none"}`}
                  />
                </div>
                <div className="flex flex-col gap-1 ml-2">
                  <h2 className="font-bold">{info.title}</h2>
                  <a
                    href={
                      info.title == "Email"
                        ? "mailto:harshamreliya1348@gmail.com"
                        : info.title == "Phone"
                          ? "tel:+918780085542"
                          : "https://www.google.com/maps/place/Bhavnagar,+Gujarat/@21.7654284,72.0799206,12z/data=!3m1!4b1!4m6!3m5!1s0x395f5081abb84e2f:0xf676d64c6e13716c!8m2!3d21.7644725!4d72.1519304!16zL20vMDRwbHky?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
                    }
                  >
                    {info.detail}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`flex flex-col justify-center  bg-transparent w-full md:w-1/2 mt-15 px-8 py-10 gap-4 border rounded ${props.borderColor}  ${props.Shadow}`}
        >
          <h2 className="font-extrabold text-2xl mb-2">Find me online</h2>
          {OnlinePlateform.map((plateform, idx) => {
            return (
              <div
                key={idx}
                className={`flex gap-4 items-center border rounded-xl p-5 ${props.borderColor}`}
              >
                <img src={plateform.icon} className=" h-8 w-8 rounded-full " />
                <div className="flex flex-col gap-1 ml-2">
                  <h2 className="">{plateform.title}</h2>
                  <a href={plateform.detail}>{plateform.detail}</a>
                </div>
              </div>
            );
          })}
        </div>
        <Contact_form
          textColor={textColor}
          borderColor={props.borderColor}
          Shadow={props.Shadow}
        />
      </div>
    </div>
  );
};

export default Contect;
