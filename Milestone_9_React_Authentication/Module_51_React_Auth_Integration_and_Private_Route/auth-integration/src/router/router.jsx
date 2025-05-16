import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Orders from "../pages/Orders/Orders";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "../components/Routes/PrivateRoute";
import Dashboard from "../components/Dashboard/Dashboard";



export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: 'login', Component: Login },
            { path: 'register', Component: Register },

            { 
                path: 'orders', 
                element: <PrivateRoute> <Orders /> </PrivateRoute>,
            },

            {
                path: 'profile',
                element: <PrivateRoute> <Profile /> </PrivateRoute>,
            },
            {
                path: 'dashboard', 
                element: <PrivateRoute> <Dashboard /> </PrivateRoute>
            }

        ]

    }
])