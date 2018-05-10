var express = require('express'),
    app = express();
var https = require('https');
var fs = require('fs');
var key = fs.readFileSync('./key.pem');
var cert = fs.readFileSync('./cert.pem')
var https_options = {
    key: key,
    cert: cert
};

var PORT = 8000;
var HOST = 'localhost';

var server = https.createServer(https_options, app).listen(PORT, HOST);
app.get("/", function (req, res) {
    res.send("welcome to docker api");
})


//app.listen(8080);