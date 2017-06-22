const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {newuser} = require('./../server/models/user.js');

/*Todo.remove({}).then((result)=>{
	console.log(result);
});
*/

//Todo.findOneAndRemove()

Todo.findByIdAndRemove('594b082c614740ce98efadd0').then((todo)=>{
console.log(todo);
});

