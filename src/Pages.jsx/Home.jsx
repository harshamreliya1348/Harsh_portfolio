import Leftcontent from "../components/Leftcontent";
import RightContent from "../components/RightContent";

const Home = (props) => {
  return (
    <div className="md:h-full overflow-hidden md:py-10 md:px-8 relative w-full flex flex-col-reverse md:flex-row">
      <Leftcontent Shadow={props.Shadow} dark={props.dark} />
      {/* bg-[#e3feff] */}
      <RightContent />
    </div>
  );
};

export default Home;
