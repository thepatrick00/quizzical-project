import React, {useEffect, useState} from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'
import blueBlob from '../images/blueBlob.png'
import yellowBlob from '../images/yellowBlob.png'
import {THEME} from '../constant.js'
import SettingsIcons from './SettingsIcons.js'

export default function Quiz(props) {
    const [quizData, setQuizData] = useState([]);
    const [showAnswers, setShowAnswers] = useState(false);
    const [resetQuiz, setResetQuiz] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const {amountOfQuestions, answerType, category, difficulty} = props.formData

    /* Create initial data in my desired format */
    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=${amountOfQuestions}&category=${category}&difficulty=${difficulty}&type=${answerType}`)
            .then(res => res.json())
            .then(data => {
                setQuizData(() => {
                    return data.results.map(question => {
                        
                        const incorrect = question.incorrect_answers.map(answer => {
                            return {value: answer, id: nanoid(), isHeld: false, isCorrect: false}
                        });
                        
                        const correct = {value: question.correct_answer, id: nanoid(), isHeld: false, isCorrect: true};
                        
                        let allAnswersArr = [...incorrect];
                        const randomNum = Math.floor(Math.random() * 4);
                        allAnswersArr.splice(randomNum, 0, correct);

                        /* T/F AnswersArr logic */
                        if(question.type === 'boolean') {
                            if(correct.value === "True") {
                                allAnswersArr = [correct, incorrect[0]]
                            } else {
                                allAnswersArr = [incorrect[0], correct]
                            }    
                        }
                        
                        return {...question, allAnswers: allAnswersArr, id: nanoid()}; 
                    })
                })
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    }, [resetQuiz, amountOfQuestions, answerType, category, difficulty])

    /* Update State on Answer Click Section */
    // qID = {question.id} passed in as a prop to Question component, each time I loop over with .map()
    // aID is created in the Question component. It is an individual answer.id
    function updateHeld(qID, aID) {
        
        setQuizData(prevData => {
            return prevData.map( question => {        
                if(qID !== question.id ){
                    return question
                } else {
                    const newAnswers = question.allAnswers.map(answer => (
                        answer.id === aID 
                        ? {...answer, isHeld: !answer.isHeld}
                        : {...answer, isHeld: false}  
                    ))
                    
                    return {...question, allAnswers: newAnswers}
                }
            })
        })
    }
    
    /* Check Quiz Answers section */
    function checkAnswers() {
        setShowAnswers(true)
    }
    
    let score = 0;
    
    if(showAnswers){
        quizData.map((question) => {
            return question.allAnswers.forEach(answer => {
                return answer.isHeld && answer.isCorrect ? score++ : score;
            })
        })
    }
    
    /* Reset Quiz Section */
    function reset() {
        setShowAnswers(false);
        setResetQuiz(prev => prev + 1)
    }
    
    
    const questionElements = quizData.map((question, index) => {
        return (
            <Question
                key = {nanoid()}
                question = {question.question}
                allAnswers = {question.allAnswers}
                updateHeld = {updateHeld}
                questionIndex = {index}
                qID = {question.id}
                showAnswers = {showAnswers}
                type = {question.type}
            />
        )
    })

    const buttonElements = {
        render: (
                !showAnswers 
                ? 
                <div className='quiz__footer'>
                <button className='btn quiz__btn' onClick={checkAnswers}>Check Answers</button>
            </div>
            :
            <div className='quiz__footer'>
                <p className='quiz__finalText'>{`You scored ${score}/5 answers`}</p>
                <button className='btn quiz__btn' onClick={reset}>Play Again</button>
            </div>   
        )
    }

    
    
    const customTheme = THEME[props.theme];

    return (
        <div className='quiz' style={customTheme}>

            {
            isLoading
            ?
            <div className='quiz__loading--box'>
                <h3 className='quiz__loading--text'>One moment please...</h3>
            </div>
            :
            <>
            <div className='quiz__header'>
                <h2 className='logo' onClick={props.startQuiz}>
                    Quizzical
                </h2>
                <div className='settingsIconsQuiz'>
                    <SettingsIcons 
                        startQuiz={props.startQuiz} 
                        theme={props.theme} 
                        switchTheme={props.switchTheme}
                        showHome={true}
                    />
                </div>
            </div>
            
            <div className='quiz__answers'>
                {questionElements} 
                {buttonElements.render}
            </div>
            </>
            }
            <img className='yellowBlob' src={yellowBlob} alt='' />
            <img className='blueBlob' src={blueBlob} alt='' />
        </div>
    )
}