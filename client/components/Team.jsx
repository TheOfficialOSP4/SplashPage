import React, { useState } from 'react';
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
    const pictures = [joie, rodrigo, siful, simran, xinjin];
    const names = ['Joie Zhang', 'Rodrigo Samour Calderon', 'Siful Siddiki', 'Simran Kaur', 'Xin Jin Qiu'];
    const githubs = ['', '', 'https://github.com/sifulsidd', '', 'https://github.com/xjqiu28'];
    const linkedins = ['', '', 'https://www.linkedin.com/in/siful-siddiki/', '', 'https://www.linkedin.com/in/xinjinqiu/'];

    let profArray = []

    for (let i = 0; i < names.length; i++) {
        profArray.push(<Teammate name={names[i]} github={githubs[i]} linkedin={linkedins[i]} picture={pictures[i]}/>)
    }

    return (
        <div className='team'>
            <h1> Meet the Team </h1>
            {profArray}
        </div>
    )
};
export default Team;
