import React from "react";
import logo from '../assets/LogoDarkHoriz.png';
import '../styles/logo.scss';

//Parent Component: Sheidlql.jsx
// located in the first box from the top, contains logo and name of app
const Logo = () => {
    return (
        <div className="middle-logo">
            <img src = {logo}/>
        </div>
        // <div className="middle-logo">
        //     <img className="middle-image" src={logo} alt="ShielQL-Logo" />
        //     <p className="middle-shieldql">ShieldQL</p>
        // </div>
    )
};

export default Logo;