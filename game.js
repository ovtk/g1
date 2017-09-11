// setup
var fps = 5;
var pause = false;

var values = ["Vodka", "Mitglieder", "Popularität", "Klicks", "Achievements", "Wahlberechtigte", "Weltbevölkerung"];

var value = {};
var growth = {};
var growthRate = {};

for (var i = 0; i < values.length; i++) {
	var key = values[i];
	value[key] = 0;
	growth[key] = 0;
	growthRate[key] = 0;
}

value.Wahlberechtigte = 61500000;
value.Weltbevölkerung = 7540123440;
growthRate.Weltbevölkerung = 229277; 

function clickValue(key) {
	var x = growthRate[key];
	var value = (Math.sqrt(x) + x / 2) / 2;
	
	if (value > 1) {
		return value;
	} else {
		return 1;
	}
}


var settingLevel = 0;
var lastNumPartyPeople = 0;

function numPartyPeople() {
//	var fact = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000];

	var graph = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576];
	var max = graph.length;
	
	for (var i = 0; i < max; i++) {
		if (Math.pow(graph[i], settingLevel) > value.Mitglieder) {
			return i;
		}
	}
	return max;	
}


function grow() {	
	var g = 0;
	for (var key in value) {
		growth[key] += (growthRate[key] / fps);
		if (growth[key] >= 1) {
			g = Math.floor(growth[key]);
			growth[key] -= g;
			value[key] += g;
			fadeNumbers(key, "+" + g);
		}
	}
}

function reveal() {
	for (var i = 0; i < revelations.length; i++) {
		if (revelations[i][0]() == true) {
			revelations[i][1]();
			revelations.splice(i, 1);
			break;
		}
	}
}

var day = 0;
var nextElection = 100;

function checkElection() {
	nextElection -= 1;
	if (nextElection == 0) {
		electionResults();
	}
//	console.log(nextElection);
}



function inc(key, val) {
	value[key] += val;
	fadeNumbers(key, "+" + val);
}

function dec(key, val) {
	value[key] -= val;
	fadeNumbers(key, "-" + val);
}



function prozent() {
	return prettyShortNumbers(value.Popularität / (value.Wahlberechtigte * 0.7)  * 100);
}



function prettyShortNumbers(num) {
	var dp = 0;
	var postfix = "";
	
	if (num < 1000) {
		//
	} else if (num < 1000000) {
		postfix = "k";
		num /= 1000;
	} else if (num < 1000000000) {
		postfix = "m";
		num /= 1000000;
	} else if (num < 1000000000000) {
		postfix = "b";
		num /= 1000000000;
	} else if (num < 1000000000000000) {
		postfix = "t";
		num /= 1000000000000;
	} else if (num < 1000000000000000000) {
		postfix = "qa";
		num /= 1000000000000000;
	} else if (num < 1000000000000000000000) {
		postfix = "qi";
		num /= 1000000000000000000;
	} else if (num < 1000000000000000000000000) {
		postfix = "sx";
		num /= 1000000000000000000000;
	} else if (num < 1000000000000000000000000000) {
		postfix = "sp";
		num /= 1000000000000000000000000;
	} else if (num < 1000000000000000000000000000000) {
		postfix = "oc";
		num /= 1000000000000000000000000000;
	} else if (num < 1000000000000000000000000000000000) {
		postfix = "no";
		num /= 1000000000000000000000000000000;
	} else if (num < 1000000000000000000000000000000000000) {
		postfix = "de";
		num /= 1000000000000000000000000000000000;
	}
	
	if (num < 0) {
		dp = 2;
	} else if (num < 10) {
		dp = 1;
	} else if (num < 100) {
		dp = 0;
	}
	return String(round(num, dp)) + postfix;
}

function round(num, dp = 0) {
	var f = Math.pow(10, dp);
	return Math.round(num * f) / f;
}






