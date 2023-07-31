import React from "react";

// logo, npm command 
import Command from "./Command.jsx";
import Logo from "./Logo.jsx";
import '../styles/shieldql.scss';

const Shieldql = () => {

    return (
        <div className="shieldql">
            <Logo />
            <Command />
        </div>
    )
}

export default Shieldql;