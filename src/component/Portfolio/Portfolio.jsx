import React from 'react';
import "./Portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5 data-aos="fade-up" data-aos-duration="1000">My Recent Works</h5>
            <h2 data-aos="fade-up" data-aos-duration="1000">My Portfolio</h2>

          <div className="container portfolio_container">
{/*project 1*/}
            <article className='portfolio_item' data-aos="slide-up" data-aos-duration="1000">
                 <div className="portfolio_item-image">
                           <img src={IMG1} alt="" />
                 </div>
                    <h3>title1</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github.com" rel="noreferrer" className='btn' target="_blank">GitHub</a>
                    <a href="http://github.com" rel="noreferrer" className='btn btn_primary' target="_blank">Live Demo</a>
                    </div>
            </article>
{/*project 2*/}
            <article className='portfolio_item' data-aos="slide-up" data-aos-duration="1000">
                 <div className="portfolio_item-image">
                           <img src={IMG2} alt="" />
                 </div>
                    <h3>title2</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github.com" rel="noreferrer" className='btn' target="_blank">GitHub</a>
                    <a href="http://github.com" rel="noreferrer" className='btn btn_primary' target="_blank">Live Demo</a>
                    </div>
            </article>
{/*project 3*/}
            <article className='portfolio_item'  data-aos="slide-up" data-aos-duration="1000">
                 <div className="portfolio_item-image">
                           <img src={IMG3} alt="" />
                 </div>
                    <h3>title3</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github.com" rel="noreferrer" className='btn' target="_blank">GitHub</a>
                    <a href="http://github.com" rel="noreferrer" className='btn btn_primary' target="_blank">Live Demo</a>
                    </div>
            </article>
{/*project 4*/}
            <article className='portfolio_item' data-aos="slide-up" data-aos-duration="1000">
                 <div className="portfolio_item-image">
                           <img src={IMG4} alt="" />
                 </div>
                    <h3>title4</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github.com" rel="noreferrer" className='btn' target="_blank">GitHub</a>
                    <a href="http://github.com" rel="noreferrer" className='btn btn_primary' target="_blank">Live Demo</a>
                    </div>
            </article>
{/*project 5*/}
            <article className='portfolio_item' data-aos="slide-up" data-aos-duration="1000">
                 <div className="portfolio_item-image">
                           <img src={IMG5} alt="" />
                 </div>
                    <h3>title5</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github.com" rel="noreferrer" className='btn' target="_blank">GitHub</a>
                    <a href="http://github.com" rel="noreferrer" className='btn btn_primary' target="_blank">Live Demo</a>
                    </div>
            </article>
{/*project 6*/}
            <article className='portfolio_item' data-aos="slide-up" data-aos-duration="1000">
                 <div className="portfolio_item-image">
                           <img src={IMG6} alt="" />
                 </div>
                    <h3>title6</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github.com" rel="noreferrer" className='btn' target="_blank">GitHub</a>
                    <a href="http://github.com" rel="noreferrer" className='btn btn_primary' target="_blank">Live Demo</a>
                    </div>
            </article>
{/*project 7*/}
          </div>

        </section>
    );
};

export default Portfolio;