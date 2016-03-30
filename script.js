//oof

d3.csv("data.csv", function(data) {
	data.forEach(function(d) {
		d.VEP = +d.VEP;
		console.log(d.VEP);
		d["VEP Ballots Counted"] = +d["VEP Ballots Counted"];
		console.log(d["VEP Ballots Counted"]);
		d.VAP = +d.VAP;
		console.log(d.VAP);
		d.Democrat = +d.Democrat;
		console.log(d.Democrat);
		d.Republican = +d.Republican;
		console.log(d.Republican);
		d.Minor = +d.Minor;
		console.log(d.Minor);
		d["Total Ballots"] = +d["Total Ballots"];
		console.log(d["Total Ballots"]);
	    });
	//	console.log(data[0]);
    });
