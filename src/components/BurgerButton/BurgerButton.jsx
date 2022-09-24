import './BurgerButton.css';

function BurgerButton({ isActiveBurger, setBurger }) {

  const onClickBurger = () => {
    setBurger(!isActiveBurger);
  }

  return (
    <button className="burger" onClick={onClickBurger}>
      <div className={`burger__line ${isActiveBurger ? "burger__line_active" : ""}`}></div>
    </button> 
  );
}

export default BurgerButton;