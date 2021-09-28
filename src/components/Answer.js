import classes from "./Answer.module.css";

const Answer = (props) => {
  return <p className={classes.answer}>{props.children}</p>;
};

export default Answer;
