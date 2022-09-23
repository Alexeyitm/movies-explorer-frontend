import './Footer.css';
import FooterInfo from './FooterInfo/FooterInfo';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <FooterInfo/>
      </div>
    </footer>
  );
}

export default Footer;