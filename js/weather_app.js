var appID = "d762ad7fbbbb92a2ee6c8fd1b0bc10f3";

$(document).ready(function () {

	$('#displayWeather').hide();


});

$('#add-button').click(function () {

	$('#displayWeather').show();
	var zip = $('#addZipcode').val();
	var unit = $('#unitOption').val();

	$.ajax({
		type: 'GET',
		url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&APPID=d762ad7fbbbb92a2ee6c8fd1b0bc10f3&units=' + unit,
		success: function (currentWeather) {
			$("#location").empty().append(currentWeather.name);
			$("#description").empty().append('Condition: ' + currentWeather.weather[0].description);
			$("#currentWeatherIcon").empty().append("<img src='http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png'>");
			$("#temperature").empty().append('Temperature: ' + currentWeather.main.temp);
			$("#humidity").empty().append('Humidity: ' + currentWeather.main.humidity + ' %');
			$("#wind").empty().append('Wind: ' + currentWeather.wind.speed + ' mph');
		},
		error: function () {
			alert('Please input a valid zipcode');
		}
	});




	$.ajax({
		type: 'GET',
		url: 'http://api.openweathermap.org/data/2.5/forecast/daily?zip=' + zip + ',us&APPID=d762ad7fbbbb92a2ee6c8fd1b0bc10f3&units=' + unit,
		success: function (NameAnythingg) {

			var currentDate = new Date(NameAnythingg.list[0].dt * 1000).toUTCString().substring(0, 7);
			var currentDate2 = new Date(NameAnythingg.list[1].dt * 1000).toUTCString().substring(0, 7);
			var currentDate3 = new Date(NameAnythingg.list[2].dt * 1000).toUTCString().substring(0, 7);
			var currentDate4 = new Date(NameAnythingg.list[3].dt * 1000).toUTCString().substring(0, 7);
			var currentDate5 = new Date(NameAnythingg.list[4].dt * 1000).toUTCString().substring(0, 7);
			var currentDate6 = new Date(NameAnythingg.list[5].dt * 1000).toUTCString().substring(0, 7);
			var currentDate7 = new Date(NameAnythingg.list[6].dt * 1000).toUTCString().substring(0, 7);

			$("#day1_1").empty().append(currentDate);
		    $("#day1_2").empty().append("<img src='http://openweathermap.org/img/w/" + NameAnythingg.list[0].weather[0].icon + ".png'>");
			$("#day1_3").empty().append('H' + NameAnythingg.list[0].temp.max + ' L' + NameAnythingg.list[0].temp.min);

			$("#day2_1").empty().append(currentDate2);
			$("#day2_2").empty().append("<img src='http://openweathermap.org/img/w/" + NameAnythingg.list[1].weather[0].icon + ".png'>");
			$("#day2_3").empty().append('H' + NameAnythingg.list[1].temp.max + ' L' + NameAnythingg.list[1].temp.min);


			$("#day3_1").empty().append(currentDate3);
			$("#day3_2").empty().append("<img src='http://openweathermap.org/img/w/" + NameAnythingg.list[2].weather[0].icon + ".png'>");
			$("#day3_3").empty().append('H' + NameAnythingg.list[2].temp.max + ' L' + NameAnythingg.list[2].temp.min);

			$("#day4_1").empty().append(currentDate4);
			$("#day4_2").empty().append("<img src='http://openweathermap.org/img/w/" + NameAnythingg.list[3].weather[0].icon + ".png'>");
			$("#day4_3").empty().append('H' + NameAnythingg.list[3].temp.max + ' L' + NameAnythingg.list[3].temp.min);

			$("#day5_1").empty().append(currentDate5);
			$("#day5_2").empty().append("<img src='http://openweathermap.org/img/w/" + NameAnythingg.list[4].weather[0].icon + ".png'>");
			$("#day5_3").empty().append('H' + NameAnythingg.list[4].temp.max + ' L' + NameAnythingg.list[4].temp.min);

			$("#day6_1").empty().append(currentDate6);
			$("#day6_2").empty().append("<img src='http://openweathermap.org/img/w/" + NameAnythingg.list[5].weather[0].icon + ".png'>");
			$("#day6_3").empty().append('H' + NameAnythingg.list[5].temp.max + ' L' + NameAnythingg.list[5].temp.min);

			$("#day7_1").empty().append(currentDate7);
			$("#day7_2").empty().append("<img src='http://openweathermap.org/img/w/" + NameAnythingg.list[6].weather[0].icon + ".png'>");
			$("#day7_3").empty().append('H' + NameAnythingg.list[6].temp.max + ' L' + NameAnythingg.list[6].temp.min);

			$("#invisibleLine").empty().append("<hr>");
		},
		error: function () {
			alert('FAILURE');
		}
	});

});


