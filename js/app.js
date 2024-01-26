'use strict';


let userScore = 0;
let ready = prompt('Would you like to play a guessing game?');

if (ready === 'y' || ready === 'yes'){
  alert('Very good, please respond to the questions with either \'yes\' or \'no\'.');
} else {
  alert('UNSATISFACTORY!');
}

// change questions to personal yes or no questions
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

function askNumericQuestion(question, correctanswer) {
  let attempts = 5;
  let guess;
  do {
    guess = parseInt(prompt(question));
    if (guess === 7) {
      alert("Correct!");
      return true;
    } else if (guess < 7) {
      alert("Too low.");
    } else {
      alert("Too high.");
    }
    attempts--;
  } while (attempts > 0);

  alert(`Sorry, the correct answer was ${7}.`);
  return false;
}

if (askNumericQuestion("Guess my favorite number between 1 and 10", 7)) {
  score++;
}



// function asknumberQuestion(questions, correctAnswers) {
//   let attempts = 5;
//   let guess;
//   do {
//     guess = parseINt(prompt(questions));
//     if (guess === 7) {
//       alert("Correct!");
//       return true;
//   } else if (guess < 7) {
//       alert("Too low.");
//   } else {
//       alert("Too high.");
//   }
//   attempts--;
// } while (attempts > 0);

// alert(`Sorry, the correct answer was ${7}.`);
// return false;
// }

// if (asknumberQuestion("Guess my favorite number between 1 and 7", 7)) {
//   score++;
// }




// // 6th Question second attempt
// let userNumberGuess = prompt('Guess the correct number?');
// let correctNumber = 7;

// for ( let i = 0; i < 4; i++){
//   if (userNumberGuess < correctNumber){
//     alert('too low!');
//   } else if (userNumberGuess > correctNumber){
//     alert('too high');
//   } else {
//     alert('that is correct!');
//   }
// }



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
const newquestion = ['black', 'red', 'brown', 'green'];

for (let i = 0; i < newquestion.length; i++){
  if (multiAnswerResponse === newquestion[i]){
    alert('Correct!');
  } else {
    alert('Please try again!');
  }
}
