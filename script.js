// // set variables for the one day Forecast to get city info on page
// let dayOneForcast = "oneDayForcast";
const oneDayCity = $(".city");
const oneDayWind = $(".wind");
const oneDayHumidity = $(".humidity");
const oneDayTemp = $(".temp");
const oneDayUvindex = $(".UVindex");

// // set an array for the cities to display a list of the cities

let city = ["Austin", "Houston", "Dallas", "San Marcos"];

// // set a var for the API key to get the weather information
// let apiKey = "c3be44ab7db984ed86cde2a02725a631";
// let openWeather =
// 	"http://api.openweathermap.org/data/2.5/weather?appid='" +
// 	apiKey +
// 	"'&q='Austin'";

let city = "Houston";
const apiKey = "c3be44ab7db984ed86cde2a02725a631";
let weatherurl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

let getWeather = function () {
	$.ajax({
		url: weatherurl,
		method: "GET",
	}).then(function (res) {
		console.log(res);
		oneDayCity.text(res.name);
	});
};
getWeather();

let createButton = function () {
	for (let i = 0; i < city.length; i++) {
		let city = $("<button></button>")
			.addClass("searchWeather btn btn-dark btn-block")
			.text(city[i])
			.val(i);
	}
};
