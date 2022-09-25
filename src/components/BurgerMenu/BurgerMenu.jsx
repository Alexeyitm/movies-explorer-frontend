import './BurgerMenu.css';

function BurgerMenu({ isActiveBurger }) {
  return (
    <div className={`burger-menu ${isActiveBurger ? "burger-menu_active" : ""}`}>
      <div className="burger-menu__background"></div>
      <nav className="burger-menu__container">
        <a className="burger-menu__link">Главная</a>
        <a className="burger-menu__link">Фильмы</a>
        <a className="burger-menu__link">Сохранённые фильмы</a>
        <a className="burger-menu__link">Аккаунт</a>
      </nav>
    </div> 
  );
}

export default BurgerMenu;