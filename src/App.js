import React from 'react';

import About from './about/About';
import Projects from './projects/Projects'
import Contact from './contact/Contact'
import Footer from './footer/Footer';
import Experience from './experience/Experience';
import Socials from './socials/Socials';

import { Container, Button, Modal } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Container id="container">
        {/* left box */}
        <About />
        {/* right section */}
        <Container id="right">
          <Projects />
          <Contact />
          <Experience />
          <Socials />
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default App;
