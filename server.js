console.log("HELLO FROM NODE");
console.error("HELLO FROM STDERR");
var http = require("http");
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