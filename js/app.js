'use strict';

//adding a score
var scoreCard = 0;
//introduction
alert('Hi, my name is Trevor Stam. This guessing game reveals something about my background. Answer the questions with Y/y for yes and N/n for no. ');
var nameAnswer = prompt('What\'s your name?');
console.log('userName', nameAnswer);
alert('Welcome '+ nameAnswer + ' let\'s start the guessing game!');



// Was I born abroad?
// Added functions to each of the seven questions
function questionOne() {
  var answerOne = prompt('Was I born abroad? (Y/N)');
  console.log('Was I born abroad?', answerOne);
  if (answerOne.toUpperCase() === 'Y') {
    alert('True! I was born in the Netherlands, grew up there and finished my bachelor\'s'+
        'degree and master\'s degree in Geography');
    scoreCard ++;
  } else if (answerOne.toUpperCase() === 'N') {
    alert('False! I was born in the Netherlands, grew up there and finished my bachelor\'s' +
        'degree and master\'s degree in Geography');
  } else {
    alert('try again');
  }

}
questionOne();

//Am I eligible to work in the United States?
function questionTwo() {
  var answerTwo = prompt('Am I eligible to work in the United States? (Y/N)');
  console.log('Am I eligible to work in the United States?', answerTwo);
  if (answerTwo.toUpperCase() === 'Y'){
    alert('True! I have American citizenship!');
    scoreCard ++;
  } else if (answerTwo.toUpperCase() === 'N') {
    alert('Wrong! I have American citizenship');
  } else {
    alert('Try again');
  }

}

questionTwo();

//Do I have 10 years of professional experience?
function questionThree() {
  var answerThree = prompt('Do I have 10 years of professional experience? (Y/N)');
  console.log('Do I have 10 years of professional experience?', answerThree);
  if (answerThree.toUpperCase() === 'Y') {
    alert('True! I have worked as an economic researcher and GIS Analyst before.');
    scoreCard ++;
  } else if (answerThree.toUpperCase() ==='N') {
    alert('Incorrect. I have worked as an economic researcher and GIS Analyst before.');
  } else {
    alert('Try again');
  }

}
questionThree();

//Would I like to become a great software developer?
function questionFour() {
  var answerFour = prompt('Would I like to find a job in software development?(Y/N)');
  console.log('Would I like to find a job in software development?', answerFour);
  if (answerFour.toUpperCase() === 'Y') {
    alert('Yes, I find it a fascinating field');
    scoreCard ++;
  } else if (answerFour.toUpperCase() === 'N') {
    alert('Incorrect. The answer is yes!');
  } else {
    alert('try again');
  }
}
questionFour();

//Do I like building birdhouses?
function questionFive() {
  var answerFive = prompt('Do I like building birdhouses? (Y/N)');
  console.log('Do I like building birdhouses?', answerFive);
  if (answerFive.toUpperCase() === 'Y') {
    alert('Are you serious???');
  } else if (answerFive.toUpperCase() === 'N') {
    alert('Correct! Birdhouses are quite useless. However I do play gypsy and jazz violin. I also like hiking and reading.');
    scoreCard ++;
  } else {
    alert('Try again');
  }
}
questionFive();

//What is my favorite number?
//User has 4 guesses.

function questionSix() {
  var faveNumber = 10;//favenumber
  var attempts = 4; // number of guesses



  while (attempts > 0) {
    var userGuess = prompt('guess the correct number between 0 and 20 in 4 tries');
    console.log('number guess: ', userGuess);
    if (parseInt(userGuess) < faveNumber) {
      alert('go HIGHER! you have used '+ (5 - attempts) + ' attempt');
      attempts --;
    } else if (parseInt(userGuess) > faveNumber){
      alert('go lower you have used ' + (5 - attempts) + ' attempt');
      attempts --;
    } else{
      alert('Thats correct! '+ faveNumber + 'is my favorite number');
      console.log('Correct');
      scoreCard ++;
      break;

    }

  }
}
questionSix();

// As a developer, I want to add a seventh question to my guessing game that has multiple
// possible correct answers that are stored in an array.For instance,
// "Can you guess a state that I have lived in besides Washington?",
// so that even more of my programming skills are showcased.
// For now, I will structure this question so that the user has six tries to get a single correct answer,
// and upon using up those tries OR getting a correct answer, displays a message to the user indicating
// all of the possible correct answers.

function questionSeven() {
  var places = ['California', 'Switzerland', 'United Kingdom', 'Holland'];//places lived in
  var userTry = 0; //number of guesses by user
  var rightPlace = [];//empty array. When place is correctly guessed, it gets pushed into empty array
  var correctPlaceGuess = false; //

  while (userTry < 6){
    var placeGuess = prompt('Guess the places that I have lived in?');
    console.log('placeGuess: ', placeGuess);
    for (var i = 0; i < places.length; i++ ) {

      if (places[i] === placeGuess){
        alert('That\'s correct. I\'ve lived there');
        console.log('placeGuess: ', placeGuess);
        rightPlace.push(placeGuess);
        correctPlaceGuess = true;
        scoreCard ++;
        break;

      }
    }

    userTry ++;
    if (correctPlaceGuess === true) {
      break;
    } else {
      alert('That\'s not correct');
    }
  }
}
questionSeven();

//tally of total score
function tally() {
  alert('Hey '+ nameAnswer + 'Your total score is' + scoreCard + ' out of 7');
  console.log(nameAnswer + ': ' + scoreCard);
}
tally();
