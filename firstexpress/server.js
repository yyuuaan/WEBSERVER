var express = require("Express");
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
  res.send("You have successfully created your second app!");
});

var server = app.listen(2001, function(){
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});