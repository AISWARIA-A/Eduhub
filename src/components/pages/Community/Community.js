import React from 'react';
import './Community.css';
import tc from '../../../assets/img/tc.png';


export default function Community (){

    const handleClick = () => {
        window.open('https://chat.whatsapp.com/H1qQxZ2iv5y0x5XE4dOg0b')
    }

    return(

       <div className='container'>
        <div className='start-wrapper'>
            <div className='start-img'>
                <img src={tc} alt=''></img>
            </div>
            <div className='start-content'>
                <h2 className='section-title'>Join Our Free Tech Community</h2>
                <p>Unlock the Power of Knowledge and Innovation by Joining Our Vibrant and Free Whatsapp Community</p>
                <button className='register-btn' onClick={handleClick}>Join Now</button>
            </div>
        </div>
       </div> 

    )

}