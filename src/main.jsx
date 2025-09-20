import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router-dom";
import { router } from './assets/Routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </>,
)
