import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getDoctors } from '../Components/DataBase/LocalDataBase';

const MyBookings = () => {
    const [bookedDoctors, setBookedDoctors] = useState([])
    useEffect(()=>{
        setBookedDoctors(getDoctors())
    },[])
    console.log(bookedDoctors);
    return (
        <div>
             <Helmet>
                <title>MediLink | My Bookings</title>
            </Helmet>
                 <h2 className="text-3xl text-center my-10">My All Bookings</h2>
        </div>
    );
};

export default MyBookings;