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
    questionIndex: PropTypes.number,
    showAnswers: PropTypes.bool,
    type: PropTypes.string,
    updateHeld: PropTypes.func
};

export default function Question(props) {
    const answerButtonsElem = props.allAnswers.map((answer, index) => {
        //answer properties => value, id, isHeld, isCorrect

        //Held Styles
        let styles = {
            backgroundColor: answer.isHeld ? 'var(--isHeld-bg-color)'  : 'revert-layer',
            color: answer.isHeld ? 'var(--focused-btn-color)' : 'revert-layer'
        };
        
        if(props.showAnswers){
            
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
                onClick={() => props.updateHeld(props.qID, answer.id)}
                className = 'btn question__btn'
                style = {styles}
            >
                {he.decode(props.allAnswers[index].value)}
            </button>
        );
    });

    
    return (
        <div className='question__component'>
            <h3 className='question__question'>
                {he.decode(props.question)}
            </h3>
            <div className='question__btnctr'>
                {answerButtonsElem}
            </div>
        </div>
    );
}