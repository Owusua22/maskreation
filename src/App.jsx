// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import ContactUs from './Pages/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
   <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
       <Route path="gallery" element={<Home />} />
       <Route path="contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
