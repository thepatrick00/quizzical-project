/* eslint-disable linebreak-style */
import React, {useState, useEffect} from 'react';
import Quiz from './components/Quiz';
import Home from './components/Home';
import './styles.css';


export default function App() {
    const savedTheme = localStorage.getItem('theme');
    
    const [isHome, setIsHome] = useState(true);
    const [theme, setTheme] = useState(savedTheme || 'light');
    // moved formData UP, so both Home.js & Quiz.js can use the state
    const [formData, setFormData] = useState({
        category: 'any',
        difficulty: '',
        answerType: '',
        amountOfQuestions: '5'
    });

    function toggleIsHome() {
        setIsHome(prev => !prev);
    }

    const toggleTheme = React.useCallback(() => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }, [] );

    function handleFormChange(e) {
        const {name, value} = e.target;
        
        setFormData(prev => {
            return {
                ...prev, [name] : value
            };
        });
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className='app'>
            {
                isHome 
                    ?
                    <Home toggleIsHome={toggleIsHome} formData={formData} 
                        handleFormChange={handleFormChange} theme={theme}
                        toggleTheme={toggleTheme}
                    />
                    :
                    <Quiz formData={formData} toggleIsHome={toggleIsHome} 
                        toggleTheme={toggleTheme} theme={theme}
                    />
            }
        </div>        
    );
}