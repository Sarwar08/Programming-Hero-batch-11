import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import SignUp from "../pages/SignUp/SignUp";
import Form from "../components/Form/Form";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: 'login', Component: Login },
            { path: 'register', Component: Register },
            { path: 'signUp', Component: SignUp },
            { path: 'formPrac', Component: Form}
        ]
    }
])

export {router}