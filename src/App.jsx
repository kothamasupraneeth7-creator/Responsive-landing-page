import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Safety from './components/Safety';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Safety />
        <Locations />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
