import React, { useState, useEffect } from 'react';
import '../styles/secondFeature.scss';

const SecondFeature = () => {
  return (
    <div className='second-feature'>
      <ul>
        <li>
          With ShieldQL, you can define granular access controls for different
          types and fields in your GraphQL schema. This way, you can control
          what data each user can access based on their role and permissions.
        </li>
        {/* <li>this is test for 3a</li>
        <li>this is test for 3b</li> */}
      </ul>
      {/* <img src='https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg' /> */}
    </div>
  );
};

export default SecondFeature;
