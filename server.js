const express = require('express'),
	morgan = require('morgan'),
	path = require('path'),
	config = require('./config');

var app = express();


app.use(express.static('./build'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(config.get('port'));