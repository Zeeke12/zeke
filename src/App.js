import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact Us/Contact';
import About from './pages/About Us/About';


function App() {
  return (
    <div className="w-full m-0">
      <div className='flex flex-col md:flex-row '>
      <BrowserRouter>
      <Navbar />
      <div className='md:ml-[144px] bg-blue-600 md:w-[90%] h-full'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>

      </Routes>
      <Footer />
      </div>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
