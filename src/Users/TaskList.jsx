/* eslint-disable react/prop-types */
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// {title.toLowerCase()}
const TaskList = ({ title, _id, tasks, handleDelete }) => {
  return (
    <>
      <Droppable droppableId={title.toLowerCase()} type="task">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="p-4 border rounded-md bg-gray-100"
          >
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            {tasks?.map((task, index) => (
              <Draggable key={task._id} draggableId={task._id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="p-2 mb-2 bg-white rounded-md"
                  >
                    <p className="font-semibold">{task.title}</p>
                    <p className="text-gray-600">{task.description}</p>
                    <div className="text-right ml-5">
                      <Link to={`/dashboard/update/${task._id}`}>
                        <button className="text-2xl">
                          <FaEdit />
                        </button>
                      </Link>
                      <button
                        className="text-2xl text-red-500"
                        onClick={() => handleDelete(_id)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};

export default TaskList;
