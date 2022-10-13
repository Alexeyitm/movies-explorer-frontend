import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
  isCheckbox,
  setCheckbox,
  isMoviesInput,
  setMoviesInput,
  searchMovies,
  isMovies,
}) {
  return (
    <div className="saved-movies">
      <SearchForm
        isCheckbox={isCheckbox}
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