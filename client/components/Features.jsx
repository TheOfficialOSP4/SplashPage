import React, { useState, useEffect } from 'react';
import FirstFeature from './FirstFeature.jsx';
import SecondFeature from './SecondFeature.jsx';
import ThirdFeature from './ThirdFeature.jsx';
import '../styles/features.scss';

const Features = () => {
  // Default to value of 1 for the first Feature when the page first loads
  const [current, setCurrent] = useState(1);

  return (
    <div className='features'>
      <div className='feature-nav'>
        {/* changes current to selected feature*/}
        <p
          onClick={() => setCurrent(1)}
          className={current === 1 ? 'Underline' : 'Ignore'}
        >
          Authentication
        </p>
        <p
          onClick={() => setCurrent(2)}
          className={current === 2 ? 'Underline' : 'Ignore'}
        >
          Authorization
        </p>
        <p
          onClick={() => setCurrent(3)}
          className={current === 3 ? 'Underline' : 'Ignore'}
        >
          Query Sanitization
        </p>
      </div>
      <div>
        {/* on reload, the website will show first feature and whenever a click is done on one of the p tags
                check what the current is and display the specified feature*/}
        {current === 1 ? (
          <FirstFeature />
        ) : current === 2 ? (
          <SecondFeature />
        ) : (
          <ThirdFeature />
        )}
      </div>
    </div>
  );
};

export default Features;
