import React from "react";
import '../styles/rightNavigation.scss'

//Parent Component: Navigation.jsx
// contains right navigation bar
const RightNavigation = () => {
    const onClickDocs ={
        
    };
    
    const onClickTeam = () => {
        document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className="right-nav">
            <p className="docs">Docs</p>
            <p className="team" onClick={()=> onClickTeam()}>Team</p>
            <p className="blog">Blog</p>
        </div>
    )
};

export default RightNavigation;