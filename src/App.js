import React from 'react';

import About from './about/About';
import Projects from './projects/Projects'
import Contact from './contact/Contact'
import Experience from './experience/Experience';
import Education from './education/Education'
import Footer from './footer/Footer';

import './App.css';

const App = () => {
  return (
    <div id="container" >
      <div id="inner-container" className="p-0 m-0">
        {/* left box */}
        <div id="left">
          <About id="home-about" />
        </div>
        {/* right section */}
        <div id="right">
          <div style={styles.homeEdu}><Education /></div>

          <div style={styles.homePro}><Projects /></div>
          <div style={styles.homeExp}><Experience  /></div>
          <div style={styles.homeCon}><Contact /></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

const styles = {
  homeExp: {
    width: "60%",
    marginRight: "0.5em",
    marginTop: "0.5em",
  },
  homeCon: { 
    width: "37%",
    marginLeft: "0.5em",
    marginTop: "0.5em",
  },
  homeEdu: {
    width: "37%",
    margin: 0,
    marginRight: "0.5em",
    marginBottom: "0.5em"
  },
  homePro: {
    marginLeft: "0.5em",
    marginBottom: "0.5em",
    width: "60%",
  }
}
