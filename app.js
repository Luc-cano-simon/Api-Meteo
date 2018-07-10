// console.log("test");

$.get("https://www.prevision-meteo.ch/services/json/fleurance", 
function (meteo)
{

	var ville = meteo.city_info.name;

	var jour = meteo.fcst_day_0.day_long;
	// var date = meteo.current_condition.date; affiche NaN 

	var condition = meteo.current_condition.condition;
	var icon = meteo.current_condition.icon;

	var Temperature = meteo.current_condition.tmp
	var temperatureMin = meteo.fcst_day_0.tmin;
	var temperatureMax = meteo.fcst_day_0.tmax;


// 	var wnd = meteo.current_condition.wnd_spd;
// 	var date = meteo.current_condition.date;
// 	var humidity = meteo.current_condition.humidity;


// 	$("#meteo").append("<p> la date du jour est " +date+ "</p>");
// 	$("#meteo").append("<p>Le vent souffle a " + wnd + "Km/h</p>") 
// 	$("#meteo").append("<p> et le taux d'humidité est de  " + humidity +  "</p>");

    $("#ville").append("<p> " +ville+ "</p>");
    $("#cond").append("<p>" +condition+ +Temperature+ "°C </p>");
    $("#temp").append("<p> Temperature minimale " +temperatureMin+ "</p>");
    $("#temp1").append("<p> Temperature maximale " +temperatureMax+ "</p>");
    $("#jour").append("<p>" +jour+ "</p>");
    
});


    

	



