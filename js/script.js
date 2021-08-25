/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/***
 * `quotes` array - Here I initialised an array and played 5 objects inside with their own properties. To make it easier to read, I placed each object on a new line.

***/

let quotes = [
{
  quote: "That's one small step for a man, one giant leap for mankind.",
  source: 'Neil Armstrong',
  citation: 'NASA',
  year: 1969
},
{
  quote: 'The way to get started is to quit talking and begin doing.',
  source: 'Walt Disney'
},
{
  quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  source: 'Steve Jobs'
},
{
  quote: 'If life were predictable it would cease to be life, and be without flavor.',
  source: 'Eleanor Roosevelt'
},
{
  quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  source: 'Oprah Winfrey'
},
]


/***
 * `getRandomQuote` function - Here I've created a function which uses Math.random to return a random quote from the 'quotes' array between index 0-4.
    Since arrays start at an index value of zero, I did not need to set a minimum value since there's a chance the random number will be rounded down to
    zero by using Math.floor which is what I want for the first quote to display.
***/

function getRandomQuote () {
  randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  return quotes[randomNumber];
}


/***
 * `printQuote` function - This function I created calls the getRandomQuote function above and then assigns the quote to a variable named quoteObject.
    Using template literals (because I find them way easier to work with) I started constructing my HTML and inserted the quote using the quoteObject variable
    and specifically targeted the properties that were relevant for each section of the string.
    Furthermore, I created two IF statements to run in the event there was also a citation or year property associated with the object.
    I was thinking of using (xx ||(or)&&(and) xx) statement, however I wasn't sure if this would work as well so I kept things simple.

***/

function printQuote() {
  let quoteObject = getRandomQuote();
  let html = `<p class="quote">${quoteObject.quote}</p> <p class="source">${quoteObject.source}`;
    if (quoteObject.citation) {
      html += `<span class="citation"> ${quoteObject.citation} </span>`
    }
    if (quoteObject.year) {
      html += `<span class="year"> ${quoteObject.year} </span>`
    }
    html += '</p class="source">';
    document.getElementById('quote-box').innerHTML = html;
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
