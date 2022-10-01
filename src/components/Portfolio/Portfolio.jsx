import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">
          Портфолио
        </h2>
        <div className="portfolio__links">
          <a className="portfolio__link" href="https://alexeyitm.github.io/how-to-learn/" target="_blank">
            Статичный сайт
          </a>
          <a className="portfolio__link" href="https://github.com/Alexeyitm/russian-travel" target="_blank">
            Адаптивный сайт
          </a>
          <a className="portfolio__link" href="https://alexeyitm.github.io/react-mesto-auth" target="_blank">
            Одностраничное приложение
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;