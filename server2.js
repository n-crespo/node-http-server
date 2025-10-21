import { createServer } from "http";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
];

const server = createServer((req, res) => {
  if (req.url == "/api/users" && req.method == "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
  }
});

// listen!
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
