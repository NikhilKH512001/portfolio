import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';
import AdminPanel from './components/AdminPanel';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white selection:bg-brand-primary selection:text-white relative transition-colors duration-300">
      <Toaster position="bottom-right" />
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <AdminPanel />
    </div>
  );
}

export default App;
