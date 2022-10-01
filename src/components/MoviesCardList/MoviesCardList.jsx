import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { store } from "../../store";

function MoviesCardList({ SavedMovies }) {
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        <div className="movies-card-list__cards">
          {SavedMovies
            ? store.map(el => {if (el.isSaved) return <MoviesCard SavedMovies card={el} key={el.picture}/>})
            : store.map(el => <MoviesCard card={el} key={el.picture}/>)
          }
        </div>
        <button className="movies-card-list__button" type="button">Ещё</button>
      </div>
      
    </div>
  );
}

export default MoviesCardList;