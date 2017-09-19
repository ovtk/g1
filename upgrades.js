/*
	0	title
	1	requirement key
	2	requirement val
	3	text
	4	result text
	5	fruitcolor (silver, blue, orange, green)
	6	fruits
*/

var upgrades = {
	"destille": [
		"Upgrade: Destille",
		"Vodka", 5,
		"Selbstfahrende Destille, damit Du nicht mehr so viel klicken musst.",
		"+ 1 Vodka / s",
		"silver",
		function() {
			changeDestille(1);
			growthRate.Vodka += 1;
			tickText("Perfekt, Du hast die Vodka-Destille angeworfen.");
			addAchievement("Destille läuft", 1000);
			fadeIn("#Vodka .persecond");
			set("destille");
		}],
		
	"parteiname": [
		"Ich hab einen Traum!",
		"Vodka", 11,
		"Es braucht eine neue Partei! Aber wie soll die PARTEI heißen?",
		"+ Partei-Name",
		"blue",
		function() {
			tickText("Die Partei soll 'Die PARTEI' heißen!");
			set("name");
			addAchievement("PARTEI heißen!");
			fadeIn("#logo", 2000);
		}],

	"setting1": [
		"Wir brauchen ein Vereinsheim",
		"Vodka", 23,
		"Erbaut auf den Ruinen der Manyo.<br/>(Never forget, never forgive.)",
		"+ Vereinsheim",
		"blue",
		function() {
			tickText("Ich mach schon mal das Licht an.");
			growthRate.Vodka += 1;
			fadeIn("#Setting");
			set("setting1");
			settingLevel = 1;
			fadeIn("#spendVodka", 2000);
			fadeIn("#clickVodka");
		}],

	"sellach1": [
		"Auszeichnungen verkaufen",
		"Achievements", 5,
		"Die nächste Singularität kommt bestimmt.",
		"+ 2 Vodka / s",
		"silver",
		function() {
			delAchievements(5);
			growthRate.Vodka += 2;
			set("sold1");
		}],

	"founding1": [
		"Upgrade: Gründung",
		"Mitglieder", 7,
		"Sind sieben Menschen 1e Partei, wenn sie 1e Partei sind?",
		"+ 1 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder += 1;
			addAchievement("Partei gegründet");
			tickText("Wir sind Partei!");
			set("founded");
			fadeIn("#clickMitglieder");
		}],
		
	"saalrunde": [
		"Ihr seid alle meine Kumpels!",
		"Vodka", 73,
		"Trinker fragen, Politiker antworten.",
		"+ 1 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder += 1;
		}],

	"parteilogo": [
		"Ein Logo",
		"Mitglieder", 37,
		"Sie zu knechten, sie alle zu finden, ins Dunkel zu treiben und ewig zu binden...",
		"+ 1 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität += 1;
			$("#logo img").fadeOut(500, function() {
				$("#logo img").replaceWith("<img src='images/die_partei_logo2.png' />");
				$("#logo img").css("opacity", "0.0");
				$("#logo img").animate({opacity: "1.0"}, 3000, function() {
					addAchievement("Logos regieren die Welt");
					set("logo");
				});
			});
		}],
	
	
	
	// vodka -> vodka
		
	"parteiprogramm": [
		"Ein Parteiprogramm schreiben",
		"Vodka", 120,
		"Am besten irgendwas mit Tierschutz!",
		"x 2 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 2;
			addAchievement("Ein Partei-Programm");
			set("logo");
		}],
		
	"ovtk": [
		"Wo die wilden Kerle hausen",
		"Vodka", 192,
		"Ortsverband Treptow-Köpenik gründen",
		"x 2 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 2;
		}],

	"poster1": [
		"Wer lang hat",
		"Vodka", 480,
		"kann lang hängen lassen.",
		"x 3 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 3;
			showPoster("poster1");
		}],

	"slogan": [
		"Der besten Slogan aller Zeiten",
		"Vodka", 1824,
		"'Wählt die Partei, sie ist sehr gut!'",
		"x 4 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 4;
			tickText("Wählt die Partei, sie ist sehr gut!");
			addAchievement("Ein sehr guter Slogan!");
		}],

	"jubelperser": [
		"Jubelperser",
		"Vodka", 9216,
		"Auf der FdP-Wahlparty für die 'guten' Ergebnisse jubeln!",
		"x 5 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 5;
		}],

	"sellmoney": [
		"Geld verkaufen",
		"Vodka", 57600,
		"Reich werden mit GELD!",
		"x 6 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 6;
		}],

	"blabla": [
		"Bla bla",
		"Vodka", 426240,
		"Blablabla bla blabla blablablablabla.",
		"x 7 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 7;
		}],

	"dictator": [
		"Diktator beleidigen",
		"Vodka", 3628800,
		"Muss einfach sein. Hurra!",
		"x 8 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 8;
		}],

	"kollektion": [
		"Forever Grau",
		"Vodka", 34836480,
		"Die PARTEI stellt ihre neueste Kollektion vor.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"goaty": [
		"Der alte Ziegenwitz",
		"Vodka", 330301440,
		"Europäischen Möchtegern-Diktator beleidigen.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"fifafu": [
		"FIFA-Funktionär bestechen",
		"Vodka", 3096576000,
		"Deutschland muss Weltmeister bleiben!",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"meta": [
		"Meta",
		"Vodka", 28736225280,
		"Auf der AfD-Pressekonferenz eine Pressekonferenz geben.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"justuspeterbob": [
		"Its wots behind mwe that I am",
		"Vodka", 264241152000,
		"Gegnerische Spaßpartei gründen (z.B. SPD).",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"winwin": [
		"Win-Win",
		"Vodka", 2409879306240,
		"Diesel-Abgas-Inhalatoren verschenken.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"glyph": [
		"Bayer-Monsanto-Grasovka",
		"Vodka", 21815749509120,
		"Glyphosat dem Vodka beimengen.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"mettbrot": [
		"Mettbrötchen verschenken",
		"Vodka", 196172631244800,
		"Weil wir es können.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"kim": [
		"Visionner",
		"Vodka", 1753377448919040,
		"a Kin Jong Un un peu.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"vodka": [
		"Vodka",
		"Vodka", 15585577323724800,
		"makes the world go round.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"turtle": [
		"Die unsichtbare Schildkröte",
		"Vodka", 137845772774277000,
		"Schildkrötensuppe für der Vorstand!",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"brewery": [
		"Parteispende Brauerei",
		"Vodka", 1213596954274040000,
		"Alles legal, ich gebe ihnen mein teutsches Reinheitsgebiet!",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
			addAchievement("Wir vergessen keinen", 600);
		}],
		
	
	
	// vodka -> mitglieder

	"inhalte": [
		"Inhalte überwinden",
		"Vodka", 160,
		"&nbsp;",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],
		
	"hamburg": [
		"Hamburg",
		"Vodka", 304,
		"Stadt im Norden.",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],

	"pferd": [
		"Das Pferd frisst keinen Gurkensalat",
		"Vodka", 800,
		"Walter Ulbricht, 15. Juni 1961",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],

	"kek": [
		"Diplomatie",
		"Vodka", 3168,
		"Bilaterales Abkommen mit der Republik Kekistan.",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],

	"nähe": [
		"Bürgernähe",
		"Vodka", 16512,
		"Hier könnte Dein Wahlspruch stehen!",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],

	"poster2": [
		"Grillsaison",
		"Vodka", 105600,
		"Grüner als die Grünen.",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
			showPoster("poster2");
		}],

	"dienst": [
		"Die PARTEI",
		"Vodka", 794880,
		"Ihr seriöser Politikdienstleister.",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],

	"crypto": [
		"Statt Vodka",
		"Vodka", 6854400,
		"Grafikkarten kaufen, Cryptowährung schlürfen!",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],

	"raum": [
		"Volk mit Raum",
		"Vodka", 66447360,
		"Raum für Deine Notizen:<br/>&nbsp;",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],

	"autobahn": [
		"Autobahn verkaufen",
		"Vodka", 714147840,
		"Macht kaputt was euch kaputt macht!",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],

	"lorem": [
		"Lorem ipsum",
		"Vodka", 7576934400,
		"dolor sit amet, consetetur sadipscing elitr, bla bla, sed diam voluptua.",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],

	"belgien": [
		"Belgien",
		"Vodka", 79479429120,
		"ist eine wunderschöne Stadt.",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],

	"poster7": [
		"Sex sells",
		"Vodka", 825363302400,
		"Bitte nicht den Vodka anzünden!",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
			showPoster("poster7");
		}],

	"kommen": [
		"Erwartet mein Kommen",
		"Vodka", 8494893066240,
		"beim ersten Licht des fünften Tages. Bei Sonnenaufgang, schaut nach Osten.",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],

	"reichstag": [
		"Reichstag umbenennen",
		"Vodka", 86739334133760,
		"Allianz Arena? Heckler Kochtopf? E.ON Eimer?",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],

	"null": [
		"Martin Sonneborn",
		"Vodka", 879392853964800,
		"kann durch Null teilen.",
		"x 1.2 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.2;
		}],



	// mitglieder -> mitglieder

	"rule34": [
		"Rule 34",
		"Mitglieder", 34,
		"I invoke rule 34 on the 'Die PARTEI'!",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
			addAchievement("pwnd by 4chan");
		}],

	"idemo": [
		"iDemo",
		"Mitglieder", 105,
		"The fastest, most powerful iDemo yet.",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"founding2": [
		"Die PARTEI gründen",
		"Mitglieder", 250,
		"Jetzt wirklich. Ich gebe ihnen mein Ehrenwort!",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
			growthRate.Popularität += 3;
			addAchievement("Partei gegründet (2)");
		}],

	"spd": [
		"Die SPD auslachen",
		"Mitglieder", 560,
		"Die wer?",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"metaebene": [
		"Metaebene",
		"Mitglieder", 1140,
		"Interview mit Tim für das CRE.",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"setting2": [
		"Viel hilft viel",
		"Mitglieder", 2250,
		"Wir brauchen was größeres.",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
			growthRate.Popularität *= 2;
			changeSetting(2, function() {
				addAchievement("Kaninchenzüchter");
			});
		}],

	"poster4": [
		"Der Käse",
		"Mitglieder", 4320,
		"stinkt nach Fisch.",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
			showPoster("poster4");
		}],

	"error404": [
		"Error 404",
		"Mitglieder", 8819,
		"AfD Wühler sind hier richtig!",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"snowden": [
		"Ed Snowden einladen",
		"Mitglieder", 15190,
		" Zum Kaffee (in Moskau).",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"kohle": [
		"Fett Kohle einstreichen",
		"Popularität", 27435,
		"Ein Sitzen im Europaparlament.",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"setting3": [
		"Neue Heimat",
		"Mitglieder", 49000,
		"Lehrter Bahnhof, zum symbolischen Preis von 1 Mark.",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
			growthRate.Popularität *= 2;
			changeSetting(3, function() {
				addAchievement("This Train Don't Stop There Anymore");
			});
		}],

	"poster5": [
		"4-Punkte-Plan",
		"Mitglieder", 86100,
		"4. ???, 5. Profit!",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
			showPoster("poster5");
		}],

	"mauer": [
		"Antikapitalistischer Schutzwall",
		"Mitglieder", 149625,
		"Die Mauer wieder aufbauen.",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"poster6": [
		"Miro",
		"Mitglieder", 257785,
		"Jetzt sehe ich es auch .",
		"x 1.5 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
			showPoster("poster6");
		}],




	// mitglieder -> popularität

	"raub": [
		"Ein Raubüberfall",
		"Mitglieder", 120,
		"Professionell ausgeführt, muss nicht unbedingt ein unangenehmes Erlebnis sein.",
		"+ 42k Popularität",
		"orange",
		function() {
			value.Popularität += 42000;
			growthRate.Popularität *= 3;
		}],

	"lieber": [
		"Halb gerührt",
		"Mitglieder", 270,
		"Lieber etwas misstrauisch als etwas tot!",
		"+ 51k Popularität",
		"orange",
		function() {
			value.Popularität += 51000;
			growthRate.Popularität *= 2.5;
		}],

	"poster3": [
		"NSFW",
		"Mitglieder", 825,
		"Just another poster on the wall.",
		"+ 53k Popularität",
		"orange",
		function() {
			value.Popularität += 53000;
			growthRate.Popularität *= 3.5;
			showPoster("poster3");
		}],

	"wann": [
		"Ab wann?",
		"Mitglieder", 2369,
		"Das tritt nach meiner Kenntnis... ist das sofort, unverzüglich.",
		"+ 59k Popularität",
		"orange",
		function() {
			value.Popularität += 59000;
			growthRate.Popularität *= 2;
		}],

	"nescit": [
		"Qui nescit",
		"Mitglieder", 6348,
		"dissimulare nescit regnare.",
		"+ 61k Popularität",
		"orange",
		function() {
			value.Popularität += 61000;
			growthRate.Popularität *= 2.7;
		}],

	"poster8": [
		"Der Irre vom Bosporus",
		"Mitglieder", 15660,
		"Er ist wieder da.",
		"+ 67k Popularität",
		"orange",
		function() {
			value.Popularität += 67000;
			growthRate.Popularität *= 2.3;
			showPoster("poster8");
		}],

	"bleu": [
		"Le ciel bleu",
		"Mitglieder", 35953,
		"sur nous peut s'effondrer, et la terre peut bien s'écrouler.",
		"+ 83k Popularität",
		"orange",
		function() {
			value.Popularität += 83000;
			growthRate.Popularität *= 2.3;
		}],

	"endlich": [
		"Martin Sonneborn ",
		"Mitglieder", 76095,
		"hat bis Unendlich gezählt. Zweimal!",
		"+ 97k Popularität",
		"orange",
		function() {
			value.Popularität += 97000;
			growthRate.Popularität *= 2;
		}],

	"poster9": [
		"Adrenochrome",
		"Mitglieder", 148596,
		"Es ist genug für alle da!",
		"+ 117k Popularität",
		"orange",
		function() {
			value.Popularität += 117000;
			growthRate.Popularität *= 2;
			showPoster("poster9");
		}],

	"lenin": [
		"Dem Kleinbürgertum",
		"Mitglieder", 267938,
		"groß im Prahlen, fehlt die Kraft zur Tat, und es scheut ängstlich vor jedem Wagnis zurück.",
		"+ 139k Popularität",
		"orange",
		function() {
			value.Popularität += 139000;
			growthRate.Popularität *= 2;
		}],

	"roberto": [
		"Kanzlerkandidat Roberto Blanco",
		"Mitglieder", 444015,
		"Alt wie Adenauer, lustiger als Oliver Welke.",
		"+ 187k Popularität",
		"orange",
		function() {
			value.Popularität += 187000;
			growthRate.Popularität *= 2;
		}],

	"dieblaue": [
		"Die Blaue oder die Rote?",
		"Mitglieder", 675114,
		"Bedenke, alles was ich dir anbiete ist der totale Schwachsinn.",
		"+ 212k Popularität",
		"orange",
		function() {
			value.Popularität += 212000;
			growthRate.Popularität *= 2;
		}],

	"rente": [
		"Die Rente ist sicher",
		"Mitglieder", 937330,
		"Jedenfalls für Angela Merkel. Jetzt. Sofort.",
		"+ 267k Popularität",
		"orange",
		function() {
			value.Popularität += 267000;
			growthRate.Popularität *= 2;
		}],

	"verfass": [
		"Verfassungsschutz abschaffen",
		"Mitglieder", 1277719,
		"Echt jetzt? Nee, nur Spaß...",
		"+ 311k Popularität",
		"orange",
		function() {
			value.Popularität += 311000;
			growthRate.Popularität *= 2;
		}],




	
	// misc

	"sellach2": [
		"Auszeichnungen verkaufen (2)",
		"Achievements", 5,
		"Die nächste Singularität kommt bestimmt.",
		"+ 40k Popularität",
		"silver",
		function() {
			delAchievements(5);
			value.Popularität += 40000;
			growth.Popularität += 3;
			set("sold2");
		}],

	"sellach3": [
		"Auszeichnungen verkaufen (3)",
		"Achievements", 5,
		"Die nächste Singularität kommt bestimmt.",
		"+ 40k Popularität",
		"silver",
		function() {
			delAchievements(5);
			value.Popularität += 40000;
			growth.Popularität += 3;
			set("sold3");
		}],

	"sellach4": [
		"Auszeichnungen verkaufen (4)",
		"Achievements", 5,
		"Die nächste Singularität kommt bestimmt.",
		"+ 40k Popularität",
		"silver",
		function() {
			delAchievements(5);
			value.Popularität += 40000;
			growth.Popularität += 3;
			set("sold3");
		}],

	"pig": [
		"Ein Schwein schlachten und grillen",
		"Vodka", 6000,
		"Singularis Porcus und dazu lauwarme Cervisia.",
		"- 4000 Popularität",
		"orange",
		function() {
			addAchievement("Singularis Porcus");
			growthRate.Vodka += 37;
			value.Popularität -= 4000;
		}],

	"blackhole": [
		"Einen drin",
		"Vodka", 999999999999999999,
		"Ein schwarzes Loch mit Vodka (ab-) füllen.",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],
		
	// regierung

	"fair": [
		"All is fair in love and war",
		"Vodka", 10639754119662800000,
		"Prinz Steineimer nach Guantanamo entführen.",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"roderich": [
		"Irgendwie, irdendwo.",
		"Vodka", 92920519311721800000,
		"Irgendwas mit Roderich Egeler machen.",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"nuke": [
		"Brennstäbe besteuern",
		"Vodka", 808621313094373000000,
		"Von wegen, Nikotinsteuer anheben, du Spast.",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"rip": [
		"Weltfrieden",
		"Vodka", 7013725915681720000000,
		"Atomwaffen vernichten, Parkplätze bauen.",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"cancer": [
		"Krebs besiegen",
		"Vodka", 60649435749843200000000,
		"Dieter, wir vermissen dich!",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],




	"pope": [
		"Staatsreligion",
		"Mitglieder", 440200,
		"Gottkaiser Pabst Martin I, der Sonnengeborene.",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"setting4": [
		"Pyromiden bauen",
		"Mitglieder", 745500,
		"Umgestaltung des Potsdammer Platzes.",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Mitglieder *= 1.5;
			growthRate.Popularität *= 2;
			changeSetting(4, function() {
				addAchievement("Orgon Kraftwerk");
			});
		}],





	"canabis": [
		"Canabis verbieten",
		"Mitglieder", 1559905,
		"Ha ha ha aha ha ha ah aha hahahah!!",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"speed": [
		"Speedlimit abschaffen",
		"Mitglieder", 1750270,
		"Neeeooowrrmmmm!!!!!",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"prom1": [
		"Wahlversprechen einhalten",
		"Mitglieder", 1794768,
		"Manager-Gehälter auf 25 Mio pro Monat begrenzen (zzgl. Boni).",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"prom2": [
		"Wahlversprechen einhalten (2)",
		"Mitglieder", 1670272,
		"Die 100 reichsten Deutschen flachlegen.",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"break1": [
		"Auf Wahlversprechen pfeifen",
		"Mitglieder", 1399410,
		"Die Industrie die Gesetze schreiben lassen und später Aufsichtsratsposten abgreifen.",
		"x2 Popularität / s",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"break2": [
		"Parteispende",
		"Popularität", 1043574,
		"Kl. Aufmerksamkeit eines namhaften Mineralölkonzerns;.",
		" Elf Millionen Mark",
		"silver",
		function() {
			value.Vodka += 5500000;
		}]
	
}



