import React, { useState, useRef } from 'react';
// MAKE SURE TO COMMENT PLS 
import '../styles/team.scss';
// Teammate

import joie from '../assets/joie.png';
import rodrigo from '../assets/rodrigo.png';
import simran from '../assets/simran.png';
import xinjin from '../assets/xinjin.png';
import siful from '../assets/siful.png';
import Teammate from './Teammate.jsx';

const Team = () => {

    // created an array for pictures paths, names of each individual, githubs and linkedins 
    const pictures = [joie, rodrigo, siful, simran, xinjin];
    const names = ['Joie Zhang', 'Rodrigo Samour Calderon', 'Siful Siddiki', 'Simran Kaur', 'Xin Jin Qiu'];
    const githubs = ['https://github.com/joie-zhang', 'https://github.com/rscalderon', 'https://github.com/sifulsidd', 'https://github.com/simk209', 'https://github.com/xjqiu28'];
    const linkedins = ['https://www.linkedin.com/in/joie-zhang-4949a213a/', 'https://www.linkedin.com/in/rodrigosamourcalderon/', 'https://www.linkedin.com/in/siful-siddiki/', 'https://www.linkedin.com/in/simran-kaur-2684b0191/', 'https://www.linkedin.com/in/xinjinqiu/'];

    // create an array that will contain a list of teammates
    let profArray = []

    // loop over everything and pass in the information as props to teammate component
    for (let i = 0; i < names.length; i++) {
        profArray.push(<Teammate name={names[i]} github={githubs[i]} linkedin={linkedins[i]} picture={pictures[i]} />)
    }

    return (
        <div id='team' className='team'>
            <h1> Meet the Team </h1>
            {profArray}
        </div>
    )
};
export default Team;
