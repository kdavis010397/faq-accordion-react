import classes from "./QuestionList.module.css";

import { useState } from "react";

import Question from "./Question";
import Answer from "./Answer";

const QAList = () => {
  const [active, setActive] = useState({});

  const clickHandler = (event) => {
    const questionList = document.querySelectorAll("li");
    questionList.forEach((question) => {
      const text = question.firstElementChild;
      const arrow = text.firstElementChild;
      text.style.fontWeight = 500;

      if (arrow.style.transform === "rotateX(180deg)") {
        arrow.style.transform = "rotateX(0)";
      }
    });

    const questions = {
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    };

    const clicked = event.target.closest("li");
    const questionText = clicked.firstElementChild;
    const arrow = questionText.firstElementChild;

    questionText.style.fontWeight = 900;
    arrow.style.transform = "rotateX(180deg)";

    questions[clicked.id] = true;

    setActive(questions);
  };

  return (
    <ul className={classes["Q-A-list"]}>
      <li onClick={clickHandler} id={"q1"}>
        <Question>How many team members can I invite?</Question>

        {active.q1 && (
          <Answer>
            You can invite up to 2 additional users on the Free plan. There is
            no limit on team members for the Premium plan.
          </Answer>
        )}
      </li>
      <li onClick={clickHandler} id={"q2"}>
        <Question>What is the maximum file upload size?</Question>

        {active.q2 && (
          <Answer>
            No more than 2GB. All files in your account must fit your allotted
            storage space.
          </Answer>
        )}
      </li>
      <li onClick={clickHandler} id={"q3"}>
        <Question>How do I reset my password?</Question>

        {active.q3 && (
          <Answer>
            Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you.
          </Answer>
        )}
      </li>
      <li onClick={clickHandler} id={"q4"}>
        <Question>Can I cancel my subsciption?</Question>

        {active.q4 && (
          <Answer>
            Yes! Send us a message and we’ll process your request no questions
            asked.
          </Answer>
        )}
      </li>
      <li onClick={clickHandler} id={"q5"}>
        <Question>Do you provide addtional support?</Question>

        {active.q5 && (
          <Answer>
            Chat and email support is available 24/7. Phone lines are open
            during normal business hours.
          </Answer>
        )}
      </li>
    </ul>
  );
};

export default QAList;
