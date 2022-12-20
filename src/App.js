import React from "react";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Bottles from "./components/pages/Bottles"
import Contact from "./components/pages/Contact"
import Header from "./components/navbar/Header";

function App () {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>

       <Route path="/about" element={<About />}></Route>

       <Route path="/bottles" element={<Bottles />}></Route>

       <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </Router>
    
  );
};

export default App;