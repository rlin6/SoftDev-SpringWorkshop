/* Ricky Lin
SoftDev2 pd06
K00 -- I See a Red Door...
R 2019-01-31
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

var state = document.getElementById("state");
var nextState = document.getElementById("nextState");
var toggle = document.getElementById("toggle");

toggle.addEventListener('click', function() {
    if (state.innerHTML == 'box') {  //switch from box to dot
        state.innerHTML = 'dot';
        nextState.innerHTML = 'box';
        console.log("Begone, box");
    }

    else { //switch from dot to box
        state.innerHTML = 'box';
        nextState.innerHTML = 'dot';
        console.log("Begone, dot");
    }
})

canvas.addEventListener('click', draw)

function draw(event) {

    var distFix = canvas.getBoundingClientRect();  //get coordinates of canvas relative to screen
    var x = event.clientX - distFix.left;  //actual x cor on canvas
    var y = event.clientY - distFix.top;  //actual y cor on canvas

    if (state.innerHTML == 'box') {
        ctx.fillStyle = '#' + Math.random().toString(16).substring(4,10)  //random color
        ctx.fillRect(x - 50, y - 100, 100, 200);  //fix rectangle in center of mouse
        console.log("Boxification complete")
    }

    else {
        ctx.beginPath();
        ctx.fillStyle = '#' + Math.random().toString(16).substring(4,10)
        ctx.ellipse(x, y, 10, 10, Math.PI * .25, 0, Math.PI * 2);  //create dot at center of mouse, 10x10, rotating by pi/4 from 0 to 2pi) 
        ctx.stroke();
        ctx.fill();
        console.log("Cometh dot");
    }
}
