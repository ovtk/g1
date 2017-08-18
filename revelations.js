var revelations = [
	
	[function() {
		return (value.Klicks >= 1);
	}, function() {
		fadeIn("#Vodka");
		tickText("Und immer weiter klicken!");
		addAchievement("1x<br />geklickt");
	}],
	
	[function() {
		return (value.Klicks >= 2);
	}, function() {
		tickText("Du machst das gut!");
	}],
	
	[function() {
		return (value.Klicks >= 3);
	}, function() {
		tickText("Immer weiter, bis Du 5 Vodka hast!");
		addUpgrade("destille");
	}],
	
	[function() {
		return (value["Klicks"] >= 5);
	}, function() {
		tickText("Kauf Dein erstes Upgrade!");
		addAchievement("10x<br />geklickt", 500);
	}],
	
	[function() {
		return (get("destille") && value["Vodka"] >= 5);
	}, function() {
		tickText("Klick weiter, um die Vodka-Produktion anzukurbeln.");
	}],
	
	[function() {
		return (get("destille") && value["Vodka"] >= 2);
	}, function() {
		addUpgrade("parteiname");
	}],
	
	[function() {
		return (get("name") && value["Vodka"] >= 2);
	}, function() {
		addUpgrade("vereinsheim");
	}],
	
	[function() {
		return (value.Achievements >= 4);
	}, function() {
		addUpgrade("sellach1");
	}],
	
	[function() {
		return (get("setting1"));
	}, function() {
		addUpgrade("founding1");
	}],
	
	[function() {
		return (get("setting1") && value.Vodka >= 5);
	}, function() {
		addUpgrade("saalrunde");
		tickText("Klick auf 'einen ausgeben', um einen auszugeben!");
	}],
	
	[function() {
		return (get("founded") && value.Vodka >= 40);
	}, function() {
		addUpgrade("parteilogo");
	}],
	
	[function() {
		return (get("founded") && value.Mitglieder >= 13);
	}, function() {
		addUpgrade("parteiprogramm");
	}],
	
	[function() {
		return (value.Mitglieder >= 1);
	}, function() {
		fadeIn("#Mitglieder");
	}],
	
	[function() {
		return (value.Popularität >= 1);
	}, function() {
		fadeIn("#Popularität");
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
		return (value["Popularität"] > value["Mitglieder"]);
	}, function() {
		addAchievement("Mehr Wühler als Mitglieder!");
	}],
	
	[function() {
		return (value["Popularität"] > (value.Wahlberechtigte * 0.7 * 0.05) );
	}, function() {
		addAchievement("5%-Hürde überwunden!");
		growthRate.Vodka *= 1.5;
	}],
	
	[function() {
		return (value["Popularität"] > (value.Wahlberechtigte * 0.7 * 0.5) );
	}, function() {
		addAchievement("Wir sind Regierung!");
		set("regierung");
		growthRate.Vodka *= 1.5;
	}],
	
	[function() {
		return (value["Popularität"] > value.Wahlberechtigte);
	}, function() {
		addAchievement("100% + X");
	}],
	
	[function() {
		return (value["Popularität"] >= 23);
	}, function() {
		addAchievement("Die ersten 23 (sic!) Wühler");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 40);
	}, function() {
		addUpgrade("mettbrot");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 60);
	}, function() {
		addUpgrade("poster1");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 200);
	}, function() {
		addUpgrade("slogan");
	}],
	
	[function() {
		return (get("founded") && value["Mitglieder"] >= 100);
	}, function() {
		addUpgrade("founding2");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 100);
	}, function() {
		addUpgrade("pig");
	}],
	
	[function() {
		return (get("sold1") && value.Achievements >= 3);
	}, function() {
		addUpgrade("sellach2");
	}],
	
	[function() {
		return (get("logo") && value["Mitglieder"] >= 100);
	}, function() {
		addUpgrade("blabla");
	}],
	
	[function() {
		return (get("logo") && value["Popularität"] >= 100);
	}, function() {
		addUpgrade("jubelperser");
	}],
	
	[function() {
		return (get("logo") && value["Mitglieder"] >= 200);
	}, function() {
		addUpgrade("sellmoney");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 400);
	}, function() {
		addUpgrade("dictator");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 500);
	}, function() {
		addUpgrade("kollektion");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 600);
	}, function() {
		addUpgrade("goaty");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 800);
	}, function() {
		addUpgrade("fifafu");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 800);
	}, function() {
		addUpgrade("meta");
	}],
	
	[function() {
		return (get("logo") && value["Mitglieder"] >= 8000);
	}, function() {
		addUpgrade("metaebene");
	}],
	
	[function() {
		return (get("logo") && value["Mitglieder"] >= 100);
	}, function() {
		addUpgrade("justuspeterbob");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 1200);
	}, function() {
		addUpgrade("winwin");
	}],
	
	[function() {
		return (get("logo") && value["Mitglieder"] >= 120);
	}, function() {
		addUpgrade("glyph");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 2500);
	}, function() {
		addUpgrade("ovtk");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 5000);
	}, function() {
		addUpgrade("kim");
	}],
	
	[function() {
		return (get("logo") && value["Mitglieder"] >= 250);
	}, function() {
		addUpgrade("rule34");
	}],
	
	[function() {
		return (get("logo") && value["Mitglieder"] >= 1000);
	}, function() {
		addUpgrade("error404");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("vodka");
	}],
	
	[function() {
		return (get("logo") && value["Popularität"] >= 10000);
	}, function() {
		addUpgrade("kohle");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 10000);
	}, function() {
		addUpgrade("mauer");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 1000000);
	}, function() {
		addUpgrade("blackhole");
	}],
	
	[function() {
		return (get("logo") && value["Mitglieder"] >= 5800);
	}, function() {
		addUpgrade("fdp");
	}],
	
	[function() {
		return (get("logo") && value["Popularität"] >= 1000);
	}, function() {
		addUpgrade("turtle");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 10000);
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

