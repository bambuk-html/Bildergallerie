import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Gallery from './Pages/Gallery';
import NotFound from './Pages/NotFound';
import Impressum from './Pages/Impressum';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='*' element={<NotFound />} />
          <Route path='Impressum' element={<Impressum />} />
          <Route path='About' element={<AboutUs />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};