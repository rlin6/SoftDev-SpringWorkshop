/*
  RickAndTommy -- Ricky Lin, Thomas Lee
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

//dvd variables
var up;
var right;

//clear canvas function
var clear = function(){
    ctx.clearRect(0, 0, c.width, c.height);
}

//stops animation
var pause = function(e) {
    if (animating) {
	window.cancelAnimationFrame(requestID);
	animating = false;
    }
};

//makes animation
var play = function(e) {
    window.cancelAnimationFrame(requestID);
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

var dvdLogoSetup = function() {
    window.cancelAnimationFrame(requestID);
    clear();
    var rectWidth = 100;
    var rectHeight = 50;

    var rectX = Math.floor( Math.random() * (c.width-rectWidth));
    var rectY = Math.floor( Math.random() * (c.height-rectHeight));

    var xVel = 1;
    var yVel = 1;

    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    var dvdLogo = function() {
	ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
	
	requestId = window.requestAnimationFrame(dvdLogo);
    };
    dvdLogo();

}    

//grabbing button stuff
var stop = document.getElementById("stop");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");

//assigning events to buttions
stop.addEventListener("click", pause);
circle.addEventListener("click", play);
dvd.addEventListener("click", dvdLogoSetup)
