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
  const [isCheckbox, setCheckbox] = useState(false);
  const [isMoviesInput, setMoviesInput] = useState('');
  const [isMovies, setMovies] = useState([]);
  const [isSearching, setSearching] = useState(false);

  // Фильтрация фильмов согласно инпуту
  const filterMovies = (arr, query, checkbox) => {
    return JSON.stringify(arr.filter(el =>
      (el.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1) &&
      (checkbox ? el.duration <= 45 : el.duration > 0)
    ))
  }

  // Сохранение фильмов в стейт
  const setMoviesCards = () => {
    isCheckbox ? setMovies(JSON.parse(localStorage.searchMoviesAll)) : setMovies(JSON.parse(localStorage.searchMoviesShort))
  }

  // Сохранение инпута, массива найденных фильмов и состояния чек-бокса в localStorage
  const searchMovies = (e) => {
    e.preventDefault();
    if (!isMoviesInput) {
      throw new Error("Нужно ввести ключевое слово");
    } else {
      localStorage.setItem("searchInput", isMoviesInput);
      localStorage.setItem("searchMoviesAll", filterMovies(JSON.parse(localStorage.allMovies), isMoviesInput, true));
      localStorage.setItem("searchMoviesShort", filterMovies(JSON.parse(localStorage.allMovies), isMoviesInput, false));
      localStorage.setItem("checkboxMovies", isCheckbox);
      setMoviesCards();
    }
  }

  // Сохранение всех фильмов в localStorage при загрузке страницы
  useEffect(() => {
    apiMovies
      .getMovies()
      .then(movies => {
      localStorage.setItem("allMovies", JSON.stringify(movies));
    })
  }, []);

  // Перерисовка карточек в зависимости от чекбокса
  useEffect(() => {
    setMoviesCards();
  }, [isCheckbox]);

  // Закрытие бургер-меню нажатием на Esc
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
                isCheckbox={isCheckbox}
                setCheckbox={setCheckbox}
                isMoviesInput={isMoviesInput}
                setMoviesInput={setMoviesInput}
                searchMovies={searchMovies}
                isMovies={isMovies}
              />
            }/>
            <Route path='/saved-movies' element={
              <SavedMovies
                isCheckbox={isCheckbox}
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
