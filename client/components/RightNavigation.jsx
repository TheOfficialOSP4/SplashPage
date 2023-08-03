import React from "react";
import '../styles/rightNavigation.scss'

//Parent Component: Navigation.jsx
// contains right navigation bar
const RightNavigation = () => {
    return(
        <div className="right-nav">
            <p>Docs</p>
            <p>Team</p>
            <p>Blog</p>
        </div>
    )
};

export default RightNavigation;