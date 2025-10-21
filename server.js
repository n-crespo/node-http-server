import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

// create a server and write hello world
const server = http.createServer(async (req, res) => {
  try {
    // respond only to GET requests
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }
      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Server Error");
    throw new Error("Method Not Allowed");
  }
});

// listen!
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
