import React, {useState} from "react";
import '../styles/redirect.scss';
// Buttons for github (redirct to github), medium (redirect to blog), npm (redirecting to https://www.npmjs.com/package/shieldql )
const Redirect = () => {
    const openInNewTab = (url) => {
        window.open(url,'_blank')
    }
    // onclick function to open a new tab to github, medium article, and npm
    return (
        <div className="redirect">
            <button onClick={()=>openInNewTab("https://github.com/oslabs-beta/ShieldQL/")}>
                Github
            </button>
            <button onClick={()=>openInNewTab("https://medium.com/@simran00kk/shieldql-a-graphql-security-solution-6ad17f93f6fa")}>
                Medium
            </button >
            <button onClick={()=>openInNewTab("https://www.npmjs.com/package/shieldql")}>
                NPM
            </button>
        </div>
    )
}

export default Redirect;
