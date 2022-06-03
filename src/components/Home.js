import React from 'react'
import blueBlob from '../images/blueBlobHome.png'
import yellowBlob from '../images/yellowBlobHome.png'

export default function Home(props) {
    const {handleFormChange, formData} = props

    return (
        <div className="home">
            <h1 className='home__title'>Quizzical</h1>
            <p className='home__text'>Test your knowledge, and win!</p>

            <form>
                <label htmlFor='amountOfQuestions'>Amount of Questions</label>
                <input
                    onChange={handleFormChange}
                    type='number'
                    value={formData.amountOfQuestions}
                    name='amountOfQuestions'
                    id='amountOfQuestions'
                />
                <br/>
                <label htmlFor='category'>Category</label>
                <select
                    onChange={handleFormChange}
                    value={formData.category}
                    name='category'
                    id='category'
                >
                    <option value='9'>General Knowledge</option>
                    <option value='10'>Books</option>
                    <option value='11'>Film</option>
                    <option value='12'>Music</option>
                    <option value='13'>Musicals & Theatres</option>
                    <option value='14'>Telivision</option>
                    <option value='15'>Video Games</option>
                    <option value='16'>Board Games</option>
                    <option value='17'>Science & Nature</option>
                    <option value='18'>Computers</option>
                    <option value='19'>Mathematics</option>
                    <option value='20'>Mythology</option>
                    <option value='21'>Sports</option>
                    <option value='22'>Geography</option>
                    <option value='23'>History</option>
                    <option value='24'>Politics</option>
                    <option value='25'>Art</option>
                    <option value='26'>Celebrities</option>
                    <option value='27'>Animals</option>
                </select>
                <br/>
                <label htmlFor='difficulty'>Difficulty</label>
                <select
                    onChange={handleFormChange}
                    value={formData.difficulty}
                    name='difficulty'
                    id='difficulty'
                >
                    <option value=''>Any</option>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                </select>
                <br/>
                <label htmlFor='type'>Type</label>
                <select
                    onChange={handleFormChange}
                    value={formData.type}
                    name='type'
                    id='type'
                >
                    <option value=''>Any</option>
                    <option value='multiple'>Multiple Choice</option>
                    <option value='boolean'>True or False</option>
                </select>   
            </form>

            <button onClick={props.startQuiz}  className='btn'>Start Quiz</button>
            <img className='yellowBlob' src={yellowBlob} alt='' />
        <img className='blueBlob' src={blueBlob} alt='' />
        </div>
    )
}