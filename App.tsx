import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Patients from './components/Patients';
import Services from './components/Services';
import VisitProcess from './components/VisitProcess';
import Equipment from './components/Equipment';
import Stories from './components/Stories';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Patients />
      <Services />
      <VisitProcess />
      <Equipment />
      <Stories />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
