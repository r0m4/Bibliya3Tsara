let express = require("express");
let app = express();
let favicon = require("serve-favicon");
let path = require("path");

app.use(express.static("www"));
app.use(favicon(path.join(__dirname, "www", "favicon.ico")));

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("Express app listening at http://%s:%s", host, port);
});
