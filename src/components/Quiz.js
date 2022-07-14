/* eslint-disable linebreak-style */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {THEME} from '../constant.js';
import { nanoid } from 'nanoid';
import Question from './Question';
import SettingsIcons from './SettingsIcons.js';
import blueBlob from '../images/blueBlob.png';
import yellowBlob from '../images/yellowBlob.png';

Quiz.propTypes = {
    toggleIsHome: PropTypes.func,
    formData: PropTypes.object,
    theme: PropTypes.string,
    toggleTheme: PropTypes.func,
};

export default function Quiz({ toggleIsHome, formData, theme, toggleTheme }) {
    const [quizData, setQuizData] = useState([]);
    const [isShowAnswers, setIsShowAnswers] = useState(false);
    const [resetQuiz, setResetQuiz] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const {amountOfQuestions, answerType, category, difficulty} = formData;

    useEffect(() => {
        let apiLink = `https://opentdb.com/api.php?amount=${amountOfQuestions}&category=${category}&difficulty=${difficulty}`;
        if(category === 'any') {
            apiLink = `https://opentdb.com/api.php?amount=${amountOfQuestions}&difficulty=${difficulty}`;
        }
        fetch(apiLink)
            .then(res => res.json())
            .then(data => {
                setQuizData(() => {
                    return data.results.map(question => {
                        
                        const incorrect = question.incorrect_answers.map(answer => {
                            return {value: answer, id: nanoid(), isHeld: false, isCorrect: false};
                        });
                        
                        const correct = {value: question.correct_answer, id: nanoid(), isHeld: false, isCorrect: true};
                        
                        let allAnswersArr = [...incorrect];
                        const randomNum = Math.floor(Math.random() * 4);
                        allAnswersArr.splice(randomNum, 0, correct);

                        /* T/F AnswersArr logic */
                        if(question.type === 'boolean') {
                            if(correct.value === 'True') {
                                allAnswersArr = [correct, incorrect[0]];
                            } else {
                                allAnswersArr = [incorrect[0], correct];
                            }    
                        }
                        
                        return {...question, allAnswers: allAnswersArr, id: nanoid()}; 
                    });
                });
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    }, [resetQuiz, amountOfQuestions, answerType, category, difficulty]);

    // qId and aID match the correct answer and update held
    // aID is made in Question.js with .map(_, _.id)
    function updateHeld(qID, aID) {
        setQuizData(prevQuizData => {
            return prevQuizData.map( question => {
                if(qID !== question.id ){

                    return question;
                } else {
                    const newAnswers = question.allAnswers.map(answer => {

                        return answer.id === aID 
                            ? {...answer, isHeld: !answer.isHeld}
                            : {...answer, isHeld: false};
                    });
                    
                    return {...question, allAnswers: newAnswers};
                }
            });
        });
    }
    
    function checkAnswers() {
        setIsShowAnswers(true);
    }
    
    let score = 0;
    
    if(isShowAnswers){
        quizData.map((question) => {
            return question.allAnswers.forEach(answer => {
                return answer.isHeld && answer.isCorrect ? score++ : score;
            });
        });
    }
    
    /* Snap scrolling on play again */
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: window.innerWidth > 600 ? 'auto' : 'smooth',
        });
    };

    function reset() {
        setIsShowAnswers(false);
        setResetQuiz(prev => prev + 1);
        goToTop();    
    }
     
    const questionElements = quizData.map((question, index) => {
        
        return (
            <Question
                key = {nanoid()}
                question = {question.question}
                allAnswers = {question.allAnswers}
                qID = {question.id}
                type = {question.type}
                updateHeld = {updateHeld}
                questionIndex = {index}
                isShowAnswers = {isShowAnswers}
            />
        );
    });

    let buttonElements = !isShowAnswers 
        ? 
        <div className='quiz__footer'>
            <button className='btn quiz__btn' onClick={checkAnswers}>Check Answers</button>
        </div>
        :
        <div className='quiz__footer quiz__footer--finished'>
            <p className='quiz__finalText'>{`You scored ${score}/${formData.amountOfQuestions} answers`}</p>
            <button className='btn quiz__btn' onClick={reset}>Play Again</button>
        </div>;    
    
    const customTheme = THEME[theme];

    return (
        <div className='quiz' style={customTheme}>

            {
                isLoading
                    ?
                    <div className='quiz__loadingBox'>
                        <h3 className='quiz__loadingText'>One moment please...</h3>
                    </div>
                    :
                    <>
                        <div className='quiz__header'>
                            <h2 className='logo' onClick={toggleIsHome}>
                                Quizzical
                            </h2>
                            <div className='settingsIconsQuiz'>
                                <SettingsIcons 
                                    toggleIsHome={toggleIsHome} 
                                    theme={theme} 
                                    toggleTheme={toggleTheme}
                                />
                            </div>
                        </div>
            
                        <div className='quiz__answers'>
                            {questionElements} 
                            {buttonElements}
                        </div>
                    </>
            }
            <img className='yellowBlob' src={yellowBlob} alt='' />
            <img className='blueBlob' src={blueBlob} alt='' />
        </div>
    );
}