import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
