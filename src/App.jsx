import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import SplashScreen from './components/SplashScreen';
import Greeting from './components/Greeting';
import Skills from './components/Skills';
import Proficiency from './components/Proficiency';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TopButton from './components/TopButton';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <SplashScreen onFinish={() => setSplashDone(true)} />
      {splashDone && (
        <>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Greeting />
            <Skills />
            <Proficiency />
            <Education />
            <Experience />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer theme={theme} />
          <TopButton />
        </>
      )}
    </>
  );
}
