import toast from "react-hot-toast";

export const getDoctors = () =>{
    let doctors = []
    const localDoctor= localStorage.getItem("doctors")
    if(localDoctor){
        doctors = JSON.parse(localDoctor)
    }
    return doctors;
}

// save data --
export const saveDoctors = (doctor) =>{
    let storedDoctors = getDoctors()
    const exist = storedDoctors.find(d => d.id === doctor.id);
    if(exist){
          toast.error('Appointment Already Schedule For Today', {duration: 1500,});
          return false;
    }
    else{
        storedDoctors.push(doctor)
        localStorage.setItem("doctors", JSON.stringify(storedDoctors))
        toast.success(`Appointment Scheduled for ${doctor.name} successfully `
            , {duration: 1500,}
        )
        return true;
    }
}
// delete doctors--

export const removeDoctor = (id) =>{
    let doctors = getDoctors()
    const remainingDoctors = doctors.filter(doctor => doctor.id !== id)
    localStorage.setItem("doctors", JSON.stringify(remainingDoctors))
    toast.success("remove doctor from list" , {duration: 1500,})
}