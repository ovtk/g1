var conditions = {
	"started": false,
	"destille": false,
	"name": false,
	"setting1": false,
	"founded": false, 
	"members": false, 
	"logo": false,
	"voters": false,
	"sold1": false,
	"sold2": false,
	"sold3": false,
	"sold4": false,
	"geld": false,
	"drin": false,
	"regierung": false,
	"drüber": false
}

function set(key, boo = true) {
	conditions[key] = boo;
}

function get(key) {
	return conditions[key];
}