import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  isCheckbox,
  setCheckbox,
  isMoviesInput,
  setMoviesInput,
  searchMovies,
  isMovies,
}) {
  return (
    <div className="movies">
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

export default Movies;