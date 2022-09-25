import './BurgerButton.css';

function BurgerButton({ isLogined, isActiveBurger, setBurger }) {

  const onClickBurger = () => {
    setBurger(!isActiveBurger);

    isActiveBurger 
      ? document.body.style.overflowY = "visible"
      : document.body.style.overflowY = "hidden";
  }

  return (
    <button className={`burger ${isLogined ? "burger_hidden" : ""}`} onClick={onClickBurger}>
      <div className={`burger__line ${isActiveBurger ? "burger__line_active" : ""}`}></div>
    </button> 
  );
}

export default BurgerButton;