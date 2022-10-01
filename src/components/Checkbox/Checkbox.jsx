import './Checkbox.css';

function AboutMe({ isActiveCheckbox, setCheckbox }) {

  const onClickCheckbox = () => {
    setCheckbox(!isActiveCheckbox);
  }

  return (
    <input className={`checkbox ${isActiveCheckbox ? "checkbox_active" : ""}`} type="checkbox" id="checkbox" onClick={onClickCheckbox}></input>
  );
}

export default AboutMe;