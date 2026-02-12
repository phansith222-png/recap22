import { createBrowserRouter } from "react-router"
import Layout from "../Layout/Layout"
import Home from "../pages/Home"
import Post from "../pages/Post"
import Register from "../pages/Register"


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
            }
        ]
    }
])

export default router