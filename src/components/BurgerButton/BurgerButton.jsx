import './BurgerButton.css';
import { useLocation } from "react-router-dom";

function BurgerButton({ isActiveBurger, setBurger }) {

  const location = useLocation();

  const onClickBurger = () => {
    setBurger(!isActiveBurger);

    isActiveBurger 
      ? document.body.style.overflowY = "visible"
      : document.body.style.overflowY = "hidden";
  }

  return (
    <button className={`burger ${location.pathname === "/" ? "burger_hidden" : ""}`} onClick={onClickBurger}>
      <div className={`burger__line ${isActiveBurger ? "burger__line_active" : ""}`}></div>
    </button> 
  );
}

export default BurgerButton;