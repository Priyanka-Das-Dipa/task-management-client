import Swal from "sweetalert2";

const CreateTask = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const select = form.select.value;

        const newTask = { title, description, date, select}
        console.log(newTask);

        // sent to the database

        fetch('http://localhost:5000/createTask',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Task add to the To-Do List',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            })

    }
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left py-5 ">
            <h1 className="text-5xl font-bold">Create A Task!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" name="date" className="input input-bordered" required />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>
                <select name="select" className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    High
                  </option>
                  <option>Low</option>
                  <option>Moderate</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Add Task"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
