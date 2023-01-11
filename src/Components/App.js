import React from 'react';
import './App.css';
import Footer from './Sections/Footer';
import NavBar from './Sections/NavBar';
import About from './Sections/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
