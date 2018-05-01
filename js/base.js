$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API-KEY-GOES-HERE`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
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