// Ricky Lin
// SoftDev2 6 
// K #21: Onions, Bell Peppers, and Celery, Oh My!
// 2019-04-30 

var data;
var num = document.getElementById("num");
var tot = document.getElementById("tot");
var perc = document.getElementById("perc");

d3.json("https://raw.githubusercontent.com/stuy-softdev/workshop/master/thluffy/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.json?token=AFRFQK7N644MC7AUI4U22J242DI26", function(error, d) {
  data = d;

  var PS105 = data.filter(function(n){
    return (n["DBN"]=="20K105");
  });

  var enrolled = PS105.map(function(n){
    return parseInt(n["total_enrollment"])
  });

  var first = PS105.map(function(n){
    return parseInt(n["grade1"])
  });

  var sum_first = first.reduce(function(a,b){
    return a+b;
  });

  tot.innerHTML = sum_first

  var sum_all = enrolled.reduce(function(a,b){
    return a+b;
  });

  num.innerHTML = sum_all;

  perc.innerHTML = sum_first / sum_all;

});
