import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" name="form">
          <div className="search-form__search">
            <input id="movie" className="search-form__input" type="text" name="input" placeholder="Фильм"/>
            <button className="search-form__button" type="submit"></button>
          </div>
          <div className="search-form__check">
            <input className="search-form__checkbox" type="checkbox" id="checkbox"></input>
            <label className="search-form__label" htmlFor="checkbox">Короткометражки</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;