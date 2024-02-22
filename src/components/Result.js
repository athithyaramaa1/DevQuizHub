import React from "react";
import "./Result.css";
import { Link } from "react-router-dom";

export default function Result(score) {
  const ToggleClick = () => {
    score.HandlehasLastQuestionReached(true);
    score.handleIndex(0);
    score.Handlescore(0)
  };
  return (
    <div className="result-container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="whoohoo-conatiner">
        {/* Result page */}
        <h1 className="whoohoo">Whoohoo! You completed the quiz!</h1>
      </div>
      <h1>
        {/* Score along with % of right questions */}
        {score.score} out of 5 correct - ({((score.score) / 5) * 100}%)
      </h1>

      <h1>
        {/* Conditional message based upon score */}
        {score.score >= 3 ? "WOW, you nailed it!✨" : "Better luck next timee😓"}
      </h1>
      {/* Restart */}
      <Link to="/">
        <button className="restartbutton" onClick={ToggleClick}>
          Restart
        </button>
      </Link>
    </div>
  );
}
