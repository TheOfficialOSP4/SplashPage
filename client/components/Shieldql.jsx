import React from "react";

// logo, npm command 
import Command from "./Command.jsx";
import Logo from "./Logo.jsx";
import '../styles/shieldql.scss';

// our middle box, contains the logo and the copy to clipboard stuff
const Shieldql = () => {

    return (
        <div className="shieldql">
            <Logo />
            <Command />
        </div>
    )
}

export default Shieldql;