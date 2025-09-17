import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center border h-screen space-y-5">
                <h2 className="text-4xl font-bold">Page Not Found</h2>
                <Link to={'/'} className="btn-error btn py-6 px-10 font-bold text-xl">Home</Link>
                <img src="/public/404.jpg" className="md:w-150 md:h-150  mx-2" alt="" />
        </div>
    );
};

export default ErrorPage;