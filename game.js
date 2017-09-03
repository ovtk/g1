// setup
var day = 0;

var fps = 5;

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

function checkElection() {
	day += 1;
	if (day % 1500 == 0) {
		electionResults();
	}
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






