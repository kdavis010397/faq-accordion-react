import classes from "./Question.module.css";

import arrowDown from "../images/icon-arrow-down.svg";

const Question = (props) => {
  return (
    <p className={classes.question}>
      {props.children}
      <button aria-label="Arrow Button">
        <img src={arrowDown} alt="" />
      </button>
    </p>
  );
};

export default Question;
