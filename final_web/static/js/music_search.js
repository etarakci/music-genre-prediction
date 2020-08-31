// default data
var defData = data_default; 
// actual data
var tableData = spotify_data;

// console.log(defData);
// console.log(tableData); 

// *********************************
//          DATA TABLE
// *********************************
// Use D3 to select the table
var table = d3.select("table");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Create a function to build table 
function populateTable(data){
    // Iterate through each object in the array and call anonymous
    // arrow function
    // cntr = 20;
    // i = 0;
    data.forEach((Song) => {
        // if (i<cntr){
            var row = tbody.append("tr");
            // Iterate through each key and value in an object
            Object.entries(Song).forEach(([key, value]) => {
                // append data
                var cell = row.append("td");
                cell.text(value);
            });
        // }
        // i++;
       
    });
    // turns each cell clickable each time the table is populated 
    $('#music-table').ready(function () {
        $("td").click(function (event) {  
            // event.preventDefault(); 
            window.open($(this).text(), "PopupWindow", "width=600,height=600,scrollbars=yes,resizable=yes");
        });
    });
};  


populateTable(defData);

// *********************************
//    MULTIPLE SEARCH CATEGORIES
// *********************************
// Select the filter button
var button = d3.select("#filter-btn");
// Create event handler
button.on("click", handleClick);

function handleClick() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement1 = d3.select("#genre");
    var inputElement2 = d3.select("#artist_name");
    // var inputElement3 = d3.select("#genre_name");
    // var inputElement4 = d3.select("#artist_href");
    // var inputElement5 = d3.select("#track_href");
    // Store user input values into variables
    var inputGenre = inputElement1.property("value").trim();
    var inputArtist = inputElement2.property("value").trim();
    
    console.log(inputGenre);
    // var combinedInput = {inputGenre, inputArtist}


    var filterAllinput = tableData.filter(data => 
        data.genre_name === inputGenre && data.artist_name === inputArtist
    );
    // console.log(filterAllinput)
    var filterSomeInput = tableData.filter(data => 
        data.genre_name === inputGenre || data.artist_name === inputArtist
    );
    // console.log(filterSomeInput)

    // let inputs = {filterAllinput, filterSomeInput}; 

    // Conditions
    if (filterAllinput.length !== 0){
        tbody.html("");
        if (filterAllinput.length === 0){
            tbody.append("tr").append("td").text("No results for values entered."); 
        }; 
        populateTable(filterAllinput); 
    }
    else if (filterSomeInput.length !== 0 ) { 
        tbody.html("");
        if (filterSomeInput.length === 0){
        tbody.append("tr").append("td").text("No results for values entered."); 
        }; 
        populateTable(filterSomeInput); 
    }
    else{ 
        tbody.html("");
        tbody.append("tr").append("td").text("No values entered!"); 
    }

};

// *********************************
//          RESET TABLE
// *********************************
var resetButton = d3.select("#reset-btn");
resetButton.on("click", () => {
    tbody.html("");
    populateTable(defData)
    console.log("Table reset.")
});

