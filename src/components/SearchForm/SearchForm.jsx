import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" name="form">
          <input id="movie" className="search-form__input" type="text" name="input" placeholder="Фильм"/>
          <button className="search-form__button" type="submit"></button>
          <input className="search-form__checkbox" type="checkbox" id="checkbox"></input>
          <label className="search-form__label" htmlFor="checkbox">Короткометражки</label>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;