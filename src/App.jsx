import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
