import { createBrowserRouter } from "react-router-dom";
import Root from "../component/Root";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";


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
       }

    ]
   }
])
export default router;