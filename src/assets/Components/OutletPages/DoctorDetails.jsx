import { useEffect, useState } from "react";
import {  useNavigation, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const DoctorDetails = () => {
    const { regNumber } = useParams()
    const navigation = useNavigation()
    const [doctor, setDoctor] = useState(null)
    useEffect(()=>{
        fetch("/doctors.json")
        .then(res => res.json())
        .then(data => {
            const singleDoctor = data.find(doctor => doctor.registrationNumber === regNumber);
            setDoctor(singleDoctor)
        })
    },[regNumber])
    if(navigation.state === "loading" || doctor === null){
        return <Spinner></Spinner>
    }
    return (
        <div className="md:w-3/4 mx-auto my-7">
                <div className="border border-gray-200 rounded-xl py-7 px-5 text-center shadow-lg space-y-6">
                        <h2 className="text-4xl font-bold">Doctor’s Profile Details</h2>
                        <p className="md:w-3/4 text-base/relaxed opacity-85 mx-auto">Explore complete, verified profiles of our doctors — including their qualifications, specialties, years of experience, registration numbers, and availability — so you can make an informed choice before booking your appointment.</p>
                </div>
        </div>
    );
};

export default DoctorDetails;