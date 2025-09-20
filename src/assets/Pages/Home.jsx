import Doctors from "../Components/OutletPages/Doctors";
import Hero from "../Components/OutletPages/Hero";
import { FaAddressCard } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";
import { FaUsersLine } from "react-icons/fa6";
import { FaUsersRays } from "react-icons/fa6";
import CountUp from 'react-countup';
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div className="space-y-10 md:space-y-20 lg:space-y-30">
            <Helmet>
                <title>MediLink | Home</title>
            </Helmet>
                    <Hero></Hero>
                    <Doctors></Doctors>
                    <div className="text-center space-y-5 my-10 sm:w-3/4 p-8 mx-auto">
                        <h2 className="text-[40px] font-bold">We Provide Best Medical Services</h2>
                        <p className="opacity-85">Access trusted, experienced doctors for everything from routine check-ups to urgent care — quality medical services when you need them.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* box - 1 */}
                            <div className="border border-gray-300 my-7 rounded-xl py-6 px-10 space-y-7 text-start">
                                {/* icon */}
                                <FaAddressCard size={50} ></FaAddressCard>
                                <h2 className="font-bold text-6xl">
                                    <CountUp end={199} duration={4} ></CountUp>+
                                </h2>
                                <h4 className="text-2xl font-semibold text-neutral-500">Total Doctors</h4>
                            </div>
               {/* box - 2 */}
                            <div className="border border-gray-300 my-7 rounded-xl py-6 px-10 space-y-7 text-start">
                                {/* icon */}
                               <TbStarsFilled size={50}></TbStarsFilled>
                                <h2 className="font-bold text-6xl">
                                     <CountUp end={467} duration={4} ></CountUp>+
                                </h2>
                                <h4 className="text-2xl font-semibold text-neutral-500">Total Review</h4>
                            </div>
               {/* box - 3 */}
                            <div className="border border-gray-300 my-7 rounded-xl py-6 px-10 space-y-7 text-start">
                                {/* icon */}
                                <FaUsersLine size={50}></FaUsersLine>
                                <h2 className="font-bold text-6xl">
                                     <CountUp end={1909} duration={4} ></CountUp>+
                                    </h2>
                                <h4 className="text-2xl font-semibold text-neutral-500">Patients</h4>
                            </div>
               {/* box - 4 */}
                            <div className="border border-gray-300 my-7 rounded-xl py-6 px-10 space-y-7 text-start">
                                {/* icon */}
                                <FaUsersRays size={50}></FaUsersRays>
                                <h2 className="font-bold text-6xl">
                                     <CountUp end={300} duration={4} ></CountUp>+
                                </h2>
                                <h4 className="text-2xl font-semibold text-neutral-500">Total Stuff</h4>
                            </div>

                        </div>
                    </div>
        </div>
    );
};

export default Home;