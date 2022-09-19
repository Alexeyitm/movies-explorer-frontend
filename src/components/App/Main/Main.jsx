import './Main.css';
import Promo from './Promo/Promo';
import Footer from '../Footer/Footer';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';

function Main() {
  return (
    <div className="main">
      <Promo/>
      <AboutProject/>
      <Techs/>
      <Footer/>
    </div>
  );
}

export default Main;