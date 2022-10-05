import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
//import MoviesCard from '../MoviesCard/MoviesCard';
//import { store } from "../../store";

function MoviesCardList({ isSearching }) {
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        <div className="movies-card-list__cards">

        </div>
        <button className="movies-card-list__button" type="button">Ещё</button>
      </div>
      <Preloader isSearching={isSearching}/>
    </div>
  );
}

export default MoviesCardList;