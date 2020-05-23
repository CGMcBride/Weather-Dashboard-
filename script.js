// set variables for the one day Forecast to get city info on page
let dayOneForcast = "oneDayForcast";
const oneDayCity = document.querySelector(".city");
const oneDayWind = document.querySelector(".wind");
const oneDayHumidity = document.querySelector(".humidity");
const oneDayTemp = document.querySelector(".temp");
const oneDayUvindex = document.querySelector(".UVindex");

// set an array for the cities to display a list of the cities

let city = [];

// set a var for the API key to get the weather information
let apiKey = "c3be44ab7db984ed86cde2a02725a631";
let openWeather =
	"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={c3be44ab7db984ed86cde2a02725a631}";
