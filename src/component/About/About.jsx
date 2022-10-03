
import "./About.css";
import {FaAward} from "react-icons/fa";
import {IoIosPlayCircle} from "react-icons/io";
import {FaUsers} from "react-icons/fa";
import {MdFolderSpecial} from "react-icons/md";
import ME from "../../assets/me-about.jpg";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const About = () => {
    return (
        <section id='about'>
            <h5 data-aos="fade-up" data-aos-duration="1000">Get To Know</h5>
            <h2 data-aos="fade-up" data-aos-duration="1000">About Me</h2>
            <div className="container about_container">
                 <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Me" />
                    </div>
                    <div className="about_content">
                        <div className="about_cards" data-aos="fade-left" data-aos-duration="1000">
                            <article className='about_card'>
                                <FaAward className='about_icon'></FaAward>
                                <h5>Experience</h5>
                                <small>3+ Years Working</small>
                            </article>
                            <article className='about_card'>
                                <FaUsers className='about_icon'></FaUsers>
                                <h5>Clients</h5>
                                <small>200+ Worldwide</small>                           
                            </article>
                            <article className='about_card'>
                             <MdFolderSpecial className='about_icon'></MdFolderSpecial>   
                            <h5>Projects</h5>
                            <small>90+ Completed Projects</small>
                            </article>
                        </div>
                        <p data-aos="fade-left" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias minus corporis debitis temporibus id, consectetur laboriosam tenetur voluptate unde. Delectus magnam beatae mollitia quidem modi, inventore quos temporibus minus sit.</p>
                        
                        <div className='about_btn' data-aos="zoom-in" data-aos-duration="1000">
                        <a href="#video" className='btn'>Watch My Intro Video<IoIosPlayCircle className='Play'></IoIosPlayCircle></a>
                        <a href="#contact" className='btn'>Let's Talk</a>
                        </div> 
                    </div>
                 </div>
                        <div id="video" className="video">
                        <iframe width="560" height="315" class="responsive-youtube" src="https://www.youtube.com/embed/jYXZYKRDj4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h5>My Intro Video</h5>
                        </div>
            </div>

        </section>
    );
};

export default About;