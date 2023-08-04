import React, {useState, useEffect} from 'react';
import '../styles/secondFeature.scss'

const SecondFeature = () =>{
    return(
        <div className='second-feature'>
            <ul>
            <li>this is test for 2</li>
                <li>this is test for 2a</li>
                <li>this is test for 2b</li>
            </ul>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg' />
        </div>
    )
}

export default SecondFeature;