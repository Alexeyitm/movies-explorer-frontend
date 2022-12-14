import './Footer.css';
import { useLocation } from "react-router-dom";
import FooterInfo from '../FooterInfo/FooterInfo';

function Footer() {

  const location = useLocation();

  return (
    <footer className={`footer ${location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" ? "footer_visible" : ""}`}>
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