import React, {useState} from "react";
import '../styles/redirect.scss';
// Buttons for github (redirct to github), medium (redirect to blog), npm (redirecting to https://www.npmjs.com/package/shieldql )
const Redirect = () => {
    // const [type, setType] = ('');
    const openInNewTab = (url) => {
        window.open(url,'_blank')
    }
    

    return (
        <div className="redirect">
            <button onClick={()=>openInNewTab("https://github.com/oslabs-beta/ShieldQL/")}>
                Github
            </button>
            <button onClick={()=>openInNewTab("https://github.com/oslabs-beta/ShieldQL/")}>
                Medium
            </button >
            <button onClick={()=>openInNewTab("https://www.npmjs.com/package/shieldql")}>
                NPM
            </button>
        </div>
    )
}

export default Redirect;
