import React from 'react';
// LeftNav and RightNav in here
import LeftNavigation from './LeftNavigation.jsx';
import RightNavigation from './RightNavigation.jsx';
import '../styles/navigation.scss';

// creates the top navigation bar containing left and right nav
const Navigation = () =>{
    return (
        <div className='navigation'>
            <LeftNavigation />
            <RightNavigation />
        </div>
       
    )
}

export default Navigation;