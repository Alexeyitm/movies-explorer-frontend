import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">
          Технологии
        </h2>
        <div className="techs__content">
          <h3 className="techs__subtitle">
            7 технологий
          </h3>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
          <div className="techs__grid">
            <div className="techs__element">
              HTML
            </div>
            <div className="techs__element">
              CSS
            </div>
            <div className="techs__element">
              JS
            </div>
            <div className="techs__element">
              React
            </div>
            <div className="techs__element">
              Git
            </div>
            <div className="techs__element">
              Express.js
            </div>
            <div className="techs__element">
              mongoDB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techs;