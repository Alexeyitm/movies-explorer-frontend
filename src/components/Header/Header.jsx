import './Header.css';
import { NavLink, useLocation } from "react-router-dom";
import BurgerButton from '../BurgerButton/BurgerButton';

function Header({ isActiveBurger, setBurger }) {

  const location = useLocation();
  
  return (
    <header className={`header
      ${location.pathname === "/signup" || location.pathname === "/signin" 
        ? "header_hidden"
        : location.pathname === "/"
          ? "header_landing"
          : ""}`}
    >
      <div className="header__container">
      <NavLink to="/">
        <div className="header__logo"></div>
      </NavLink>
        <nav className={`header__nav-landing ${location.pathname === "/" ? "header__nav-landing_hidden" : ""}`}>
          <NavLink className={({isActive}) => "header__link" + (isActive ? " header__link_active" : "")} to="movies">Фильмы</NavLink>
          <NavLink className={({isActive}) => "header__link" + (isActive ? " header__link_active" : "")} to="saved-movies">Сохранённые фильмы</NavLink>
          <NavLink className={({isActive}) => "header__link" + (isActive ? " header__link_active" : "")} to="profile">Аккаунт</NavLink>
        </nav>
        <nav className={`header__nav-main ${location.pathname === "/" ? "" : "header__nav-main_hidden"}`}>
          <NavLink className="header__link-registration" to="signup">Регистрация</NavLink>
          <NavLink className="header__link-signin" to="signin">Войти</NavLink>
        </nav>
        <BurgerButton
          isActiveBurger={isActiveBurger}
          setBurger={setBurger}
        />
      </div>
    </header>
  );
};

export default Header;