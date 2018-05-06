// The following block of code is loaded once webpage is completed
$(document).ready(function() {
    $.ajax({
        url: "https://api.ipify.org?format=json"
    }).then(function(data) {
       $("#bodyCard1").append(data.ip);
    });
    var titleDiv1 = createDivElement(500, 50, "black", 5, "titleCard1");
    var titleDiv2 = createDivElement(400, 50, "black", 15, "titleCard2");
    var titleDiv3 = createDivElement(300, 500, "black", 25, "bodyCard1");
    
	$("body").append(addTextToMe(titleDiv1, "Something Something", "Aqua", "30px"));
	$("body").append(addTextToMe(titleDiv2, "Edward Snowden", "Aqua", "30px"));
	$("body").append(addTextToMe(titleDiv3));	
});

// Creates a basic div element with indicated properties
function createDivElement (w, h, c, p, id) { 

	  var newDiv = document.createElement("div"); 
	  $(newDiv).css("position", "absolute");
	  $(newDiv).css("background-color", c);
	  $(newDiv).css("width", w + "px");
	  
	  $(newDiv).css("height", h + "px");
	  $(newDiv).css("top", p + "%");
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