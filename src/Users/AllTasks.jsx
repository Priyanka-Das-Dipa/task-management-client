import { useLoaderData } from "react-router-dom";
import TaskCard from "./TaskCard";

const AllTasks = () => {
  const allData = useLoaderData();
  console.log(allData);
  return (
    <div>
      <h1 className="text-center font-bold text-blue-700 text-2xl my-10">All The Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        { allData?.map((data) => (
          <TaskCard key={data._id} data={data}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
