try {
	const dep = require("./esm-dep.js");
	console.log("IMPORTED!", dep);
} catch (e) {
	console.log("ERROR!", "[" + e.code + "]", e.message.slice(0, 50) + "...");
}