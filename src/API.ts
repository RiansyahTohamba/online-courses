import { type } from "os";
import { shuffleArray } from "./utils";

export enum Difficulty{
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;    
}

export type QuestionState = Question & { answers: string[] }

export const fetchQuizQuestions = async (
    amount: number, difficulty: Difficulty
) => {
    // https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
    // 18 = computer science
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endpoint)).json();
    // console.log(data);
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers, 
            question.correct_answer
        ])
    }));
    
}

