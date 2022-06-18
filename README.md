# What is Quizzical

This is the final solo project of the *Scrimba Frontend Career Path* Course.

I used all my knowledge of HTML, CSS, JavaScript, and React to create this quiz app.

## Features of the quiz app
- Home page/quiz page
- Quiz has questions and any question with answers, any answer you press on is saved as your answer.
- When you finish the quiz, you get a score and you see which questions you answered correctly, and if you answered incorrectly the correct answer is displayed. Also the "check answers" button switches to the "play again" button, so you can start a new quiz.

## How I Created The App
- I used useEffect() hook, to put API data into state and deal with side effects
- I used useState() hook, to updating state objects with nested arrays of objects  
- I used conditional rendering to conditionally display the homepage/quiz page and also for buttons
- I used *Nanoid* dependency to have a unique id to keep track of all questions and answers.
- I used *He* dependency to decode html entities into readable text. This was necessary because the API data for the questions
and answers had html entities. Ex. NOT DECODED: Where would you find the &quot;Spanish Steps&quot;? DECODED: Where would you find the "Spanish Steps"
- I created a pixel perfect design from the mock up I received in a Figma file. I also made sure the design was responsive for any screen size.

## What I learned
- I strengthened my fundamental React knowledge with this project.

## Strech Goals To Make This Quiz App Unique
As of 5/13/22 the app works perfectly as a simple quiz app however I still have some plans on making it better!
- #1 plan is to add True/False questions. The current implementation only has multiple choice answers.✅ 6/2/22 
- On the homepage I want to add a section where the user can select a category and a difficulty. ✅ 6/3/22
- Add ability to go back to home page and change settings ✅ 6/3/22
- I want to add a dark mode style for the quiz ✅ 6/11 - 6/12
- Add animations to make it feel more alive.
- Add a limit on the questions 5, 10, or 20.
- Add sound;
- A celebration, such as confetti or fireworks popping, if you got all the answers right.
- I want to add the ability to tab through and select each answer with space. When the answer is seclected it will automatically go to the next section of questions.
- If failed to fetch data, add a better backup.
- Add an improved results panel at the end of the game.

## Strech Goal Updates
- 6/2/22 - 2 Weeks later I came back to my code, read it, and implement true and false answers to the quiz. I had to make sure that "True" was always the first option to choose from.
- 6/3/22 - When creating inputs I had to make sure to use controlled components so there is only one source of truth, in the React state. I also had to lift my formData state up to the App.js, so both Home.js & Quiz.js could use that data.

- Added ability to go back to the home page and choose settings again.

- 6/11/22 - Dark mode feature was added! You can toggle the sun/moon icon to switch the theme. I create this using CSS variables.

Also, if you choose dark or light theme, your settings will be saved.