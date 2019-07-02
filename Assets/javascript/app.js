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
