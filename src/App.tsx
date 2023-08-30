import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";

function App() {
  type queList = {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
  const questionsList: queList = [
    {
      question: "HTML Stands for ______________",
      options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
      correctAnswer: "Hypertext Markup Language",
    },
    {
      question: "CSS Stands for ______________",
      options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
      correctAnswer: "Cascading Style Sheet",
    },
    {
      question: "JS Stands for ______________",
      options: ["JS", "JS", "JavaScript", "JS"],
      correctAnswer: "JavaScript",
    },
    {
      question: "RAM Stands for ______________",
      options: ["RAM", "RAM", "Random Access Memory", "RAM"],
      correctAnswer: "Random Access Memory",
    },
    {
      question: "SQL Stands for ______________",
      options: ["SQL", "SQL", "Structured Query Language", "SQL"],
      correctAnswer: "Structured Query Language",
    },
    {
      question: "is HTML is Programming Language?",
      options: ["YES", "NO"],
      correctAnswer: "NO",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [isDone, setIsDone] = useState<Boolean>(false);
  
  const nextQuestion = (answer: string) => {
    const questionNumber = currentQuestion + 1;
    checkAnswer(answer, currentQuestion);
    if (questionNumber < questionsList.length) {
      setCurrentQuestion(questionNumber);
    } else {
      setIsDone(true);
    }
  };

  const checkAnswer = (answer: string, index: number) => {
    if (answer === questionsList[index].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsDone(false);
  }
  return (
    <div className="body">
      <div className="container h-100 text-center d-flex flex-column justify-content-center ">
        <h1 className="text-decoration-underline display-3 fw-bold">
          QUIZ APP
        </h1>
        <div className="bg-white my-5 rounded-5 p-5">
          {isDone ? (
            <>
              <h4 className="pb-5">
                Score <span className="fw-bold fs-1">{score}</span>/
                <span>{questionsList.length}</span>
              </h4>
              <div className="pb-3">
                <Button onClick={restartQuiz} variant="contained">Restart Quiz</Button>
              </div>
            </>
          ) : (
            <>
              <h4 className="pb-5">
                Question{" "}
                <span className="fw-bold fs-1">{currentQuestion + 1}</span>/
                <span>{questionsList.length}</span>
              </h4>
              <h4 className="pb-3">
                {questionsList[currentQuestion].question}
              </h4>
            </>
          )}
        </div>
        {!isDone && <div className="row ">
          {questionsList[currentQuestion].options.map((optionList) => (
            <div className="col-md-6">
              <button
                onClick={() => nextQuestion(optionList)}
                className="w-100 fw-bold btn btn-outline-dark p-3 m-2 rounded-5"
              >
                {optionList}
              </button>
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
}

export default App;
