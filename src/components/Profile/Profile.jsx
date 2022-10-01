import './Profile.css';
import { user } from '../../store.js'

function Profile() {
  return (
    <div className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, {user.name}!</h2>
        <form className="profile__form">
          <div className="profile__name">
            <label htmlFor="name" className="profile__label">Имя</label>
            <input
              id="name"
              className="profile__input profile__input_name"
              type="text"
              name="name"
              placeholder="Введите имя пользователя"
              defaultValue={user.name}
            />
          </div>
          <div className="profile__email">
            <label htmlFor="email" className="profile__label">E-mail</label>
            <input
              id="email"
              className="profile__input profile__input_email"
              type="email"
              name="email"
              placeholder="Введите почту пользователя"
              defaultValue={user.email}
            />
          </div>
          <button className="profile__button profile__button_edit" type="button">Редактировать</button>
          <button className="profile__button profile__button_exit" type="button">Выйти из аккаунта</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;