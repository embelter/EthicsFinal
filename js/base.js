$(document).ready(function() {
    $.ajax({
        url: "http://rest-service.guides.spring.io/greeting"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});
function update(){
	$("span").css("background-color", "lightgrey");
	$("div").each(function(i){
		var $input = $(this).children("input:first");
		var $value = $input.val();
		var filter = "span:lt(" + $value + ")";
		$input.siblings(filter).css("background-color", "blue");
	})
}