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

# Send HTTP requests with `curl`

## GET Request

```sh
# GET request
❯ curl http://localhost:8000/aslkdanlskn
<h1>Not Found</h1>

# include header in output with --include or -i
❯ curl -i http://localhost:8000/aslkdanlskn
HTTP/1.1 404 Not Found
content-type: text/html
Date: Tue, 21 Oct 2025 06:29:11 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

<h1>Not Found</h1>
```

## POST Request (creating data)

```sh
# post request with some json object
curl -X POST \
-H "Content-Type: application/json" \ # this is the header
-d '{"name": "Jane Doe", "email": "jane@example.com"}' \ # or --data
http://localhost:3000/api/users

# post from a json file
curl -X POST \
-H "Content-Type: application/json" \
-d @body.json \ # specify file here
http://localhost:3000/api/users
```

> [!NOTE]
> `PUT`, `PATCH`, and `DELETE` requests are pretty much the same as above but
> with that method specified after the `-X` flag.

at 1:03:50 in
[Node.js Crash Course](https://www.youtube.com/watch?v=32M1al-Y6Ag)
