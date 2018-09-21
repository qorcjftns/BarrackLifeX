var express = require('express');
var router = express.Router();
var parser = require('body-parser');

var mongodb = require('../db/db.js');

/* GET home page. */
router.post('/login', function(req, res, next) {
  
	
	console.log("Login request: ");
	console.log("id: " + req.body.user_id);
	console.log("pw: " + req.body.user_pw);
	
	// check user in db
	mongodb.getCollection("blx_users", function(coll) {
		coll.aggregate([
			{$match: {
				user_id: "qorcjftns"
			}}
		], function(err, cursor) {
			cursor.toArray(function(err, data) {
				console.log(data);
			});
			res.redirect("/");	
		});
	});
	
});

module.exports = router;
