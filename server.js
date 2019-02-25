var express = require('express')
var cors = require('cors')
var app = express();
var path = require('path');

app.use(cors())
app.use(express.static(__dirname + '/')); 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(80);
console.log('Running on port 80....')