import About_content from "../components/About_content";
import RightContent from "../components/RightContent";

const About = (props) => {
  return (
    <div className="md:h-full overflow-hidden mt-5 mb-5 md:py-10 md:px-8 relative w-full flex flex-col-reverse md:flex-row">
      <About_content Shadow={props.Shadow} />
      <RightContent />
    </div>
  );
};

export default About;
