import React, { useState } from 'react';
import '../styles/firstFeature.scss';

const FirstFeature = () => {
  return (
    <div className='first-feature'>
      <ul>
        <li>
          ShieldQL helps you implement user authentication in your GraphQL APIs,
          ensuring that only authenticated users can access certain parts of
          your API.
        </li>
        <li>this is test for 1a</li>
        <li>this is test for 1b</li>
      </ul>
      {/* <img src='https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg' /> */}
    </div>
  );
};

export default FirstFeature;
