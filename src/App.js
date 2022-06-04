import React, {useState} from 'react'
import Quiz from './components/Quiz'
import Home from './components/Home'
import './styles.css'

export default function App() {
    
    const [isHome, setIsHome] = React.useState(true);
    const [theme, setTheme] = React.useState('light');
    
    function startQuiz() {
        setIsHome(prev => !prev)
    }

    function switchTheme() {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
        console.log('theme clicked')
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
                handleFormChange={handleFormChange} theme={theme}/>
            :
            <Quiz formData={formData} startQuiz={startQuiz} 
                switchTheme={switchTheme} theme={theme}/>
            }
        </div>        
    )
}