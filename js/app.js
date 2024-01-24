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

function askQuestions(index){
  let userAnswer = prompt(questions[index]);
  userAnswer = userAnswer.toLowerCase();

  if (userAnswer === correctAnswers[index]){
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



// let welcome = 'Hello what is your name?';
// let question1 = 'Is the sky blue?';
// let question2 = 'Do birds fly?';
// let question3 = 'Is water dry?';
// let question4 = 'Can cats walk?';
// let question5 = 'Can dogs do complex algebra?';

// let welcomemsg = prompt(welcome);
// alert('Why hello there ' + welcomemsg);
// let answer1 = prompt(question1);
// let answer2 = prompt(question2);
// let answer3 = prompt(question3);
// let answer4 = prompt(question4);
// let answer5 = prompt(question5);
// if (question1 === true){
//   console.log('correct');
// }else{
//   console.log('incorrect');
// }
// console.log('Js is loaded');
