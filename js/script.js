/*
7 quotes are created in this array. I will access
this info later in the program.
*/
var quotes = [
  {
    quote: ' It does not do to dwell on dreams and forget to live ',
    source: ' Albus Dumbledore ',
    citation: "Harry Potter and the Sorcerer's Stone"
  },
  {
    quote: 'After all, to the well-organised mind, death is but the next great adventure. ',
    source: ' Albus Dumbledore ',
    citation: "Harry Potter and the Sorcerer's Stone"
  },
  {
    quote: " What's comin will come, an' we'll meet it when it does. ",
    source: ' Hagrid ',
    citation: 'Harry Potter and the Goblet of Fire'
  },
  {
    quote: ' Those who dare to fail miserably can achieve greatly. ',
    source: ' John F. Kennedy '
  },
  {
    quote: ' All these moments will be lost in time, like tears in rain. ',
    source: ' Blade Runner ',
    citation: 'Roy Batty'
  },
  {
    quote: " Traveling through hyperspace ain’t like dusting crops, farm boy. ",
    source: ' Han Solo ',
    citation: ' Star Wars: A New Hope '
  },
  {
    quote: " I'm going to try to unite all Americans. ",
    source: ' President Barack Obama'
  }
];
/*
This variable is used in my timer function, which automatically
cycles the quote on the webpage.
*/
var changeQuote;
/*
This function grabs a random quote from the quotes array.
*/
function getRandomQuote (quotes){
  var randomQuote = quotes[Math.floor( Math.random() * quotes.length )];
  return randomQuote;
}
/*
This function takes the random quote grabbed
in the funtion getRandomQuote and prints it to the
webpage in the style that was provided.
*/
function printQuote(){
  var randomQuote = getRandomQuote(quotes);
  var quote ='';
  quote += '<p class="quote">' + randomQuote.quote + '</p>'
  quote += '<p class="source">' + randomQuote.source
  //This conditional statement isued used IF there is further citation.
  if (randomQuote.citation){
    quote += '<span class="citation">' + randomQuote.citation + '</span>'
  }
  quote += '</p>'
  /*
  This line of code uses the random rgba color created in the function
  randomColor to randomly change the color of the background when the
  button is pushed.
  */
  document.body.style.backgroundColor = randomColor();
  /*
This prints the quote string created above to the HTML
page, formatted in HTML.
  */
  document.getElementById('quote-box').innerHTML = quote;
}
/*
Creates random rgba formatted color
code which I'll use to randomize the
background color of the webpage. This is used
in the printQuote function.
*/
function randomColor(){
var color1 = Math.floor(Math.random() * 150);
var color2 = Math.floor(Math.random() * 150);
var color3 = Math.floor(Math.random() * 150);
var randColor = "rgba(" + color1 + "," + color2 + "," + color3 + ")";
return randColor;
}
/*
This function automatically cycles through
the quotes every 10 seconds.
*/
function timePage() {
      changeQuote = setInterval(printQuote, 10000);
    }
//Calls the function timePage.
timePage();
// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
