/* 
Can'tvas - Kendrick Liang, Ricky Lin 
SoftDev2 pd06
K #02: Connecting the Dots
M 2019-02-04
*/ 

console.log("Entering destruction mode");

var canvas = document.getElementById("playground");

if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
}

var clear = document.getElementById("clear");
var numDots = 0;

clear.addEventListener('click', function() {
    console.log("Exterminating everything in sight");
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);  //clearing entire width and height of canvas
    numDots = 0;
});


canvas.addEventListener('click', draw);

var oldX;
var oldY;

function draw(event) {

    event.preventDefault(); /* prevents the default action of the event from being triggered if the action can be canceled 
                            but it will not stop the rest of the code from executing  
                            ex. clicking on a link leads you to another page will not execute if you include preventDefault()
                            Not sure about its use in this case as clicking on canvas does not have any default action */ 
    
    var x = event.offsetX;  //offsetx provides the x coordinate of the event (mouse click) relative to the left edge of target element (the canvas) 
    var y = event.offsetY;  //offset y provides the y coordinate of the event (mouse click) relative to the top edge of target element (the canvas)
                            //They are used to make sure that the shapes were drawn right where the mouse was in the canvas.
    
    oldX = x;
    oldY = y;
    numDots += 1;
    if (numDots >= 2) {
        ctx.lineTo(oldX, oldY);
	ctx.stroke();
    }
    ctx.beginPath(); //beginpath ends the current drawing and begins a new one. 
                         //We used this to initiate the drawing of a new shape, especially if the user switched from box to dot.
    ctx.fillStyle = '#' + Math.random().toString(16).substring(4,10);
    ctx.ellipse(x, y, 10, 10, Math.PI * .25, 0, Math.PI * 2);  //create dot at center of mouse, 10x10, rotating by pi/4 from 0 to 2pi) 
    ctx.stroke();
    ctx.fill();
    console.log("Cometh dot");
}
