/*
  RickAndTommy -- Ricky Lin, Thomas Lee
  SoftDev2 pd6
  K03 -- They lock us in the tower whenever we get caught
  2019-02-06
*/

//grabbing canvas stuff
var c = document.getElementById("playground");
var ctx = c.getContext("2d");

//initializing dot animation variables
var radius = 0;
var requestID = 0;
var max = c.width / 2;
var growing = true; //are we growing or shrinking?
var dvd; 

//clear canvas function
var clear = function(e){
    ctx.clearRect(0, 0, c.width, c.height);
}

//stops animation
var pause = function(e) {
    window.cancelAnimationFrame(requestID);
    requestID = 0;
};

//makes animation
var play = function() {

    window.cancelAnimationFrame(requestID);
    clear();

    ctx.beginPath();
    ctx.fillStyle = '#A491D3'
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

    requestID = window.requestAnimationFrame(play);
    console.log(requestID);
};

var dvdLogoSetup = function() {
    
    window.cancelAnimationFrame(requestID);

    //variables for dvd animation
    var rectWidth = 100;
    var rectHeight = 50;

    var rectX = Math.floor( Math.random() * (c.width-rectWidth));  //rand starting x
    var rectY = Math.floor( Math.random() * (c.height-rectHeight)); //rand starting y

    var xVel = 1;  //x velocity
    var yVel = 1;  //y velocity

    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    var animateDVD = function() {
        window.cancelAnimationFrame(requestID);
        clear();
    
        ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    
        if (rectX <= 0 || rectX >= c.width - rectWidth) {
            xVel *= -1;
        }
    
        if (rectY <= 0 || rectY >= c.height - rectHeight) {
            yVel *= -1;
        }
    
        rectX += xVel;
        rectY += yVel;
    
        requestId = window.requestAnimationFrame(animateDVD);

        console.log(requestID);
    }

    animateDVD();
}    

//grabbing button stuff
var stop = document.getElementById("stop");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");

//assigning events to buttions
stop.addEventListener("click", pause);
circle.addEventListener("click", play);
dvd.addEventListener("click", dvdLogoSetup);
