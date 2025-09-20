import { HashLoader } from "react-spinners";



const Spinner = () => {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-452px)] items-center"> 
        <HashLoader 
        color="#57d829" size={80}
        ></HashLoader>

    </div>
  );
};

export default Spinner;
