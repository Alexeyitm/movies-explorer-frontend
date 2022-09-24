import './App.css';
import { useState } from "react";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

function App() {

  const [isActiveCheckbox, setCheckbox] = useState(false);
  const [isActiveBurger, setBurger] = useState(false);

  return (
    <div className="app">
      <Header
        isActiveBurger={isActiveBurger}
        setBurger={setBurger}
      />

      <Movies
        isActiveCheckbox={isActiveCheckbox}
        setCheckbox={setCheckbox}
      />

      <Footer/>
    </div>
  );
}

export default App;
