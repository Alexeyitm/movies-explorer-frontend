import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isMovies }) {
  return (
    <div className="movies-card-list">
      <div className={`movies-card-list__container ${isMovies ? "movies-card-list__container_active" : ""}`}>
        <div className="movies-card-list__cards">
          {isMovies.map(movie => <MoviesCard movie={movie} key={movie.id}/>)}
        </div>
        <button className="movies-card-list__button" type="button">Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;