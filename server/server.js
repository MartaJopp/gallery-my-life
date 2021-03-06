var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

// Serve up static files
app.use(express.static('server/public'));
// Start up the server
app.listen(port, function () {
    console.log('listening on port', port);
});

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // Used for jQuery