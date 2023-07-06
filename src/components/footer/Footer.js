import React from 'react';
import footer from '../../assets/img/footer.png'
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer (){

    return(
        <footer className='footer'>
        <div className='container'>
            <div className='footer_wrapper'>
                <div className='footer-box'>
                    <div className='logo'>
                        <div className='logo-img'>
                            <img src={footer} alt='' />
                        </div>
                        <h2>Eduhub</h2>
                    </div>
                    <p>
                        Embrace the future of innovation and technology with our cutting-edge solutions.
                    </p>
                </div>
                <div className='footer-box'>
                    <h4 className='footer_title'>Company</h4>
                    <ul className='footer-links'>
                        <li>
                            <Link to='/courses'>Our Programs</Link>
                        </li>
                        <li>
                           <Link to='/services'>Our Plan</Link>
                        </li>
                        <li>
                            <a href=''>Become a member</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-box'>
                    <h4 className='footer_title'>Quick Links</h4>
                    <ul className='footer-links'>
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link> 
                        </li>
                        <li>
                            <Link to='/support'>Support Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        </footer>
        

    )

} 