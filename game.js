// setup
var day = 0;

var fps = 5;

var values = ["Vodka", "Mitglieder", "Wähler", "Geld", "Klicks", "Achievements", "Wahlberechtigte", "Weltbevölkerung"];

var value = {};
var growth = {};
var growthRate = {};
var clickRate = {};


for (var i = 0; i < values.length; i++) {
	var key = values[i];
	value[key] = 0;
	growth[key] = 0;
	growthRate[key] = 0;
	clickRate[key] = 0;
}

clickRate.Vodka = 1;
clickRate.Mitglieder = 1;
clickRate.Geld = 1;
value.Wahlberechtigte = 61500000;
value.Weltbevölkerung = 7540123440;
growthRate.Weltbevölkerung = 229277; // Zuwachs pro Tag


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



function inc(key, val) {
	value[key] += val;
	fadeNumbers(key, "+" + val);
}

function dec(key, val) {
	value[key] -= val;
	fadeNumbers(key, "-" + val);
}



function requirements(key, val, fruits, kill = false) {
	if (value[key] >= val) {
		dec(key, val);
		fruits();
		updateValuesView();
		if (kill != false) {
			delUpgrade(kill);
		}
	}
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
	}
	
	if (num < 10) {
		dp = 2;
	} else if (num < 100) {
		dp = 1;
	}
	return String(round(num, dp)) + postfix;
}

function round(num, dp = 0) {
	var f = Math.pow(10, dp);
	return Math.round(num * f) / f;
}




function getWindowDimensions() {
	var c = $("#container")[0];
	
	displayH = round(c.getBoundingClientRect().bottom);
	displayW = round(c.getBoundingClientRect().width);
	alert(displayW + " / " + displayH);

//	xoCenterX = xo.first().width() / 2;
//	xoCenterY = xoHeight / 2;
	
//	containerHeight = getBottom($("#container")[0]);
}

//getWindowDimensions();

