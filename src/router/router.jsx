import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/Home/JobApply/JobApply";
import MyApplication from "../Pages/MyApplication/MyApplication";


  const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<div>Not Found Data</div>,
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
          path:"/jobs/:id",
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:({params}) =>fetch(`http://localhost:5000/jobs/${params.id}`)
         
        },
        {
          path:"/jobApply/:id",
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path:"/myApplication",
          element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        }
      ]
    },
  ]);

  export default router