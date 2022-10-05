import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  isActiveCheckbox,
  setCheckbox,
  isMoviesInput,
  setMoviesInput,
  searchMovies,
  isMovies,
}) {
  return (
    <div className="movies">
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

export default Movies;