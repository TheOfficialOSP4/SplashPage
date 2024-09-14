import React from 'react';
// Navigation, Team, Shieldql, Description (<p>), Redirect
import Navigation from './Navigation.jsx';
import Shieldql from './Shieldql.jsx'
import Redirect from './Redirect.jsx';
import Team from './Team.jsx';
import Description from './Description.jsx';
import Features from './Features.jsx';
import '../styles/main.scss';

//Parent Componenet: App.jsx
// contains all the components of our application
const Main = () => {

    
    return (
        <div className='grid-container'>
            <Navigation />
            <Shieldql />
            <Description />
            <Redirect />
            <Team />
            <Features />
        </div>

    )
}


export default Main;
