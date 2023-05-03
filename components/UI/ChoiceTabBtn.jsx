import React, {useState} from "react";
import styles from "./ChoiceTabBtn.module.scss";

function ChoiceTabBtn({ label, selected, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    onClick();
  };
  return (
    <div
      className={styles.tabBtnContainer}
      style={{
        backgroundColor: selected ? '#eef3ff' : isHovered ? '#FBFBFB' : '#ffffff',
        borderColor: selected ? '#3c37ff' : '#d3d3d3',
      }}
      onClick={handleButtonClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
    >
      <input
        type="radio"
        name="radio"
        checked={selected}
        onChange={() => {}}
        aria-hidden="true"
      />
      <span>{label}</span>
    </div>
  );
}

export default ChoiceTabBtn;
