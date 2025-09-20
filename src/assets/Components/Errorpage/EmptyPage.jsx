import { Link } from "react-router-dom";

const EmptyPage = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center space-y-8 min-h-[calc(100vh-452px)]">
                <h2 className="text-4xl font-medium">You Have Not Booked Any Appointment Yet</h2>

                 <Link to={'/'}>
                 <button className="bg-green-500 font-bold px-6 py-2 rounded-lg text-lg">Book an Appointment</button>
                </Link>
        </div>
    );
};

export default EmptyPage;