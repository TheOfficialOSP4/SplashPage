import Teammate from './Teammate';

import joie from '../assets/joie.png';
import rodrigo from '../assets/rodrigo.png';
import simran from '../assets/simran.png';
import xinjin from '../assets/xinjin.png';
import siful from '../assets/siful.png';

import '../styles/team.scss';

const Team = () => {
  const teammates = [
    {
      name: 'Joie Zhang',
      github: 'https://github.com/joie-zhang',
      linkedin: 'https://www.linkedin.com/in/joie-zhang/',
      picture: joie,
    },
    {
      name: 'Rodrigo S. Calderon',
      github: 'https://github.com/rscalderon',
      linkedin: 'https://www.linkedin.com/in/rodrigosamourcalderon/',
      picture: rodrigo,
    },
    {
      name: 'Siful Siddiki',
      github: 'https://github.com/sifulsidd',
      linkedin: 'https://www.linkedin.com/in/siful-siddiki/',
      picture: simran,
    },
    {
      name: 'Simran Kaur',
      github: 'https://github.com/simk209',
      linkedin: 'https://www.linkedin.com/in/simran-kaur-nyc/',
      picture: xinjin,
    },
    {
      name: 'Xin Jin Qiu',
      github: 'https://github.com/xjqiu28',
      linkedin: 'https://www.linkedin.com/in/xinjinqiu/',
      picture: siful,
    },
  ].map(({ name, github, linkedin, picture }) => (
    <Teammate
      name={name}
      github={github}
      linkedin={linkedin}
      picture={picture}
      key={`${name}-${github}-${linkedin}`}
    />
  ));

  return (
    <div id='team'>
      <h1> Meet the Team </h1>
      <div className='team'>{teammates}</div>
    </div>
  );
};
export default Team;
