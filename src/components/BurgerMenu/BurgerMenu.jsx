import './BurgerMenu.css';
import { NavLink } from "react-router-dom";


function BurgerMenu({ isActiveBurger, setBurger }) {

  const closeBurgerMenu = () => {
    setBurger(false);
  };

  return (
    <div className={`burger-menu ${isActiveBurger ? "burger-menu_active" : ""}`}>
      <div className="burger-menu__background"></div>
      <nav className="burger-menu__container">
        <NavLink
          className="burger-menu__link"
          to="/"
          onClick={closeBurgerMenu}
        >
          Главная
        </NavLink>
        <NavLink
          className={({isActive}) => "burger-menu__link" + (isActive ? " burger-menu__link_active" : "")}
          to="/movies"
          onClick={closeBurgerMenu}
        >
          Фильмы
        </NavLink>
        <NavLink
          className={({isActive}) => "burger-menu__link" + (isActive ? " burger-menu__link_active" : "")}
          to="/saved-movies"
          onClick={closeBurgerMenu}
        >
          Сохранённые фильмы
        </NavLink>
        <NavLink
          className={({isActive}) => "burger-menu__link" + (isActive ? " burger-menu__link_active" : "")}
          to="/profile"
          onClick={closeBurgerMenu}
        >
          Аккаунт
        </NavLink>
      </nav>
    </div> 
  );
}

export default BurgerMenu;