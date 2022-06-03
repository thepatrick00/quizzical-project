import React, {useState} from 'react'
import Quiz from './components/Quiz'
import Home from './components/Home'
import './styles.css'

export default function App() {
    
    const [isHome, setIsHome] = React.useState(true);
    
    function startQuiz() {
        setIsHome(prev => !prev)
    }

    //passed this state up from the home.js so both Home.js & Quiz.js can use the state
    const [formData, setFormData] = useState({
        category: '9',
        difficulty: '',
        answerType: '',
        amountOfQuestions: '5'
    })

    function handleFormChange(e) {
        const {name, value} = e.target;
        console.log(value)
        setFormData(prev => {
            return {
                ...prev, [name] : value
            }
        })
    }
    
    return (
        <div className='app'>
            {
            isHome 
            ?
            <Home startQuiz={startQuiz} formData={formData} 
            handleFormChange={handleFormChange}/>
            :
            <Quiz formData={formData} startQuiz={startQuiz}/>
            }
        </div>        
    )
}