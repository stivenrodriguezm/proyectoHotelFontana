import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Rooms from './components/Rooms';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Rooms />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;


