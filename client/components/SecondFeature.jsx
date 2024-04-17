import React, { useState, useEffect } from 'react';
import '../styles/secondFeature.scss';
import login from '../assets/json.png'
import secure_server from '../assets/secure_server.png'
const SecondFeature = () => {
  return (
    <div className='second-feature'>
      <div className='list'>
        <ul>
          <li>
            With ShieldQL, you can define granular access controls for different
            types and fields in your GraphQL schema. This way, you can control
            what data each user can access based on their role and permissions.
          </li>
          {/* <li>this is test for 3a</li>
        <li>this is test for 3b</li> */}
        </ul>
      </div>
      <div>
        <img src={secure_server} />
        <img src={login} />
      </div>

    </div>
  );
};

export default SecondFeature;
