import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { store } from "../../store";

function MoviesCardList({ SavedMovies }) {
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        {SavedMovies
          ? store.map(el => {if (el.isSaved) return <MoviesCard SavedMovies card={el} key={el.picture}/>})
          : store.map(el => <MoviesCard card={el} key={el.picture}/>)
        }
      </div>
    </div>
  );
}

export default MoviesCardList;