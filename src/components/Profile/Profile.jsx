import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <input id="name" className="profile__input profile__input_name" type="text" name="name" placeholder="Введите имя пользователя"/>
          <input id="email" className="profile__input profile__input_email" type="text" name="email" placeholder="Введите почту пользователя"/>

          <button className="profile__button-save" type="submit"></button>
          <button className="profile__button-save" type="submit"></button>
        </form>
      </div>
    </div>
  );
}

export default Profile;