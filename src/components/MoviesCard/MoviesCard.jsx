import './MoviesCard.css';

function MoviesCard({ movie, SavedMovies }) {

  const url = 'https://api.nomoreparties.co';

  return (
    <article className="movies-card">
      <h2 className="movies-card__title">{movie.nameRU}</h2>
      <span className="movies-card__time">{movie.duration} минут</span>
      <img className="movies-card__picture" src={url + movie.image.formats.thumbnail.url} alt={movie.nameRU}/>
      <button 
        className={`movies-card__button 
          ${SavedMovies
            ? "movies-card__button_delete-movie"
            : movie
              ? "movies-card__button_saving-movie"
              : "movies-card__button_save-movie"
          }`
        }
        type="button"
      >
        {!movie.isSaved ? "Сохранить" : ""}
      </button>
    </article>
  );
}

export default MoviesCard;