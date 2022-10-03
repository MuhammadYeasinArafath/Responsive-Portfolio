import React from 'react';
import "./Nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BsBookmarkCheckFill} from "react-icons/bs";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import { useState } from 'react';
const Nav = () => {
    const[activeNav, setActiveNav] = useState('#home')
    return (
        <nav>
           <a href="#home" onClick={() =>setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome></AiOutlineHome></a> 
           <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser></AiOutlineUser></a>
           <a href="#experience" onClick={() =>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkCheckFill></BsBookmarkCheckFill></a>
           <a href="#service" onClick={() =>setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine></RiServiceLine></a>
           <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail></BiMessageSquareDetail></a>

        </nav>
    );
};

export default Nav;
