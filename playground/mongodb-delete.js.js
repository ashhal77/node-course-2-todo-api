// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
if (err){
	return console.log('unable to connect to mongodb server');
}
console.log('connected to mongodb server');

/*db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
	console.log(result);
});*/




/*db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
	console.log(result);
});
*/

/*db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
	console.log(result);
});*/


/*db.collection('Users').deleteMany({name: 'ashal'}).then((result)=>{
	console.log(result);
});*/


db.collection('Users').findOneAndDelete({_id: new ObjectID("5947cef964b1cc1198ed2969")}).then((result)=>{
	console.log(JSON.stringify(result, undefined, 2));
});
//db.close();
});