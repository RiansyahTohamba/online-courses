import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
import {QuestionState, Difficulty } from './API';
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;
const App = () => {
    // useState(0)
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [number, setNumber] = useState(0)
    const [userAnswers, userUserAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [gameOver, setGamerOver] = useState(true)
    
    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

    // apa nih async() ?
    const startTrivia = async() => {

    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement> ) => {
  
    }
    
    const nextQuestion = () => {
    }

    return(
        <div className='App'>
            <h1>Computer Science QUIZ</h1>
            <button className='start' onClick={startTrivia}>
                Start
            </button>
            <p className='score'>Score: </p>
            <p>Loading Questions...</p>
            {/* <QuestionCard 
                questionNr={number + 1} 
                totalQuestions={TOTAL_QUESTIONS} 

                question={questions[number].question} 
                answers={questions[number].answers} 
                userAnswer={userAnswers ? userAnswers[number] : undefined} 
                callback={checkAnswer} 
            /> */}

            <button className='next' onClick={nextQuestion}>
                Next Question
            </button> 
        </div>
    ) 
}
export default App;