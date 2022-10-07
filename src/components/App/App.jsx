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
import Preloader from '../Preloader/Preloader';
import { apiMovies } from '../../utils/MoviesApi';

function App() {

  const [isActiveBurger, setBurger] = useState(false);
  const [isActiveCheckbox, setCheckbox] = useState(false);
  const [isMoviesInput, setMoviesInput] = useState('');
  const [isMovies, setMovies] = useState([]);
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

  const filterMovies = (arr, query) => {
    return arr.filter(el => 
      (el.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1) &&
      (isActiveCheckbox ? el.duration <= 45 : el.duration > 45)
    )
  }

  const searchMovies = (e) => {
    e.preventDefault();
    if (!isMoviesInput) {
      throw new Error("Нужно ввести ключевое слово");
    } else {
      setSearching(true);
      apiMovies
        .getMovies()
        .then(movies => {
          localStorage.setItem("switch", isActiveCheckbox);
          localStorage.setItem("input", isMoviesInput);
          localStorage.setItem("movies", JSON.stringify(movies));
          setMovies(filterMovies(movies, localStorage.input))
          console.log(isMovies)
        })
        .finally(setSearching(false));
    }
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
                isMovies={isMovies}
              />
            }/>
            <Route path='/saved-movies' element={
              <SavedMovies
                isActiveCheckbox={isActiveCheckbox}
                setCheckbox={setCheckbox}
                isMoviesInput={isMoviesInput}
                setMoviesInput={setMoviesInput}
                searchMovies={searchMovies}
                isMovies={isMovies}
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

        <Preloader isSearching={isSearching} />

        <Footer/>
      </div>
    
  );
}

export default App;
