import { IoCreate } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const TaskCard = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, title, description, date, select } = data;

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
        fetch(`https://task-management-server-teal-theta.vercel.app/${_id}`, {
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

  return (
    <div>
      <div className="card w-96 text-black border border-2xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>{date}</p>
          <p>{select}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(_id)}
              className="btn-sm text-2xl text-red-600"
            >
              <MdDelete />
            </button>

            <Link to={`/dashboard/update/${_id}`}>
              <button className="btn-sm text-2xl text-blue-600">
                <IoCreate />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
