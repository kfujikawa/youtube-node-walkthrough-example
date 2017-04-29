const app = require('./app');
const mongoose = require('mongoose');
const debug = require('debug')('app');

mongoose.connect('mongodb://localhost/simple-api');
mongoose.connection.on('open', () => {
	debug('Connected to mongodb using monggose');
	app.listen(8080, () =>{
		debug('Express server running on port 8080');
	});

})
