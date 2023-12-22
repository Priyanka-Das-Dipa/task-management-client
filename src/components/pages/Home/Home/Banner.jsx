import banner from "../../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <section className="max-h-screen mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center ">
        <div className="text-left px-10">
          <h1 className="text-2xl font-bold">Task Management</h1>
          <p className="text-lg font-medium">
            Task management involves organizing and prioritizing activities to
            achieve specific goals efficiently. It includes creating a
            comprehensive list of tasks, assigning priorities, setting
            deadlines, and monitoring progress. Effective task management
            ensures that resources are utilized optimally and helps individuals
            or teams stay focused on their objectives.{" "}
          </p>
        </div>
        <div>
          <img src={banner} alt="" className="mb-10" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
