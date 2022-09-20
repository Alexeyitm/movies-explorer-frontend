import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">
          Портфолио
        </h2>
        <div className="portfolio__links">
          <a className="portfolio__link" href="https://alexeyitm.github.io/how-to-learn/">
            Статичный сайт
          </a>
          <a className="portfolio__link" href="https://github.com/Alexeyitm/russian-travel">
            Адаптивный сайт
          </a>
          <a className="portfolio__link" href="https://alexeyitm.github.io/react-mesto-auth">
            Одностраничное приложение
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;