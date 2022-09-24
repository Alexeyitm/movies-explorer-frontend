import './MoviesCard.css';

function MoviesCard({ card }) {
  return (
    <article className="movies-card">
      <h2 className="movies-card__title">{card.title}</h2>
      <span className="movies-card__time">{card.time} минут</span>
      <img className="movies-card__picture" src={card.picture} alt={card.title}/>
      <button className="movies-card__button"></button>
    </article>
  );
}

export default MoviesCard;