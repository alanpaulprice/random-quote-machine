// https://dev.twitter.com/web/javascript/loading
// https://dev.twitter.com/web/tweet-button

$(document).ready(function() {
  var quote;
  // ===== NEW QUOTE FUNCTIONS =====
  function getQuote() {
    // Retrieves the quote from the API.
    $.getJSON("https://api.icndb.com/jokes/random" + (new Date().getTime()),
    function(data) {
      
      // Stores the quote as a variable,
      var quote = data.value.joke;
      // Adds the quote to the page.
      $("#quote-content").html(quote);
      
    // ===== TWITTER BUTTON FUNCTIONS =====
    
    // Uses witchcraft to decode the quote of html.
    // http://stackoverflow.com/questions/16134910/how-to-escape-a-single-quote-in-javascript
    var elem = document.createElement('textarea');
    elem.innerHTML = quote;
    var decoded = elem.value;
    
    // Edits the twitter button href to autofill
    // tweet form with current joke.
    $("#twit-link").attr("href", "https://twitter.com/intent/tweet?hashtags=jokes,chucknorris&text=" +  encodeURIComponent(decoded));
  })}; // getQuote function

  // Produces a quote when the page is loaded.
  getQuote();
  
  // Changes the quote when the new quote button is clicked.
  $("#new-joke-btn").on("click", getQuote);   
  
}); // Document ready