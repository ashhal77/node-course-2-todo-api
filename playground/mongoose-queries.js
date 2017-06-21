const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {newuser} = require('./../server/models/user.js');

var id = '594939e6229ef71a28bd02c5';

/*if(!ObjectID.isValid(id)){
	console.log('ID not valid');
}*/


/*
Todo.find({
	_id: id
}).then((todos)=>{
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo)=>{
	console.log('Todo', todo);
});
*/
/*Todo.findById(id).then((todo)=>{
	if(!todo){
		return console.log('id not found');
	}
	console.log('Todo by ID', todo);
}).catch((e)=> console.log(e));*/

newuser.findById(id).then((newuser)=>{
	if(!newuser){
		return console.log('unable to find user');
	}
	console.log('Todo by ID', newuser);
}).catch((e)=> console.log(e));