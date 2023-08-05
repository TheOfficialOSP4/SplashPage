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
      {/* <img src='https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg' /> */}
    </div>
  );
};

export default ThirdFeature;
