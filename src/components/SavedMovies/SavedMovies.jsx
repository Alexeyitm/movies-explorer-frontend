import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isActiveCheckbox, setCheckbox }) {
  return (
    <div className="saved-movies">
      <SearchForm
        isActiveCheckbox={isActiveCheckbox}
        setCheckbox={setCheckbox}
      />
      <MoviesCardList
        SavedMovies
      />
    </div>
  );
}

export default SavedMovies;