import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Root/Root";
import Contact from "../Pages/Contact";
import UpdateProfile from "../components/UpdateProfile";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])

export default router;