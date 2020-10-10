import React from 'react';
import './App.css'

import Navbar from './navbar/Navbar';
import About from './about/About';
import Footer from './footer/Footer';

const App = () => {

  return (
    <div>
      <Navbar />
      <div className="filler">a</div>
      <div className="filler">a</div>
      <div className="filler">a</div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
