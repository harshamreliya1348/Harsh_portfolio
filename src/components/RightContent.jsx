import profileImg from "../assets/ChatGPT Image Jun 5, 2026, 12_06_04 PM.png";
const RightContent = () => {
  return (
    <div className="lg:w-2/3  flex justify-start items-end">
      <img
        src={profileImg}
        className=" md:absolute lg:right-20 md:right-0 bottom-0 md:border-none border border-cyan-200 md:rounded-none rounded-full h-full  md:bg-transparent md:backdrop-blur-none backdrop-blur-lg md:shadow-none shadow-[0_0_25px_rgba(34,211,238,0.3)] md:object-contain z-10 md:mt-0 mt-10   "
        alt="Harsh"
      />
    </div>
  );
};

export default RightContent;
