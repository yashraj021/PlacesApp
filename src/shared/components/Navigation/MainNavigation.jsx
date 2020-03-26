import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';

import MainHeader from  './MainHeader.jsx';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import BackDrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {

    const [drawerIsOpen, setDrawerOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerOpen(true);
    }

    const closeDrawerHandler = () => {
        setDrawerOpen(false);
    }    

    return (
        <Fragment>
            {
                drawerIsOpen && <BackDrop onClick={closeDrawerHandler}/>
            }
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">
                        YourPlaces
                    </Link>    
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </Fragment>
    )
}

export default MainNavigation;