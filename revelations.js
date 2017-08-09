var revelations = [
	
	[function() {
		return (value.Klicks >= 1);
	}, function() {
		$("#Vodka").fadeIn();
		tickText("Weiter klicken um mehr Vodka zu produzieren!");
		addAchievement("1x<br />geklickt");
	}],
	
	[function() {
		return (value["Klicks"] >= 10);
	}, function() {
		addAchievement("10x<br />geklickt");
	}],
	
	[function() {
		return (value["Klicks"] >= 100);
	}, function() {
		addAchievement("100x<br />geklickt");
	}],
	
	[function() {
		return (value["Klicks"] >= 1009);
	}, function() {
		addAchievement("1009x<br />geklickt");
	}],
	
	[function() {
		return (value["Wähler"] > value["Mitglieder"]);
	}, function() {
		addAchievement("Mehr Wähler als Mitglieder!");
	}],
	
	[function() {
		return (value["Wähler"] > (value.Wahlberechtigte * 0.7 * 0.05) );
	}, function() {
		addAchievement("5%-Hürde überwunden!");
		growthRate.Vodka *= 1.5;
	}],
	
	[function() {
		return (value["Wähler"] > (value.Wahlberechtigte * 0.7 * 0.5) );
	}, function() {
		addAchievement("Wir sind Regierung!");
		set("regierung");
		growthRate.Vodka *= 1.5;
	}],
	
	[function() {
		return (value["Wähler"] > value.Wahlberechtigte);
	}, function() {
		addAchievement("100% + X");
	}],
	
	[function() {
		return (value.Vodka >= 5);
	}, function() {
		$("#Vodka .perclick").fadeIn();
		addUpgrade("saalrunde");
	}],
	
	[function() {
		return (get("destille"));
	}, function() {
		addUpgrade("parteiname");
	}],
	
	[function() {
		return (get("name"));
	}, function() {
		addUpgrade("founding1");
		addUpgrade("parteiprogramm");
		addUpgrade("parteilogo");
	}],
	
	[function() {
		return (value["Wähler"] >= 23);
	}, function() {
		addAchievement("Die ersten 23 (sic!) Wähler");
	}],
	
	[function() {
		return (get("founded") && value["´Mitglieder"] >= 50);
	}, function() {
		addUpgrade("founding2");
	}],
	
	[function() {
		return (value.Achievements >= 3);
	}, function() {
		addUpgrade("sellach1");
	}],
	
	[function() {
		return (get("sold1") && value.Achievements >= 2);
	}, function() {
		addUpgrade("sellach2");
	}],
	
	[function() {
		return (get("founded") && value["Vodka"] >= 15);
	}, function() {
		addUpgrade("mettbrot");
	}],
	
	[function() {
		return (value["Mitglieder"] >= 100);
	}, function() {
		addUpgrade("blabla");
	}],
	
	[function() {
		return (value["Wähler"] >= 30);
	}, function() {
		addUpgrade("jubelperser");
	}],
	
	[function() {
		return (value["Mitglieder"] >= 100);
	}, function() {
		addUpgrade("sellmoney");
	}],
	
	[function() {
		return (get("founded") && value["Vodka"] >= 40);
	}, function() {
		addUpgrade("slogan");
	}],
	
	[function() {
		return (value["Vodka"] >= 100);
	}, function() {
		addUpgrade("dictator");
	}],
	
	[function() {
		return (value["Vodka"] >= 300);
	}, function() {
		addUpgrade("kollektion");
	}],
	
	[function() {
		return (value["Vodka"] >= 500);
	}, function() {
		addUpgrade("goaty");
	}],
	
	[function() {
		return (value["Vodka"] >= 500);
	}, function() {
		addUpgrade("fifafu");
	}],
	
	[function() {
		return (value["Vodka"] >= 800);
	}, function() {
		addUpgrade("meta");
	}],
	
	[function() {
		return (value["Mitglieder"] >= 8000);
	}, function() {
		addUpgrade("metaebene");
	}],
	
	[function() {
		return (value["Mitglieder"] >= 100);
	}, function() {
		addUpgrade("justuspeterbob");
	}],
	
	[function() {
		return (value["Vodka"] >= 1200);
	}, function() {
		addUpgrade("winwin");
	}],
	
	[function() {
		return (value["Mitglieder"] >= 120);
	}, function() {
		addUpgrade("glyph");
	}],
	
	[function() {
		return (value["Vodka"] >= 2500);
	}, function() {
		addUpgrade("ovtk");
	}],
	
	[function() {
		return (value["Vodka"] >= 5000);
	}, function() {
		addUpgrade("kim");
	}],
	
	[function() {
		return (value["Mitglieder"] >= 250);
	}, function() {
		addUpgrade("rule34");
	}],
	
	[function() {
		return (value["Mitglieder"] >= 1000);
	}, function() {
		addUpgrade("error404");
	}],
	
	[function() {
		return (value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("vodka");
	}],
	
	[function() {
		return (value["Wähler"] >= 10000);
	}, function() {
		addUpgrade("kohle");
	}],
	
	[function() {
		return (value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("mauer");
	}],
	
	[function() {
		return (value["Vodka"] >= 1000000);
	}, function() {
		addUpgrade("blackhole");
	}],
	
	[function() {
		return (value["Vodka"] >= 100);
	}, function() {
		addUpgrade("pig");
	}],
	
	[function() {
		return (value["Mitglieder"] >= 5800);
	}, function() {
		addUpgrade("fdp");
	}],
	
	[function() {
		return (value["Wähler"] >= 1000);
	}, function() {
		addUpgrade("turtle");
	}],
	
	[function() {
		return (value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("brewery");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("snowden");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("fair");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("roderich");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("canabis");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("speed");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("nuke");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("rip");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("cancer");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("prom1");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("prom2");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("pyro");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("pope");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("break1");
	}],
	
	[function() {
		return (get("regierung") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("break2");
	}]
	
];

