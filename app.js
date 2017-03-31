// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('home', {
  });
});

var port = process.env.PORT || 5000;

app.listen(port, function(err){
    console.log('server started on port '+ port);
});
module.exports.getApp = app;