import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
import {QuestionState, Difficulty } from './API';
import QuestionCard from './components/QuestionCard';

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;
const App = () => {
    // useState(0)
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGamerOver] = useState(true);
    

    // apa nih async() ?
    const startTrivia = async() => {
        setLoading(true);
        setGamerOver(false);
        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    }


    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement> ) => {
        if(!gameOver){
            const answer = e.currentTarget.value;
            // check answer against correct-answer
            const correct = questions[number].correct_answer === answer;
            // add score if answer is correct
            if (correct) setScore(prev => prev + 1);
            // save answer in the array for user answers
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            }
            setUserAnswers((prev) => [...prev, answerObject])
        }
    }
    
    const nextQuestion = () => {
    }

    return(
        <div className='App'>
            <h1>Computer Science QUIZ</h1>
            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button className='start' onClick={startTrivia}>
                    Start
                </button>
            ): null}
            {!gameOver ? <p className='score'>Score: </p> : null }
            {loading ? <p>Loading Questions...</p> : null }

            <p className='score '>Score:</p>
            <p>Loading Questions ...</p>
            <button className='start' onClick={startTrivia}>
                Start
            </button>
            <p className='score'>Score: </p>
            <p>Loading Questions...</p>
            {!loading && !gameOver && (
                <QuestionCard 
                    questionNr={number + 1} 
                    totalQuestions={TOTAL_QUESTIONS} 
                    question={questions[number].question} 
                    answers={questions[number].answers} 
                    userAnswer={userAnswers ? userAnswers[number] : undefined} 
                    callback={checkAnswer} 
                />
            )}
            {!gameOver && 
            !loading && 
            userAnswers.length === number +1 && number !== TOTAL_QUESTIONS ? (
                <button className='next' onClick={nextQuestion}>
                    Next Question
                </button> 
            ) : null}

        </div>
    ) 
}
export default App;