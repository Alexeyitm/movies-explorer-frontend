import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function App() {

  const [isLogined, setLogined] = useState(false);
  const [isActiveCheckbox, setCheckbox] = useState(false);
  const [isActiveBurger, setBurger] = useState(false);

  const closeBurgerByEsc = (e) => {
    if (e.key === "Escape") {
      setBurger(false);
    }
  }
  
  useEffect(() => {
    closeBurgerByEsc();
  },[])

  return (
    <div className="app">
      <Header
        isLogined={isLogined}
        isActiveBurger={isActiveBurger}
        setBurger={setBurger}
      />
      <Movies
        isActiveCheckbox={isActiveCheckbox}
        setCheckbox={setCheckbox}
      />

      <BurgerMenu
        isActiveBurger={isActiveBurger}
      />

      <Footer/>
    </div>
  );
}

export default App;
