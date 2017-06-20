// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
if (err){
	return console.log('unable to connect to mongodb server');
}
console.log('connected to mongodb server');

/*db.collection('Todos').findOneAndUpdate({_id: new ObjectID("59491fc6d6792704ceec8559")
}, {
	$set: {
		completed: true
	}
}, {
	returnOriginal: false
}).then((result)=>{
	console.log(result);
});*/


db.collection('Users').findOneAndUpdate({_id: new ObjectID("5947c263fdc74d05144c1ca1")
}, {
	$set: { name: 'ashal' },

    $inc: {age: 2}

},

{
	returnOriginal: false
}).then((result)=>{
	console.log(result);
});

//db.close();
});