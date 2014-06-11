 var answer,
 	guessCount = 0;


$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("#new").click(function(){
  		newGame();
  	})

  	$("form").submit(function(event){
  		var guess = $("input:first").val();
  		clearUserGuess();
  		if (guess <= 100 && guess > 0) {
  			feedback(checkGuess(guess));
  			$("#count").text(guessCount);
  			$("#guessList").append("<li>"+guess+"</li>");
  			event.preventDefault();
  		} else {
  			feedback("Please enter a number between 1 and 100");
  		}
  		
 	});

 	newGame();
});

function clearUserGuess(){
	$("#userGuess:text").val('');
}

function clearGuessHistory(){
	$('#guessList').empty();
	$("#count").text("0");
}

function newGame() {
	answer = randomNumber();
	clearUserGuess();
	clearGuessHistory();
}

function randomNumber(){
	return Math.floor((Math.random() * 100) +1)
}

function checkGuess(guess){
	guessCount++;
	var difference = Math.abs(guess - answer);
	var message;
	if (difference == 0){
		return win();
	} else if (difference < 50) {
		return hot(difference);
	} else {
		return cold();
	}
}

function win(){
	return "Congratulations You Win!!"
}

function feedback(message){
	$("#feedback").text(message);
}

function hot(difference){
	if (difference < 10) {
		return "You are extremely Hot";
	} else if (difference < 20){
		return "You are very Hot";
	} else if (difference < 30){
		return "You are Hot";
	} else if (difference < 40){
		return "You are Warm";
	} else {
		return "You are luke warm";
	}
}

function cold(difference){
	if (difference < 60) {
		return "You are almost warm";
	} else if (difference < 70){
		return "You are still cold";
	} else if (difference < 80){
		return "You are Cold";
	} else if (difference < 90){
		return "You are very Cold";
	} else {
		return "You are extremely Cold";
	}
}