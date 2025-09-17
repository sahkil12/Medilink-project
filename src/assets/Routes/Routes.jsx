import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Components/Errorpage/ErrorPage";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'myBookings',
            element:<MyBookings></MyBookings>
        },
        {
            path:'blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'contact',
            element:<Contact></Contact>
        }
    ]
  },
]);