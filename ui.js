// disable iOS double-tap zoom
$('.button').bind('touchend', function(e) {
	e.preventDefault();
	$(this).click();
});
									



// make Vodka
$("#makeVodka").click( function() {
	value.Klicks += 1;
	inc("Vodka", clickValue("Vodka"));
});

// spend Vodka
$("#spendVodka").click( function() {
	value.Klicks += 1;

	var val = clickValue("Mitglieder");

	if (value["Vodka"] >= val) {
		dec("Vodka", val);
		inc("Mitglieder", val);
		updateValuesView();
	}
});

var images = [];
var numPosters = 9;

function preloadPosters() {
	var path = "";
    for (var i = 0; i < numPosters; i++) {
        images[i] = new Image();
        images[i].src = "https://ovtk.github.io/g1//images/poster" + (i + 1) + ".png";
    }
}

// blink
$('.blink').blink();

// hide start screen
$("#startscreen").click( function() {
	$("#startscreen").fadeOut(1000).unbind("click");
	$("#greyout").delay(1000).fadeOut(500);
});


function hideOverlay(id) {
	$("#" + id).fadeOut(500).unbind("click");
	$("#greyout").delay(500).fadeOut(1000);
}

function showOverlay(id) {
	$("#greyout").fadeIn(500);
	$("#" + id).delay(500).fadeIn(500);
	$("#" + id).delay(2500).click( function() {
		hideOverlay(id);
	});
}

var bestElectionResult = 0;

function electionResults() {
	$("#electionButton").animate({"height": "36px"}, 500, function() {
		$("#electionButton").click( function() {
			pause = true;
			var proz = prozent();
			$(this).css("height", "0px").unbind("click");
			$("#election .mg span").text(proz);
			$("#greyout").fadeIn(500);
			$("#election").delay(500).fadeIn(500).delay(2500).click( function() {
				nextElection = 600;
				hideOverlay("election");
				if (! get("drin") && proz >= 5.0) {
					growthRate.Vodka *= 1.5;
					set("drin");
					addAchievement("5%-Horde!", 1000);
					tickText("Du musst in Bundestag.")
				} else if (! get("regierung") && proz >= 50.0) {
					growthRate.Vodka *= 1.5;
					set("regierung");
					addAchievement("Regierung!", 1000);
					tickText("Wir sind Regierung.")
				} else if (! get("drüber") && proz >=  100.0) {
					set("drüber");
					addAchievement("100% + X");
				} else {
					tickText("Wahlergebnis: " + proz + "%");
				}
			});
			
			// deppendorf
			if (! get("regierung") && prozent() >= 50) {
				$("#election .fg3").delay(2000).fadeIn(10).delay(8000).fadeOut(10);
			} else if (value.Popularität >= bestElectionResult) {
				bestElectionResult = value.Popularität;
				$("#election .fg2").delay(2000).fadeIn(10).delay(8000).fadeOut(10);
			}
		});
	});
}

function showPoster(id) {
	$("#poster img").replaceWith("<img src='images/" + id + ".png' />");
	showOverlay("poster");	
}




function updateValuesView() {
	for (var i = 0; i < values.length; i++) {
		var key = values[i];
		$("#" + key + " div.value").text(prettyShortNumbers(value[key]));
		$("#" + key + " div.persecond span").text(prettyShortNumbers(growthRate[key]));

		if (clickValue("Vodka") > 1) {
			$("#clickVodka").text(prettyShortNumbers(clickValue("Vodka")));
		}
		if (clickValue("Mitglieder") > 1) {
			$("#clickMitglieder").text(prettyShortNumbers(clickValue("Mitglieder")));
		}
	}
}

function updatePartyPeople() {
	// console.log(settingLevel + " " + numPartyPeople());
	var partyPeople = numPartyPeople();
	
	if (partyPeople > lastNumPartyPeople) {
		addPartyPeople(partyPeople - lastNumPartyPeople);
	} else if (partyPeople < lastNumPartyPeople) {
		delPartyPeople(lastNumPartyPeople - partyPeople);
	}
	
	lastNumPartyPeople = partyPeople;
}

