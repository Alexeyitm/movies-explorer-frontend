import './Header.css';
import { NavLink } from "react-router-dom";
import BurgerButton from '../BurgerButton/BurgerButton';

function Header({ isLogined, isActiveBurger, setBurger }) {
  return (
    <header className={`header ${isLogined ? "header_landing" : ""}`}>
      <div className="header__container">
      <NavLink to="/">
        <div className="header__logo"></div>
      </NavLink>
        <nav className={`header__nav-landing ${isLogined ? "header__nav-landing_hidden" : ""}`}>
          <NavLink className="header__link" to="movies">Фильмы</NavLink>
          <NavLink className="header__link" to="saved-movies">Сохранённые фильмы</NavLink>
          <NavLink className="header__link" to="profile">Аккаунт</NavLink>
        </nav>
        <nav className={`header__nav-main ${isLogined ? "" : "header__nav-main_hidden"}`}>
          <a className="header__link-registration">Регистрация</a>
          <a className="header__link-signin">Войти</a>
        </nav>
        <BurgerButton
          isLogined={isLogined}
          isActiveBurger={isActiveBurger}
          setBurger={setBurger}
        />
      </div>
    </header>
  );
};

export default Header;