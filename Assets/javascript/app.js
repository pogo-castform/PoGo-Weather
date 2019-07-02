var weather = [];
function displayWeatherInfo(castform) {
    var queryURL = "http://api.apixu.com/v1/current.json?key=bf20c67b9bae4763b31193656192706&q=" +
        castform;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
        console.log(response);
        console.log(response.current.temp_f);
        console.log(response.location.name);
        console.log(response.current.condition.icon);
        console.log(weatherAPI);

        var castformDiv = $("<div class='castform'>");

        var country = response.location.country
        var pThree = $("<p>").text("Country: " + country);
        castformDiv.append(pThree);

        var locationName = response.location.name;
        var pTwo = $("<p>").text("City: " + locationName);
        castformDiv.append(pTwo);

        var imgURL = response.Poster;
        var image = $("<img>").attr("src", "http:" + response.current.condition.icon);
        castformDiv.append(image);

        // TEMPS
        var temperture = response.current.temp_f;
        var pOne = $("<p>").text("Temp F: " + temperture);
        castformDiv.append(pOne);

        var pFive = $("<p>").text(response.current.condition.text);
        castformDiv.append(pFive);

        var weatherAPI = $("<br>").text("");
        castformDiv.append(weatherAPI);

       
        
        $("#weather-view").prepend(castformDiv);
        var weatherAPI = response.current.condition.text;
        //---------------------compare method with pokemon weather---------------------
        function compareWeather(weatherAPI) {
            var castform = $(this).attr("data-name");
            var queryURL = "https://pokemon-go1.p.rapidapi.com/weather_boosts.json";

            // Return the elements that get boosted for that weather
            $.ajax({
                method: "GET",
                url: "https://pokemon-go1.p.rapidapi.com/weather_boosts.json",
                headers: {
                    "X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com",
                    "X-RapidAPI-Key":
                        "eeb05322afmsheba8cf3bf7d270ap12ebc3jsn091a99683f0e"
                }
            }).then(function (result) {
                console.log(result);

                if (weatherAPI.includes("rain") || weatherAPI.includes("drizzle") || weatherAPI.includes("thundery")) {
                    var $rain = ("<div>");
                    castformDiv.append("Boosted Elements: " + result.Rain);
                    
                    
                } else if (weatherAPI.includes("Clear")) {
                    var $Clear = ("<div>");
                    castformDiv.append("Boosted Elements: " + result.Clear);
                    
                } else if (weatherAPI.includes("Cloudy") || weatherAPI.includes("Overcast")) {
                    var $Cloudy = ("<div>");
                    castformDiv.append("Boosted Elements: " + result.Cloudy);
                    
                } else if (weatherAPI.includes("Fog") || weatherAPI.includes("Mist")) {
                    var $Fog = ("<div>");
                    castformDiv.append("Boosted Elements: " + result.Fog);

                } else if (weatherAPI === "Partly cloudy") {
                    var $Partly = ("<div>");
                    castformDiv.append("Boosted Elements: " + result["Partly cloudy"]);
                    
                } else if (weatherAPI.includes("Snow") || weatherAPI.includes("sleet") || weatherAPI.includes("blizzard") || weatherAPI.includes("pellets")) {
                    var $Snow = ("<div>");
                    castformDiv.append("Boosted Elements: " + result.Snow);

                } else if (weatherAPI.includes("Sunny")) {
                    var $Sunny = ("<div>");
                    castformDiv.append("Boosted Elements: " + result.Sunny);
                    
                } else if (weatherAPI.includes("Windy")) {
                    var $Windy = ("<div>");
                    castformDiv.append("Boosted Elements: " + result.Windy);
                    
                }
            })
        }
        compareWeather(weatherAPI);
    });
}

$(".pokemon-go-button").on("click", function (event) {
    event.preventDefault();
    var castform = $(".pokemon-search").val().trim();
    displayWeatherInfo(castform)

});






