//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
//	db.collection('Todos').findOneAndUpdate({
//		_id: new ObjectID('586f1217d191c1f22926af7c')
//	}, {
//		$set: {
//			completed: true
//		}
//	}, {
//		returnOriginal: false
//	}).then((result) => {
//		console.log(result);
//	});
	
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5865b0fb60fa071e08e4eaef')
	}, {
		$set: {
			name: 'Winston'
		},
		$inc: {
			age:1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	//db.close();
});