import './Header.css';

function Header({ landing }) {
  return (
    <header className={`header ${landing ? "header_landing" : ""}`}>
      <div className="header__container">
        <div className="header__logo"></div>
        <nav className={`header__nav-landing ${landing ? "header__nav-landing_visible" : ""}`}>
          <a className="header__link">Фильмы</a>
          <a className="header__link">Сохранённые фильмы</a>
          <a className="header__link">Аккаунт</a>
        </nav>
        <nav className={`header__nav-main ${landing ? "" : "header__nav-main_visible"}`}>
          <a className="header__link-registration">Регистрация</a>
          <a className="header__link-signin">Войти</a>
        </nav>
        <button className={`header__burger ${landing ? "header__burger_landing" : ""}`}>
          <div className="header__burger-line"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;