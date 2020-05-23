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

const apiKey = "f7beb73a262bbf898ba7bef91aaf85e4";
let weatherurl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
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

$(".searchWeather").click(function () {
	let x = $(this).val();
	console.log(x);
	getWeather(x);
});

let getWeather = function (city) {
	createButton();
	$.ajax({
		url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
		method: "GET",
	}).then(function (res) {
		console.log(res);
		oneDayCity.text(res.name);
	});
};
getWeather();
