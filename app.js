var express = require('express'),
    app = express();


app.get("/", function (req, res) {
    res.send("welcome to docker api");
})
app.listen(8080);