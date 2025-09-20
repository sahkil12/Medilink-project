import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getDoctors, removeDoctor } from "../Components/DataBase/LocalDataBase";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import EmptyPage from "../Components/Errorpage/EmptyPage";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'gray', 
    'tomato','#006A67', 'blueviolet', 'cadetblue','#59AC77', '#5D2F77', '#4FB7B3'
];
// chart data --
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const MyBookings = () => {
  const [bookedDoctors, setBookedDoctors] = useState([]);
  useEffect(() => {
      setBookedDoctors(getDoctors());
    }, []);

    const handleRemove =(id)=>{
        removeDoctor(id)
        const storedBookedDoctors = getDoctors()
        setBookedDoctors(storedBookedDoctors)
    }
    const chartData = bookedDoctors.map(doc =>({
        name: doc.name,
        fee: doc.fee,
    }))
    if(bookedDoctors.length <= 0){
        return <EmptyPage></EmptyPage>
    }
    
  return (
    
    <div className="sm:w-10/12 md:w-[80%] mx-auto space-y-7">
      <Helmet>
        <title>MediLink | My Bookings</title>
      </Helmet>
      <div className="hidden md:flex mx-auto md:my-10 lg:my-16">{/* chart */}
            
            <BarChart
            className=" mx-auto p-2 shadow-xl rounded-xl"
      width={1500}
      height={550}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {bookedDoctors.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
      </div>

      <div className="space-y-8 my-8">
        {/*header text */}
        <div className="space-y-5">
          <h2 className="text-center text-[40px] font-bold">
            My Today Appointments
          </h2>
          <p className="text-center sm:w-3/5 opacity-80 mx-auto">
            Keep track of all your appointments for today, see which doctors
            you’re scheduled with, and manage your visits effortlessly to ensure
            you never miss a consultation
          </p>
        </div>
        {/* dynamic value */}
        <div className="space-y-7">
          {bookedDoctors.map((doctor) => {
              return(
                <div key={doctor.id} className="border shadow-md border-gray-200 p-5 rounded-xl space-y-3">
                <h2 className="text-[22px] font-bold">{doctor.name}</h2>
                <h1 className="flex flex-col md:flex-row justify-between text-neutral-500 font-medium text-lg">
                    <span>{doctor.education}</span>
                    <span>Appointment Fee : {doctor.fee} Taka +Vat </span>
                </h1>
                 <div className="border border-neutral-300 border-dashed"> </div>
                  <button
                  onClick={()=>handleRemove(doctor.id)}
            className="w-full py-3 my-4 rounded-full text-xl font-bold border-2 text-red-600 bg-red-50F border-red-300 hover:bg-red-400 hover:text-black duration-500 ">Cancel Appointment </button>
              </div>
              )

          })}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
