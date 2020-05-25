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
const oneDayIcon = $(".icon");
const fiveDay = $(".fivedayforecast");
// set variables for the search button
const searchButton = $("#search");
// set the logic to setup local storage
// $(".dayOneForcast").val(localStorage.getWeather);
// // set an array for the cities to display a list of the cities

let city = ["Austin", "Houston", "Dallas", "San Marcos"];
console.log(city);
// localStorage.setItem("myCityKey", JSON.stringify(city));

let getData = JSON.parse(localStorage.getItem("myCityKey"));
console.log(getData);

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
	let newCity = $(".form-control").val();
	console.log(newCity);
	city.push(newCity);
	console.log(city);
	localStorage.setItem("myCityKey", JSON.stringify(city));
	createButton();
});
// find the id and create a for loop for the button to find city and append on the empty div
let createButton = function () {
	$("#cities").empty();
	getData = JSON.parse(localStorage.getItem("myCityKey"));
	for (let i = 0; i < getData.length; i++) {
		let cityName = $("<button></button>")
			.addClass("searchWeather btn btn-dark btn-block")
			.text(getData[i])
			.val(getData[i]);
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
		oneDayTemp.text(
			"Current Temprature: " + Math.round((res.main.temp - 273.17) * 1.8 + 32)
		);
		oneDayWeather.text("Weather: " + res.weather[0].description);
		oneDayLatitude.text("Latitude: " + res.coord.lat);
		oneDayLongitude.text("Longitude:" + res.coord.lon);
		let img = $("<img>").attr(
			"src",
			"http://openweathermap.org/img/w/" + res.weather[0].icon + ".png"
		);
		oneDayIcon.empty().append(img);
		$.ajax({
			url: `http://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${res.coord.lat}&lon=${res.coord.lon}`,
			method: "GET",
		}).then(function (res) {
			oneDayUvindex.text("UV Index: " + res.value);
			console.log(res);
		});
	});
	$.ajax({
		url:
			"http://api.openweathermap.org/data/2.5/forecast?q=" +
			x +
			"&appid=" +
			apiKey,
		method: "GET",
	}).then(function (res) {
		console.log(res);
		console.log(res.list[0].dt_txt);

		let a = $("<div></div>");
		let b = $("<p></p>").text(res.list[0].dt_txt);
		let c = $("<img />").attr(
			"src",
			"http://openweathermap.org/img/w/" + res.list[0].weather[0].icon + ".png"
		);
		let d = $("<p></p>").text(
			Math.round((res.list[0].main.temp - 273.17) * 1.8 + 32)
		);
		let e = $("<p></p>").text(res.list[0].main.humidity);
		a.append(b);
		a.append(c);
		a.append(d);
		a.append(e);
		fiveDay.append(a);
		console.log(a);

		let f = [0, 8, 16, 24, 32];
	});
};
getWeather();
