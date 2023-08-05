import React, { useState } from "react";
import '../styles/command.scss';

//Parent Component: Sheidlql.jsx

const Command = () => {

    //useState default false, changes to true if copied successfully
    const [copied, setCopied] = useState(false);
    const [clipboard, setClipboard] = useState('');
    
    // copies to clipboard when pressed
    async function handleClick(){
        const text = 'npm install shieldql';
        // writes the text we initialized onto the clipboard
        await navigator.clipboard.writeText(text);
        //sets the copied value to true and makes the button change from copy -> copied!
        
        setTimeout(()=>{
            return setCopied(false);
        }, 1500)
   
        return setCopied(true);
    }

 

    return (
        <div className="clipboard">
            <input type="text" value="@npm install shieldql" readOnly />
            {copied ? <button>Copied!</button> : <button onClick={handleClick}>Copy</button>}
        </div>
    )
}

export default Command;