import './Login.css';
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="login">
        <NavLink className="login__logo" to="/"></NavLink>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <label htmlFor="email" className="login__label">E-mail</label>
          <input
            id="email"
            className="login__input login__input_email"
            type="email"
            name="email"
          />
          <span className="login__error">Что-то пошло не так...</span>
          <label htmlFor="password" className="login__label">Пароль</label>
          <input
            id="password"
            className="login__input login__input_password"
            type="password"
            name="password"
          />
          <span className="login__error">Что-то пошло не так...</span>
          <button className="login__button-login" type="button">Войти</button>
          <div className="login__register">
            <span className="login__span">Ещё не зарегистрированы?</span>
            <NavLink className="login__register-link" to="/signup">Регистрация</NavLink>
          </div>
        </form>
    </div>
  );
}

export default Login;