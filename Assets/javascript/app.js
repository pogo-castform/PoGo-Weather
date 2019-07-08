var weather = [];

function displayWeatherInfo(castform) {
    var queryURL = "//api.apixu.com/v1/current.json?key=bf20c67b9bae4763b31193656192706&q=" +
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
            var queryURL = "https://cors-anywhere.herokuapp.com/https://pokemon-go1.p.rapidapi.com/weather_boosts.json";

            // Return the elements that get boosted for that weather
            $.ajax({
                method: "GET",
                url: "https://cors-anywhere.herokuapp.com/https://pokemon-go1.p.rapidapi.com/weather_boosts.json",
                headers: {
                    "X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com",
                    "X-RapidAPI-Key":
                        "eeb05322afmsheba8cf3bf7d270ap12ebc3jsn091a99683f0e"
                }
            }).then(function (result) {
                console.log(result);
                var rainPoke = result.Rain;
                var clearPoke = result.Clear;
                var cloudyPoke = result.Cloudy;
                var fogPoke = result.Fog;
                var partlyPoke = result["Partly cloudy"];
                var snowPoke = result.Snow;
                var sunnyPoke = result.Sunny;
                var windyPoke = result.Wind;
                var boostButton = "<button class='collapsible'>Boosted Elements: "
                var endButton = "</button><div class='content'></div>"

                if (weatherAPI.includes("rain") || weatherAPI.includes("drizzle") || weatherAPI.includes("thundery")) {

                    castformDiv.append(boostButton + rainPoke + endButton);
                } else if (weatherAPI.includes("Clear")) {

                    castformDiv.append(boostButton + clearPoke + endButton);

                } else if (weatherAPI.includes("Cloudy") || weatherAPI.includes("Overcast")) {

                    castformDiv.append(boostButton + cloudyPoke + endButton);

                } else if (weatherAPI.includes("Fog") || weatherAPI.includes("Mist")) {

                    castformDiv.append(boostButton + fogPoke + endButton);

                } else if (weatherAPI === "Partly cloudy") {

                    castformDiv.append(boostButton + partlyPoke + endButton);

                } else if (weatherAPI.includes("Snow") || weatherAPI.includes("sleet")
                    || weatherAPI.includes("blizzard") || weatherAPI.includes("pellets")) {

                    castformDiv.append(boostButton + snowPoke + endButton);

                } else if (weatherAPI.includes("Sunny")) {

                    castformDiv.append(boostButton + sunnyPoke + endButton);

                } else if (weatherAPI.includes("Windy")) {

                    castformDiv.append(boostButton + windyPoke + endButton);
                }
                function showPokemon(weatherAPI) {

                    // Return the elements that get boosted for that weather
                    $.ajax({
                        method: "GET",
                        url: "https://cors-anywhere.herokuapp.com/https://pokemon-go1.p.rapidapi.com/pokemon_types.json",
                        headers: {
                            "X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com",
                            "X-RapidAPI-Key":
                                "eeb05322afmsheba8cf3bf7d270ap12ebc3jsn091a99683f0e"
                        }
                    }).then(function (result) {
                        function checkSunnyPoke(types) {
                            for (var i = 0; i < sunnyPoke.length; i++) {
                                if (types.includes(sunnyPoke[i])) {
                                    return true;
                                }
                            }

                        }
                        function checkRainPoke(types) {
                            for (var i = 0; i < rainPoke.length; i++) {
                                if (types.includes(rainPoke[i])) {
                                    return true;
                                }
                            }
                        }
                        function checkFogPoke(types) {
                            for (var i = 0; i < fogPoke.length; i++) {
                                if (types.includes(fogPoke[i])) {
                                    return true;
                                }
                            }
                        }
                        function checkClearPoke(types) {
                            for (var i = 0; i < clearPoke.length; i++) {
                                if (types.includes(clearPoke[i])) {
                                    return true;
                                }
                            }
                        }
                        function checkCloudyPoke(types) {
                            for (var i = 0; i < cloudyPoke.length; i++) {
                                if (types.includes(cloudyPoke[i])) {
                                    return true;
                                }
                            }
                        }
                        function checkPartlyPoke(types) {
                            for (var i = 0; i < partlyPoke.length; i++) {
                                if (types.includes(partlyPoke[i])) {
                                    return true;
                                }
                            }
                        }
                        function checkSnowPoke(types) {
                            for (var i = 0; i < snowPoke.length; i++) {
                                if (types.includes(snowPoke[i])) {
                                    return true;
                                }
                            }
                        }
                        function checkWindyPoke(types) {
                            for (var i = 0; i < windyPoke.length; i++) {
                                if (types.includes(windyPoke[i])) {
                                    return true;
                                }
                            }
                        }

                        function getWeatherType(weatherAPI) {
                            if (weatherAPI.includes("rain") || weatherAPI.includes("drizzle") || weatherAPI.includes("thundery")) {
                                return checkRainPoke;
                            } else if (weatherAPI.includes("Clear")) {
                                return checkClearPoke;
                            } else if (weatherAPI.includes("Cloudy") || weatherAPI.includes("Overcast")) {
                                return checkCloudyPoke;
                            } else if (weatherAPI.includes("Fog") || weatherAPI.includes("Mist")) {
                                return checkFogPoke;
                            } else if (weatherAPI === "Partly cloudy") {
                                return checkPartlyPoke;
                            } else if (weatherAPI.includes("Snow") || weatherAPI.includes("sleet")
                                || weatherAPI.includes("blizzard") || weatherAPI.includes("pellets")) {
                                return checkSnowPoke;
                            } else if (weatherAPI.includes("Sunny")) {
                                console.log(sunnyPoke);
                                return checkSunnyPoke;
                            } else if (weatherAPI.includes("Windy")) {
                                return checkWindyPoke;
                            }
                        }


                        var coll = document.getElementsByClassName("collapsible");
                        var i;

                        for (i = 0; i < coll.length; i++) {
                            coll[i].addEventListener("click", function () {
                                this.classList.toggle("active");
                                var content = this.nextElementSibling;
                                if (content.style.display === "block") {
                                    content.style.display = "none";
                                } else {
                                    content.style.display = "block";
                                }
                            });
                        }

                        for (var i = 0; i < 520; i++) {
                            var checkPokeByWeatherType = getWeatherType(weatherAPI);
                            if (checkPokeByWeatherType(result[i].type)) {
                                console.log(result[i].pokemon_name);
                                var $pkmn = $("<p>").text(result[i].pokemon_name);
                                var pkName = result[i].pokemon_name.toLowerCase();
                                var $pokeSprite = $("<img src=//play.pokemonshowdown.com/sprites/xyani/" + pkName + ".gif>");
                                $(".content").append($pkmn);
                                $pkmn.prepend($pokeSprite);
                            } 
                        }
                    })
                }
                showPokemon(weatherAPI);
            })

        }
        compareWeather(weatherAPI);

    });
}

$(".pokemon-go-button").on("click", function (event) {
    event.preventDefault();
    var castform = $(".pokemon-search").val().trim();
    displayWeatherInfo(castform)
    $("#weather-view").text("");

});