"use strict";

// Was I born abroad?
var questionOne = prompt('Was I born abroad?');
if (questionOne.toUpperCase() === "Y") {
    alert('True! I was born in the Netherlands, grew up there and finished my bachelor\'s'+
        'degree and master\'s degree in Geography');
} else if (questionOne.toUpperCase() === 'N') {
    alert('False!');
} else {
    alert('I was born in the Netherlands, grew up there and finished my bachelor\'s' +
        'degree and master\'s degree in Geography')
}

//Am I eligible to work in the United States?
var questionTwo = prompt('Am I eligible to work in the United States?');
if (questionTwo.toUpperCase() === 'Y'){
    alert('True! I have American citizenship!');
} else if (questionTwo.toUpperCase() === 'N') {
    alert('Wrong! I have American citizenship');
}

//Do I have 10 years of professional experience?
var questionThree = prompt('Do I have 10 years of professional experience?');
if (questionThree.toUpperCase() === 'Y') {
    alert('True! I have worked as an economic researcher and GIS Analyst before.');
} else if (questionThree.toUpperCase() ==='N') {
    alert('Incorrect');
} else {
    alert('I have worked as an economic researcher and GIS Analyst before.');
}

//Would I like to become a great software developer?
var questionFour = prompt('Would I like to find a job in software development?');
if (questionFour.toUpperCase() === 'Y') {
    alert('Yes, I find it a fascinating field');
} else if (questionFour.toUpperCase() === 'N') {
    alert('Incorrect');
} else {
    alert('I do want to work in software development. It is a fascinating field.');
}
//Do I like building birdhouses?

var questionFive = prompt('Do I like building birdhouses?');
if (questionFive.toUpperCase() === 'Y') {
    alert('Are you serious???');
} else if (questionFive.toUpperCase() === 'N') {
    alert('Correct! Birdhouses are quite useless');
} else {
    alert('However I do play gypsy and jazz violin. I also like hiking and reading.');
}