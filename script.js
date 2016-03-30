//oof
/*
d3.csv("data/data.csv", function(data) {
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
*/

var votes = [
	     {state:"Iowa",type:"Caucus",VEPbc:15.7,VEP:2286197,VAP:2403229,democrat:171109,republican:186874,minor:0,total:357983},
	     {state:"New Hampshire",type:"Primary",VEPbc:52.4,VEP:1035734,VAP:1070657,democrat:254776,republican:287683,minor:0,total:542459},
	     {state:"Nevada",type:"Caucus",VEPbc:8.2,VEP:1936072,VAP:2248402,democrat:84000,republican:75216,minor:0,total:159216},
	     {state:"South Carolina",type:"Primary",VEPbc:30.5,VEP:3663583,VAP:3837705,democrat:373063,republican:745405,minor:0,total:1118468},
	     {state:"Alabama",type:"Primary",VEPbc:34.8,VEP:3602334,VAP:3764601,democrat:397890,republican:856123,minor:0,total:1254013},
	     {state:"Arkansas",type:"Primary",VEPbc:29.6,VEP:2137115,VAP:2281940,democrat:221020,republican:410920,minor:0,total:631940},
	     {state:"Colorado",type:"Caucus",VEPbc:0,VEP:3928790,VAP:4259519,democrat:123508,republican:0,minor:0,total:0},
	     {state:"Georgia",type:"Primary",VEPbc:29.9,VEP:6900387,VAP:7781773,democrat:765366,republican:1295963,minor:0,total:2061329},
	     {state:"Massachusetts",type:"Primary",VEPbc:37.4,VEP:4966742,VAP:5442265,democrat:1220296,republican:637703,minor:1681,total:1859680},
	     {state:"Minnesota",type:"Caucus",VEPbc:8.5,VEP:3967061,VAP:4225114,democrat:215000,republican:122000,minor:0,total:337000},
	     {state:"Oklahoma",type:"Primary",VEPbc:28.6,VEP:2781841,VAP:2966460,democrat:335554,republican:459542,minor:0,total:795096},
	     {state:"Tennessee",type:"Primary",VEPbc:25.2,VEP:4874592,VAP:5134596,democrat:371321,republican:854792,minor:0,total:1226113},
	     {state:"Texas",type:"Primary",VEPbc:24.7,VEP:17299279,VAP:20534676,democrat:1430000,republican:2836000,minor:0,total:4266000},
	     {state:"Vermont",type:"Primary",VEPbc:39.8,VEP:495563,VAP:506881,democrat:135256,republican:61756,minor:0,total:197012},
	     {state:"Virginia",type:"Primary",VEPbc:30.1,VEP:6022089,VAP:6549502,democrat:785041,republican:1025425,minor:0,total:1810466},
	     {state:"Kansas",type:"Caucus",VEPbc:5.5,VEP:2062778,VAP:2199237,democrat:40000,republican:73116,minor:0,total:113116},
	     {state:"Louisiana",type:"Primary",VEPbc:18.2,VEP:3373552,VAP:3569063,democrat:311776,republican:301241,minor:0,total:613017},
	     {state:"Maine",type:"Caucus",VEPbc:6.1,VEP:1054309,VAP:1074172,democrat:46000,republican:18650,minor:0,total:64650},
	     {state:"Michigan",type:"Primary",VEPbc:33.9,VEP:7419694,VAP:7734729,democrat:1193169,republican:1322742,minor:0,total:2515911},
	     {state:"Mississippi",type:"Primary",VEPbc:28.6,VEP:2181159,VAP:2267268,democrat:220560,republican:403944,minor:0,total:624504},
	     {state:"Florida",type:"Primary",VEPbc:28.1,VEP:14445578,VAP:16383763,democrat:1701707,republican:2352549,minor:0,total:4054256},
	     {state:"Illinois",type:"Primary",VEPbc:36.9,VEP:9015796,VAP:9907466,democrat:1948877,republican:1379751,minor:0,total:3328628},
	     {state:"Missouri",type:"Primary",VEPbc:34.6,VEP:4518767,VAP:4706349,democrat:626077,republican:934957,minor:2894,total:1563928},
	     {state:"North Carolina",type:"Primary",VEPbc:31.2,VEP:7266734,VAP:7816113,democrat:1129767,republican:1139282,minor:0,total:2269049},
	     {state:"Ohio",type:"Primary",VEPbc:35.9,VEP:8738019,VAP:9004337,democrat:1194637,republican:1945606,minor:0,total:3140243},
	     {state:"Arizona",type:"Primary",VEPbc:20.2,VEP:4659373,VAP:5268830,democrat:409013,republican:530749,minor:749,total:940511},
	     {state:"Idaho",type:"Caucus",VEPbc:21.4,VEP:1149007,VAP:1234566,democrat:23884,republican:222166,minor:0,total:246050},
	     {state:"Utah",type:"Caucus",VEPbc:13.0,VEP:1963474,VAP:2113180,democrat:77344,republican:177204,minor:0,total:254548},
	     {state:"Alaska",type:"Caucus",VEPbc:6.2,VEP:520731,VAP:553484,democrat:10600,republican:21930,minor:0,total:32530},
	     {state:"Hawaii",type:"Caucus",VEPbc:4.6,VEP:1025208,VAP:1127205,democrat:33716,republican:13377,minor:0,total:47093}
	     ];

var svgContainer = d3.select("svg");

var stateCircle = svgContainer.append("circle")
					.data(votes)
					.enter()
					.attr("cx", screen.width/2)
					.attr("cy", 250)
					.attr("fill", "green")
					.attr("r", function(d){
						return d.VAP/10000;
					});
					
var turnoutCircle = svgContainer.append("circle")
					.data(votes)
					.enter()
					.attr("cx", screen.width/2)
					.attr("cy", 250)
					.attr("fill", "purple")
					.attr("r", function(d){
						return d.total/10000;
					});

var color1;
var color2;

var party1Circle = svgContainer.append("circle")
					.data(votes)
					.enter()
					.attr("cx", screen.width/2)
					.attr("cy", 250)
					.attr("r", function(d){
						if (d.democrat>d.republican){
							color1 = "blue";
							color2 = "red";
							return d.demmocrat/10000;
						}
						else{
							return d.republican;
						}
					})
					.attr("fill", color1);
					
var party2Circle = svgContainer.append("circle")
					.data(votes)
					.enter()
					.attr("cx", screen.width/2)
					.attr("cy", 250)
					.attr("r", function(d){
						if (d.democrat<d.republican){
							return d.demmocrat/10000;
						}
						else{
							return d.republican;
						}
					})
					.attr("fill", color2);
					
var text = svgContainer.append("p")
			.text(
				function(d){
					return d.state + " Turnout Percentage:" + d.VEPbc;
				}
			);