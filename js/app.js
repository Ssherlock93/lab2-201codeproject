"use strict";

// Was I born abroad?
var questionOne = prompt('Was I born abroad? (Y/N)');
console.log('Was I born abroad?', questionOne);
if (questionOne.toUpperCase() === "Y") {
    alert('True! I was born in the Netherlands, grew up there and finished my bachelor\'s'+
        'degree and master\'s degree in Geography');
} else if (questionOne.toUpperCase() === 'N') {
    alert('False! I was born in the Netherlands, grew up there and finished my bachelor\'s' +
        'degree and master\'s degree in Geography');
} else {
    alert('try again');
}

//Am I eligible to work in the United States?
var questionTwo = prompt('Am I eligible to work in the United States? (Y/N)');
console.log('Am I eligible to work in the United States?', questionTwo);
if (questionTwo.toUpperCase() === 'Y'){
    alert('True! I have American citizenship!');
} else if (questionTwo.toUpperCase() === 'N') {
    alert('Wrong! I have American citizenship');
} else {
    alert('Try again');
}

//Do I have 10 years of professional experience?
var questionThree = prompt('Do I have 10 years of professional experience? (Y/N)');
console.log('Do I have 10 years of professional experience?', questionThree);
if (questionThree.toUpperCase() === 'Y') {
    alert('True! I have worked as an economic researcher and GIS Analyst before.');
} else if (questionThree.toUpperCase() ==='N') {
    alert('Incorrect. I have worked as an economic researcher and GIS Analyst before.');
} else {
    alert('Try again');
}

//Would I like to become a great software developer?
var questionFour = prompt('Would I like to find a job in software development?(Y/N)');
console.log('Would I like to find a job in software development?', questionFour);
if (questionFour.toUpperCase() === 'Y') {
    alert('Yes, I find it a fascinating field');
} else if (questionFour.toUpperCase() === 'N') {
    alert('Incorrect. The answer is yes!');
} else {
    alert('try again');
}
//Do I like building birdhouses?

var questionFive = prompt('Do I like building birdhouses? (Y/N)');
console.log('Do I like building birdhouses?', questionFive);
if (questionFive.toUpperCase() === 'Y') {
    alert('Are you serious???');
} else if (questionFive.toUpperCase() === 'N') {
    alert('Correct! Birdhouses are quite useless. However I do play gypsy and jazz violin. I also like hiking and reading.');
} else {
    alert('Try again');
}