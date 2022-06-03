function displayMovieData(movieTitle) {
    let queryURL =
    "https://www.omdbapi.com/?t=" + movieTitle + "&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);

        let tRow = $("<tr>");
        let titleEl = $("<td>").text(response.Title);
        let yearEl = $("<td>").text(response.Year);
        let actorsEl = $("<td>").text(response.Actors);

        tRow.append(titleEl, yearEl, actorsEl);
        $("tbody").append(tRow);
    })
}

$("#movie-button").on("click", function() {
    let movieInput = prompt("What movie?");
    displayMovieData(movieInput);
});

function displaySongData(songTitle) {
    let queryURL =
    "https://api.discogs.com/artists/1/releases?page=2&per_page=75"
    // "https://apiseeds.com/documentation/lyrics" + songTitle + "";
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
    })


}

$("#song-button").on("click", function() {
    let songInput = prompt("What song is it?");
    displaySongData(songInput);
});

