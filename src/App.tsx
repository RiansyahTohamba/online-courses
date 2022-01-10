import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
import {QuestionState, Difficulty } from './API';
import { GlobalStyle, Wrapper } from './App.styles';
import QuestionCard from './components/QuestionCard';

export type AnswerObject = {
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

    // harus cari cara untuk menguji checkAnswer
    // harus cari cara untuk menguji DOM 
    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement> ) => {
        if(!gameOver){
            
            const answer = e.currentTarget.value;
            // kenapa (answer = null) ?
            // karena belum ditambahkan properti value pada DOM button
            // <button value={answer} >
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
        const nextQuestion = number + 1;
        if (nextQuestion === TOTAL_QUESTIONS){
            setGamerOver(true);
        }else{
            setNumber(nextQuestion);
        }
    };

    return(
            <><GlobalStyle /><Wrapper>
            <h1>Computer Science QUIZ</h1>
            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button className='start' onClick={startTrivia}>
                    Start
                </button>
            ) : null}
            {!gameOver ? <p className='score'>Score: {score} </p> : null}
            {loading ? <p>Loading Questions...</p> : null}

            {!loading && !gameOver && (
                <QuestionCard
                    questionNr={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer} />
            )}
            {!gameOver &&
                !loading &&
                userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS ? (
                <button className='next' onClick={nextQuestion}>
                    Next Question
                </button>
            ) : null}

        </Wrapper></>
    ) 
}
export default App;