console.error("[1] START");
var http = require("http");
console.error("[2] HTTP");
var store = require("./lib/store");
console.error("[3] STORE");
var pushMod = require("./lib/push");
console.error("[4] PUSH enabled=" + pushMod.PUSH_ENABLED);
var epub = require("./lib/epub");
console.error("[5] EPUB");
var txt = require("./lib/txt");
console.error("[6] TXT");
var imp = require("./lib/import");
console.error("[7] IMPORT");
var PORT = process.env.PORT || 3000;
var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("ok");
});
server.on("error", function(err) {
  console.error("LISTEN ERROR:", err.message);
});
server.listen(PORT, "0.0.0.0", function() {
  console.error("LISTEN OK on " + PORT);
});