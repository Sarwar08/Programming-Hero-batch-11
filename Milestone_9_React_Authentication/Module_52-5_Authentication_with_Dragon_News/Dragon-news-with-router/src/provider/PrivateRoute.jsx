import React, { use } from 'react'
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);

    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <Loading />
    }
    
    if (user && user?.email){

        // if user thake return children
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>;
    // user na thakle return navigate --> login
}

export default PrivateRoute