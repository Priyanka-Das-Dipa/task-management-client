const CreateTask = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left py-5 ">
            <h1 className="text-5xl font-bold">Create A Task!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
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
                  placeholder="description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" className="input input-bordered" required />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    High
                  </option>
                  <option>Low</option>
                  <option>Moderate</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <input
                  value="Submit"
                  type="text"
                  name=""
                  id=""
                  className="btn btn-primary"
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
