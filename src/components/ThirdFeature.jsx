import React, { useState, useEffect } from 'react';
import '../styles/thirdFeature.scss';
import alert from '../assets/alert.png'
import safe from '../assets/safe.png'
import check_code from '../assets/check_code.png'
const ThirdFeature = () => {
  return (
    <div className='third-feature'>
      <div className='list'>
        <ul>
          <li>
            ShieldQL gives you the tools to sanitize incoming GraphQL queries to
            prevent potential malicious operations and protect your backend from
            excessively deep and excessively long queries used in
            denial-of-service attacks.
          </li>
          {/* <li>this is test for 3a</li>
        <li>this is test for 3b</li> */}
        </ul>
      </div>
      <div className='images'>
        <img src={check_code} />
        <img src={safe} />
      </div>
    </div>
  );
};

export default ThirdFeature;
