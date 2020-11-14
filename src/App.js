import React from 'react';
import './App.css'

import Navbar from './navbar/Navbar';
import About from './about/About';
import Projects from './projects/Projects'
import Footer from './footer/Footer';

const App = () => {

  return (
    <div id="container">
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
