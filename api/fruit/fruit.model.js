const mongoose = require('mongoose');

const fruitSchema = mongoose.Schema({
	name: String
});

module.exports = mongoose.model('fruit', fruitSchema);