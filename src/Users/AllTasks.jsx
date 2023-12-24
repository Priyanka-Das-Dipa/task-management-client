// import { useLoaderData } from "react-router-dom";
// import TaskCard from "./TaskCard";
import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "./TaskList";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllTasks = () => {
  // const allData = useLoaderData();
  const [tasks, setTasks] = useState([]);
  // console.log(allData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/createTask");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, [setTasks]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const taskId = result.draggableId;
    const destinationListId = result.destination.droppableId;

    const updatedTasks = tasks.map((task) => {
      if (task._id === taskId) {
        return { ...task, status: destinationListId };
      }
      return task;
    });

    setTasks(updatedTasks);
  };
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/createTask/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // eslint-disable-next-line react/prop-types
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  // onDragEnd={onDragEnd}
  // () => {console.log("drag and drop event occurred");}onDragEnd={onDragEnd}
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 mt-8 gap-10">
        <TaskList
          title="ToDo"
          tasks={tasks.filter((task) => task.status === "todo")}
          handleDelete={handleDelete}
        />
        <TaskList
          title="Ongoing"
          tasks={tasks.filter((task) => task.status === "ongoing")}
          handleDelete={handleDelete}
        />
        <TaskList
          title="Completed"
          tasks={tasks.filter((task) => task.status === "completed")}
          handleDelete={handleDelete}
        />
      </div>
    </DragDropContext>
  );
};

export default AllTasks;
