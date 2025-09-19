import { useEffect, useState } from "react";
import Doctor from "./Doctor";

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    const [initialDoctors, setInitialDoctors] = useState(9)

    useEffect(()=>{
            fetch('/public/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    },[])

    const visibleDoctors = doctors.slice(0, initialDoctors)

    return (
        <div className="text-center">
               <div>
                 <h2 className="text-[40px] mt-8 mb-4 font-bold">Our Best Doctors</h2>
                <p className="w-11/12 md:w-[60%] mx-auto opacity-85">Our Best Doctor” connects you with a hand-picked network of qualified, experienced physicians across many specialties. Browse profiles, check credentials, and book appointments in minutes — whether for a routine visit or urgent advice, you’ll get trusted care at your convenience.</p>
               </div>
               {/* doctor card */}
               <div className="my-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:w-[95%] md:w-11/12 lg:w-10/12 mx-auto py-6 px-5">
               {
                visibleDoctors.map((doctor, idx)=> <Doctor key={idx} 
                doctor={doctor}
                ></Doctor>)
               }
               </div>
               {/* show all card button */}
             {
                initialDoctors < doctors.length && (
                      <div>
                <button 
                onClick={()=>setInitialDoctors(doctors.length)}
                className="border-2 border-green-500 text-black rounded-full font-bold text-xl px-8 py-3 bg-[#0fd80fd3] hover:bg-[#0ad80acc]">View All Doctors</button>
               </div>

                )}
        </div>
    );
};

export default Doctors;