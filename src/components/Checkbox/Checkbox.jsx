import './Checkbox.css';

function AboutMe({ isCheckbox, setCheckbox }) {

  const onClickCheckbox = () => {
    setCheckbox(!isCheckbox);
  }

  return (
    <input className={`checkbox ${isCheckbox ? "checkbox_active" : ""}`} type="checkbox" id="checkbox" onClick={onClickCheckbox}></input>
  );
}

export default AboutMe;