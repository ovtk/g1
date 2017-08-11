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
	"saalrunde": [
		"Ihr seid alle meine Kumpels!",
		"Vodka", 10,
		"Trinker fragen, Politiker antworten.",
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
		"Branding",
		"Vodka", 25,
		"Wie soll die PARTEI heißen?",
		"Partei-Name",
		"silver",
		function() {
			growthRate.Vodka *= 2;
			fadeIn("#ausg");
			tickText("Sie soll 'Die PARTEI' heißen! Darauf trinken wir!");
			set("name");
			addAchievement("Die Partei ist 'Die PARTEI'");
		}],
		
	"founding1": [
		"Die PARTEI gründen",
		"Mitglieder", 7,
		"Sind sieben Menschen 1e Partei, wenn sie 1e Partei sind?",
		"+1 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder += 1;
			addAchievement("Partei gegründet");
			set("founded");
		}],
		
	"parteilogo": [
		"Ein Logo",
		"Vodka", 100,
		"Sie zu knechten, sie alle zu finden, ins Dunkel zu treiben...",
		"+1 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität += 1;
			fadeIn("#Popularität");
			growthRate.Vodka += 1;
			clickRate.Vodka += 1;
			// $("#Vodka div.perclick span").text(clickRate.Vodka);
			fadeIn("#logo", 5000);
			addAchievement("Logos regieren die Welt", 6000);
		}],
		
	"parteiprogramm": [
		"Ein Parteiprogramm schreiben",
		"Vodka", 50,
		"Am besten irgendwas mit Tierschutz!",
		"+2 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder += 2;
			addAchievement("Ein Partei-Programm");
		}],
		
	"founding2": [
		"Die PARTEI gründen",
		"Mitglieder", 400,
		"Jetzt wirklich. Ich gebe ihnen mein Ehrenwort!",
		"+3 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder += 3;
			growthRate.Popularität += 1;
			addAchievement("Partei gegründet (2)");
		}],
		
	"sellach1": [
		"Auszeichnungen verkaufen",
		"Achievements", 5,
		"Die nächste Singularität kommt bestimmt.",
		"x2 Vodka / Sekunde",
		"silver",
		function() {
			delAchievements(5);
			growthRate.Vodka *= 2;
			set("sold1");
		}],
		
	"sellach2": [
		"Auszeichnungen verkaufen (2)",
		"Achievements", 5,
		"Die nächste Singularität kommt bestimmt.",
		"x2 Vodka / Sekunde",
		"silver",
		function() {
			delAchievements(5);
			clickRate.Vodka += 8;
			set("sold2");
		}],

	"mettbrot": [
		"Mettbrötchen verschenken",
		"Vodka", 150,
		"Weil wir es können",
		"+3 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität += 3;
		}],
		
	"blabla": [
		"Bla bla",
		"Mitglieder", 250,
		"Blablabla bla blabla blablablablabla.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],
		
	"jubelperser": [
		"Jubelperser",
		"Popularität", 100,
		"Für die FDP jubeln!",
		"x3 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 3;
		}],
		
	"sellmoney": [
		"Geld verkaufen",
		"Mitglieder", 250,
		"Reich werden mit GELD!",
		"x5 Mitglieder / Klick",
		"blue",
		function() {
			clickRate.Mitglieder *= 5;
		}],

	"slogan": [
		"Der besten Slogan aller Zeiten",
		"Vodka", 400,
		"'Wählt die Partei, sie ist sehr gut!'",
		"x5 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 5;
		}],

	"dictator": [
		"Diktator beleidigen",
		"Vodka", 600,
		"Muss einfach sein.",
		"x2 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 2;
		}],

	"kollektion": [
		"Forever Grau",
		"Vodka", 900,
		"Die PARTEI stellt ihre neueste Kollektion vor.",
		"x2 Vodka / Sekunde",
		"silver",
		function() {
			growthRate.Vodka *= 2;
		}],

	"goaty": [
		"Der alte Ziegenwitz",
		"Vodka", 1500,
		"Europäischen Möchtegern-Diktator beleidigen.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"fifafu": [
		"FIFA-Funktionär bestechen",
		"Vodka", 2500,
		"Deutschland muss Weltmeister bleiben!",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"meta": [
		"Meta",
		"Vodka", 4000,
		"Auf der AfD-Pressekonferenz eine Pressekonferenz geben.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"metaebene": [
		"Metaebene",
		"Mitglieder", 20000,
		"Interview mit Tim für das CRE.",
		"x2 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 2;
		}],

	"justuspeterbob": [
		"Its wots behind mwe that I am",
		"Mitglieder", 500,
		"Gegnerische Spaßpartei gründen (z.B. SPD).",
		"x2 Vodka / Sekunde",
		"silver",
		function() {
			growthRate.Vodka *= 2;
		}],

	"winwin": [
		"Win-Win",
		"Vodka", 5000,
		"Diesel-Abgas-Inhalatoren verschenken.",
		"x2 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 2;
		}],

	"glyph": [
		"Bayer-Monsanto-Grasovka",
		"Mitglieder", 800,
		"Glyphosat dem Vodka beimengen.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"ovtk": [
		"Wo die wilden Kerle hausen",
		"Vodka", 10000,
		"Ortsverband Treptow-Köpenik gründen",
		"x2 Vodka / Sekunde",
		"silver",
		function() {
			growthRate.Vodka *= 3;
		}],

	"kim": [
		"Visionner",
		"Vodka", 20000,
		"a Kin Jong Un un peu.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"rule34": [
		"Rule 34",
		"Mitglieder", 1500,
		"I invoke rule 34 on the 'Die PARTEI'!",
		"x2 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 2;
		}],

	"error404": [
		"Error 404",
		"Mitglieder", 8818,
		"AfD Wühler sind hier richtig!",
		"+69 Vodka / Sekunde",
		"silver",
		function() {
			growthRate.Vodka += 69;
		}],

	"kohle": [
		"Fett Kohle einstreichen",
		"Popularität", 100000,
		"Ein Sitzen im Europaparlament.",
		"x2 Vodka / Sekunde",
		"silver",
		function() {
			growthRate.Vodka += 100;
		}],

	"vodka": [
		"Vodka",
		"Vodka", 50000,
		"makes the world go round.",
		"x2 Vodka / Sekunde",
		"silver",
		function() {
			growthRate.Vodka *= 2;
		}],

	"mauer": [
		"Antikapitalistischer Schutzwall",
		"Vodka", 5000000,
		"Die Mauer wieder aufbauen.",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 10;
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

	"pig": [
		"Ein Schwein schlachten und grillen",
		"Mitglieder", 500,
		"Singularis Porcus und dazu lauwarme Cervisia.",
		"-200 Popularität",
		"orange",
		function() {
			// growthRate.Popularität *= 2;
			addAchievement("Singularis Porcus");
			value.Popularität -= 200;
		}],

	"fdp": [
		"Die FDP auslachen",
		"Mitglieder", 58000,
		"Die wer?",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

	"turtle": [
		"Die unsichtbare Schildkröte",
		"Vodka", 500000,
		"Schildkrötensuppe für der Vorstand!",
		"x2 Mitglieder / Sekunde",
		"blue",
		function() {
			growthRate.Mitglieder *= 2;
		}],

	"brewery": [
		"Parteispende Brauerei",
		"Popularität", 5000,
		"Alles legal, ich gebe ihnen mein teutsches Reinheitsgebiet!",
		"+ 10.000.000 Geld",
		"silver",
		function() {
			value.Vodka += 10000000;
			addAchievement("Wir vergessen keinen", 600);
		}],

	"snowden": [
		"Ed Snowden einladen",
		"Mitglieder", 500,
		" Zum Kaffee (in Moskau).",
		"x2 Popularität / Sekunde",
		"orange",
		function() {
			growthRate.Popularität *= 2;
		}],

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



