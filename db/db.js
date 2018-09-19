
var exports = {
	
	client: require('mongodb').MongoClient,
	
	getConnection: function(callback) {
	
		this.client.connect('mongodb://localhost:27017/BarrackLifeX', { useNewUrlParser: true }, function(error, db){
			if(error) {
				console.log(error);
			} else {
				callback(db.db("BarrackLifeX"));
				db.close();
			}
		});

	},
	
	listCollections: function(callback) {
		this.getConnection((db) => {
			callback(db.listCollections());
		});
	},
	
	listData: function(collection, callback) {
		this.getConnection((db) => {
			var col = db.collection('blx_users');
			col.find({}, function(err, cursor) {
				callback(cursor);
			});
		});
	}
};

module.exports = exports;