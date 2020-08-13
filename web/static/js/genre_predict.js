// Select the filter button
var button = d3.select("#lyric-submit");

// Create event handler
button.on("click", handleSubmit);

function handleSubmit() { 
    // Prevent the page from refreshing
    d3.event.preventDefault();
    var inputElement = d3.select("#lyric-input");
    var inputLyrics = inputElement.property("value").trim();

    console.log(inputLyrics);

    d3.request("/genrepredict")
   .header("X-Requested-With", "XMLHttpRequest")
   .header("Content-Type", "application/x-www-form-urlencoded")
   .post(inputLyrics);
}