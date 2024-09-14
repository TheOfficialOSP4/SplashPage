// logo, npm command
import Command from './Command.js';
import Logo from './Logo.js';
import '../styles/shieldql.scss';

// our middle box, contains the logo and the copy to clipboard stuff
const Shieldql = () => {
  return (
    <div className='shieldql'>
      <Logo />
      <Command />
    </div>
  );
};

export default Shieldql;
