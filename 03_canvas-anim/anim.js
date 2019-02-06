/*
  RickAndTommy -- Thomas Lee, Ricky Lin
  SoftDev2 pd6
  K03 -- They lock us in the tower whenever we get caught
  2019-02-06
*/

//grabbing canvas stuff
var c = document.getElementById("playground");
var ctx = c.getContext("2d");

//initializing animation variables
var radius = 0;
var requestID = 0;
var max = c.width / 2;
var animating; //are we stopped or animating?
var growing; //are we growing or shrinking?


//clear canvas function
var clear = function(){
    ctx.clearRect(0, 0, c.width, c.height);
}

//stops animation
var pause = function(e) {
    if (animating) {
	window.cancelAnimationFrame(requestID);
	console.log(requestID);
	animating = false;
    }
};

//makes animation
var play = function(event) {
    //first press
    if (animating == null) {
	animating = true;
	growing = true;
    }

    if (! animating) {
	animating = true;
    }

    if (animating) {
	requestID = window.requestAnimationFrame(play);
	ctx.beginPath();
	ctx.fillStyle = '#A491D3'
	clear();
	ctx.arc(c.width / 2, c.height / 2, radius, 0, Math.PI * 2);
	ctx.fill();
	if (growing) radius += 1;
	else {
	    radius -= 1;
	}

	if (radius == max) {
	    growing = false;
	}

	if (radius == 0) {
	    growing = true;
	}
    }
};

//grabbing button stuff
var stop = document.getElementById("stop");
var go = document.getElementById("go");

//assigning events to buttions
stop.addEventListener("click", pause);
go.addEventListener("click", function() { 
	pause();
	play(); });
