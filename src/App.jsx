

import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Experience from './component/Experience/Experience';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Portfolio from './component/Portfolio/Portfolio';
import Service from './component/Service/Service';
import Testimonials from './component/Testimonials/Testimonials';
import "swiper/css/bundle";
function App() {
  return (
   <>
   <Header></Header>
   <Nav></Nav>
   <About></About>
   <Experience></Experience>
   <Service></Service>
   <Portfolio></Portfolio>
   <Testimonials></Testimonials>
   <Contact></Contact>
   <Footer></Footer>
   </>
  );
}

export default App;
