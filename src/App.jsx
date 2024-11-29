import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Education from './Education';
import Hobbies from './Hobbies';
import Contact from './Contact';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/education' element={<Education/>} />
        <Route path='/hobbies' element={<Hobbies/>} />
        <Route path='/contact' element={<Contact/>} />
         
      </Routes>
    </BrowserRouter>
  );
};

export default App;
