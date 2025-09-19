const Doctor = ({ doctor }) => {
  console.log(doctor);
  const { photo, name, experience,education,registrationNumber } = doctor;
  return (
    <div className="card p-8 bg-base-100 border border-neutral-200 shadow-md">
      <figure className="">
        <img src={photo} className="w-full rounded-xl h-[280px] object-cover" alt={name} />
      </figure>
      <div className="my-4 text-start">
            <h2 className="flex flex-wrap gap-6 my-1">
                <span className="border border-green-400 px-4 py-2  rounded-full bg-green-100 text-green-600 font-medium">Available</span>
                <span className="border border-blue-300 px-4 py-2  rounded-full bg-blue-100 text-blue-600 font-medium">{experience} Experience</span>
            </h2>
            <div className="my-3 space-y-2">
                <h2 className=" text-2xl font-bold">{name}</h2>
                <h2 className="text-xl font-medium text-neutral-500">{education}</h2>
            </div>
            <div className="border border-neutral-300 border-dashed"> </div>
            <h2 className="flex items-center gap-1 text-neutral-600 my-3 font-medium text-xl"><span className="text-2xl">®</span>{registrationNumber}</h2>
        <div className="my-3">
          <button className="border-2 border-green-500 text-green-500 hover:text-black rounded-full font-bold text-xl py-3 hover:bg-[#0ad80acc] w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
