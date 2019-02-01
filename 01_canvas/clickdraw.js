/* 
Can'tvas - Kendrick Liang, Ricky Lin 
SoftDev2 pd06
K #01: ...and I want to Paint It Better
F 2019-02-01
*/ 

console.log("Entering destruction mode")

var canvas = document.getElementById("slate");

if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
}

var clear = document.getElementById("clear")

clear.addEventListener('click', function() {
    console.log("Exterminating everything in sight");
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);  //clearing entire width and height of canvas
});

var box = true;
var toggle = document.getElementById("toggle");

toggle.addEventListener('click', function() {
    if (box) {
	    box = false;
    }

    else {
	    box = true;
    }
}); 

canvas.addEventListener('click', draw)

var empty = true;

function draw(event) {

    event.preventDefault(); /* prevents the default action of the event from being triggered if the action can be canceled 
                            but it will not stop the rest of the code from executing  
                            ex. clicking on a link leads you to another page will not execute if you include preventDefault()
                            Not sure about its use in this case as clicking on canvas does not have any default action */ 
    
    var x = event.offsetX;  //offsetx provides the x coordinate of the event (mouse click) relative to the left edge of target element (the canvas) 
    var y = event.offsetY;  //offset y provides the y coordinate of the event (mouse click) relative to the top edge of target element (the canvas)
                            //They are used to make sure that the shapes were drawn right where the mouse was in the canvas.

    if (box) {
        ctx.fillStyle = '#' + Math.random().toString(16).substring(4,10)  //random color
        ctx.fillRect(x, y, 100, 200);  //fix rectangle in center of mouse
        console.log("Boxification complete")
    }

    else {
        ctx.beginPath(); //beginpath ends the current drawing and begins a new one. 
                         //We used this to initiate the drawing of a new shape, especially if the user switched from box to dot.
        ctx.fillStyle = '#' + Math.random().toString(16).substring(4,10)
        ctx.ellipse(x, y, 10, 10, Math.PI * .25, 0, Math.PI * 2);  //create dot at center of mouse, 10x10, rotating by pi/4 from 0 to 2pi) 
        ctx.stroke();
        ctx.fill();
        console.log("Cometh dot");
    }
 
}
