import http from "http";
const PORT = process.env.PORT;

// create a server and write hello world
const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 404;

  res.writeHead(500, { "content-type": "application/json" });
  res.end(
    JSON.stringify({
      message: "hello world",
    }),
  );
});

// listen!
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
