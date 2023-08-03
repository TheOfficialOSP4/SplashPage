import React from 'react';
// Navigation, Team, Shieldql, Description (<p>), Redirect
import Navigation from './Navigation.jsx';
import Shieldql from './Shieldql.jsx'
import Redirect from './Redirect.jsx';
import Team from './Team.jsx';
import '../styles/main.scss';

//Parent Componenet: App.jsx
// contains all the components of our application
const Main = () =>{
    return (
        <div className='grid-container'>
            <Navigation />
            <Shieldql />
        </div>
        
    )
}


export default Main;
