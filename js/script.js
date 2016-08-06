// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function printQuote() {
	// Reset the automatic reload interval
	resetInterval();
	// Set a random background color
	document.body.style.backgroundColor = getRandomColor();

	// Get a random quote
	var quote = getRandomQuote();
	var message = "";

	// Add the valid fields of the quote to the message variable with formatting
	message += "<p class='quote'> " + quote.quote + " </p>";
	message += "<p class='source'> " + quote.source;
	if(quote.citation != null) {
		message += "<span class='citation'> " + quote.citation + " </span> ";
	}
	if(quote.year != null) {
		message += "<span class='year'> " + quote.year + " </span> ";
	}
	message += "</p>";

	// Set the target div and the message in it
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = message;
}

// Arrays to make sure each quote is used only once in one iteration
var quotesUnused = [];
var quotesUsed = [];
// Return a random quote from the quotes array. 
// Only use each quote in the array once, before starting from the beginning.
function getRandomQuote() {

	// Check if the unused quotes array is empty.
	// If it is, fill it with all the quotes and clear the quotesUsed array.
	if(quotesUnused.length == 0)
	{
		quotesUnused = quotes.slice();
		quotesUsed = [];
	}

	// Find a random quote from the array
	var i = Math.floor(Math.random() * quotesUnused.length);
	var quote = quotesUnused[i];

	// Remove the chosen quote from the Unused array and add it to the Used array.
	quotesUnused.splice(i,1);
	quotesUsed.push(quote);

	return quote;
}

// Nice calm backgroundcolors
var validColors = ["#56ab2f", "#a8e063", "#36b55c", "#457fca", "#5691c8"];
// Return a random color from the valid color palette described in validColors
function getRandomColor() {
	var i = Math.floor(Math.random() * validColors.length);
	return validColors[i];
}

// Create an interval at which to call the printQuote function
var intervalID = window.setInterval(printQuote, 30000);
// Clears the interval and resets it to 30 seconds.
function resetInterval() {
	if(intervalID != null){
		window.clearInterval(intervalID);
	}

	intervalID = window.setInterval(printQuote, 30000);
}

// Print the first quote.
printQuote();