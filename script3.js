var outerWidth = 1000;
var outerHeight = 900;
var margin = { left: 165, top: 0, right: 0, bottom: 90 };
var barPadding = 0.2;
var barPaddingOuter = 0.1;
var xColumn = "Total_Ballots";
var yColumn = "State";
var xAxisLabelText = "Ballots";
var xAxisLabelOffset = 75;
var innerWidth  = outerWidth  - margin.left - margin.right;
var innerHeight = outerHeight - margin.top  - margin.bottom;

var svg = d3.select("div").append("svg")
  .attr("width",  outerWidth)
  .attr("height", outerHeight);
var g = svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var xAxisG = g.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + innerHeight + ")");
var xAxisLabel = xAxisG.append("text")
  .style("text-anchor", "middle")
  .attr("x", innerWidth / 2)
  .attr("y", xAxisLabelOffset)
  .attr("class", "label")
  .text(xAxisLabelText);
var yAxisG = g.append("g")
  .attr("class", "y axis");
var xScale = d3.scale.linear().range([0, innerWidth]);
var yScale = d3.scale.ordinal().rangeRoundBands([0, innerHeight], barPadding, barPaddingOuter);
var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
  .ticks(5)
  .tickFormat(d3.format("s"))
  .outerTickSize(0);
var yAxis = d3.svg.axis().scale(yScale).orient("left")
  .outerTickSize(0);
  
function render(data){
  xScale.domain([0, d3.max(data, function (d){ return d[xColumn]; })]);
  yScale.domain(       data.map( function (d){ return d[yColumn]; }));
  xAxisG.call(xAxis);
  yAxisG.call(yAxis);
  var bars = g.selectAll("rect").data(data);
  bars.enter().append("rect")
    .attr("height", yScale.rangeBand());
  bars
    .attr("x", 0)
    .attr("y",     function (d){ return yScale(d[yColumn]); })
    .attr("width", function (d){ return xScale(d[xColumn]); });
  bars.exit().remove();
}
function type(d){
  d.Total_Ballots = +d.Total_Ballots;
  return d;
}
d3.csv("data/data.csv", type, render);
function democratR(){
  xColumn = "Democrat";
  d3.csv("data/data.csv", type, render);
}
function totalR(){
  xColumn = "Total_Ballots";
  d3.csv("data/data.csv", type, render);
}
function republicanR(){
  xColumn = "Republican";
  d3.csv("data/data.csv", type, render);
}
