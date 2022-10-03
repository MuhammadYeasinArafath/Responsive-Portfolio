import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {SiFiverr} from "react-icons/si";
import {SiUpwork} from "react-icons/si";
import {SiFreelancer} from "react-icons/si";

const HeaderSocial = () => {
    return (
        <div className='header_socials' data-aos="zoom-in-right" data-aos-duration="1000">
            
             <a href="https://www.facebook.com/md.yeasin.arafath.165/" target="_blank" rel="noopener noreferrer"><BsFacebook></BsFacebook></a>
             <a href="https://www.instagram.com/md.yeasin.arafath.165/" target="_blank" rel="noopener noreferrer"><BsInstagram></BsInstagram></a>
             <a href="https://twitter.com/MdYeasi54066810" target="_blank" rel="noopener noreferrer"><BsTwitter></BsTwitter></a>
             <a href="https://www.linkedin.com/in/md-yeasin-arafath-097918214/" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
             <a href="https://github.com/MuhammadYeasinArafath" target="_blank" rel="noopener noreferrer"><BsGithub></BsGithub></a>
             <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer"><SiFiverr></SiFiverr></a>
             <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer"><SiUpwork></SiUpwork></a>
             <a href="https://www.freelancer.com/" target="_blank" rel="noopener noreferrer"><SiFreelancer></SiFreelancer></a>
        </div>
    );
};

export default HeaderSocial;