import './SearchForm.css';
import Checkbox from '../Checkbox/Checkbox';

function SearchForm({
  isCheckbox,
  setCheckbox,
  isMoviesInput,
  setMoviesInput,
  searchMovies,
}) {

  const handleSearchChange = (e) => {
    setMoviesInput(e.target.value);
  }

  return (
    <div className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" name="form" required>
          <div className="search-form__search">
            <input
              id="movie"
              className="search-form__input"
              type="text"
              name="input"
              placeholder="Фильм"
              value={isMoviesInput}
              onChange={handleSearchChange}
            />
            <button
              className="search-form__button"
              type="submit"
              onClick={searchMovies}
            ></button>
          </div>
          <div className="search-form__check">
            <Checkbox
              isCheckbox={isCheckbox}
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