import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Home from './Components/Home/Home';
import Instructor from './Components/Instructor/Instructor';

import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';
import Stats from './Components/Stats/Stats';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Courses/>
   <Pricing/>
   <Stats/>
   <Instructor/>
   <Testimonial/>
   <Gallery/>
   <Blog/>
   <Contact/>
   <Footer/>
   
   </>
  );
}

export default App;
