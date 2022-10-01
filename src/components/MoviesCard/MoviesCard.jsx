import './MoviesCard.css';

function MoviesCard({ card, SavedMovies }) {
  return (
    <article className="movies-card">
      <h2 className="movies-card__title">{card.title}</h2>
      <span className="movies-card__time">{card.time} минут</span>
      <img className="movies-card__picture" src={card.picture} alt={card.title}/>
      <button 
        className={`movies-card__button 
          ${SavedMovies
            ? "movies-card__button_delete-movie"
            : card.isSaved
              ? "movies-card__button_saving-movie"
              : "movies-card__button_save-movie"
          }`
        }
        type="button"
      >
        {!card.isSaved ? "Сохранить" : ""}
      </button>
    </article>
  );
}

export default MoviesCard;