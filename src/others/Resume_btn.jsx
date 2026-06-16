import { FaDownload } from "react-icons/fa";
const Resume_btn = (props) => {
  return (
    <a
      href="/Harsh_Amreliya_Resume (1).pdf"
      download="Harsh_Amreliya_Resume.pdf"
      className={` text-black bg-green-400 md:w-45 w-44 flex gap-2 ${props.Shadow}`}
      id="btn"
    >
      Download resume
      <FaDownload />
    </a>
  );
};

export default Resume_btn;
