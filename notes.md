
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
