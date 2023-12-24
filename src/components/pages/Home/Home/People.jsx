import { useEffect, useState } from "react";

const People = () => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((people) => setDatas(people));
  }, []);
  if (!datas) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Our Amazing Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
        {datas.map((data) => (
          <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
            key={data.id}
            className="card card-compact w-96  bg-base-100 shadow-xl"
          >
            <figure className="h-[450px]">
              <img src={data.image} alt="image" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold text-center">{data.title}</h2>
              <p className="text-center">{data.benefits}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default People;