// <div class="container">
// <h1>Movie Search</h1>

// <!-- Rendered buttons will get dumped here  -->
// <div id="buttons-view"></div>

// <form id="movie-form">
//   <label for="movie-input">Add a Movie, Yo!</label>
//   <input type="text" id="movie-input"><br>

//   <!-- Button triggers new movie to be added -->
//   <input id="add-movie" type="submit" value="Add a Movie, Yo!">
// </form>

// <div class="accordion" id="accordionExample">
//   <div class="card">
//     <div class="card-header" id="headingOne">
//       <h2 class="mb-0">
//         <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
//           aria-expanded="true" aria-controls="collapseOne">
//           Grass Type Pokemon
//         </button>
//       </h2>
//     </div>

//     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
//       <div class="card-body">
//           <div id="pokemonDump"></div>
//       </div>
//     </div>
//   </div>

//   <!-- Movies will get dumped Here -->
  
//   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//     integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//     crossorigin="anonymous"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
//     integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//     crossorigin="anonymous"></script>
//   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//     integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//     crossorigin="anonymous"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//   <script type="text/javascript">
//     // Initial array of movies
//     var movies = ["Clear", "Cloudy"];

//     // displayMovieInfo function re-renders the HTML to display the appropriate content
//     function displayMovieInfo() {

//       var pogoTypes = $(this).attr("data-name");
//       var queryURL = "https://pokemon-go1.p.rapidapi.com/pokemon_types.json";

//       // Return the elements that get boosted for that weather
//       $.ajax({
//         method: "GET",
//         url: "https://pokemon-go1.p.rapidapi.com/pokemon_types.json",
//         headers: {
//           "X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com",
//           "X-RapidAPI-Key":
//             "eeb05322afmsheba8cf3bf7d270ap12ebc3jsn091a99683f0e"
//         }
//       }).then(function (result) {

//         console.log(result)

//         for (var i = 0; i < 520; i++) {

//           if (result[i].type.includes("Grass")) {
//             console.log(result[i].pokemon_name);

//             var $pkmn = $("<p>").text(result[i].pokemon_name);

//             var pkName = result[i].pokemon_name.toLowerCase();
//             var $pokeSprite = $("<img src=https://img.pokemondb.net/sprites/black-white/normal/"+pkName+ ".png>");

//             $("#pokemonDump").append($pkmn);
//             $pkmn.prepend($pokeSprite);


          

//           }



//           // console.log(result[i].pokemon_name);
//           // console.log(result[i].type);

//         }

//       })

//     }


//     // function that 

//     // Function for displaying movie data
//     function renderButtons() {

//       // Deletes the movies prior to adding new movies
//       // (this is necessary otherwise you will have repeat buttons)
//       $("#buttons-view").empty();
//       // Loops through the array of movies
//       for (var i = 0; i < movies.length; i++) {

//         // Then dynamicaly generates buttons for each movie in the array
//         // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//         var a = $("<button>");
//         // Adds a class of movie to our button
//         a.addClass("movie");
//         // Added a data-attribute
//         a.attr("data-name", movies[i]);
//         // Provided the initial button text
//         a.text(movies[i]);
//         // Added the button to the buttons-view div
//         $("#buttons-view").append(a);
//       }
//     }

//     // This function handles events where the add movie button is clicked
//     $("#add-movie").on("click", function (event) {
//       event.preventDefault();
//       // This line of code will grab the input from the textbox
//       var movie = $("#movie-input").val().trim();

//       // The movie from the textbox is then added to our array
//       movies.push(movie);

//       // Calling renderButtons which handles the processing of our movie array
//       renderButtons();
//     });

//     // Adding click event listeners to all elements with a class of "movie"
//     $(document).on("click", ".movie", displayMovieInfo);

//     // Calling the renderButtons function to display the intial buttons
//     renderButtons();
//   </script>
// </div>
// </body>

// </html>