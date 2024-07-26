import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Root/Root";
import Contact from "../Pages/Contact";
import UpdateProfile from "../components/UpdateProfile";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRouter from "../routes/PrivateRouter";
import Details from "../Pages/Details";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/data.json')
            },
            {
                path: '/estate/:id',
                element: <PrivateRouter><Details /></PrivateRouter>,
                loader: () => fetch(`/data.json`)
            },

            {
                path: '/contact',
                element: <PrivateRouter><Contact /></PrivateRouter>
            },
            {
                path: '/updateProfile',
                element: <PrivateRouter><UpdateProfile /></PrivateRouter>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default router;