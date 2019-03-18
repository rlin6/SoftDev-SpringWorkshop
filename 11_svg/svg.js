/*
CoffeeScriptors - Daniel Gelfand and Ricky Lin
SoftDev2 pd6
K#11 -- Ask Circles [Change || Die] …While On The Go
2019-03-18
*/

var pic = document.getElementById("vimage");
var reqID = 0;
//var prev = 0;

var drawDot = function(e){

  var children = pic.children;
  var blue = false;
  for(child of children){
    //console.log(child.getAttribute('cx'))
    if( inBounds(child,e)){
      changeCircle(child);
      blue = true;
      break;
    }
  }

  if (!(blue)) {
    pic.appendChild(createCircle(e.offsetX, e.offsetY));
  }
  
};

// Clears image
var clear = function(){
  while (pic.lastChild) {
    pic.removeChild(pic.lastChild);
  }
};

var moveDots = function(){
  stopDots() // cancelling animation frame
  var width = pic.getAttribute('width');
  var height = pic.getAttribute('height');

  children = pic.children
  //alert(children.length)

  var anim = function(){
    stopDots();
    for(child of children){
      var x = parseInt( child.getAttribute("cx") );
      var y = parseInt( child.getAttribute("cy") );
      var xVel = parseInt(child.getAttribute('xVel'));
      var yVel = parseInt(child.getAttribute('yVel'));

      if( x>= width || x < 10){
          xVel *= -1;
          child.setAttribute("xVel", xVel);
      }

      if( y>= height ||  y < 10){
        yVel *= -1;
        child.setAttribute("yVel", yVel)
      }
      x += xVel;
      y += yVel;
      //console.log(rep.getAttribute("cx"))
      child.setAttribute("cx", x);
      child.setAttribute("cy", y);

    }

    reqID = window.requestAnimationFrame(anim);
  };
  anim();
};

var shimmer = function(e){
  var width = pic.getAttribute('width');
  var height = pic.getAttribute('height');

  children = pic.children
  //alert(children.length)

  var animi = function(){
    for(child of children){
      
      var radius = parseInt( child.getAttribute('r'));

      radius += Math.random() * 20 - 10;

      child.setAttribute("r", radius);

      stopDots();
    }
    console.log(reqID);
    reqID = window.requestAnimationFrame(animi);
  };
  animi();
};

var stopDots = function(){
  //alert("called stopdotss")
  window.cancelAnimationFrame( reqID );
  reqID = 0;
};

// Checks if mouse click is in bounds of the given circle
// Inside circle if d^2 < r^2
var inBounds = function(circle, event){

  // x,y coords of circle
  var cx = circle.getAttribute("cx")
  var cy = circle.getAttribute("cy")

  // x,y coords of point
  var px = event.offsetX
  var py = event.offsetY

  var radius = circle.getAttribute("r")

  return Math.pow( (px-cx), 2) + Math.pow( (py-cy), 2) < Math.pow(radius,2)
}

var createCircle = function(x,y){
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 10);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  var velX = parseInt(Math.random() * 10 - 5);
  var velY = parseInt(Math.random() * 10 - 5);
  c.setAttribute('xVel', velX);
  c.setAttribute('yVel', velY);
  return c;
}

var changeCircle = function(circle){
  if(circle.getAttribute("fill") == "red"){
    circle.setAttribute("fill", "blue")
  }
  else{
    // create circle at random location
    var rand = createCircle(Math.random() * 500, Math.random() * 500)
    pic.appendChild(rand)
    pic.removeChild(circle)
  }
}

pic.addEventListener("click",drawDot);
document.getElementById("clr").addEventListener("click", clear);
document.getElementById("move").addEventListener("click", moveDots);
document.getElementById("shimmer").addEventListener("click", shimmer);