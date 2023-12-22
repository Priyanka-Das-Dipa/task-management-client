import about from "../../../../assets/images/about.jpeg";
const About = () => {

  return (
    <>
      <div id="about mb-10">
        <h2 className="text-4xl font-bold text-center">ABOUT US</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="h-[580px]">
            <img src={about} alt="" />
          </div>
          <div className="space-y-4 px-5">
            <h2 className="text-4xl font-bold">
              We Provide Best Services <br />
              <span className="text-blue-500">To Access Our Dashboard</span>
            </h2>
            <p className="">
              Welcome to
              <span className="text-blue-500 font-bold">
                {" "}
                Task Management System
              </span>{" "}
              where efficiency meets simplicity. Our mission is to empower
              individuals and teams to seamlessly organize, prioritize, and
              accomplish tasks with ease. From user-friendly interfaces to
              powerful integrations, we provide a comprehensive solution for
              managing tasks effortlessly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
