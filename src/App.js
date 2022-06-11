import React, {useState, useEffect} from 'react'
import Quiz from './components/Quiz'
import Home from './components/Home'
import './styles.css'

export default function App() {
    
    const savedTheme = localStorage.getItem('theme');

    const [isHome, setIsHome] = React.useState(true);
    const [theme, setTheme] = React.useState(savedTheme || 'light');
    
    function startQuiz() {
        setIsHome(prev => !prev)
    }

    const switchTheme = React.useCallback(() => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }, [] );

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

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            switchTheme();
        }
    }, [switchTheme])

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div className='app'>
            {
            isHome 
            ?
            <Home startQuiz={startQuiz} formData={formData} 
                handleFormChange={handleFormChange} theme={theme}
                switchTheme={switchTheme} isHome={isHome}
            />
            :
            <Quiz formData={formData} startQuiz={startQuiz} 
                switchTheme={switchTheme} theme={theme}
            />
            }
        </div>        
    )
}