import React from 'react'
import Quiz from './components/Quiz'
import Home from './components/Home'
import './styles.css'

export default function App() {
    
    const [isHome, setIsHome] = React.useState(true);
    
    function startQuiz() {
        setIsHome(false)
    }
    
    return (
        <div className='app'>
            {
            isHome 
            ?
            <Home startQuiz = {startQuiz} />
            :
            <Quiz />
            }
            <div className='app__text--ctr'>
                <p className='app__text' >Made with 💗 by <a className='app__text--link' href='https://github.com/thepatrick00/quizzical-project'>Patrick</a></p>
            </div>
        </div>        
    )
}