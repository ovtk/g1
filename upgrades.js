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
		"Destille anwerfen",
		"Vodka", 5,
		"Selbstfahrende Destille, damit Du nicht mehr so viel klicken musst.",
		"+ 1 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka += 1;
			tickText("Perfekt, Du hast die Vodka-Destille angeworfen.");
			addAchievement("Vodka-Destille läuft", 200);
			fadeIn("#Destille");
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
			tickText("Sie soll 'Die PARTEI' heißen!");
			set("name");
			addAchievement("Die Partei ist 'Die PARTEI'");
			fadeIn("#logo", 2000);
		}],

	"vereinsheim": [
		"Wir brauchen ein Vereinsheim",
		"Vodka", 23,
		"Erbaut auf den Ruinen der Manyo. (Never forget, never forgive.)",
		"+ Vereinsheim, + 1 Vodka",
		"blue",
		function() {
			tickText("Ich mach schon mal das Licht an.");
			growthRate.Vodka += 1;
			fadeIn("#Setting");
			set("setting1");
			fadeIn("#spendVodka", 2000);
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
		"Gründungs-Mythos",
		"Mitglieder", 7,
		"Sind sieben Menschen 1e Partei, wenn sie 1e Partei sind?",
		"+ 1 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder += 1;
			addAchievement("Partei gegründet");
			set("founded");
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
		"Sie zu knechten, sie alle zu finden, ins Dunkel zu treiben...",
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
		
	"mettbrot": [
		"Mettbrötchen verschenken",
		"Vodka", 192,
		"Weil wir es können.",
		"x 2 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 2;
		}],

	"poster1": [
		"Ein lustiges Poster machen",
		"Vodka", 480,
		"Weil wir auch das können.",
		"x 3 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 3;
			alert("poster!");
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
		"Vodka", 371589120,
		"Europäischen Möchtegern-Diktator beleidigen.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"fifafu": [
		"FIFA-Funktionär bestechen",
		"Vodka", 3919104000,
		"Deutschland muss Weltmeister bleiben!",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"meta": [
		"Meta",
		"Vodka", 40915445760,
		"Auf der AfD-Pressekonferenz eine Pressekonferenz geben.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"justuspeterbob": [
		"Its wots behind mwe that I am",
		"Vodka", 423263232000,
		"Gegnerische Spaßpartei gründen (z.B. SPD).",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"winwin": [
		"Win-Win",
		"Vodka", 4342680760320,
		"Diesel-Abgas-Inhalatoren verschenken.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"glyph": [
		"Bayer-Monsanto-Grasovka",
		"Vodka", 44226775111680,
		"Glyphosat dem Vodka beimengen.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"ovtk": [
		"Wo die wilden Kerle hausen",
		"Vodka", 447410399385600,
		"Ortsverband Treptow-Köpenik gründen",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"kim": [
		"Visionner",
		"Vodka", 4498788705546240,
		"a Kin Jong Un un peu.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"vodka": [
		"Vodka",
		"Vodka", 44987887055462400,
		"makes the world go round.",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"turtle": [
		"Die unsichtbare Schildkröte",
		"Vodka", 447629476201851000,
		"Schildkrötensuppe für der Vorstand!",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
		}],

	"brewery": [
		"Parteispende Brauerei",
		"Vodka", 4433556269315820000,
		"Alles legal, ich gebe ihnen mein teutsches Reinheitsgebiet!",
		"x 9 Vodka / s",
		"silver",
		function() {
			growthRate.Vodka *= 9;
			addAchievement("Wir vergessen keinen", 600);
		}],
		
	
	
	// vodka -> mitglieder

	"inhalte": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],
		
	"hamburg": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"pferd": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"kek": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"nähe": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"temp2": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"dienst": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"temp3": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"raum": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"temp4": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"lorem": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"belgien": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"temp5": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"kommen": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"temp6": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],

	"null": [
		"Parteispende",
		"Vodka", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"blue",
		function() {
			growthRate.Mitglieder *= 9;
		}],



	// mitglieder -> mitglieder

	"rule34": [
		"Rule 34",
		"Mitglieder", 34,
		"I invoke rule 34 on the 'Die PARTEI'!",
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
			addAchievement("pwnd by 4chan");
		}],

	"idemo": [
		"iDemo",
		"Mitglieder", 105,
		"The fastest, most powerful iDemo yet.",
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"founding2": [
		"Die PARTEI gründen",
		"Mitglieder", 250,
		"Jetzt wirklich. Ich gebe ihnen mein Ehrenwort!",
		"x 1.5 Mitglieder / Sekunde",
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
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"poster3": [
		"Yeah, Poster!",
		"Mitglieder", 1140,
		"Just another poster on the wall.",
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"metaebene": [
		"Metaebene",
		"Mitglieder", 2250,
		"Interview mit Tim für das CRE.",
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"poster4": [
		"Yeah, Poster!",
		"Mitglieder", 4320,
		"Just another poster on the wall.",
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"error404": [
		"Error 404",
		"Mitglieder", 8819,
		"AfD Wühler sind hier richtig!",
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"parteizentrale": [
		"Neue Heimat",
		"Mitglieder", 15190,
		"Lehrter Bahnhof, zum symbolischen Preis von 1 Mark.",
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
			growthRate.Popularität *= 2;
			changeSetting(2, function() {
				addAchievement("This Train Don't Stop There Anymore");
			});
		}],

	"snowden": [
		"Ed Snowden einladen",
		"Mitglieder", 27435,
		" Zum Kaffee (in Moskau).",
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"kohle": [
		"Fett Kohle einstreichen",
		"Popularität", 49000,
		"Ein Sitzen im Europaparlament.",
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"poster5": [
		"Yeah, Poster!",
		"Mitglieder", 86100,
		"Just another poster on the wall.",
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"mauer": [
		"Antikapitalistischer Schutzwall",
		"Vodka", 149625,
		"Die Mauer wieder aufbauen.",
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],

	"poster6": [
		"Yeah, Poster!",
		"Mitglieder", 257785,
		"Just another poster on the wall.",
		"x 1.5 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 1.5;
		}],




	// mitglieder -> popularität

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
			growthRate.Popularität *= 2;
		}],

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
			growthRate.Popularität *= 2;
		}],

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
			growthRate.Popularität *= 2;
		}],

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
			growthRate.Popularität *= 2;
		}],

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
			growthRate.Popularität *= 2;
		}],

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
			growthRate.Popularität *= 2;
		}],

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
			growthRate.Popularität *= 2;
		}],

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
			growthRate.Popularität *= 2;
		}],

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
			growthRate.Popularität *= 2;
		}],

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
			growthRate.Popularität *= 2;
		}],

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
			growthRate.Popularität *= 2;
		}],

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
			growthRate.Popularität *= 2;
		}],

	"brewery": [
		"Parteispende",
		"Mitglieder", 11111,
		"Reinheitsgebiet!",
		"x 9 Mitglieder / s",
		"orange",
		function() {
			value.Popularität += 40000;
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
			set("sold2");
		}],

	"pig": [
		"Ein Schwein schlachten und grillen",
		"Vodka", 6000,
		"Singularis Porcus und dazu lauwarme Cervisia.",
		"- 4000 Popularität,  + 37 Vodka / s",
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
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],
		
	// regierung

	"fair": [
		"All is fair in love and war",
		"Mitglieder", 500,
		"Prinz Steineimer nach Guantanamo entführen.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"roderich": [
		"Irgendwie, irdendwo.",
		"Mitglieder", 500,
		"Irgendwas mit Roderich Egeler machen.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"canabis": [
		"Canabis verbieten",
		"Mitglieder", 500,
		"Ha ha ha aha ha ha ah aha hahahah!!",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"speed": [
		"Speedlimit abschaffen",
		"Mitglieder", 500,
		"Neeeooowrrmmmm!!!!!",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"nuke": [
		"Brennstäbe besteuern",
		"Mitglieder", 500,
		"Nikotinsteuer anheben, du Spast.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"rip": [
		"Weltfrieden",
		"Mitglieder", 500,
		"Atomwaffen vernichten, Parkplätze bauen.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"cancer": [
		"Krebs besiegen",
		"Mitglieder", 500,
		"Dieter, wir vermissen dich!",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"prom1": [
		"Wahlversprechen einhalten",
		"Mitglieder", 500,
		"Manager-Gehälter auf 25 mio / Monat begrenzen.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"prom2": [
		"Wahlversprechen einhalten (2)",
		"Mitglieder", 500,
		"Die 100 reichsten Deutschen flachlegen.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"pyro": [
		"Pyromiden bauen",
		"Mitglieder", 500,
		"1000 qm Leerstand in bester Lage, zu günstigen Konditionen.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"pope": [
		"Staatsreligion",
		"Mitglieder", 500,
		"Gottkaiser Pabst Martin I, der Sonnengeborene.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"break1": [
		"Auf Wahlversprechen pfeifen",
		"Mitglieder", 500,
		"Die Industrie die Gesetze schreiben lassen und später Aufsichtsratsposten abgreifen.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"break2": [
		"Parteispende",
		"Popularität", 50000,
		"Kl. Aufmerksamkeit eines namhaften Mineralölkonzerns;.",
		" Elf Millionen Mark",
		"silver",
		function() {
			value.Vodka += 5500000;
		}]
	
}



