import React from 'react';
import "./Contact.css";
import {HiOutlineMail} from "react-icons/hi";
import {RiMessengerLine} from "react-icons/ri";
import {FaWhatsapp} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Contact = () => {
    return (
        <section id='contact'>
           <h5 data-aos="fade-up" data-aos-duration="1000">Get In Touch</h5>
           <h2 data-aos="fade-up" data-aos-duration="1000">Contact Me</h2>

           <div className="container contact_container">
{/*Contact Options*/}
            <div className="contact_options" data-aos="fade-right" data-aos-duration="1000">
                 <div className="contact_option">
                    <HiOutlineMail className='contact_option-icon'></HiOutlineMail>
                    <h4>E-mail</h4>
                    <h5>mdyeasinarafathofficial@gmail.com</h5>
                    <a href="mailto:mdyeasinarafathofficial@gmail.com" rel="noreferrer"  target="_blank">Send E-mail</a>
                 </div>
                 <div className="contact_option">
                    <RiMessengerLine className='contact_option-icon'></RiMessengerLine>
                    <h4>Messenger</h4>
                    <h5>Md. Yeasin Arafath</h5>
                    <a href="https://m.me/md.yeasin.arafath.165" rel="noreferrer"  target="_blank">Send A Message</a>
                 </div>
                 <div className="contact_option">
                    <FaWhatsapp className='contact_option-icon'></FaWhatsapp>
                    <h4>Whatsapp</h4>
                    <h5>Md. Yeasin Arafath</h5>
                    <a href="https://wa.me/+8801834656796" rel="noreferrer"  target="_blank">Send A Message</a>
                    
                 </div>
            </div>
{/*Contact Form*/}
            <form action="" data-aos="fade-left" data-aos-duration="1000">
                <input type="text" name="name" placeholder='Your Full Name' id="" required/>
                <input type="email" name="email" placeholder='Your Email' id="" required/>
                <textarea name="message" placeholder='Your Message' id="" cols="30" rows="10" required></textarea>
                <button type="submit" className='btn btn-primary'>Send Message</button>
            </form>
           </div>
        </section>
    );
};

export default Contact;