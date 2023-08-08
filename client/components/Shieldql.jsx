import React from "react";

// logo, npm command 
import Command from "./Command.jsx";
import Logo from "./Logo.jsx";
import '../styles/shieldql.scss';

// our middle box, contains the logo and the copy to clipboard stuff
const Shieldql = () => {

    return (
        <div className="shieldql">
            <div className="shieldql-left">
            <Logo />
            <Command />
            </div>
            <img className="image-right" src="https://www.apollographql.com/blog/static/graphql-query-79196ebc9ef66116c562969e686a6cf5.png"/>
        </div>
    )
}

export default Shieldql;