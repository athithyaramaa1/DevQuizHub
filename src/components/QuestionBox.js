import React, { useState } from "react";
import "./QuestionBox.css";
import questions from "../questions";
import Result from "./Result";

function QuestionBox({ darkMode }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highlighted, setHighlighted] = useState(false);
  const [hasLastQuestionReached, sethasLastQuestionReached] = useState(true);
  //Score updation
  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    if (index === questions.length - 1) {
      sethasLastQuestionReached(false);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const currentQuestion = questions[index];

  return (
    // Toggle between dark and light mode.
    <div
      className={`questionContainer ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      {hasLastQuestionReached ? (
        // Questions
        <>
          <div>
            <h3 className="question">
              Question {index + 1} out of {questions.length}
            </h3>
            <div className={highlighted ? "red-focus" : ""}>
              <h2 className="currentques">{currentQuestion.text}</h2>
            </div>
          </div>
          <div className="optionsContainer">
            {currentQuestion.options.map((ele, idx) => (
              <div key={idx} className="optionsButtonDiv">
                <button
                  className="optionsButton"
                  onClick={() => handleClick(ele.isCorrect)}
                >
                  {ele.text}
                </button>
              </div>
            ))}
          </div>
          {/* Highlighters */}
          <div className="highlighters">
            <button className="highlight" onClick={() => setHighlighted(true)}>
              Highlight
            </button>
            <button
              className="removeHighlight"
              onClick={() => setHighlighted(false)}
            >
              Remove Highlight
            </button>
          </div>
        </>
      ) : (
        <div>
          <Result
            score={score}
            handleIndex={setIndex}
            HandlehasLastQuestionReached={sethasLastQuestionReached}
            Handlescore={setScore}
          />
        </div>
      )}
    </div>
  );
}

export default QuestionBox;
