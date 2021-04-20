let mongoose = require('mongoose');
var Exercise = require("tracker/Exercise");

const exerciseSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true
}
});
exerciseSchema.loadClass(Exercise);

module.exports = exerciseSchema;