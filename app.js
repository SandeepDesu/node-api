var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    mongoose.connect('mongodb://sandy:Excellence@localhost:27017/sample');

    app.use(bodyParser.json());

    app.use('/v1',require('./routes'));

    app.use(function(req,res,next){
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,x-access-token");
        next();
    });





    app.listen(8000);