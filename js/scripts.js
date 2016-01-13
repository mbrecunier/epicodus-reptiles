$(document).ready(function() {
  var animal = prompt("Choose one to learn about: turtles, snakes, or insects. Enter your choice below!");

  var choices = function() {
    if (animal === "turtles") {
      $("#turtles").show();
    } else if (animal === "snakes") {
      $("#snakes").show();
    } else if (animal === "insects") {
      $("#insects").show();
    }
    };
  if (animal === ("turtles" || "snakes" || "insects")) {
    choices();
    } else {
    animal = prompt("Please type one of these words: turtles, snakes, insects");
    choices();
    }
});