function addPartyPeople(num) {
	var j = $("#Setting .mg");
	
	for (var i = 0; i < num; i++) {
		j.append("<div class='partyPeopleDiv'><img src='images/m" + (Math.floor(Math.random() * (4 + settingLevel)) + 1) + ".gif' /></dív>");
		
		var n = j.find("div.partyPeopleDiv:last-of-type");
		n.css("marginLeft", (Math.round(Math.random() * 220)) + "px");
	}
}

function delPartyPeople(num) {
	for (var i = 0; i < num; i++) {
		$(".partyPeopleDiv:first-of-type").remove();
	}
}

function checkActiveButtons() {
	$(".button").each( function() {
		var key = $(this).attr("id");
		if (key in upgrades) {
			var req = upgrades[key][1];
			var val = upgrades[key][2];
			$(this).toggleClass("active", value[req] >= val);
			
			var progress = value[req] / val;
			if (progress > 1) {
				progress = 1;
			}
			var progress = Math.round(progress * 100);
			$(this).find(".progressbar").css("height", progress + "%");
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
		$(this).remove();
	});
}

function upgradeFX(key, text, colorClass) {
	$("#" + key).remove();
	var j = $("#overlay");
	j.append("<div class='flyAwayBig " + colorClass + "'>" + text + "</dív>");
	var n = j.find("div.flyAwayBig:last-of-type");
	n
		.animate({ left: "25px" }, 1000, "easeOutBack")
		.fadeOut("slow", function() {
			$(this).remove();
		});
}

function fadeIn(item, time = 500) {
	$(item).animate({opacity: 1.0}, time);
}

function showLogo() {
	$("#logo").delay(500).animate({ 
		height: "90px"
		}, 5000);
}

function changeDestille(num) {
	$("#Destille").fadeOut(500, function() {
		$("#Destille img").replaceWith("<img src='images/destille" + num + ".gif' />");
		$("#Destille").fadeIn(500);
	});
}


function changeSetting(num, func) {
	$("#Setting").fadeOut(500, function() {
		$("#Setting .bg img").replaceWith("<img src='images/setting" + num + "_bg.png' />");
		$("#Setting .fg img").replaceWith("<img src='images/setting" + num + "_fg.png' />");
		settingLevel = num;
	//	clear members!
		$("#Setting").fadeIn(500, func());
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

function addAchievement(text, delay = 0) {
	var j = $("#Achievements");
	j.find("div:last-of-type").text("✭");
	j.append("<div>" + text + "</div>");
	var n = j.find("div:last-of-type");
	n.css("marginLeft", "400px");
	n.delay(delay).animate({ 
		marginLeft: "5px",
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

var upgradeColors = {
	"Vodka": "silver",
	"Mitglieder": "blue",
	"Popularität": "orange",
	"Achievements": "green"
}

var htmlColors = {
	"silver": "#bbb",
	"blue": "#7fd9ff",
	"orange": "#ff8000",
	"green": "#80ff80"
}

function addUpgrade(key) {
	var j = $("#upgrades");
	var up = upgrades[key];
	// var color = upgradeColors[up[1]];
	j.append("<div id='" + key + "' class='button upgrade'></dív>");

	var n = j.find("#" + key);
	n.append("<div class='up_left'></div><div class='up_right'><div class='progressbar'></div></div>");

	var o = $("#" + key + " .up_left");
	o.append("<p class='title'>" + up[0] + "</p>");
	o.append("<p class='text'>" + up[3] + "</p>");
	o.append("<p class='info'><span class='" + upgradeColors[up[1]] + "'>– " + prettyShortNumbers(up[2]) + " " + up[1] + "</span><span class='" + up[5] + "'>" + up[4] + "</span></p>");
	$("#" + key + " .progressbar").css("background-color", htmlColors[upgradeColors[up[1]]]);

	n.css("display", "none");
	n.fadeIn(500);
	n.click( function() {		
		if (value[up[1]] >= up[2]) {
			dec(up[1], up[2]);
			up[6]();
			updateValuesView();
			upgradeFX(key, up[4], up[5]);
		}		
	});
}
