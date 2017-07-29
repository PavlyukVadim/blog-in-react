const express = require('express'),
  morgan = require('morgan'),
  path = require('path'),
  config = require('./config'),
  cors = require('cors');


let app = express();
app.use(cors()); 

require('./app/routes')(app);

app.use(morgan('dev'));
app.use(express.static('./build'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

let port = process.env.PORT || config.get('port'); 
  app.listen(port, function() { 
    console.log('Listening on ' + port); 
});
