import React from 'react';
import logo from '../assets/DarkModeIcon.png';
import '../styles/leftNavigation.scss';

//Parent Component: Navigation.jsx
// contains logo image as well as the ShieldQL name on the top left of screen
const LeftNavigation = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // contains onclicks to reload page
  return (
    <div className='left-nav'>
      <img
        onClick={() => {
          window.location.reload();
        }}
        className='logoImage'
        src={logo}
        alt='ShieldQL-Logo'
      />
      <div
        onClick={() => {
          window.location.reload();
        }}
      >
      <p>ShieldQL</p>
      </div>
    </div>
  );
};

export default LeftNavigation;
