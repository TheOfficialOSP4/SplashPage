import React, { useState } from 'react';
import '../styles/firstFeature.scss';
import login from '../assets/login.png';
import auth from '../assets/auth.png'
const FirstFeature = () => {
  return (
    <div className='first-feature'>
      <div className='list'>
      <ul>
        <li>
          ShieldQL helps you implement user authentication in your GraphQL APIs,
          ensuring that only authenticated users can access certain parts of
          your API.
        </li>
      </ul>
      </div>
      <div className='img-div'>
        <img src={login}/>
        <img src={auth} />
      </div>
    </div>
  );
};

export default FirstFeature;
