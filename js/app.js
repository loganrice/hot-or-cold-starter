 var answer;


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
  		var guess = $("input:first").val()
  		checkGuess(guess);
  		event.preventDefault();
 	});
});


function newGame() {
	answer = randomNumber();
}

function randomNumber(){
	return Math.floor((Math.random() * 100) +1)
}

function checkGuess(guess){
	var difference = guess - answer;
	if (difference < 50){
		hot();
	} else {
		cold();
	}
}

function hot(){
	console.log("hot");
}

function cold(){
	console.log("cold");
}