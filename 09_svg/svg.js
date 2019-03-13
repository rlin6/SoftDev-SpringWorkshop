// Ricky Lin
// SoftDev2 pd6
// K #09: Connect the Dots
// 2019-03-12

var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var prev = null;

var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

clear.addEventListener('click', function(e) {
    while (pic.lastChild) {
      pic.removeChild(pic.lastChild);
      prev = null;
    }
});

pic.addEventListener('click', function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var x = e.offsetX;
    var y = e.offsetY;
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "7");
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");

    pic.appendChild(c);

    if (prev) {
        var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
        l.setAttribute("x1", prev.x);
        l.setAttribute("y1", prev.y);
        l.setAttribute("x2", x);
        l.setAttribute("y2", y);
        l.setAttribute("stroke", "black");

        pic.appendChild(l);
    }

    prev = {x: x, y: y};
});

// c.setAttribute("cx", 0);
// c.setAttribute("cy", 0);
// c.setAttribute("r", "100");
// c.setAttribute("fill", "red");
// c.setAttribute("stroke", "black");

// pic.appendChild(c);
