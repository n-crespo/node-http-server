# Using 'http'

```js
res.setHeader("Content-Type", "text/html");
res.statusCode = 404;

console.log("-----");
console.log(req.url);
console.log(req.method);


// only for post requests (post)
app.post("/users", () => {
  console.log("this only runs when post request is sent to /users");
});
```

# Send HTTP requests without a browser:

```sh

# get everything
~\dev\node-http-server ❯ curl http://localhost:8000/aslkdanlskn
<h1>Not Found</h1>

# get header also with -i
~\dev\node-http-server ❯ curl -i http://localhost:8000/aslkdanlskn
HTTP/1.1 404 Not Found
content-type: text/html
Date: Tue, 21 Oct 2025 06:29:11 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

<h1>Not Found</h1>

```
