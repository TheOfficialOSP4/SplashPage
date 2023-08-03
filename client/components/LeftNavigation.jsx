import React from "react";
import logo from '../assets/shieldQL.png';
import '../styles/LeftNavigation.scss';

//Parent Component: Navigation.jsx

const LeftNavigation = () => {
    return (
        <div className="left-nav">
            <img className="logoImage" src={logo} alt="ShieldQL-Logo" />
            <p>ShieldQL</p>
        </div>
    )

};

export default LeftNavigation;