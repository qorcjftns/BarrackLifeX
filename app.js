
// requires
var bodyParser  = require('body-parser');
var express 	= require('express');
var path 		= require('path');
var app 		= express();
var http 		= require('http').Server(app);
var io 			= require('socket.io')(http);

var index = require('./routes/index');
var login = require('./routes/login');

// Mongodb connection
var mongodb = require('./db/db.js');
mongodb.listCollections(function(collections) {
	collections.toArray(function(err, collInfos) {
		console.log(collInfos);
	});
});

mongodb.listData("blx_users", function(cursor) {
	cursor.toArray(function(err, data) {
		console.log(data);
	});
});

// view engine setup

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('views', __dirname + '/views'); 

app.get('/', index);
app.post('/login', login);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
