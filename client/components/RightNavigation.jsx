import React from "react";
import '../styles/rightNavigation.scss'

//Parent Component: Navigation.jsx
// contains right navigation bar
const RightNavigation = () => {
    // navigates to the blog or the github on click
    const onClick = (url) => {
        window.open(url, '_blank')

    };

    // scrolls to team information when clicked
    const onClickTeam = () => {
        document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className="right-nav">
            <p className="docs" onClick={()=> onClick("https://github.com/oslabs-beta/ShieldQL/")}>Docs</p>
            <p className="team" onClick={() => onClickTeam()}>Team</p>
            <p className="blog" onClick={()=> onClick("https://medium.com/@simran00kk/shieldql-a-graphql-security-solution-6ad17f93f6fa")}>Blog</p>
        </div>
    )
};

export default RightNavigation;