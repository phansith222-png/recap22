import { createBrowserRouter } from "react-router"
import Layout from "../Layout/Layout"
import Home from "../pages/Home"
import Post from "../pages/Post"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import TokenProfile from "../pages/TokenProfile"


const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },{
                path:'post',
                element:<Post/>
            },{
                path:'register',
                element:<Register/>
            },{
                path:'login',
                element:<Login/>
            },{
                path:'profile',
                element:<Profile/>
            }
            ,{
                path:'tokenprofile',
                element:<TokenProfile/>
            }
        ]
    }
])

export default router