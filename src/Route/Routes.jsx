import { createBrowserRouter } from "react-router-dom";
import Root from "../component/Root";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";


const router = createBrowserRouter([
   {
    path:"/",
    element:<Root></Root>,
    children:[
       {
        path:'/',
        element:<Home></Home>
       },
       {
         path:'/signin',
         element:<SignIn></SignIn>
       },
       {
         path:'/signup',
         element:<SignUp></SignUp>
       }

    ]
   }
])
export default router;