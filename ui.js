// make Vodka
$("#prod").click( function() {
	value.Klicks += 1;
	inc("Vodka", clickValue("Vodka"));
});

// spend Vodka
$("#ausg").click( function() {
	value.Klicks += 1;
	
	requirements("Vodka", clickValue("Mitglieder"), function() {
		inc("Mitglieder", clickValue("Mitglieder"));
	});
});


function updateValuesView() {
	for (var i = 0; i < values.length; i++) {
		var key = values[i];
		$("#" + key + " div.value").text(prettyShortNumbers(value[key]));
		$("#" + key + " div.persecond span").text(prettyShortNumbers(growthRate[key]));

		if (clickValue("Vodka") > 1) {
			$("#clickVodka").text(prettyShortNumbers(clickValue("Vodka")) + " ");
		}
		if (clickValue("Mitglieder") > 1) {
			$("#clickMitglieder").text(prettyShortNumbers(clickValue("Mitglieder")) + " Vodka");
		}
	}
}

function checkActiveButtons() {
	$(".button").each( function() {
		var key = $(this).attr("id");
		if (key in upgrades) {
			var req = upgrades[key][1];
			var val = upgrades[key][2];
			$(this).toggleClass("active", value[req] >= val);
		}
	})
}


function fadeNumbers(item, val) {
	var j = $("#" + item);
	j.append("<div class='flyAway'>" + prettyShortNumbers(val) + "</dív>");
	var n = j.find("div.flyAway:last-of-type");
	n.css("marginLeft", (Math.random() * 20 + 60) + "px");
	n.animate({ 
		marginTop: "20px",
		opacity: 0.0
		}, 800, 
		function() {
			$(this).remove();}
	);
}

function fadeIn(item, time = 500) {
	$(item).animate({opacity: 1.0}, time);
}

function showLogo() {
	$("#logo").delay(500).animate({ 
		height: "90px"
		}, 5000);
}

function changeSetting(num, fun) {
	$("#Setting").fadeOut(500, function() {
		$("#Setting .bg img").replaceWith("<img src='images/setting" + num + "_bg.png' />");
		$("#Setting .fg img").replaceWith("<img src='images/setting" + num + "_fg.png' />");
	//	clear members!
		$("#Setting").fadeIn(500, fun());
		//$("#Setting").css("opacity", "0.0");
		//$("#Setting").animate( {opacity: "1.0"}, 3000, fun() );
	});
}

function tickText(text) {
	$("#ticker p").animate({
		marginLeft: "-700px"
	}, 200, function() {
		$("#ticker p").text(text);
		$("#ticker p").css("marginLeft", "0px");
		$("#ticker p").css("marginRight", "-700px");
		$("#ticker p").animate({marginRight: "0px"}, 200);
	});
	
}

function electionResults() {
	// alert("Wahlergebnis: " + prozent() + "%");
	tickText("Wahlergebnis: " + prozent() + "%");
}

function addAchievement(text, delay = 0) {
	var j = $("#Achievements");
	j.prepend("<table><tr><td class='centered'>" + text + "</td></tr></table>");
	var n = j.find("table:first-of-type");
	n.css("marginTop", "-200px");
	n.css("marginBottom", "121px");
	n.delay(delay).animate({ 
		marginTop: "5px",
		marginBottom: "5px",
		opacity: 1.0
		}, 500, 
		function() {
			value["Achievements"] += 1;
		});
}

function delAchievements(num = 1) {
	for (var i = 0; i < num; i++) { 
		$("#Achievements table:last").remove();
	}
}

var upgradeColors = {
	"Vodka": "silver",
	"Mitglieder": "blue",
	"Popularität": "orange",
	"Achievements": "green"
}

function addUpgrade(key) {
	var j = $("#upgrades");
	var up = upgrades[key];
	j.append("<div id='" + key + "' class='button'></dív>");
	var n = j.find("div:last-of-type");
	n.append("<p class='title bold'>" + up[0] + "</p>");
	n.append("<p class='text'>" + up[3] + "</p>");
	n.append("<p class='requirement " + upgradeColors[up[1]] + "'>– " + prettyShortNumbers(up[2]) + " " + up[1] + "</p>");
	n.append("<p class='fruit " + up[5] + "'>" + up[4] + "</p>");
	n.css("display", "none");
	n.fadeIn(500);
	n.click( function() {
		requirements(up[1], up[2], up[6], key);	
	});
}

function delUpgrade(key) {
	$("#" + key).remove();
}
