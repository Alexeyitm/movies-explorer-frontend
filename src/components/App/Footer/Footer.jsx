import './Footer.css';
import FooterInfo from './FooterInfo/FooterInfo';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <FooterInfo/>
    </footer>
  );
}

export default Footer;