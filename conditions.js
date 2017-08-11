var conditions = {
	"started": false,
	"destille": false,
	"name": false,
	"setting1": false,
	"founded": false, 
	"members": false, 
	"programm": false,
	"voters": false,
	"sold1": false,
	"sold2": false,
	"geld": false,
	"regierung": false
}

function set(key, boo = true) {
	conditions[key] = boo;
}

function get(key) {
	return conditions[key];
}