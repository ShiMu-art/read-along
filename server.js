console.error("[1] START");
var http = require("http");
console.error("[2] HTTP LOADED");
var store = require("./lib/store");
console.error("[3] STORE LOADED, DATA_DIR=" + store.DATA_DIR);
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