import { useEffect, useState } from "react";
import { Link, useNavigation, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { CiSquareInfo } from "react-icons/ci";

const DoctorDetails = () => {
  const { regNumber } = useParams();
  const navigation = useNavigation();
  const [doctor, setDoctor] = useState(null);
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => {
        const singleDoctor = data.find(
          (doctor) => doctor.registrationNumber === regNumber
        );
        setDoctor(singleDoctor);
      });
  }, [regNumber]);
  if (navigation.state === "loading" || doctor === null) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="md:w-3/4 mx-auto my-7 space-y-9">
      {/* start part */}
      <div className="border border-gray-200 rounded-xl py-9 px-5 text-center shadow-lg space-y-6">
        <h2 className="text-4xl font-bold">Doctor’s Profile Details</h2>
        <p className="md:w-3/4 text-base/relaxed opacity-85 mx-auto">
          Explore complete, verified profiles of our doctors — including their
          qualifications, specialties, years of experience, registration
          numbers, and availability — so you can make an informed choice before
          booking your appointment.
        </p>
      </div>
      {/* middle part */}
      <div className="flex flex-col md:flex-row gap-8 border border-gray-300 rounded-xl p-8">
        <div>
          {/* img */}
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="rounded-lg h-full w-full object-cover"
          />
        </div>
        <div className="text-start w-full space-y-3">
          {/* text */}
          <h2 className=" text-3xl font-bold">{doctor.name}</h2>
          <h2 className="text-lg font-medium text-neutral-400">
            {doctor.education}
          </h2>
          <h2 className="text-xl font-medium text-neutral-400 flex flex-col gap-2">
            Work At
            <span className="text-gray-600 font-bold">{doctor.workAt}</span>
          </h2>
          <div className="border border-neutral-300 border-dashed"> </div>
          <h2 className="flex items-center gap-1 text-neutral-600 my-3 font-medium text-xl">
            <span className="text-2xl">®</span>Reg No:{" "}
            {doctor.registrationNumber}
          </h2>
          <div className="border border-neutral-300 border-dashed"> </div>
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-lg font-bold">Availability </h2>
            <div className="flex gap-4">
              {doctor.availableDays.map((available) => (
                <span className="border px-4 py-1 rounded-full border-orange-300 bg-orange-50 font-medium text-orange-400">
                  {available}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-lg font-bold">
            Consultation Fee :
            <span className="text-blue-500 mx-1"> {doctor.fee} Taka</span>{" "}
            +included Vat
          </h2>
        </div>
      </div>
      {/* end part */}
      <div className="border py-6 border-gray-300 rounded-xl px-4 space-y-4">
        <h2 className="text-2xl font-bold text-center">Book an Appointment</h2>
        <div className="border border-neutral-300 border-dashed"> </div>
        <h2 className="flex items-center justify-between text-lg font-bold">
          Availability{" "}
          <span className="border px-4 py-2 rounded-full border-green-300 bg-green-100 font-medium text-green-600 text-base">
            Doctor Available Today
          </span>
        </h2>
        <div className="border-b border-gray-300"></div>

          <h2 className="px-4 w-fit flex gap-2 my-5 items-center py-2 border border-orange-100 rounded-full bg-orange-50 font-medium text-orange-400">
            {" "}
            <span>
              <CiSquareInfo size={25} />
            </span>{" "}
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </h2>

          <Link to={"/myBookings"} >
            <button className="w-full py-3 my-4 rounded-full text-xl font-bold bg-green-400 hover:bg-green-500">Book Appointment Now</button>
          </Link>
      </div>
    </div>
  );
};

export default DoctorDetails;
