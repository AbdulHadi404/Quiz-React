import React, { useState } from 'react';
import Card from './components/Card';
import questions from './questions.json';
import Quiz from './components/QuizEnd';
const App = () => {
  const [currentIndex, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [status, setStatus] = useState(null);

  const optionsHandler = (answer) => {
    if (status !== null) {
      alert('You have already answered');
    } else if (answer === questions[currentIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1);
      setStatus('Correct Answer');
    } else {
      setStatus('Sorry!');
    }
  };

  const nextHanndler = () => {
    if (status === null) {
      alert('Please select an option.');
    } else if (questions[currentIndex + 1] !== undefined) {
      setIndex((prevIdx) => prevIdx + 1);
      setStatus(null);
    } else {
      setIsLast(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setIsLast(false);
    setIndex(0);
    setStatus(null);
  };

  if (isLast) {
    return <Quiz restartQuiz={restartQuiz} />;
  }
  return (
    <div>
      <Card
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        question={questions[currentIndex]}
        optionsHandler={optionsHandler}
        nextHandler={nextHanndler}
        status={status}
        score={score}
      />
    </div>
  );
};

export default App;
