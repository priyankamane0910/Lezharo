import './App.css';
import Navbar from './Component/Navbar';
import Card from './Component/Card';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Innovations from './Component/Innovations';
import Business_Services from './Component/Business_Services';
import Financial_Services from './Component/Financial_Services';
import Bootcamp  from './Component/Bootcamp';
import Contact_Us from'./Component/Contact_Us';
import Footer from './Component/Footer';
import About from './Component/About';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Card/>}/>
    <Route path="/Innovations" element={<Innovations/>}/>
    <Route path="/Business_Services" element={<Business_Services/>}/>
    <Route path="/Financial_Services" element={<Financial_Services/>}/>
    <Route path="/Bootcamp" element={<Bootcamp/>}/>
    <Route path="/contact_us" element={<Contact_Us />}/>
    <Route path="/about" element={<About/>}/>
    
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
