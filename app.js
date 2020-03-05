const http = require("http");

const PORT = 8000;
let server = http.createServer((req, res) => {
  console.log("request was made: " + req.url);
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end("Hey Ninjas");
});

server.listen(3000, "127.0.0.1");
console.log("Listening on port 3000");
