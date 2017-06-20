// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
if (err){
	return console.log('unable to connect to mongodb server');
}
console.log('connected to mongodb server');

/*db.collection('Todos').find({
	_id: new ObjectID('5947c0e790e9e822cc2d3105')
}).toArray().then((docs)=>{
console.log('todos');
console.log(JSON.stringify(docs, undefined, 2));
}, (err) =>{
	console.log('unable to fetch todos', err)
});*/


/*db.collection('Todos').find().count().then((count)=>{
console.log(`todos count: ${count}`);

}, (err) =>{
	console.log('unable to fetch todos', err)
});*/



db.collection('Users').find({name: 'ashal'}).toArray().then((docs)=>{
	console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
	console.log('unable to fetch todos', err)
});
//db.close();
});