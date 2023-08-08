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
        {/* <li>this is test for 2a</li>
        <li>this is test for 2b</li> */}
      </ul>
      <img src='https://www.okta.com/sites/default/files/styles/1640w_scaled/public/media/image/2020-10/Authentication_vs_Authorization.png?itok=uBFRCfww' />
      <img src='https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-user-authentication-628x353.png' />
    </div>
  );
};

export default SecondFeature;
