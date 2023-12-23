// import { DragDropContext } from "react-beautiful-dnd";
// import TaskList from "./TaskList";


const Taskboard = () => {
    return (
        <div>
            {/* <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 mt-8 gap-10">
        <TaskList
          title="ToDo"
          tasks={tasks.filter((task) => task.status === "todo")}
          handletaskDelete={handletaskDelete}
        />
        <TaskList
          title="Ongoing"
          tasks={tasks.filter((task) => task.status === "ongoing")}
          handletaskDelete={handletaskDelete}
        />
        <TaskList
          title="Completed"
          tasks={tasks.filter((task) => task.status === "completed")}
          handletaskDelete={handletaskDelete}
        />
      </div>
    </DragDropContext> */}
        </div>
    );
};

export default Taskboard;