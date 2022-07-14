/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import he from 'he';

Question.propTypes = {
    allAnswers: PropTypes.array,
    qID: PropTypes.string,
    question: PropTypes.string,
    isShowAnswers: PropTypes.bool,
    updateHeld: PropTypes.func
};

export default function Question({ allAnswers, qID, question, isShowAnswers, updateHeld}) {
    const answerButtonsJSX = allAnswers.map((answer, index) => {

        //Held Button Styles
        let styles = {
            backgroundColor: answer.isHeld ? 'var(--isHeld-bg-color)'  : 'revert-layer',
            color: answer.isHeld ? 'var(--focused-btn-color)' : 'revert-layer'
        };
        
        if(isShowAnswers) {
            
            if(answer.isHeld && answer.isCorrect){
                styles = { backgroundColor: '#94D7A2', color: 'var(--focused-btn-color)' };

            } else if (answer.isHeld && answer.isCorrect === false) {
                styles = { backgroundColor: '#F8BCBC', opacity: '50%', border: 'none', color: 'var(--focused-btn-color)' };

            } else if (answer.isCorrect) {
                styles = { backgroundColor: '#94D7A2', color: 'var(--focused-btn-color)' };

            } else if (answer.isCorrect === false) {
                styles = { opacity: '50%' };
            }
        }

        return (
            <button key = {nanoid()} 
                onClick={() => updateHeld(qID, answer.id)}
                className = 'btn question__btn'
                style = {styles}
                data-testid = {`button${index}`}
            >
                {he.decode(allAnswers[index].value)}
            </button>
        );
    }); // end of answerButtonsJSX

    
    return (
        <div className='question__component'>
            <h3 className='question__question'>
                {he.decode(question)}
            </h3>
            <div className='question__btnctr'>
                {answerButtonsJSX}
            </div>
        </div>
    );
}