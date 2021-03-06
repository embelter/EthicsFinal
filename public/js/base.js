// The following block of code is loaded once index.html is rendered
$(document).ready(function() {
    $.ajax({
        url: "https://api.userinfo.io/userinfos?json" //http://ip-api.com/json
    }).then(function(data) {
       $("#bodyCard1").append("Let's take a look at your location: </br>");
       $("#bodyCard1").append(data.ip_address + "</br>");
       $("#bodyCard1").append(data.continent.name + "</br>");
       $("#bodyCard1").append(data.country.name + "</br>");
       $("#bodyCard1").append(data.city.code + "</br>");
       $("#bodyCard1").append(data.city.name + "</br>");
       $("#bodyCard1").append(data.position.latitude + "</br>");
       $("#bodyCard1").append(data.position.longitude + "</br>");
       
       fillSecondDiv(data.city.name, data.city.code); //fillSecondDiv(data.region, data.city);
    });
    
    var titleDiv1 = createDivElement(500, 50, "black", 5, "titleCard1", 2);
    var titleDiv2 = createDivElement(400, 50, "black", 15, "titleCard2", 2);
    var titleDiv3 = createDivElement(300, 500, "black", 25, "bodyCard1", 2);  
    var titleDiv4 = createDivElement(300, 500, "black", 25, "bodyCard2", 52); 
    
	$("body").append(addTextToMe(titleDiv1, "Something Something", "Aqua", "30px"));
	$("body").append(addTextToMe(titleDiv2, "Edward Snowden", "Aqua", "30px"));
	$("body").append(addTextToMe(titleDiv3));
	$("body").append(addTextToMe(titleDiv4));
});
function fillSecondDiv(city, zip)	{
    $.ajax({
    	url: "https://api.wunderground.com/api/5c9f8cd57ad7d518/conditions/q/" + zip + ".json" //url: "https://api.wunderground.com/api/5c9f8cd57ad7d518/conditions/q/" + region + "/" + city + ".json"
    }).then(function(data) {
       $("#bodyCard2").append("The weather in " + city + ":</br>");
       $("#bodyCard2").append("Temp: " + data.current_observation.temp_f + "</br>");
       $("#bodyCard2").append("And: " + data.current_observation.icon + "</br>");
    });
}
// Creates a basic div element with indicated properties
function createDivElement (w, h, c, posTop, id, posLeft) { 

	  var newDiv = document.createElement("div"); 
	  $(newDiv).css("position", "absolute");
	  $(newDiv).css("background-color", c);
	  $(newDiv).css("width", w + "px");	  
	  $(newDiv).css("height", h + "px");
	  
	  $(newDiv).css("top", posTop + "%");
	  $(newDiv).css("left", posLeft + "%");	  
	  $(newDiv).css("border-radius", 15 + "px");
	  $(newDiv).attr("id", id);
	  return newDiv;
	}
// Adds text to an object named me
function addTextToMe (me, string, color, fontSize)	{
	var addMe = document.createElement("font");
	$(addMe).append(string);
	$(addMe).css("color", color);
	$(addMe).css("font-size", fontSize);
	$(me).append(addMe);
	return me;
}