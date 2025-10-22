import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Inventory from './components/Inventory';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="scroll-smooth" id="top">
        <Hero />
        <Benefits />
        <Inventory />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
