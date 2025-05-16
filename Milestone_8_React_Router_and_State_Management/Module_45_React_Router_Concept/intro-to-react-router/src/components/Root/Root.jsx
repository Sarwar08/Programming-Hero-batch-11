import React from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Footer/Footer'
import SideBar from '../SideBar/SideBar'
import "./Root.css";

const Root = () => {

    const Navigation = useNavigation();

    const isNavigating = Boolean(Navigation.location);

    return (
        <div>
            <Header />
            <div className='root-main'>
                <SideBar />
                {isNavigating && <span>Loading . . . </span>}
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root