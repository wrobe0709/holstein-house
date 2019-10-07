import './App.scss';

import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Rates from './components/rates/rates';
import React from 'react';
import Title from './components/title/title';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <div role="main" className="app">
      <Title />
      <Welcome />
      <About />
      <Rates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
