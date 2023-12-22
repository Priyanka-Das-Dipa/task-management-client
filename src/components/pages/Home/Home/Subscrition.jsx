const Subscrition = () => {
  return (
    <div className="bg-blue-500 text-center p-32 space-y-3">
      <h2 className="text-2xl text-white font-bold text-center">Subscribe Our Website for better User Experience</h2>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscrition;
