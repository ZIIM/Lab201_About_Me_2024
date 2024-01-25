'use strict';

let userScore = 0;
let ready = prompt('Would you like to play a guessing game?');

if (ready === 'y' || ready === 'yes'){
  alert('Very good, please respond to the questions with either \'yes\' or \'no\'.');
} else {
  alert('UNSATISFACTORY!');
}

const questions = [
  'Is the sky blue?',
  'Do birds fly?',
  'Is water dry?',
  'Can cats walk?',
  'Can dogs do complex algebra?',
];

const correctAnswers = ['yes','yes','no','yes','no'];

function askQuestions(i){
  let userAnswer = prompt(questions[i]);
  userAnswer = userAnswer.toLowerCase();

  if (userAnswer === correctAnswers[i]){
    alert('Correct!');
    userScore++;
  } else {
    alert('Incorrect!');
  }
}

for (let i = 0; i < questions.length; i++){
  askQuestions(i);
}

alert(`Thank you for playing! Your score is: ${userScore} out of ${questions.length}`);

// 6th Question second attempt
let userNumberGuess = prompt('Guess the correct number?');
let correctNumber = 7;

for (correctNumber = 0; correctNumber < 4; correctNumber++){
  if (userNumberGuess < correctNumber){
    alert('too low!');
  } else if (userNumberGuess > correctNumber){
    alert('too high');
  } else {
    alert('that is correct!');
  }
}



// 6th question first attempt
// let userNumberGuess = prompt('Guess the correct number?');
// let correctNumber = 7;

// if(userNumberGuess < correctNumber){
//   alert('too low!');
// }else if (userNumberGuess > correctNumber){
//   alert('too high!');
// } else{
//   alert('CORRECTO!');
// }

// 7th question
let multiAnswerResponse = prompt('What is one of my favorite color?');
let newquestion = ['black', 'red', 'brown', 'green'];
for (i = 0; i < newquestion.length; i++){
  if (multiAnswerResponse === newquestion){
    alert('Correct!');
  } else {
    alert('Please try again!');
  }
}
