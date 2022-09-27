import './Register.css';
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className="register">
        <NavLink className="register__logo" to="/"></NavLink>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <label htmlFor="name" className="register__label">Имя</label>
          <input
            id="name"
            className="register__input register__input_name"
            type="text"
            name="name"
          />
          <label htmlFor="email" className="register__label">E-mail</label>
          <input
            id="email"
            className="register__input register__input_email"
            type="email"
            name="email"
          />
          <label htmlFor="password" className="register__label">Пароль</label>
          <input
            id="password"
            className="register__input register__input_password"
            type="password"
            name="password"
          />
          <button className="register__button-register">Зарегистрироваться</button>
          <div className="register__sign-in">
            <span className="register__span">Уже зарегистрированы?</span>
            <NavLink className="register__sign-in-link" to="/login">Войти</NavLink>
          </div>
        </form>
    </div>
  );
}

export default Register;