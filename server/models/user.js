var mongoose  = require('mongoose');


var newuser = mongoose.model('newuser', {
	email: {
		type: String,
		required: true, 
		minlength: 1, 
		trim: true
	}
});

module.exports = {newuser};