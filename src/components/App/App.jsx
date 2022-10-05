import './App.css';
import { useState, useEffect } from 'react';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { apiMovies } from '../../utils/MoviesApi';

function App() {

  const [isActiveCheckbox, setCheckbox] = useState(true);
  const [isActiveBurger, setBurger] = useState(false);
  const [isMoviesInput, setMoviesInput] = useState('');
  const [isSearching, setSearching] = useState(false);

  useEffect(() => {
    function closeByEscape(e) {
      if (e.key === 'Escape') {
        setBurger();
      }
    }
    if (isActiveBurger) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isActiveBurger]);

  const searchMovies = (e) => {
    e.preventDefault();
    setSearching(true);
    apiMovies
      .getMovies()
      .then(movies => localStorage.setItem("movies", JSON.stringify(movies)));
  }

  return (
      <div className="app">
        <Header
          isActiveBurger={isActiveBurger}
          setBurger={setBurger}
        />

        <main>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/movies' element={
              <Movies
                isActiveCheckbox={isActiveCheckbox}
                setCheckbox={setCheckbox}
                isMoviesInput={isMoviesInput}
                setMoviesInput={setMoviesInput}
                searchMovies={searchMovies}
                isSearching={isSearching}
              />
            }/>
            <Route path='/saved-movies' element={
              <SavedMovies
                isActiveCheckbox={isActiveCheckbox}
                setCheckbox={setCheckbox}
              />
            }/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/signup' element={<Register/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>

          <BurgerMenu
            isActiveBurger={isActiveBurger}
            setBurger={setBurger}
          />
        </main>
        <Footer/>
      </div>
    
  );
}

export default App;
