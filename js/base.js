$(document).ready(function() {
    $.ajax({
        url: "http://rest-service.guides.spring.io/greeting"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
    var titleDiv1 = createDivElement(200, 50, "black", 5);
    var titleDiv2 = createDivElement(300, 50, "black", 15);
	$("body").append(addTextToMe(titleDiv1, "Something Something"));
	$("body").append(addTextToMe(titleDiv2, "Edward Snowden"));
});

function createDivElement (w, h, c, p) { 

	  var newDiv = document.createElement("div"); 
	  $(newDiv).css("position", "absolute");
	  $(newDiv).css("background-color", c);
	  $(newDiv).css("width", w + "px");
	  
	  $(newDiv).css("height", h + "px");
	  $(newDiv).css("top", p + "%");
	  $(newDiv).css("border-radius", 15 + "px");
	  return newDiv;
	}
function addTextToMe (me, string)	{
	var addMe = document.createElement("font");
	$(addMe).append(string);
	$(addMe).css("color", "white");
	$(me).append(addMe);
	return me;
}