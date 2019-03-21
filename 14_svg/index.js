/*
Comprendos - Daniel Gelfand and Ricky Lin
SoftDev2 pd6
K14 -- Learning To Swim
2019-03-21
*/
var selection = d3.select("table");
console.log(selection);
console.log(selection[0]);
//console.log(selection[0][0]); Uncaught TypeError: Cannot read property '0' of undefined

var trs = d3.selectAll("tr"); //1 group tied to all tr elements
console.log(trs)

//selection.data defines data per-group rather than per-element:
var s = d3.select("tr").datum(4).append("tr");
console.log( s.__data__ );

var test = d3.selectAll("tr").data([1,2,3,4,5]);
console.log(test)
//var tds = d3.selectAll("tr").selectAll("td");
//console.log(tds);

//var spans = d3.selectAll("tr").selectAll("td").selectAll("span");
//console.log(spans);

