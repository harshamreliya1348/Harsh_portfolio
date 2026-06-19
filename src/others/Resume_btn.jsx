import { FaDownload } from "react-icons/fa";
const Resume_btn = (props) => {
  return (
    <a
      href="/Harsh_Amreliya_Resume_1Page.pdf"
      download="Harsh_Amreliya_Resume.pdf"
      className={`text-black bg-green-400 flex justify-center whitespace-nowrap gap-2 ${props.Shadow}`}
      id="btn"
    >
      Download resume
      <FaDownload />
    </a>
  );
};

export default Resume_btn;
