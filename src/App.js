import React, {useState, useEffect} from 'react'
import Quiz from './components/Quiz'
import Home from './components/Home'
import './styles.css'

export default function App() {
    
    const savedTheme = localStorage.getItem('theme');

    const [isHome, setIsHome] = useState(true);
    const [theme, setTheme] = useState(savedTheme || 'light');
    // const [sound, setSound] = useState(false);

    // const bgMusic = React.useRef(new Audio('./audio2/music.mp3'));
    // bgMusic.play();
    // if(sound) {
    //     bgMusic.current.play();
    // } else {
    //     bgMusic.current.pause();
    // }
    
    function startQuiz() {
        setIsHome(prev => !prev)
    }

    const switchTheme = React.useCallback(() => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }, [] );

    //passed this state up from the home.js so both Home.js & Quiz.js can use the state
    const [formData, setFormData] = useState({
        category: 'any',
        difficulty: '',
        answerType: '',
        amountOfQuestions: '5'
    });

    console.log(formData);

    function handleFormChange(e) {
        const {name, value} = e.target;
        
        setFormData(prev => {
            return {
                ...prev, [name] : value
            }
        })
    }

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
                // sound={sound} toggleSound={() => setSound(!sound)}
                />
                :
                <Quiz formData={formData} startQuiz={startQuiz} 
                switchTheme={switchTheme} theme={theme}
                // sound={sound} toggleSound={() => setSound(!sound)}
                />
            }
        </div>        
    )
}