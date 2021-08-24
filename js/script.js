/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/***
 * `quotes` array
***/

let quotes = [
{
  quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  source: 'Nelson Mandela',
  citation: 'testtest',
  year: 2000
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
 * `getRandomQuote` function
***/

function getRandomQuote () {
  randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  return quotes[randomNumber];
}


/***
 * `printQuote` function
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
