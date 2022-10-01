import './FooterInfo.css';

function FooterInfo() {

  const currentDate = new Date().getFullYear();

  return (
    <div className='footer__info'>
      <p className='footer__date'>&copy; {currentDate}</p>
      <ul className='footer__links'>
        <li className='footer__element'>
          <a className='footer__link' href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">
            Яндекс.Практикум
          </a>
        </li>
        <li className='footer__element'>
          <a className='footer__link' href="https://github.com/Alexeyitm/" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterInfo;