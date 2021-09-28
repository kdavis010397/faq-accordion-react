import classes from "./Question.module.css";

import arrowDown from "../images/icon-arrow-down.svg";

const Question = (props) => {
  return (
    <p className={classes.question}>
      {props.children}
      <span>
        <img src={arrowDown} alt="" />
      </span>
    </p>
  );
};

export default Question;
