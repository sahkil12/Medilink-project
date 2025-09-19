import Doctors from "../Components/OutletPages/Doctors";
import Hero from "../Components/OutletPages/Hero";

const Home = () => {
    return (
        <div className="space-y-10 md:space-y-20 lg:space-y-30">
                    <Hero></Hero>
                    <Doctors></Doctors>
        </div>
    );
};

export default Home;