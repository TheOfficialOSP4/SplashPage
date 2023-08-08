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
      <img src='https://www.okta.com/sites/default/files/styles/1640w_scaled/public/media/image/2020-10/Authentication_vs_Authorization.png?itok=uBFRCfww' />
      <img src='https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/6045894932692992/image/download/6526134821847040' />
    </div>
  );
};

export default SecondFeature;
