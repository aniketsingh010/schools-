import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Academics from './pages/Academics';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/About" element={<About />} ></Route>
        <Route path="/Admission" element={<Admission />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/Facilities" element={<Facilities />} ></Route>
        <Route path="/Gallery" element={<Gallery />} ></Route>
        <Route path="/Academics" element={<Academics />} ></Route>
          <Route path="/Navbar" element={<Navbar />} ></Route>
          {/* <Route path="/Footer" element={<Footer/>} ></Route> */}
          <Route path="/Footer" element={<Footer />} ></Route>
          <Route path="/Navbar" element={<Navbar />} ></Route>
            {/* <Route path="/Navbar" element={<Fees />} ></Route> */}

          

          
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
