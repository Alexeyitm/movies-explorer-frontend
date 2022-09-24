import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isActiveCheckbox, setCheckbox }) {
  return (
    <div className="movies">
      <SearchForm
        isActiveCheckbox={isActiveCheckbox}
        setCheckbox={setCheckbox}
      />
      <MoviesCardList/>
    </div>
  );
}

export default Movies;