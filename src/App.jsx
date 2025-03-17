import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TimeDisplay from './components/TimeDisplay';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <motion.div
        className="app-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main>
          <TimeDisplay />
          <Hero />
          <Projects />
          <ContactForm />
        </main>
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
};

export default App;