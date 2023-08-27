import React from 'react';
import '../styles/description.scss';

//Parent Component: Mains.jsx
// contains description of our app
const Description = () => {
  return (
    <div className='description'>
      <p>
        The lightweight graphQL library that protects your queries through user
        authentication, authorization, and query sanitization.
      </p>
    </div>
  );
};

export default Description;
