import http from "http";
const PORT = process.env.PORT;

// create a server and write hello world
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(500, { "content-type": "text/html" });
    res.end("<h1>Hello World!</h1>");
  }
});

// listen!
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
