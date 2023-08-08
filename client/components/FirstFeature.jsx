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
        {/* <li>this is test for 1a</li>
        <li>this is test for 1b</li> */}
      </ul>
      {/* <img src='https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg' /> */}
      <img src='https://wp-punk.com/wp-content/uploads/2021/10/sanitizing.jpg' />
      <img src='https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/6045894932692992/image/download/6526134821847040' />
    </div>
  );
};

export default FirstFeature;
