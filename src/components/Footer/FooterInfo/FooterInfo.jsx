import './FooterInfo.css';
import FooterLinks from './FooterLinks/FooterLinks';

function FooterInfo() {

  const currentDate = new Date().getFullYear();

  return (
    <div className='footer__info'>
      <p className='footer__date'>&copy; {currentDate}</p>
      <FooterLinks/>
    </div>
  );
}

export default FooterInfo;