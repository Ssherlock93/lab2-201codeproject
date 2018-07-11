'use strict';
//introduction
alert('Hi, my name is Trevor Stam. This guessing game reveals something about my background. Answer the questions with Y/y for yes and N/n for no. ');
var nameAnswer = prompt('What\'s your name?');
console.log('userName', nameAnswer);
alert('Welcome '+ nameAnswer + 'let\'s start the guessing game!');

// Was I born abroad?
var answerOne = prompt('Was I born abroad? (Y/N)');
console.log('Was I born abroad?', answerOne);
if (answerOne.toUpperCase() === 'Y') {
  alert('True! I was born in the Netherlands, grew up there and finished my bachelor\'s'+
        'degree and master\'s degree in Geography');
} else if (answerOne.toUpperCase() === 'N') {
  alert('False! I was born in the Netherlands, grew up there and finished my bachelor\'s' +
        'degree and master\'s degree in Geography');
} else {
  alert('try again');
}

//Am I eligible to work in the United States?
var answerTwo = prompt('Am I eligible to work in the United States? (Y/N)');
console.log('Am I eligible to work in the United States?', answerTwo);
if (answerTwo.toUpperCase() === 'Y'){
  alert('True! I have American citizenship!');
} else if (answerTwo.toUpperCase() === 'N') {
  alert('Wrong! I have American citizenship');
} else {
  alert('Try again');
}

//Do I have 10 years of professional experience?
var answerThree = prompt('Do I have 10 years of professional experience? (Y/N)');
console.log('Do I have 10 years of professional experience?', answerThree);
if (answerThree.toUpperCase() === 'Y') {
  alert('True! I have worked as an economic researcher and GIS Analyst before.');
} else if (answerThree.toUpperCase() ==='N') {
  alert('Incorrect. I have worked as an economic researcher and GIS Analyst before.');
} else {
  alert('Try again');
}

//Would I like to become a great software developer?
var answerFour = prompt('Would I like to find a job in software development?(Y/N)');
console.log('Would I like to find a job in software development?', answerFour);
if (answerFour.toUpperCase() === 'Y') {
  alert('Yes, I find it a fascinating field');
} else if (answerFour.toUpperCase() === 'N') {
  alert('Incorrect. The answer is yes!');
} else {
  alert('try again');
}
//Do I like building birdhouses?

var answerFive = prompt('Do I like building birdhouses? (Y/N)');
console.log('Do I like building birdhouses?', answerFive);
if (answerFive.toUpperCase() === 'Y') {
  alert('Are you serious???');
} else if (answerFive.toUpperCase() === 'N') {
  alert('Correct! Birdhouses are quite useless. However I do play gypsy and jazz violin. I also like hiking and reading.');
} else {
  alert('Try again');
}

//What is my favorite number?
