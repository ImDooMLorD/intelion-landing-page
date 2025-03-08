import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import WhatWeDo from './sections/WhatWeDo/WhatWeDo';
import HowWeDo from './sections/HowWeDo/HowWeDo';
import ITVendors from './sections/ITVendors/ITVendors';
import LatestNews from './sections/LatestNews/LatestNews';
import UpcomingEvents from './sections/UpcomingEvents/UpcomingEvents';
import Recognition from './sections/Recognition/Recognition';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <HowWeDo />
        <ITVendors />
        <LatestNews />
        <UpcomingEvents />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
