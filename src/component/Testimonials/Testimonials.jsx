
import "./Testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Testimonials = () => {
    return (
        <section id='testimonials'>
          <h5 data-aos="fade-up" data-aos-duration="1000">Review From Clients</h5>
          <h2 data-aos="fade-up" data-aos-duration="1000">Testimonials</h2>

       
          <Swiper className="container testimonials_container"
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
      >
{/*Fake Testimonials*/}
           
            <SwiperSlide className='testimonial'>
                <div className="client_avatar">
                    <img src={AVATAR1} alt="avatar 1" />
                </div>
                <h5 className='client_name'>Ernest Archiever</h5>
                    <small className='client_review'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, inventore provident. Quo atque minus eos cumque voluptatibus? Facilis, velit ipsam!
                    </small>
            </SwiperSlide>
            
            <SwiperSlide className='testimonial'>
                <div className="client_avatar">
                    <img src={AVATAR2} alt="avatar 2" />
                </div>
                <h5 className='client_name'>Ernest Archiever</h5>
                    <small className='client_review'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, inventore provident. Quo atque minus eos cumque voluptatibus? Facilis, velit ipsam!
                    </small>
            </SwiperSlide>
            
            <SwiperSlide className='testimonial'>
                <div className="client_avatar">
                    <img src={AVATAR3} alt="avatar 3" />
                </div>
                <h5 className='client_name'>Ernest Archiever</h5>
                    <small className='client_review'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, inventore provident. Quo atque minus eos cumque voluptatibus? Facilis, velit ipsam!
                    </small>
            </SwiperSlide>
            
            <SwiperSlide className='testimonial'>
                <div className="client_avatar">
                    <img src={AVATAR4} alt="avatar 4" /> 
                </div>
                <h5 className='client_name'>Ernest Archiever</h5>
                    <small className='client_review'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, inventore provident. Quo atque minus eos cumque voluptatibus? Facilis, velit ipsam!
                    </small>
            </SwiperSlide>
            
           
           </Swiper>
        </section>
    );
};

export default Testimonials;