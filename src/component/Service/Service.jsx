import React from 'react';
import "./Service.css";
import {BiCheck} from "react-icons/bi"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Service = () => {
    return ( 
        <>
<section id='service'>
            <h5 data-aos="fade-up" data-aos-duration="1000">What I Offer</h5>
            <h2 data-aos="fade-up" data-aos-duration="1000">My Services</h2>

            <div className="container service_container">
                 {/*service 1 */}
                <div className="service" data-aos="fade-right" data-aos-duration="1000">
                    <div className="service_head">
                        <h3>Frontend Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                    </ul>

                </div>
                 {/*service 2 */}
                <div className="service" data-aos="fade-left" data-aos-duration="1000">
                <div className="service_head">
                        <h3>Backend Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                    </ul>

                </div>
                {/*service 3 */}
                <div className="service" data-aos="fade-right" data-aos-duration="1000">
                <div className="service_head">
                        <h3>Android Application Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                    </ul>

                </div>
                {/*service 4 */}
                <div className="service" data-aos="fade-left" data-aos-duration="1000">
                <div className="service_head">
                        <h3>Digital Marketing</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                    </ul>

                </div>
                {/*service 5 */}
                <div className="service" data-aos="fade-right" data-aos-duration="1000">
                <div className="service_head">
                        <h3>Wordpress, Shopify, Wix & Woocomerce Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                    </ul>

                </div>
                {/*service 6 */}
                <div className="service" data-aos="fade-left" data-aos-duration="1000">
                <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck></BiCheck>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                    </ul>

                </div>
            </div>
</section>

        </>

    
    );
};

export default Service;