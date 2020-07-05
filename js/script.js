/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'The unexamined life is not worth living',
    source: 'Socrates',
    // citation:'Ancient Greek Philosipher',
    year: '470-399 BCE'
  }, 
  {
    quote: 'Entities should not be multiplied unnecessarily',
    source: 'William of Ockham',
    citation:'14th Century English Philosipher',
    // year: '1285 - 1349'
  }, 
  {
    quote: 'The life of man is solitary, poor, nasty, brutish, and short.',
    source: 'Thomas Hobbes',
    // citation:'17th Century English Philosipher',
    // year: '1588 - 1679'
  }, 
  {
    quote: 'I think therefore I am',
    source: 'René Descartes',
    citation:'17th Century French Philosipher',
    year: '1596 - 1650'
  }, 
  {
    quote: 'One cannot step twice in the same river.',
    source: 'Heraclitus',
    citation:'Ancient Greek Philosipher',
    year: '540 - 480 BCE'
  }
];


/***
 * `getRandomQuote` function
/***
 * This function generates a random number equal to the total length of the quotes array
 * stores the number inside  a variable (n)
 * selects an array object at the index value of n
 * returns that array object
 ***/

function getRandomQuote() {
  const n = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[n];
  return randomQuote;
}

/***
 * `printQuote` function
/***
 * This function calls the getRandomQuote function
 * creates a string equal to the returned array object's "quote" and "source" properties as HTML <p> tags
 * runs two conditional statements to check for possible "citation" and "year" properties
 * adds those properties to the end of the string as HTML <span> tags (if the conditions are met)
 * adds a closing <p> tag to the end of the string
 * creates a variable to store the full string 
 * outputs the string as HTML on the index.html file inside the quote-box div
 ***/

function printQuote() {
  const generatedQuote = getRandomQuote();
  let incompleteString = '<p class="quote">' + generatedQuote.quote + '</p>' + '<p class="source">' + generatedQuote.source;
  if (generatedQuote.citation) {
    incompleteString += '<span class="citation">' + generatedQuote.citation + '</span>';
  }
  if (generatedQuote.year) {
    incompleteString += '<span class="year">' + generatedQuote.year + '</span>';
  }
  const closingTag = '</p>';
  const fullString = incompleteString + closingTag;
  document.getElementById('quote-box').innerHTML = fullString;
}

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
