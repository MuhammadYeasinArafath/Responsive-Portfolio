import React from 'react';
import CTA from './CTA';
import "./Header.css";
import ME from "../../assets/me.png";
import HeaderSocial from './HeaderSocial';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Header = () => {
    return (
        <header id='home'>
            <div className="container header_container">
                <h5 data-aos="zoom-in-left" data-aos-duration="1000">Hello I'm</h5>
                <h1 data-aos="zoom-in-right" data-aos-duration="1000">Md. Yeasin Arafath</h1>
                <h5 className='text-light' data-aos="zoom-in-left" data-aos-duration="1000">Fullstack Developer</h5>
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>
                <div className="me">
                    <img src={ME} alt="Me" />
                </div>
                
                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>

    );
};

export default Header;