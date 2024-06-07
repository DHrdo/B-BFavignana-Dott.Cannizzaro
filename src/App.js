import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

function App() {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpened(prevState => !prevState);
  }

  return (
    <div className="App">
      <Header
        isMenuOpened={isMenuOpened}
        handleMenuClick={handleMenuClick}
      />
      <Main isMenuOpened={isMenuOpened}/>
      <Footer isMenuOpened={isMenuOpened}/>
    </div>
  );
}

export default App;
