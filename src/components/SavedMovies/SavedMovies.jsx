import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
  isActiveCheckbox,
  setCheckbox,
  isMoviesInput,
  setMoviesInput,
  searchMovies,
  isMovies,
}) {
  return (
    <div className="saved-movies">
      <SearchForm
        isActiveCheckbox={isActiveCheckbox}
        setCheckbox={setCheckbox}
        isMoviesInput={isMoviesInput}
        setMoviesInput={setMoviesInput}
        searchMovies={searchMovies}
      />
      <MoviesCardList
        isMovies={isMovies}
      />
    </div>
  );
}

export default SavedMovies;