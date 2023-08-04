import React from "react";
import logo from '../assets/shieldQL.png';
import '../styles/LeftNavigation.scss';

//Parent Component: Navigation.jsx
// contains logo image as well as the ShieldQL name on the top left of screen
const LeftNavigation = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

    // contains onclicks to reload page
    return (
        <div className="left-nav">
            <img onClick={()=>{window.location.reload()}} className="logoImage" src={logo} alt="ShieldQL-Logo" />
            <p onClick={()=>{window.location.reload()}}>ShieldQL</p>
        </div>
    )

};

export default LeftNavigation;