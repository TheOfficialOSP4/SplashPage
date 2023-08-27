import React, { useState } from 'react';
import '../styles/firstFeature.scss';

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
        <img src='https://www.indusface.com/wp-content/uploads/2016/11/How-does-SQLi-attack-works.png'/>
        <img src='https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-user-authentication-628x353.png' />
      </div>
    </div>
  );
};

export default FirstFeature;
