// // set variables for the one day Forecast to get city info on page
let dayOneForcast = "oneDayForcast";
const oneDayCity = $(".city");
const oneDayWind = $(".wind");
const oneDayHumidity = $(".humidity");
const oneDayTemp = $(".temp");
const oneDayUvindex = $(".UVindex");
const oneDayWeather = $(".weather");
const oneDayLatitude = $(".lat");
const oneDayLongitude = $(".lon");
// set variables for the search button
const searchButton = $("#search");
// set the logic to setup local storage
$(".dayOneForcast").val(localStorage.getWeather);
// // set an array for the cities to display a list of the cities

let city = ["Austin", "Houston", "Dallas", "San Marcos"];

// // set a var for the API key to get the weather information
// let apiKey = "c3be44ab7db984ed86cde2a02725a631";
// let openWeather =
// 	"http://api.openweathermap.org/data/2.5/weather?appid='" +
// 	apiKey +
// 	"'&q='Austin'";

const apiKey = "f7beb73a262bbf898ba7bef91aaf85e4";
let weatherurl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
// call for the search button to activate the function to search other cities
$(document).on("click", "#search", function () {
	console.log("this will work");
});
// find the id and create a for loop for the button to find city and append on the empty div
let createButton = function () {
	for (let i = 0; i < city.length; i++) {
		let cityName = $("<button></button>")
			.addClass("searchWeather btn btn-dark btn-block")
			.text(city[i])
			.val(city[i]);
		$("#cities").append(cityName);
	}
};
createButton();

$(document).on("click", ".searchWeather", function () {
	let x = $(this).val();
	console.log(x);
	getWeather(x);
});

let getWeather = function (x) {
	$.ajax({
		url:
			"http://api.openweathermap.org/data/2.5/weather?q=" +
			x +
			"&appid=" +
			apiKey,
		method: "GET",
	}).then(function (res) {
		console.log(res);
		oneDayCity.text(res.name).addClass("text-danger");
		oneDayWind.text("Wind: " + res.wind.speed);
		oneDayHumidity.text("Humidity: " + res.main.humidity);
		oneDayTemp.text("Current Temprature: " + res.main.temp);
		oneDayUvindex.text("UV Index");
		oneDayWeather.text("Weather: " + res.weather[0].description);
		oneDayLatitude.text("Latitude: " + res.coord.lat);
		oneDayLongitude.text("Longitude:" + res.coord.lon);
	});
	$.ajax({
		url: `http://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${oneDayLatitude}&lon=${oneDayLongitude}`,
		method: "GET",
	}).then(function (res) {
		console.log(res);
	});
};
getWeather();
