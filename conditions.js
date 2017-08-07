var conditions = {
	"started": false,
	"destille": false,
	"name": false,
	"members": false, 
	"voters": false,
	"founded": false, 
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