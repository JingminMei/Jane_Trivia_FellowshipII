import React, { useState } from "react";
import "./App.css";
import Question from "../src/components/Question";
import NextQuestion from "../src/components/NextQuestion";
import data from "./sample_data.json";

function App() {
  let [currentQuestionNumber, setNumber] = useState(0);
  let [answerDisplayed, setDisplay] = useState(null);
  let [correctIndex, setIndex] = useState(0);
  const[show, setShow] = useState(false);
  let[currentCount, setCount] = useState(0);
    // function getCorrectAnswer(questionNum) {
  //   setIndex= data[questionNum].question.correct_choice_index;
  //   //setNumber = questionNum;
  //   return correctIndex;
  // }
  
  function getCorrectAnswer() {
    return data[currentQuestionNumber].question.correct_choice_index;
  }
  function questionAnswered() {
    if (answerDisplayed == null) {
      return "Click an answer above.";
    } else if (answerDisplayed === getCorrectAnswer(currentQuestionNumber)) {
      // setCount(currentCount + 1);
      return "Correct!";
  
      
    } else {
      return "Incorrect, nice try!";
    }
  }
  function goToNextQuestion() {
    // if(currentQuestionNumber < ){
      
    // }
      setNumber(currentQuestionNumber + 1);
      setDisplay(null);
    
    
  }
  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question
        question={data[currentQuestionNumber].question.text}
        answerChoices={data[currentQuestionNumber].question.choices}
        setDisplay={setDisplay}
      />
      <NextQuestion nextQuestion={goToNextQuestion} curQuestion ={currentQuestionNumber+1} answerDisplayed={answerDisplayed}/>
      <p>{questionAnswered()}</p>
      
      </div>
  );
}

export default App;
