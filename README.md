# PoGo-Weather
Agenda Day #1, 6/27/19
What we did yesterday
	1. Choosing a topic
	2. Choosing APIs
	3. Lightly draw out the mobile version.

Today's agenda:
	1. Plan out the actual mobile version
	2. Deciding on the minimum viable product
	3. Break down parts to code!?
	4. Some pseudo coding

App function:
	1. Navbar for: Home, How to, About
	2. Search bar: enter location, zip code, city etc… ("Weather API")
	3. List of  location searched, every time a new location is searched for, prepend the old location.
		a. Having a drop down showing the list of Pokemon benefits from weather boost and Pokemon appearing in that weather. (Pokemon Go API)
			i. Pull out all the Pokemons that has a specific type that benefits from "weather boost"
		
Pseudo Code:
	Skipping Navbar and Jumbotron
	1. Add Apixu API 
	2. Search Bar
		a. Add search bar using Bootstrap
		b. Modify search bar to search for location
		c. Look up the location from Apixu API
			i. User input: zip code, city, latitude longitude (optional)
			ii. User input has to be a string
		d. Search button to push the location AND the weather to the location/weather container as a div
	3. Add Pokemon Go API
	4. Location/Weather goes into an array
		a. Show as a drop down menu (Bootstrap)
		b. Under drop down menu, show a list of boosted Pokemon element.
			i. Match the weather API with the weather boosted Pokemon
				1) Find all the boosted Pokemon from the Pokemon Go API
				2) Switch to another html when user select the element
				3) List of boosted pokemon that have the chosen element

Agenda Day 2
    Todo list for day 2:
        1. fetch tyler's html and css from development branch
        2. work on skeleton base off pseudocode
        3. try to 