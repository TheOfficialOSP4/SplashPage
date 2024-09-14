import { useState } from 'react';
import '../styles/command.scss';

const Command = () => {
  //useState default false, changes to true if copied successfully
  const [copied, setCopied] = useState(false);

  // copies to clipboard when pressed
  async function handleClick() {
    // writes install message onto the clipboard
    await navigator.clipboard.writeText('npm i shieldql');
    //sets the copied value to true and makes the button change from copy -> copied!

    setTimeout(() => setCopied(false), 1500);

    return setCopied(true);
  }

  return (
    <div className='clipboard'>
      <p>@npm i shieldql</p>
      {copied ? (
        <button>Copied!</button>
      ) : (
        <button onClick={handleClick}>Copy</button>
      )}
    </div>
  );
};

export default Command;
