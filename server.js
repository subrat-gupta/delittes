var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");


//server configuration
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/home', function (req, res) {
    var str={Name:'subrat',Roll_no:'229216'};
    res.send(str);
});

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("listen at port 8080",host,port)
});
