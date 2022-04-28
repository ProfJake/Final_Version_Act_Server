let mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
	_id: {
		type: String,
		required: [true, 'We need to know your name']
	},
	name: {
		type: String,
		default: "John/Jane Doe"
	},
	age:{
		type: Number,
		default: 18
	},
	email:{
		type: String,
		required: [true, 'You must enter an email']
	},
	email_verified:{
		type: Boolean,
		default: false
	},
	password: String
});
const userCol=mongoose.model('User', userSchema)

module.exports = userCol;