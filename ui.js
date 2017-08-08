// make Vodka
$("#prod").click( function() {
	value.Klicks += 1;
	inc("Vodka", clickRate.Vodka);
});

// spend Vodka
$("#ausg").click( function() {
	value.Klicks += 1;
	requirements("Vodka", clickRate.Mitglieder, function() {
		inc("Mitglieder", clickRate.Mitglieder);
	});
});

// geld
$("#Geld").click( function() {
	value.Klicks += 1;
	requirements("Vodka", clickRate.Geld, function() {
		inc("Geld", clickRate.Geld);
	});
});

function updateValuesView() {
	for (var i = 0; i < values.length; i++) {
		var key = values[i];
		$("#" + key + " p.value").text(prettyShortNumbers(value[key]));
		$("#" + key + " div.rate div.persecond span").text(prettyShortNumbers(growthRate[key]));
		$("#" + key + " div.rate div.perclick span").text(prettyShortNumbers(clickRate[key]));
		$("#Geld div.perclick span").text(clickRate.Geld);
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

function fadeIn(item) {
	$(item).fadeIn();
}

function addAchievement(text, delay = 0) {
	var j = $("#Achievements");
	j.append("<div>" + text + "</dív>");
	var n = j.find("div:last-of-type");
	n.css("marginTop", "-400px");
	n.delay(delay).animate({ 
		marginTop: "3px",
		opacity: 1.0
		}, 500, 
		function() {
			value["Achievements"] += 1;
		});
}

function delAchievements(num = 1) {
	for (var i = 0; i < num; i++) { 
		$("#Achievements div:first").remove();
	}
}

function addUpgrade(key) {
	var j = $("#upgrades");
	var up = upgrades[key];
	j.append("<div id='" + key + "' class='box button'></dív>");
	var n = j.find("div:last-of-type");
	n.append("<p class='title'>" + up[0] + "</p>");
	n.append("<p class='requirement'>-" + up[2] + " " + up[1] + "</p>");
	n.append("<p class='text'>" + up[3] + "</p>");
	n.append("<p class='fruit'>" + up[4] + "</p>");
	n.css("display", "none");
	n.fadeIn(500);
	n.click( function() {
		requirements(up[1], up[2], up[5], key);	
	});
}

function delUpgrade(key) {
	$("#" + key).remove();
}
