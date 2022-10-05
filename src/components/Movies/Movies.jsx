import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  isActiveCheckbox,
  setCheckbox,
  isMoviesInput,
  setMoviesInput,
  searchMovies,
  isSearching,
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
        isSearching={isSearching}
      />
    </div>
  );
}

export default Movies;