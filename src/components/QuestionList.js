import classes from "./QuestionList.module.css";

import { useState } from "react";

import Question from "./Question";
import Answer from "./Answer";

const QAList = () => {
  const [clickedQuestion, setClickedQuestion] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    prevClick: "",
  });

  const clickHandler = (event) => {
    const allQuestions = document.querySelectorAll("li");
    const clicked = event.target.closest("li");
    const question = clicked.firstElementChild;
    const arrow = question.firstElementChild;

    allQuestions.forEach((question) => {
      question.firstElementChild.style.fontWeight = 500;
      question.firstElementChild.firstElementChild.style.transform =
        "rotateZ(0deg)";
    });

    if (!clickedQuestion[clicked.id]) {
      question.style.fontWeight = 700;
      arrow.style.transform = "rotateZ(180deg)";
    }

    if (clickedQuestion.prevClick !== clicked.id) {
      clickedQuestion[clickedQuestion.prevClick] = false;
    }

    clickedQuestion[clicked.id] = !clickedQuestion[clicked.id];
    clickedQuestion.prevClick = clicked.id;
    setClickedQuestion({ ...clickedQuestion });
  };

  return (
    <ul className={classes["Q-A-list"]}>
      <li onClick={clickHandler} id={"q1"}>
        <Question>How many team members can I invite?</Question>

        {clickedQuestion.q1 && (
          <Answer>
            You can invite up to 2 additional users on the Free plan. There is
            no limit on team members for the Premium plan.
          </Answer>
        )}
      </li>
      <li onClick={clickHandler} id={"q2"}>
        <Question>What is the maximum file upload size?</Question>

        {clickedQuestion.q2 && (
          <Answer>
            No more than 2GB. All files in your account must fit your allotted
            storage space.
          </Answer>
        )}
      </li>
      <li onClick={clickHandler} id={"q3"}>
        <Question>How do I reset my password?</Question>

        {clickedQuestion.q3 && (
          <Answer>
            Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you.
          </Answer>
        )}
      </li>
      <li onClick={clickHandler} id={"q4"}>
        <Question>Can I cancel my subsciption?</Question>

        {clickedQuestion.q4 && (
          <Answer>
            Yes! Send us a message and we’ll process your request no questions
            asked.
          </Answer>
        )}
      </li>
      <li onClick={clickHandler} id={"q5"}>
        <Question>Do you provide addtional support?</Question>

        {clickedQuestion.q5 && (
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
