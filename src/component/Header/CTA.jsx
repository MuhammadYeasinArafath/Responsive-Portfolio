import React from 'react';
import CV from "../../assets/cv.pdf";

const CTA = () => {
    return (
        <div className='cta' data-aos="zoom-in" data-aos-duration="1000">
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
    );
};

export default CTA;