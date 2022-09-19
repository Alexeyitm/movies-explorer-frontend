import './Main.css';
import Promo from './Promo/Promo';
import Footer from '../Footer/Footer';
import AboutProject from './AboutProject/AboutProject';

function Main() {
  return (
    <div className="main">
      <Promo/>
      <AboutProject/>
      <Footer/>
    </div>
  );
}

export default Main;