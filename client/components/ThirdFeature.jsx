import React, { useState, useEffect } from 'react';
import '../styles/thirdFeature.scss';

const ThirdFeature = () => {
  return (
    <div className='third-feature'>
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
      <img src='https://img.freepik.com/premium-vector/disinfection-sanitization-cleaning-covid-service_88272-4604.jpg?w=2000' />
      <img src='https://www.indusface.com/wp-content/uploads/2016/11/How-does-SQLi-attack-works.png'/>
    </div>
  );
};

export default ThirdFeature;
