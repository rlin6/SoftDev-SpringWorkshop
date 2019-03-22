/*
Comprendos - Daniel Gelfand and Ricky Lin
SoftDev2 pd6
K15 -- Scattered
2019-03-22
*/
var data = [[2,2],[5,5],[6,6],[7,7],[8,8],[1,1],[3,3],[4,7]];

var margin = {top: 40, right: 70, bottom: 40, left: 100}
, width = 1000 - margin.left - margin.right
, height = 500 - margin.top - margin.bottom;

//alert(d3.max(data)); [8,8]

// Configure domain and range of scale
var x = d3.scaleLinear()
.domain([0, d3.max(data, function(d) { return d[0]; })])
.range([ 0, width ]);

var y = d3.scaleLinear()
.domain([0, d3.max(data, function(d) { return d[1]; })])
.range([ height, 0 ]);

// Dynamically generate svg from external JS script.
// Set size of chart and add class chart
var chart = d3.select('body')
.append('svg')
.attr('width', 1000)
.attr('height', 500)
.attr('class', 'chart')

// Append a g element to the SVG
var main = chart.append('g')
.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
.attr('class', 'main')

// Draw the x-axis
var xAxis = d3.axisBottom(x);

main.append('g')
.attr('transform', 'translate(0,' + height + ')')
.attr('class', 'axis')
.call(xAxis);

// Draw the y-axis
var yAxis = d3.axisLeft(y);

main.append('g')
.attr('class', 'axis')
.call(yAxis);



var g = main.append("g");

g.selectAll("dots")
.data(data)
.enter().append("circle")
.attr("cx", function (d) { return x(d[0]); } )
.attr("cy", function (d) { return y(d[1]); } )
.attr("fill","purple")
.attr("r", 10);

//Create Title
main.append("text")
.attr("x", (width + margin.left + margin.right) / 2)
.attr("y", 0)
.style("text-anchor", "middle")
.text("X,Y Values Plot");

main.append("text")
.attr("x", (width) )
.attr("y",  height + margin.bottom)
.style("text-anchor", "end")
.text("X");

main.append("text")
.attr("x", margin.left - 150)
.attr("y", 0)
.style("text-anchor", "start")
.text("Y");