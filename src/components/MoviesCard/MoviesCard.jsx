import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard({ movie }) {

  const url = 'https://api.nomoreparties.co';
  const location = useLocation();

  return (
    <article className="movies-card">
      <h2 className="movies-card__title">{movie.nameRU}</h2>
      <span className="movies-card__time">{movie.duration} минут</span>
      <img className="movies-card__picture" src={url + movie.image.formats.thumbnail.url} alt={movie.nameRU}/>
      <button 
        className={`movies-card__button 
          ${location.pathname === "/saved-movies"
            ? "movies-card__button_delete-movie"
            : "movies-card__button_saving-movie"
          }`
        }
        type="button"
      >
        {location.pathname === "/saved-movies" ? "" : "Сохранить"}
      </button>
    </article>
  );
}

export default MoviesCard;