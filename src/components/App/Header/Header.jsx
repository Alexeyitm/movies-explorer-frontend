import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <footer className="header">
      <div className="header__container">
        <div className="header__logo"></div>
        <nav className="header__nav">
          <a className="header__link">Фильмы</a>
          <a className="header__link">Сохранённые фильмы</a>
          <a className="header__link">Аккаунт</a>
        </nav>
        <button className="header__burger">
          <div className="header__burger-line"></div>
        </button>
      </div>
    </footer>
  );
};

export default Header;