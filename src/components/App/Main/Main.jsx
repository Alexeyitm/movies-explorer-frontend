import './Main.css';
import Promo from './Promo/Promo';
import Footer from '../Footer/Footer';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe'

function Main() {
  return (
    <div className="main">
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default Main;