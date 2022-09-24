import './Header.css';
import BurgerButton from '../BurgerButton/BurgerButton';

function Header({ isActiveBurger, setBurger }) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo"></div>
        <nav className="header__nav-landing">
          <a className="header__link">Фильмы</a>
          <a className="header__link">Сохранённые фильмы</a>
          <a className="header__link">Аккаунт</a>
        </nav>
        <nav className="header__nav-main">
          <a className="header__link-registration">Регистрация</a>
          <a className="header__link-signin">Войти</a>
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