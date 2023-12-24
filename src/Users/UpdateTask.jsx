import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const data = useLoaderData();
  const { _id, title, description, date, select } = data;

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("title", title);
    setValue("description", description);
    setValue("date", date);
    setValue("select", select);
  }, [title, description, date, select, setValue]);

  const handleUpdate = (data) => {
    const updateTask = { ...data };
    console.log(updateTask);

    // Send to the database
    fetch(`https://task-management-server-teal-theta.vercel.app/createTask/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Your Task Updated",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        console.error("Error updating task:", error);
        toast.error("Error updating task. Please try again.");
      });
  };

  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left py-5 ">
            <h1 className="text-5xl font-bold">Update Task!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(handleUpdate)}
              className="max-w-md mx-auto my-8"
            >
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  defaultValue={title}
                  {...register("title", { required: true })}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  defaultValue={description}
                  name="description"
                  {...register("description")}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="deadline"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  defaultValue={date}
                  id="deadline"
                  name="date"
                  {...register("date")}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="priority"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Priority
                </label>
                <select
                  id="priority"
                  defaultValue={select}
                  name="select"
                  {...register("select")}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Update Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
