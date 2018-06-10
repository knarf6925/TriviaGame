$(document).ready(function() {

$("#remainingTime").hide();
$("#Start").on("click", trivia.startGame);
$(document).on("click", '.option', triviaguessChecker);
})

