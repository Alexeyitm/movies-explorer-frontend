import './SearchForm.css';
import Checkbox from '../Checkbox/Checkbox';

function SearchForm({ isActiveCheckbox, setCheckbox }) {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" name="form">
          <div className="search-form__search">
            <input id="movie" className="search-form__input" type="text" name="input" placeholder="Фильм"/>
            <button className="search-form__button" type="submit"></button>
          </div>
          <div className="search-form__check">
            <Checkbox
              isActiveCheckbox={isActiveCheckbox}
              setCheckbox={setCheckbox}
            />
            <label className="search-form__label" htmlFor="checkbox">Короткометражки</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;