import React from 'react';

const About = () => {

    return (
        <div className="modal__content">
            <article>
                <h3>What is Quizzical?</h3>
                <p>Quizzical is a web based quiz game, where you can test your trivia skills!</p>
            </article>
            <article>
                <h3>What questions can I answer?</h3>
                <p>You can personalize your game based on number of questions, category, difficulty, and type.</p>
            </article>
            <article>
                <h3>Who wrote these questions?</h3>
                <p>Quizzical is powered by the <a href="https://opentdb.com/">Open Trivia Database API</a>, a database of freely available questions to use for programmers.</p>
            </article>
            <article>
                <h3>Who made Quizzical?</h3>
                <p>Hi! I’m Patrick, a web developer 👋. You can check more of my work <a href="https://github.com/thepatrick00">here</a>.</p>
            </article>
        </div>
    );
};

export default About;