import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <section className="sticky z-50 top-0 ">
                <Navbar></Navbar>
            </section>
               <section className="min-h-[calc(100vh-452px)]">
                 <Outlet></Outlet>
               </section>
                <Footer ></Footer>
        </div>
    );
};

export default Root;