var revelations = [
	
	[function() {
		return (value.Klicks >= 1);
	}, function() {
		fadeIn("#Vodka");
		tickText("Und immer weiter klicken!");
		addAchievement("1x geklickt");
	}],
	
	[function() {
		return (value.Klicks >= 2);
	}, function() {
		tickText("Du machst das gut!");
	}],
	
	[function() {
		return (value.Klicks >= 3);
	}, function() {
		tickText(".");
		addUpgrade("destille");
	}],
	
	[function() {
		return (value["Klicks"] >= 5);
	}, function() {
		tickText("Kauf Dein erstes Upgrade!");
	}],
	
	[function() {
		return (value["Klicks"] >= 10);
	}, function() {
		addAchievement("10x geklickt", 500);
	}],
	
	[function() {
		return (get("destille") && value["Vodka"] >= 8);
	}, function() {
		tickText("Klick weiter, um die Produktion anzukurbeln.");
	}],
	
	[function() {
		return (get("destille") && value["Vodka"] >= 2);
	}, function() {
		addUpgrade("parteiname");
	}],
	
	[function() {
		return (get("name") && value["Vodka"] >= 2);
	}, function() {
		addUpgrade("setting1");
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
		tickText("Klick auf's Schnapsglas, um einen auszugeben!");
	}],
	
	[function() {
		return (get("setting1") && value.Mitglieder >= 1);
	}, function() {
		fadeIn("#Mitglieder");
		tickText("Jawoll!");
	}],
	
	[function() {
		return (get("setting1") && value.Mitglieder >= 2);
	}, function() {
		tickText("Hurrah!");
	}],
	
	[function() {
		return (get("setting1") && value.Mitglieder >= 3);
	}, function() {
		tickText("Hurrah!!!");
	}],
	
	[function() {
		return (get("setting1") && value.Mitglieder >= 4);
	}, function() {
		tickText("Hurrah!!!!!!!1!!!!");
	}],
	
	[function() {
		return (get("setting1") && value.Mitglieder >= 7);
	}, function() {
		tickText("Kauf das Gründungs-Upgrade!");
	}],
	
	[function() {
		return (get("founded") && value.Vodka >= 40);
	}, function() {
		addUpgrade("parteilogo");
	}],
	
	[function() {
		return (value.Popularität >= 1);
	}, function() {
		fadeIn("#Popularität");
	}],
	
	[function() {
		return (value["Klicks"] >= 100);
	}, function() {
		addAchievement("100x geklickt");
	}],
	
	[function() {
		return (value["Klicks"] >= 1009);
	}, function() {
		addAchievement("1009x geklickt");
	}],
	
	[function() {
		return (value["Popularität"] >= 23);
	}, function() {
		addAchievement("23 Wühler!");
	}],
	
	[function() {
		return (value["Popularität"] > value["Mitglieder"]);
	}, function() {
		addAchievement("Mehr Wühler als Mitglieder!");
	}],
	
	[function() {
		return (value["Popularität"] > (value.Wahlberechtigte * 0.7 * 0.05) );
	}, function() {
		addAchievement("5%-Hürde!");
		growthRate.Vodka *= 1.5;
	}],
	
	[function() {
		return (value["Popularität"] > value.Wahlberechtigte);
	}, function() {
		addAchievement("100% + X");
	}],
	
	
	// vodka -> vodka
	
	[function() {
		return (get("founded") && value.Vodka >= 40);
	}, function() {
		addUpgrade("parteiprogramm");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 96);
	}, function() {
		addUpgrade("ovtk");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 240);
	}, function() {
		addUpgrade("poster1");
	}],
	
	[function() {
		return (get("logo") && value["Vodka"] >= 608);
	}, function() {
		addUpgrade("slogan");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 3072);
	}, function() {
		addUpgrade("jubelperser");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 19200);
	}, function() {
		addUpgrade("sellmoney");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 142080);
	}, function() {
		addUpgrade("blabla");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 1209600);
	}, function() {
		addUpgrade("dictator");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 11612160);
	}, function() {
		addUpgrade("kollektion");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 123863040);
	}, function() {
		addUpgrade("goaty");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 1306368000);
	}, function() {
		addUpgrade("fifafu");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 13638481920);
	}, function() {
		addUpgrade("meta");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 141087744000);
	}, function() {
		addUpgrade("justuspeterbob");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 1447560253440);
	}, function() {
		addUpgrade("winwin");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 14742258370560);
	}, function() {
		addUpgrade("glyph");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 149136799795201);
	}, function() {
		addUpgrade("mettbrot");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 1499596235182080);
	}, function() {
		addUpgrade("kim");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 14995962351820800);
	}, function() {
		addUpgrade("vodka");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 149209825400617000);
	}, function() {
		addUpgrade("turtle");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 1477852089771940000);
	}, function() {
		addUpgrade("brewery");
	}],
	
	
	[function() {
		return (get("logo") && value.Vodka >= 1000000);
	}, function() {
		addUpgrade("blackhole");
	}],
	
	
	
	// vodka -> mitglieder
	
	[function() {
		return (get("logo") && value.Vodka >= 80);
	}, function() {
		addUpgrade("inhalte");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 152);
	}, function() {
		addUpgrade("hamburg");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 400);
	}, function() {
		addUpgrade("pferd");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 1056);
	}, function() {
		addUpgrade("kek");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 5504);
	}, function() {
		addUpgrade("nähe");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 35200);
	}, function() {
		addUpgrade("poster2");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 264960);
	}, function() {
		addUpgrade("dienst");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 2284800);
	}, function() {
		addUpgrade("crypto");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 22149120);
	}, function() {
		addUpgrade("raum");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 238049280);
	}, function() {
		addUpgrade("autobahn");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 2525644800);
	}, function() {
		addUpgrade("lorem");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 26493143040);
	}, function() {
		addUpgrade("belgien");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 275121100800);
	}, function() {
		addUpgrade("poster7");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 2831631022080);
	}, function() {
		addUpgrade("kommen");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 28913111377920);
	}, function() {
		addUpgrade("reichstag");
	}],
	
	[function() {
		return (get("logo") && value.Vodka >= 293130951321601);
	}, function() {
		addUpgrade("null");
	}],
	
	
	
	
	
	
	// misc
	
	[function() {
		return (get("logo") && value.Vodka >= 2000);
	}, function() {
		addUpgrade("pig");
	}],
	
	[function() {
		return (get("sold1") && value.Achievements >= 4);
	}, function() {
		addUpgrade("sellach2");
	}],
	
	
	
	// mitglieder -> mitglieder

	[function() {
		return (get("logo") && value.Mitglieder >= 17);
	}, function() {
		addUpgrade("rule34");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 35);
	}, function() {
		addUpgrade("idemo");
	}],
	
	[function() {
		return (get("founded") && value.Mitglieder >= 83);
	}, function() {
		addUpgrade("founding2");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 187);
	}, function() {
		addUpgrade("spd");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 380);
	}, function() {
		addUpgrade("metaebene");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 750);
	}, function() {
		addUpgrade("setting2");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 1440);
	}, function() {
		addUpgrade("poster4");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 2733);
	}, function() {
		addUpgrade("error404");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 5063);
	}, function() {
		addUpgrade("snowden");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 9145);
	}, function() {
		addUpgrade("kohle");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 16333);
	}, function() {
		addUpgrade("setting3");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 28700);
	}, function() {
		addUpgrade("poster5");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 49875);
	}, function() {
		addUpgrade("mauer");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 85928);
	}, function() {
		addUpgrade("poster6");
	}],
	
	
	
	// mitglieder -> popularität
	
	[function() {
		return (value.Popularität >= 40000);
	}, function() {
		nextElection = 10;
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 60);
	}, function() {
		addUpgrade("raub");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 135);
	}, function() {
		addUpgrade("lieber");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 450);
	}, function() {
		addUpgrade("poster3");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 961);
	}, function() {
		addUpgrade("wann");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 2944);
	}, function() {
		addUpgrade("nescit");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 8820);
	}, function() {
		addUpgrade("poster8");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 25801);
	}, function() {
		addUpgrade("bleu");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 73815);
	}, function() {
		addUpgrade("endlich");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 207292);
	}, function() {
		addUpgrade("poster9");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 572660);
	}, function() {
		addUpgrade("lenin");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 1559745);
	}, function() {
		addUpgrade("roberto");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 4196206);
	}, function() {
		addUpgrade("dieblaue");
	}],
	
	[function() {
		return (get("logo") && value.Mitglieder >= 11168230);
	}, function() {
		addUpgrade("rente");
	}],



	[function() {
		return (get("regierung") && value.Mitglieder >= 207292);
	}, function() {
		addUpgrade("verfass");
	}],
	
	
	
	
	// an der regierung
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("fair");
	}],
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("roderich");
	}],
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("canabis");
	}],
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("speed");
	}],
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("nuke");
	}],
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("rip");
	}],
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("cancer");
	}],
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("prom1");
	}],
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("prom2");
	}],
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("pyro");
	}],
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("pope");
	}],
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("break1");
	}],
	
	[function() {
		return (get("regierung") && value.Vodka >= 10000);
	}, function() {
		addUpgrade("break2");
	}]
	
];

