import React, { useState } from "react";
import Question from "../Utils/Question.json";

function Hero() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const selectAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < Question.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const restartGame = () => {
    setShowResults(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div className="hero">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 question">
            {showResults ? (
              <div className="final-result">
                <div className="card p-5">
                  <h1>Total Score : {score} </h1>
                  <div>
                    <button className="btn btn-primary" onClick={restartGame}>
                      Restart Game
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/29/01/16/abacus-1866497__340.jpg"
                  class="card-img-top"
                  height={"200px"}
                  alt="no img"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Question {currentQuestion + 1} out of {Question.length}{" "}
                  </h5>
                  <div>
                    <p className="card-text text-center">
                      <h4>{Question[currentQuestion].text}</h4>
                    </p>
                  </div>{" "}
                  <br />
                  <ul>
                    {Question[currentQuestion].options.map((item) => {
                      return (
                        <li
                          key={item.id}
                          onClick={() => selectAnswer(item.isCorrect)}
                        >
                          {item.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
