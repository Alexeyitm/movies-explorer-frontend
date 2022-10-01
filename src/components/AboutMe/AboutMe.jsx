import './AboutMe.css';
import me from '../../images/me.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__grid">
          <h3 className="about-me__name">Алексей</h3>
          <p className="about-me__profession">
          Фронтенд-разработчик, 25 лет
          </p>
          <p className="about-me__description">
          Я родился и живу в Магнитогорске, закончил энергетический факультет УрФУ. 
          Я люблю слушать музыку, смотреть хорошее кино, а ещё хожу в зал.
          Недавно начал кодить. Стажировался в компании «Aston».
          </p>
          <a className="about-me__github" href="https://github.com/Alexeyitm" target="_blank">
            Github
          </a>
          <img className="about-me__photo" src={me} alt="Алексей"/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;