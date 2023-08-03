import React from "react";
import '../styles/rightNavigation.scss'

//Parent Component: Navigation.jsx
// contains right navigation bar
const RightNavigation = () => {
    return(
        <div className="right-nav">
            <p className="docs">Docs</p>
            <p className="team">Team</p>
            <p className="blog">Blog</p>
        </div>
    )
};

export default RightNavigation;