//oof

d3.csv("data.csv", function(data) {
	data.forEach(function(d) {
		d.VEP = +d.VEP;
		d["VEP Ballots Counted"] = +d["VEP Ballots Counted"];
		d.VAP = +d.VAP;
		d.Democrat = +d.Democrat;
		d.Republican = +d.Republican;
		d.Minor = +d.Minor;
		d["Total Ballots"] = +d["Total Ballots"];
	    });
	//	console.log(data[0]);
    });
