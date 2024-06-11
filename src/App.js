import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

function App() {

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [language, setLanguage] = useState('italian');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, [language]);

  //** Gestione del menu  */
  const handleMenuClick = () => setIsMenuOpened(prevState => !prevState);


  //** Gestione della lingua  */
  const handleLanguageChange = (language) => {
    setLanguage(language);
    localStorage.setItem('language', language);
    window.location.reload();
  };

  return (
    <div className="App">
      <Header
        isMenuOpened={isMenuOpened}
        handleMenuClick={handleMenuClick}

        language={language}
        setLanguage={setLanguage}
        handleLanguageChange={handleLanguageChange}
      />
      <Main isMenuOpened={isMenuOpened} language={language} />
      <Footer isMenuOpened={isMenuOpened} language={language} />
    </div>
  );
}

export default App;

