import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { store } from "../../store";

function MoviesCardList() {
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        {store.map(el => <MoviesCard card={el} key={el.picture}/>)}
      </div>
    </div>
  );
}

export default MoviesCardList;