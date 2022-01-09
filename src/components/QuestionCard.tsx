import React from 'react';

// Styles
// import {Wrapper, ButtonWrapper} from './QuestionCard.styles'

type Props = {
    question: string;
    answers: string [];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  question, 
  answers,
  callback,
  userAnswer,
  questionNr, 
  totalQuestions,  
}) => (
    <div> 
      <p className='number'>
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{__html: question}}></p>
      {/* parenthes */}
      {answers.map((answer) => (
        <div>
          <button disabled={userAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}} />
          </button>
        </div>
      ))}
    </div>
)
export default QuestionCard;