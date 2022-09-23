import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__description">
          <article className="about-project__description-element">
            <h3 className="about-project__description-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </article>
          <article className="about-project__description-element">
            <h3 className="about-project__description-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </article>
        </div>
        <div className="about-project__timing">
          <div className="about-project__timing-point">
            <h3 className="about-project__timing-interval about-project__timing-interval_backend">
              1 неделя
            </h3>
            <p className="about-project__timing-type">
              Back-end
            </p>
          </div>
          <div className="about-project__timing-point">
            <h3 className="about-project__timing-interval about-project__timing-interval_frontend">
              4 недели
            </h3>
            <p className="about-project__timing-type">
              Front-end
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;