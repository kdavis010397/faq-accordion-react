import QuestionList from "./QuestionList";

import classes from "./FAQ.module.css";

import heroImage from "../images/illustration-woman-online-desktop.svg";
import boxImage from "../images/illustration-box-desktop.svg";

const FAQ = () => {
  return (
    <div className={classes.container}>
      <div className={classes["images-container"]}>
        <img className={classes.box} src={boxImage} alt="Box" />
        <img className={classes.hero} src={heroImage} alt="Woman-Online" />
      </div>

      <main className={classes["faq-section"]}>
        <h1>FAQ</h1>
        <QuestionList />
      </main>
    </div>
  );
};

export default FAQ;
