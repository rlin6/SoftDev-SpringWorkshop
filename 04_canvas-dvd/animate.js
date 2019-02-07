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
var radius = 1; 
var requestID; //set as null
var max = c.width / 2;
var growing = true; //are we growing or shrinking?

var logo = new Image();  //pic of logo
logo.src = "logo_dvd.jpg";

//clear canvas function
var clear = function(){
    ctx.clearRect(0, 0, c.width, c.height);
    console.log("All clear");
};

//stops animation
var pause = function(e) {
    if (requestID == null) {  //cant press if already used
        e.preventDefault();
        console.log("Everything has already stopped");
    }
    else {  //clear requestID
        console.log("We've stopped it, boss");
        window.cancelAnimationFrame(requestID);
        requestID = null;
    }
};

//makes animation
var play = function() {

    window.cancelAnimationFrame(requestID);
    console.log(requestID);

    if (growing) radius += 1;  //check if growing or shrinking and take appropriate action
    else {
        radius -= 1;
    }
    if (radius == max) {
        growing = false;
    }
    if (radius == 0) {
        growing = true;
    }

    clear();

    ctx.fillStyle = '#A491D3'  //draw the circle
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame(play);
    console.log(requestID);
};

var dvdLogoSetup = function() {
    
    window.cancelAnimationFrame(requestID);
    console.log(requestID);

    //variables for dvd animation
    var rectWidth = 100;
    var rectHeight = 50;

    var rectX = Math.floor( Math.random() * (c.width-rectWidth));  //rand starting x
    var rectY = Math.floor( Math.random() * (c.height-rectHeight)); //rand starting y

    var xVel = 1;  //x velocity
    var yVel = 1;  //y velocity

    var animateDVD = function() {  //call function using setup variables
        clear();
    
        ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    
        //bouncing physics 
        if (rectX <= 0 || rectX >= c.width - rectWidth) {
            xVel *= -1;
        }
    
        if (rectY <= 0 || rectY >= c.height - rectHeight) {
            yVel *= -1;
        }
    
        //moves the position of ball 
        rectX += xVel;
        rectY += yVel;
    
        requestID = window.requestAnimationFrame(animateDVD);

        console.log(requestID);
    };

    animateDVD();
};    

//grabbing button stuff
var stop = document.getElementById("stop");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");

//assigning events to buttions
stop.addEventListener("click", pause);
circle.addEventListener("click", play);
dvd.addEventListener("click", dvdLogoSetup);