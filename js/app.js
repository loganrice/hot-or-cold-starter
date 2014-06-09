 
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

});


function newGame() {
	var answer = randomNumber();
	
}

function randomNumber(){
	return Math.floor((Math.random() * 100) +1)
}