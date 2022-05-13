# What is Quizzical

This is the final solo project of the *Scrimba Frontend Career Path* Course.

I used all my knowledge of HTML, CSS, JavaScript, and React to create this quiz app.

## Features of the quiz app
- Home page/quiz page
- Quiz has questions and any question with answers, any answer you press on is saved as your answer.
- When you finish the quiz, you get a score and you see which questions you answered correctly, and if you answered incorrectly you see the correct answer is displayed.

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
- #1 plan is to add True/False questions. The current implementation only has multiple choice answers.
- On the homepage I want to add a section where the user can select a category and a difficulty.
- I want to add a dark mode style for the quiz
- A celebration, such as confetti or fireworks popping, if you got all the answers right.
- I want to connect one more API to truly make this a unique quiz experience. An idea that popped up was connecting an image API like Unsplash or Pexels and adding images associated with the question.