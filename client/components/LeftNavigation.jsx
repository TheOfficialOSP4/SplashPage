import React from "react";
import logo from '../assets/shieldQL.png';
import '../styles/LeftNavigation.scss';

const LeftNavigation = () => {
    return (
        <div className="left-nav">
            <img className="logoImage" src={logo} alt="ShieldQL-Logo" />
            <p className="shieldql">ShieldQL</p>
        </div>
    )

};

export default LeftNavigation;