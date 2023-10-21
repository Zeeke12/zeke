import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='flex flex-row'>
      <Navbar className="left-0" />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
