$(document).ready(function() {


$('.start').mousedown(function() {

var counter = 1;


while (counter <= 100)
{
	/* divisible by 3? */
	if ((counter % 3) === 0) {

		if ((counter % 5) === 0) {
		 document.write("<p>fizzbuzz</p>");

		}
		else {
			document.write("<p>fizz</p>");
		}
	}
	else if ((counter % 5) === 0) {
		document.write("<p>buzz</p>");
	}
	else{
	  document.write(counter + "<p></p>");
	}
	counter++;
};
  


});

});